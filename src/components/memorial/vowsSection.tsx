import { useState } from "react";
import { useTranslation } from "react-i18next";

interface VowsSectionProps {
  image?: string;
}

export function VowsSection({ image }: VowsSectionProps) {
  const { t } = useTranslation();
  const lasseTexts = t("vows.lasse.texts", { returnObjects: true }) as string[];
  const lasseName = t("vows.lasse.name");
  const lauraTexts = t("vows.laura.texts", { returnObjects: true }) as string[];
  const lauraName = t("vows.laura.name");

  const [active, setActive] = useState<"lasse" | "laura">("lasse");
  const texts = active === "lasse" ? lasseTexts : lauraTexts;

  return (
    <section
      className="py-24 px-6"
      style={{
        backgroundColor: "#022d1d",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <h2
        className="text-white text-4xl md:text-6xl text-center mb-14"
        style={{ fontFamily: "Sacramento, cursive" }}
      >
        {t("memorial.vows.title")}
      </h2>

      {image ? (
        <div
          className="w-full max-w-2xl mx-auto aspect-[4/3] overflow-hidden rounded-lg shadow-2xl mb-14"
        >
          <img
            src={image}
            alt="Laura og Lasse"
            className="w-full h-full object-cover"
          />
        </div>
      ) : (
        <div className="w-full max-w-2xl mx-auto aspect-[4/3] rounded-lg bg-white/5 border border-white/10 mb-14" />
      )}

      <div className="max-w-2xl mx-auto">
        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex border border-white/20 rounded-full overflow-hidden">
            {(
              [
                ["lasse", lasseName],
                ["laura", lauraName],
              ] as const
            ).map(([key, name]) => (
              <button
                key={key}
                onClick={() => setActive(key)}
                className="px-8 py-2 text-sm tracking-widest uppercase transition-all cursor-pointer"
                style={{
                  fontFamily: "Maitree, serif",
                  backgroundColor:
                    active === key ? "rgba(255,255,255,0.12)" : "transparent",
                  color: active === key ? "white" : "rgba(255,255,255,0.4)",
                }}
              >
                {name}
              </button>
            ))}
          </div>
        </div>

        {/* Vow text */}
        <div className="space-y-4">
          {texts.map((text, i) => (
            <p
              key={i}
              className="text-white/75 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "Maitree, serif" }}
            >
              {text}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
