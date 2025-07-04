import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en/translation.json";
import da from "./locales/da/translation.json";
import no from "./locales/no/translation.json";

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    da: { translation: da },
    no: { translation: no },
  },
  lng: "en", // default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
