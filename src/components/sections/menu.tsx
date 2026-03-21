import { useTranslation } from "react-i18next";

export const MenuSection = () => {
  const { t } = useTranslation();
  return (
    <div>
      <h1 className="headline">{t("menu.headline")}</h1>
      <div className="text-center py-12 space-y-8">
        <div className="space-y-2">
          <p className="text-2xl font-semibold">{t("menu.ForretHeadline")}</p>
          <p className="text-xl">{t("menu.ForretMat")}</p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">{t("menu.HovedretHeadline")}</p>
          <p className="text-xl">{t("menu.HovedretMat")}</p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">{t("menu.DessertHeadline")}</p>
          <p className="text-xl">{t("menu.DessertMat")}</p>
        </div>
        <div className="space-y-2">
          <p className="text-2xl font-semibold">{t("menu.TilBørnHeadline")}</p>
          <p className="text-xl">{t("menu.TilBørnMat")}</p>
        </div>
      </div>
      <div className="w-full max-w-[700px] place-self-center border-b-1 border-white"></div>
    </div>
  );
};
