import { MenuIcon } from "lucide-react";
import { useState } from "react";

const sections = [
  { id: "welcome", label: "Welcome" },
  { id: "venue", label: "Venue" },
  { id: "program", label: "Program" },
  { id: "menu", label: "Menu" },
  { id: "overnatning", label: "Overnatning" },
  { id: "tilmelding", label: "Tilmelding" },
  { id: "ekstra", label: "Ekstra Information" },
  { id: "fotogalleri", label: "Fotogalleri" },
];

export const Sidebar = () => {
  const [open, setOpen] = useState(false);

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
        className="fixed top-4 left-4 scale-95 hover:scale-100 p-2 cursor-pointer transition-transform duration-300"
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
        <nav className="pt-10 flex flex-col  px-8 h-full justify-between ">
          <div>
            {sections.map((section) => (
              <button
                key={section.id}
                className="text-lg text-left py-2 px-2 rounded hover:bg-customBlack w-full cursor-pointer transition"
                onClick={() => handleNav(section.id)}
              >
                {section.label}
              </button>
            ))}
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
