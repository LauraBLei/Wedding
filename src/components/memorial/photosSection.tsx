import { useTranslation } from "react-i18next";

const photoAlbums = [
  {
    name: "Domantas",
    labelKey: "memorial.photos.domantas",
    url: "https://www.dropbox.com/scl/fo/ffc4l0tfojkj1k2dpni53/AIFxNiZFTUsEbTeA97rXNEE?rlkey=9o1uibg2zfogkgwfmlxlz0y0h&st=62mfu1ky&e=1&dl=0",
  },
  {
    name: "Hansi",
    labelKey: "memorial.photos.hansi",
    url: "https://www.dropbox.com/scl/fo/1k47dq7gr9ffat66agjxj/ANgcIyz1-NKZbAHE2m8z-zo?rlkey=kq961of85bij8qaqculsmyb3p&st=s1gae9ug&dl=0",
  },
] as const;

export function PhotosSection() {
  const { t } = useTranslation();

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

      <div className="flex flex-wrap justify-center gap-4">
        {photoAlbums.map((album) => (
          <a
            key={album.name}
            href={album.url}
            target="_blank"
            rel="noopener noreferrer"
            className="min-w-48 rounded-full border border-white/25 px-7 py-3 text-white/80 transition-colors hover:border-white hover:bg-white hover:text-[#022d1d]"
            style={{ fontFamily: "Maitree, serif" }}
          >
            {t(album.labelKey)}
          </a>
        ))}
      </div>

      <div className="max-w-2xl mx-auto mt-16 pt-14 border-t border-white/10">
        <h3
          className="text-white text-3xl md:text-4xl mb-5"
          style={{ fontFamily: "Sacramento, cursive" }}
        >
          {t("memorial.photos.uploadTitle")}
        </h3>

        <p
          className="max-w-lg mx-auto text-white/65 text-sm md:text-base leading-relaxed mb-8"
          style={{ fontFamily: "Maitree, serif" }}
        >
          {t("memorial.photos.uploadText")}
        </p>

        <a
          href="https://photos.leidev.net"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full border border-white bg-white px-7 py-3 text-[#022d1d] transition-colors hover:bg-transparent hover:text-white"
          style={{ fontFamily: "Maitree, serif" }}
        >
          {t("memorial.photos.uploadButton")}
        </a>
      </div>
    </section>
  );
}
