import { useTranslation } from "react-i18next";

export const FotoSection = () => {
  const { t } = useTranslation();
  return (
    <div className="mb-40">
      <h1 className="headline">{t("foto.headline")}</h1>
      <p className="text-2xl text-center my-10">Coming soon!</p>
    </div>
  );
};
