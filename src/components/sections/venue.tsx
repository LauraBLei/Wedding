import { Ship } from "lucide-react";
import { useTranslation } from "react-i18next";

export const VenueSection = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-5">
      <div className="flex-1 flex flex-col gap-5">
        <h2 className="headline text-center">{t("venue.headline")}</h2>
        <p>{t("venue.intro")}</p>
        <article>
          <h3 className="headlineTwo">{t("venue.address_headline")}</h3>
          <a
            href="https://skjelbreidpoiree.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="border-b-1 border-white"
          >
            {t("venue.address_name")}
          </a>
          <p>{t("venue.address")}</p>
        </article>
        <article>
          <h3 className="headlineTwo">{t("venue.parking_headline")}</h3>
          <p>{t("venue.parking")}</p>
        </article>
        <article>
          <h3 className="headlineTwo">{t("venue.ferry_headline")}</h3>
          <a
            href={t("venue.ferry_link")}
            target="_blank"
            rel="noopener noreferrer"
            className="flex gap-5"
          >
            <p>{t("venue.ferry")}</p>

            <Ship className="w-20 h-auto" />
          </a>
        </article>
        <article>
          <h3 className="headlineTwo">{t("venue.transport_headline")}</h3>
          <div className="flex flex-col gap-2">
            <p>{t("venue.transport")}</p>
            <p>{t("venue.transport_guide")}</p>
          </div>
          <div className="flex flex-col gap-2 py-2">
            <div className="flex gap-5">
              <a
                href="https://apps.apple.com/no/app/skyss-reise/id490365366"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:underline"
              >
                <img src="/skyssReise.png" className="skyssLogo" alt="" />
                <p className="text-sm md:text-base">
                  {t("venue.transport_skyss_iphone")}
                </p>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=no.skyss.skyssreise&hl=no&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:underline"
              >
                <img src="/skyssReise.png" className="skyssLogo" alt="" />
                <p className="text-sm md:text-base">
                  {t("venue.transport_skyss_android")}
                </p>
              </a>
            </div>

            <div className="flex gap-5">
              <a
                href="https://apps.apple.com/no/app/skyss-billett/id444899073"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:underline"
              >
                <img src="/skyss.png" className="skyssLogo" alt="" />
                <p className="text-sm md:text-base">
                  {t("venue.transport_billett_iphone")}
                </p>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=no.skyss.skyssbillett&hl=no&pli=1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-center hover:underline"
              >
                <img src="/skyss.png" className="skyssLogo" alt="" />
                <p className="text-sm md:text-base">
                  {t("venue.transport_billett_android")}
                </p>
              </a>
            </div>
            <p className="text-xs text-gray-300 mt-2">{t("venue.play_note")}</p>
          </div>
        </article>
      </div>
      <div className="flex-1 flex flex-col gap-5">
        <div className="overflow-hidden ">
          <img className="object-cover h-full w-full" src="/venue.png" alt="" />
        </div>
        <div>
          <iframe
            title="Google Maps - Skjeldbreid Poirée"
            src="https://www.google.com/maps?q=Rindakleivane+47,+5640+Eikelandsosen&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className=" shadow-md w-full h-[300px]"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
