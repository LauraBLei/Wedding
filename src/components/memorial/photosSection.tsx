import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

const photoCategories = ["photographerOne", "photographerTwo", "guests"] as const;
const pageSize = 24;

type PhotoCategory = (typeof photoCategories)[number];

interface Photo {
  id: string;
  name: string;
  url: string;
}

interface PhotosResponse {
  photos: Photo[];
  page: number;
  hasMore: boolean;
}

export function PhotosSection() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] =
    useState<PhotoCategory>("photographerOne");
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();

    async function loadPhotos() {
      setIsLoading(true);
      setError(false);

      try {
        const params = new URLSearchParams({
          category: activeCategory,
          page: String(page),
          limit: String(pageSize),
        });
        const response = await fetch(`/api/photos?${params}`, {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error(`Photo API returned ${response.status}`);

        const result = (await response.json()) as PhotosResponse;
        setPhotos((current) => page === 1 ? result.photos : [...current, ...result.photos]);
        setHasMore(result.hasMore);
      } catch (loadError) {
        if (loadError instanceof DOMException && loadError.name === "AbortError") return;
        console.error("Unable to load photos", loadError);
        setError(true);
      } finally {
        if (!controller.signal.aborted) setIsLoading(false);
      }
    }

    void loadPhotos();
    return () => controller.abort();
  }, [activeCategory, page]);

  const selectCategory = (category: PhotoCategory) => {
    if (category === activeCategory) return;
    setActiveCategory(category);
    setPhotos([]);
    setPage(1);
    setHasMore(false);
  };

  return (
    <section
      className="py-24 px-6 text-center"
      style={{
        backgroundColor: "#022d1d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        className="text-white text-4xl md:text-6xl mb-10"
        style={{ fontFamily: "Sacramento, cursive" }}
      >
        {t("memorial.photos.title")}
      </h2>

      <div
        role="tablist"
        aria-label={t("memorial.photos.categoriesLabel")}
        className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mb-8"
      >
        {photoCategories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              id={`photo-tab-${category}`}
              key={category}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-controls="photo-gallery"
              tabIndex={isActive ? 0 : -1}
              onClick={() => selectCategory(category)}
              className={`rounded-full border px-5 py-2 text-sm transition-colors cursor-pointer ${
                isActive
                  ? "border-white bg-white text-[#022d1d]"
                  : "border-white/25 text-white/70 hover:border-white/50 hover:text-white"
              }`}
              style={{ fontFamily: "Maitree, serif" }}
            >
              {t(`memorial.photos.categories.${category}`)}
            </button>
          );
        })}
      </div>

      <div
        id="photo-gallery"
        role="tabpanel"
        aria-labelledby={`photo-tab-${activeCategory}`}
        aria-busy={isLoading}
        className="max-w-5xl mx-auto"
      >
        {photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10">
            {photos.map((photo) => (
              <img
                key={photo.id}
                src={photo.url}
                alt={photo.name.replace(/\.[^.]+$/, "")}
                loading="lazy"
                className="aspect-square w-full rounded-lg object-cover bg-white/5 border border-white/10"
              />
            ))}
          </div>
        )}

        {isLoading && photos.length === 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-10" aria-hidden="true">
            {Array.from({ length: 6 }).map((_, index) => (
              <div
                key={index}
                className="aspect-square rounded-lg bg-white/5 border border-white/10 animate-pulse"
              />
            ))}
          </div>
        )}

        <p
          className="text-white/50 text-sm tracking-wide"
          style={{ fontFamily: "Maitree, serif" }}
        >
          {error
            ? t("memorial.photos.error")
            : isLoading
              ? t("memorial.photos.loading")
              : photos.length === 0
                ? t("memorial.photos.empty")
                : null}
        </p>

        {!error && hasMore && (
          <button
            type="button"
            disabled={isLoading}
            onClick={() => setPage((current) => current + 1)}
            className="mt-8 rounded-full border border-white/25 px-6 py-2 text-sm text-white/75 transition-colors hover:border-white/50 hover:text-white disabled:cursor-wait disabled:opacity-50 cursor-pointer"
            style={{ fontFamily: "Maitree, serif" }}
          >
            {isLoading
              ? t("memorial.photos.loading")
              : t("memorial.photos.loadMore")}
          </button>
        )}
      </div>
    </section>
  );
}
