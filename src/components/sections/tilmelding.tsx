import { useTranslation } from "react-i18next";
import Web3Form from "../form";

export const TilmeldingSection = () => {
  const { t } = useTranslation();
  // Get registration list from translations
  const regList = t("registration.list", { returnObjects: true }) as string[];
  return (
    <div className="flex gap-5  flex-col md:flex-row items-center">
      <div className="flex-1 py-10 pl-5 md:pl-0 flex flex-col gap-2">
        <h1 className="headline">{t("registration.headline")}</h1>
        <p>{t("registration.text_one")}</p>
        <p>{t("registration.text_two")}</p>
        {Array.isArray(regList) && regList.length > 0 && (
          <ul className="list-disc ml-6 mt-2 flex flex-col gap-2">
            {regList.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        )}
        <p className="text-2xl py-2">{t("registration.su")}</p>
        <Web3Form />
      </div>
      <div className="flex-1 w-full overflow-hidden h-full">
        <img className="w-full h-full object-cover" src="/os.png" alt="" />
      </div>
    </div>
  );
};
