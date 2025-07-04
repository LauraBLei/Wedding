import { useTranslation } from "react-i18next";

export const EkstraSection = () => {
  const { t } = useTranslation();
  const listOne = t("extra.list_one", { returnObjects: true }) as string[];

  return (
    <div>
      <h1 className="headline">{t("extra.headline")}</h1>
      <div className="flex md:flex-row flex-col md:gap-10 gap-5 lg:gap-24">
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
          <ul className="list-disc ml-6 mt-5 flex flex-col gap-2">
            <li>
              <a
                href={t("extra.first_link")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("extra.first_text")}
              </a>
            </li>
            <li>
              <a
                href={t("extra.second_link")}
                target="_blank"
                rel="noopener noreferrer"
              >
                {t("extra.second_text")}
              </a>
            </li>
            <li>{t("extra.third_text")}</li>
            <ul className="list-disc ml-6  flex flex-col gap-2">
              <li>
                <a
                  href={t("extra.third_link_one")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Julie by Interhome
                </a>
              </li>
              <li>
                <a
                  href={t("extra.third_link_two")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Elisabeth by Interhome
                </a>
              </li>
              <li>
                {" "}
                <a
                  href={t("extra.third_link_three")}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Anna by Interhome
                </a>
              </li>
            </ul>
          </ul>
        </div>
      </div>
      <div className="w-full max-w-[700px] place-self-center border-b-1 mt-20 border-white"></div>
    </div>
  );
};
