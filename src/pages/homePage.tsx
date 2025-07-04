import { EkstraSection } from "../components/sections/ekstra";
import { FotoSection } from "../components/sections/fotogalleri";
import { MenuSection } from "../components/sections/menu";
import { OvernatningSection } from "../components/sections/overnatning";
import { ProgramSection } from "../components/sections/program";
import { TilmeldingSection } from "../components/sections/tilmelding";
import { VenueSection } from "../components/sections/venue";
import { WelcomeSection } from "../components/sections/welcome";

export const RunHomePage = () => {
  return (
    <div className="w-full flex font-primary text-white flex-col items-center gap-10">
      <section id="welcome" className="max-w-[1440px] w-full px-5">
        <WelcomeSection />
      </section>
      <section id="venue" className="max-w-[1440px] w-full px-5">
        <VenueSection />
      </section>
      <section id="program" className="max-w-[1440px] w-full px-5">
        {" "}
        <ProgramSection />
      </section>
      <section id="menu" className="max-w-[1440px] w-full px-5">
        <MenuSection />
      </section>
      <section id="overnatning" className="max-w-[1440px] w-full px-5">
        <OvernatningSection />
      </section>
      <section id="tilmelding" className="max-w-[1440px] w-full px-5">
        <TilmeldingSection />
      </section>
      <section id="ekstra" className="max-w-[1440px] w-full px-5">
        <EkstraSection />
      </section>
      <section id="fotogalleri" className="max-w-[1440px] w-full px-5">
        <FotoSection />
      </section>
    </div>
  );
};
