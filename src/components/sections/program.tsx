import { useTranslation } from "react-i18next";

export const ProgramSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full">
      <h1 className="headline text-center">{t("program.headline")}</h1>
      <div className="flex w-full gap-10">
        <div className="flex-1">
          <h2 className="headlineTwo">{t("program.friday")}</h2>
          <ul className="flex flex-col gap-2">
            <li>{t("program.friday_stepOne")}</li>
            <li>{t("program.friday_stepTwo")}</li>
          </ul>
        </div>
        <div className="flex-1">
          <h2 className="headlineTwo">{t("program.saturday")}</h2>
          <p className="text-center">{t("program.saturday_stepOne")}</p>
        </div>
        <div className="flex-1">
          <h2 className="headlineTwo">{t("program.sunday")}</h2>
          <ul className="flex flex-col gap-2">
            <li>{t("program.sunday_stepOne")}</li>
            <li>{t("program.sunday_stepTwo")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
