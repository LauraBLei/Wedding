import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const sections = [
  { id: "welcome", labelKey: "welcome.headline" },
  { id: "venue", labelKey: "venue.headline" },
  { id: "program", labelKey: "program.headline" },
  { id: "menu", labelKey: "menu.headline" },
  { id: "overnatning", labelKey: "rooms.headline" },
  { id: "tilmelding", labelKey: "registration.headline" },
  { id: "ekstra", labelKey: "extra.headline" },
  { id: "fotogalleri", labelKey: "foto.headline" },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const { i18n, t } = useTranslation();

  const handleNav = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <button
        className="fixed top-4 z-40 left-4 scale-95 rounded-full bg-customBlack shadow-md hover:scale-100 p-2 cursor-pointer transition-transform duration-300"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
      >
        <MenuIcon className="text-white" />
      </button>
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-sidebarBlack  shadow-lg text-white z-40 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 cursor-pointer scale-95 hover:scale-100 text-2xl transform transition-transform duration-300 focus:outline-none"
          onClick={() => setOpen(false)}
          aria-label="Close menu"
        >
          ×
        </button>
        <nav className="pt-10 flex flex-col text-sm md:text-lg   px-8 h-full justify-between ">
          <div>
            {sections.map((section) => (
              <button
                key={section.id}
                className="text-left py-2 px-2 rounded hover:bg-customBlack w-full cursor-pointer transition"
                onClick={() => handleNav(section.id)}
              >
                {t(section.labelKey)}
              </button>
            ))}
            <div className="mt-6 flex gap-2 flex-col text-sm md:text-lg">
              <button
                onClick={() => i18n.changeLanguage("da")}
                className={`px-2 py-1 rounded text-sm  flex cursor-pointer items-center gap-1 ${
                  i18n.language === "da"
                    ? "bg-white text-black font-bold"
                    : "bg-sidebarBlack text-white "
                }`}
              >
                <img src="/flags/dk.webp" alt="Dansk" className="w-5 h-5" />{" "}
                Dansk
              </button>
              <button
                onClick={() => i18n.changeLanguage("no")}
                className={`px-2 py-1 rounded text-sm flex cursor-pointer items-center gap-1 ${
                  i18n.language === "no"
                    ? "bg-white text-black font-bold"
                    : "bg-sidebarBlack text-white "
                }`}
              >
                <img src="/flags/no.png" alt="Norsk" className="w-5 h-5" />{" "}
                Norsk
              </button>
              <button
                onClick={() => i18n.changeLanguage("en")}
                className={`px-2 py-1 rounded text-sm flex cursor-pointer items-center gap-1 ${
                  i18n.language === "en"
                    ? "bg-white text-black font-bold"
                    : "bg-sidebarBlack text-white"
                }`}
              >
                <img src="/flags/gb.webp" alt="English" className="w-5 h-5" />{" "}
                English
              </button>
            </div>
          </div>
          <img className="ml-[-30px]" src="/flowers.png" alt="" />
        </nav>
      </div>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/20 bg-opacity-30 z-30"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
};
