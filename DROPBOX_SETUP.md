# Dropbox photo API setup

The code is ready. Complete the steps below once to connect the Vercel Function
to your Dropbox account.

## 1. Create the Dropbox app

1. Open <https://www.dropbox.com/developers/apps> and choose **Create app**.
2. Select **Scoped access**.
3. Prefer **App folder** access. This limits the app to its own folder under
   `Dropbox/Apps/<your app name>`.
4. Give the app a unique name and create it.
5. Under **Permissions**, enable:
   - `files.metadata.read`
   - `files.content.read`
6. Press **Submit** after changing permissions.

Create the three photo folders inside the app folder, for example:

```text
Dropbox/Apps/<your app name>/Photographer 1
Dropbox/Apps/<your app name>/Photographer 2
Dropbox/Apps/<your app name>/Guests
```

With **App folder** access, the API paths for these examples are
`/Photographer 1`, `/Photographer 2`, and `/Guests`. Do not include
`/Apps/<your app name>` in the environment variables.

If the photo folders already exist elsewhere in Dropbox and cannot be moved,
create the app with **Full Dropbox** access instead and use their complete paths.

## 2. Generate a refresh token

On the app's **Settings** page, copy the **App key**. Replace `YOUR_APP_KEY` in
this URL and open it in your browser:

```text
https://www.dropbox.com/oauth2/authorize?client_id=YOUR_APP_KEY&response_type=code&token_access_type=offline
```

Approve the app and copy the authorization code Dropbox displays. Then run this
PowerShell command after replacing all three placeholder values:

```powershell
$body = @{
  code = "PASTE_AUTHORIZATION_CODE_HERE"
  grant_type = "authorization_code"
  client_id = "PASTE_APP_KEY_HERE"
  client_secret = "PASTE_APP_SECRET_HERE"
}
Invoke-RestMethod -Method Post -Uri "https://api.dropboxapi.com/oauth2/token" -ContentType "application/x-www-form-urlencoded" -Body $body
```

Copy the `refresh_token` value from the response. The authorization code can
only be used once. Never commit the app secret or refresh token to GitHub.

## 3. Add the values to Vercel

Open **Vercel → Project → Settings → Environment Variables** and create:

```text
DROPBOX_APP_KEY
DROPBOX_APP_SECRET
DROPBOX_REFRESH_TOKEN
DROPBOX_FOLDER_PHOTOGRAPHER_ONE
DROPBOX_FOLDER_PHOTOGRAPHER_TWO
DROPBOX_FOLDER_GUESTS
```

Use [.env.example](.env.example) as a value checklist. Add the variables to
Production and any Preview environments where the gallery should work.

Redeploy the project after saving the variables. The gallery endpoint will be:

```text
/api/photos?category=photographerOne&page=1&limit=24
```

Valid categories are `photographerOne`, `photographerTwo`, and `guests`.

## Local testing (optional)

Copy `.env.example` to `.env` and fill in the real values locally. `.env` is
ignored by Git. Use `vercel dev` rather than the normal Vite dev server when you
need the local `/api/photos` function as well as the frontend.
