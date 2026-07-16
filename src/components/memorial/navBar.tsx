import { useTranslation } from "react-i18next";

const links = [
  { labelKey: "memorial.vows.title", href: "#vows" },
  { labelKey: "memorial.ceremony.title", href: "#ceremony" },
  { labelKey: "memorial.speeches.title", href: "#speeches" },
  { labelKey: "memorial.photos.title", href: "#photos" },
];

export function NavBar() {
  const { t } = useTranslation();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      <nav
        className="flex items-center gap-1 px-2 py-2 rounded-full"
        style={{
          backgroundColor: "rgba(2, 45, 29, 0.85)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(255,255,255,0.12)",
        }}
      >
        {links.map(({ labelKey, href }) => (
          <a
            key={href}
            href={href}
            onClick={(e) => handleClick(e, href)}
            className="px-5 py-1.5 rounded-full text-xs tracking-widest uppercase cursor-pointer transition-all text-white/60 hover:text-white hover:bg-white/10"
            style={{ fontFamily: "Maitree, serif" }}
          >
            {t(labelKey)}
          </a>
        ))}
      </nav>
    </div>
  );
}
