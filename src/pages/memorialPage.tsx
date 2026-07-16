import "../i18n";
import { LanguageSwitcher } from "../components/memorial/languageSwitcher";
import { HeroSection } from "../components/memorial/heroSection";
import { VowsSection } from "../components/memorial/vowsSection";
import { CeremonySection } from "../components/memorial/ceremonySection";
import { SpeechesSection } from "../components/memorial/speechesSection";
import { PhotosSection } from "../components/memorial/photosSection";
import { NavBar } from "../components/memorial/navBar";

export function MemorialPage() {
  return (
    <div style={{ backgroundColor: "#022d1d" }}>
      {/* Sticky language switcher */}
      <div className="fixed top-5 right-5 z-50">
        <LanguageSwitcher />
      </div>

      <NavBar />

      <HeroSection image="/os.jpg" />
      <div id="vows">
        <VowsSection image="/laura.jpg" />
      </div>
      <div id="ceremony">
        <CeremonySection image="/vielse.jpg" />
      </div>
      <div id="speeches">
        <SpeechesSection />
      </div>
      <div id="photos">
        <PhotosSection />
      </div>
    </div>
  );
}
