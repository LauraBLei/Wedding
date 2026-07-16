import { useTranslation } from "react-i18next";

interface HeroSectionProps {
  image?: string;
}

export function HeroSection({ image }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 text-center"
      style={{ backgroundColor: "#022d1d" }}
    >
      <p
        className="text-white/50 text-xs tracking-widest uppercase mb-5"
        style={{ fontFamily: "Maitree, serif", letterSpacing: "0.3em" }}
      >
        {t("memorial.hero.subtitle")}
      </p>

      <h1
        className="text-white text-6xl md:text-8xl lg:text-9xl mb-8"
        style={{ fontFamily: "Sacramento, cursive" }}
      >
        Laura & Lasse
      </h1>

      <p
        className="text-white/70 text-sm md:text-base leading-relaxed max-w-sm md:max-w-md mb-12"
        style={{ fontFamily: "Maitree, serif" }}
      >
        {t("memorial.hero.text")}
      </p>

      {image ? (
        <div
          className="w-full max-w-sm overflow-hidden rounded-lg shadow-2xl"
          style={{ height: "420px" }}
        >
          <img
            src={image}
            alt={t("memorial.hero.imageAlt")}
            className="w-full h-full object-cover object-top"
          />
        </div>
      ) : (
        <div className="w-full max-w-sm aspect-[3/4] rounded-lg bg-white/5 border border-white/10" />
      )}
    </section>
  );
}
