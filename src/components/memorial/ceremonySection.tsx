import { useState } from "react";
import { useTranslation } from "react-i18next";

interface CeremonySection {
  title: string;
  texts: string[];
}

interface CeremonySectionProps {
  image?: string;
}

export function CeremonySection({ image }: CeremonySectionProps) {
  const { t } = useTranslation();
  const sections = t("ceremony.sections", {
    returnObjects: true,
  }) as CeremonySection[];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <section
      className="px-6 py-24 max-w-xl mx-auto"
      style={{ backgroundColor: "#022d1d" }}
    >
      <h2
        className="text-white/40 text-xs tracking-widest uppercase text-center mb-12"
        style={{ fontFamily: "Maitree, serif", letterSpacing: "0.3em" }}
      >
        {t("memorial.ceremony.title")}
      </h2>

      {image ? (
        <div
          className="w-full overflow-hidden rounded-lg shadow-2xl mb-12"
          style={{ height: "360px" }}
        >
          <img
            src={image}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>
      ) : (
        <div className="w-full aspect-[4/3] rounded-lg bg-white/5 border border-white/10 mb-12" />
      )}

      <div className="flex flex-col gap-2">
        {sections.map((section, i) => (
          <div
            key={i}
            className="rounded-xl overflow-hidden"
            style={{ border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <button
              onClick={() => toggle(i)}
              className="w-full flex items-center justify-between px-5 py-4 text-left cursor-pointer transition-colors"
              style={{
                fontFamily: "Maitree, serif",
                backgroundColor:
                  openIndex === i ? "rgba(255,255,255,0.08)" : "transparent",
              }}
            >
              <span
                className="text-white/80 text-sm tracking-wide"
                style={{ fontFamily: "Maitree, serif" }}
              >
                {section.title}
              </span>
              <span
                className="text-white/40 text-xs ml-4 transition-transform duration-300"
                style={{
                  transform:
                    openIndex === i ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ▾
              </span>
            </button>

            {openIndex === i && (
              <div className="px-5 pb-6 flex flex-col gap-3">
                {section.texts.map((text, j) => (
                  <p
                    key={j}
                    className="text-white/60 text-sm leading-relaxed"
                    style={{ fontFamily: "Maitree, serif" }}
                  >
                    {text}
                  </p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
