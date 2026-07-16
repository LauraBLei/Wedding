import { useTranslation } from "react-i18next";
import "../../i18n";

const languages = [
  { code: "da", label: "DA", flag: "/flags/dk.webp" },
  { code: "no", label: "NO", flag: "/flags/no.png" },
  { code: "en", label: "EN", flag: "/flags/gb.webp" },
];

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="flex gap-3">
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
  );
}
