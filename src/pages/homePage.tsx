export const RunHomePage = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="max-w-[1400px] mt-10 md:mt-20">
        <div className="h-[200px] sm:h-[300px] md:h-[400px] w-full">
          <img
            className="object-cover w-full h-full"
            src="./frontpageImage.png"
            alt=""
          />
        </div>
        <div className="w-full items-center  flex max-w-[780px] relative">
          <img
            className="max-w-[50vw] min-w-[250px] w-full absolute z-50"
            src="./flowerImage.png"
            alt=""
          />
        </div>
        <div className="mt-[120px] sm:mt-0 sm:justify-self-end  mr-5 p-5 text-center text-customGreen flex flex-col gap-5">
          <div>
            <p className="font-primary text-5xl lg:text-7xl">
              Save{" "}
              <span className="font-secondary text-6xl lg:text-8xl">The</span>{" "}
              Date
            </p>
            <p className="font-primary text-2xl lg:text-3xl">
              Hold av datoen for kommende bryllup
            </p>
          </div>

          <p className="font-primary text-3xl lg:text-5xl">
            Lørdag d. 30 mai 2026
          </p>
        </div>
      </div>
    </div>
  );
};
