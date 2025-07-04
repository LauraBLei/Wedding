import { useTranslation } from "react-i18next";

export const WelcomeSection = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full mt-20">
      <div className="flex w-full justify-center relative z-10">
        <img
          className="absolute left-0 mb-[-5px] md:mb-[-10px] lg:mb-[-15px] w-[75px] h-[125px] md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[400px] place-self-end"
          src="/flowers.png"
          alt=""
        />

        <div className="flex flex-col text-sm md:text-2xl lg:text-3xl items-center md:gap-5 ">
          <p className="flex gap-5 md:gap-10 lg:gap-20  items-center">
            <span>THE</span>
            <span className="font-secondary  text-4xl lg:text-8xl">
              Wedding
            </span>
            <span>OF</span>
          </p>
          <p className="text-base md:text-2xl lg:text-4xl mt-5 lg:mt-15">
            LAURA & LASSE
          </p>
          <p>{t("welcome.date")}</p>
        </div>

        <img
          className="mb-[-5px] md:mb-[-10px] lg:mb-[-15px] absolute right-0 w-[75px] h-[125px] md:w-[150px] md:h-[200px] lg:w-[250px] lg:h-[400px] rotate-y-180 place-self-end"
          src="/flowers.png"
          alt=""
        />
      </div>
      <div className="min-h-[200px] h-full">
        <img
          className="w-full h-[400px] md:h-[500px] lg:h-[800px] object-cover"
          src="/os2.png"
          alt=""
        />
      </div>
    </div>
  );
};
