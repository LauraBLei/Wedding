import { useTranslation } from "react-i18next";

export const MenuSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="headline">{t("menu.headline")}</h1>
      <p className="text-center text-2xl py-20">{t("menu.text")}</p>
      <div className="w-full max-w-[700px] place-self-center border-b-1 border-white"></div>
    </div>
  );
};
