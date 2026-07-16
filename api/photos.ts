declare const process: {
  env: Record<string, string | undefined>;
};

const DROPBOX_API_URL = "https://api.dropboxapi.com/2";
const DROPBOX_TOKEN_URL = "https://api.dropboxapi.com/oauth2/token";
const DEFAULT_PAGE_SIZE = 24;
const MAX_PAGE_SIZE = 48;

const categoryFolders = {
  photographerOne: "DROPBOX_FOLDER_PHOTOGRAPHER_ONE",
  photographerTwo: "DROPBOX_FOLDER_PHOTOGRAPHER_TWO",
  guests: "DROPBOX_FOLDER_GUESTS",
} as const;

type PhotoCategory = keyof typeof categoryFolders;

interface DropboxFile {
  ".tag": "file";
  id: string;
  name: string;
  path_lower: string;
  client_modified: string;
}

interface DropboxListResponse {
  entries: Array<DropboxFile | { ".tag": string }>;
  cursor: string;
  has_more: boolean;
}

interface DropboxTemporaryLinkResponse {
  link: string;
}

interface DropboxTokenResponse {
  access_token: string;
  expires_in: number;
}

let cachedToken: { value: string; expiresAt: number } | undefined;

function json(body: unknown, status = 200, headers?: HeadersInit) {
  return Response.json(body, {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      ...headers,
    },
  });
}

function getRequiredEnvironmentVariable(name: string) {
  const value = process.env[name]?.trim();

  if (!value) {
    throw new Error(`Missing required environment variable: ${name}`);
  }

  return value;
}

async function getAccessToken() {
  if (cachedToken && Date.now() < cachedToken.expiresAt) {
    return cachedToken.value;
  }

  const body = new URLSearchParams({
    grant_type: "refresh_token",
    refresh_token: getRequiredEnvironmentVariable("DROPBOX_REFRESH_TOKEN"),
    client_id: getRequiredEnvironmentVariable("DROPBOX_APP_KEY"),
    client_secret: getRequiredEnvironmentVariable("DROPBOX_APP_SECRET"),
  });

  const response = await fetch(DROPBOX_TOKEN_URL, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) {
    throw new Error(`Dropbox token request failed (${response.status})`);
  }

  const token = (await response.json()) as DropboxTokenResponse;
  cachedToken = {
    value: token.access_token,
    expiresAt: Date.now() + Math.max(token.expires_in - 300, 60) * 1000,
  };

  return cachedToken.value;
}

async function callDropbox<T>(endpoint: string, token: string, body: unknown) {
  const response = await fetch(`${DROPBOX_API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const requestId = response.headers.get("x-dropbox-request-id");
    throw new Error(
      `Dropbox ${endpoint} failed (${response.status})${
        requestId ? `, request ID: ${requestId}` : ""
      }`,
    );
  }

  return (await response.json()) as T;
}

async function listFolder(path: string, token: string) {
  const files: DropboxFile[] = [];
  let result = await callDropbox<DropboxListResponse>(
    "/files/list_folder",
    token,
    { path, recursive: false, include_deleted: false },
  );

  while (true) {
    files.push(
      ...result.entries.filter(
        (entry): entry is DropboxFile => entry[".tag"] === "file",
      ),
    );

    if (!result.has_more) break;

    result = await callDropbox<DropboxListResponse>(
      "/files/list_folder/continue",
      token,
      { cursor: result.cursor },
    );
  }

  return files;
}

const imageExtensions = new Set([
  "jpg",
  "jpeg",
  "png",
  "webp",
  "gif",
  "avif",
  "heic",
  "heif",
]);

function isImage(file: DropboxFile) {
  const extension = file.name.split(".").pop()?.toLowerCase();
  return extension ? imageExtensions.has(extension) : false;
}

function isPhotoCategory(value: string): value is PhotoCategory {
  return value in categoryFolders;
}

export default {
  async fetch(request: Request) {
    if (request.method !== "GET") {
      return json(
        { error: "Method not allowed" },
        405,
        { Allow: "GET" },
      );
    }

    const url = new URL(request.url);
    const category = url.searchParams.get("category") ?? "";
    const requestedPage = Number(url.searchParams.get("page") ?? "1");
    const requestedLimit = Number(
      url.searchParams.get("limit") ?? DEFAULT_PAGE_SIZE,
    );

    if (!isPhotoCategory(category)) {
      return json({ error: "Invalid photo category" }, 400);
    }

    const page = Number.isInteger(requestedPage) && requestedPage > 0
      ? requestedPage
      : 1;
    const limit = Number.isInteger(requestedLimit)
      ? Math.min(Math.max(requestedLimit, 1), MAX_PAGE_SIZE)
      : DEFAULT_PAGE_SIZE;

    try {
      const token = await getAccessToken();
      const folder = getRequiredEnvironmentVariable(categoryFolders[category]);
      const allPhotos = (await listFolder(folder, token))
        .filter(isImage)
        .sort((a, b) => a.name.localeCompare(b.name, undefined, { numeric: true }));
      const start = (page - 1) * limit;
      const selectedPhotos = allPhotos.slice(start, start + limit);

      const photos = await Promise.all(
        selectedPhotos.map(async (photo) => {
          const result = await callDropbox<DropboxTemporaryLinkResponse>(
            "/files/get_temporary_link",
            token,
            { path: photo.path_lower },
          );

          return {
            id: photo.id,
            name: photo.name,
            url: result.link,
          };
        }),
      );

      return json(
        {
          photos,
          page,
          hasMore: start + selectedPhotos.length < allPhotos.length,
        },
        200,
        {
          "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=300",
        },
      );
    } catch (error) {
      console.error("Unable to load Dropbox photos", error);
      return json({ error: "Unable to load photos" }, 500);
    }
  },
};
