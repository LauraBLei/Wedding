import { useTranslation } from "react-i18next";
import "../i18n";

const languages = [
  { code: "da", label: "DA", flag: "/flags/dk.webp" },
  { code: "no", label: "NO", flag: "/flags/no.png" },
  { code: "en", label: "EN", flag: "/flags/gb.webp" },
];

export function LoadingScreen() {
  const { t, i18n } = useTranslation();

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center relative"
      style={{ backgroundColor: "#022d1d" }}
    >
      {/* Language switcher */}
      <div className="absolute top-5 right-6 flex gap-3">
        {languages.map(({ code, label, flag }) => (
          <button
            key={code}
            onClick={() => i18n.changeLanguage(code)}
            className="flex items-center gap-1.5 cursor-pointer transition-opacity"
            style={{ opacity: i18n.language === code ? 1 : 0.35 }}
          >
            <img
              src={flag}
              alt={label}
              className="w-6 h-4 object-cover rounded-sm"
            />
            <span
              className="text-xs tracking-widest uppercase text-white"
              style={{ fontFamily: "Maitree, serif" }}
            >
              {label}
            </span>
          </button>
        ))}
      </div>

      <p
        className="text-white/50 tracking-widest uppercase text-xs mb-6"
        style={{ fontFamily: "Maitree, serif", letterSpacing: "0.3em" }}
      >
        {t("loading.pleaseWait")}
      </p>

      <h1
        className="text-white text-5xl md:text-7xl mb-10 text-center"
        style={{ fontFamily: "Sacramento, cursive" }}
      >
        {t("loading.title")}
      </h1>

      <div
        className="text-center max-w-sm md:max-w-md px-6"
        style={{ fontFamily: "Maitree, serif" }}
      >
        <p className="text-white/70 text-sm md:text-base leading-relaxed mb-3">
          {t("loading.maintenance")}
        </p>
        <p className="text-white/50 text-xs md:text-sm leading-relaxed">
          {t("loading.soon")}
        </p>
      </div>
    </div>
  );
}
