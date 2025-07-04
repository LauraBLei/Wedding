import { useTranslation } from "react-i18next";

export const EkstraSection = () => {
  const { t } = useTranslation();
  const listOne = t("extra.list_one", { returnObjects: true }) as string[];
  const listTwo = t("extra.list_two", { returnObjects: true }) as string[];

  return (
    <div>
      <h1 className="headline">{t("extra.headline")}</h1>
      <div className="flex md:flex-row flex-col gap-10">
        <div className="flex-1">
          <h2 className="headlineTwo ">{t("extra.subject_one")}</h2>
          {Array.isArray(listOne) && listOne.length > 0 && (
            <ul className="list-disc ml-6 mt-5 flex flex-col gap-2">
              {listOne.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex-1">
          <h2 className="headlineTwo mb-2">{t("extra.subject_two")}</h2>
          {Array.isArray(listTwo) && listTwo.length > 0 && (
            <ul className="list-disc ml-6 mt-5 flex flex-col gap-2">
              {listTwo.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
