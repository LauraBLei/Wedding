import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

interface Speech {
  speaker: string;
  image: string;
  images: string[];
  texts: string[];
}

export function SpeechesSection() {
  const { t } = useTranslation();
  const speeches = t("speeches", { returnObjects: true }) as Speech[];
  const [current, setCurrent] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const prev = () =>
    setCurrent((i) => (i - 1 + speeches.length) % speeches.length);
  const next = () => setCurrent((i) => (i + 1) % speeches.length);

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) diff > 0 ? next() : prev();
    touchStartX.current = null;
  };

  const speech = speeches[current];

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
        {t("memorial.speeches.title")}
      </h2>

      <div
        className="max-w-2xl mx-auto"
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        {/* Full-width speaker photo */}
        {speech.image ? (
          <img
            src={speech.image}
            alt={speech.speaker}
            className="w-full rounded-lg object-cover mb-8 shadow-lg"
            style={{ maxHeight: "60vh" }}
          />
        ) : (
          <div className="w-full aspect-[4/3] rounded-lg bg-white/5 border border-white/10 mb-8 flex items-center justify-center">
            <span
              className="text-white/20 text-8xl"
              style={{ fontFamily: "Sacramento, cursive" }}
            >
              {speech.speaker[0]}
            </span>
          </div>
        )}

        {/* Speaker name */}
        <h3
          className="text-white text-3xl md:text-4xl mb-8"
          style={{ fontFamily: "Sacramento, cursive" }}
        >
          {speech.speaker}
        </h3>

        {/* Speech text — scrollable on mobile */}
        <div className="speech-scroll max-h-[55vh] overflow-y-auto pr-3 space-y-4 mb-10">
          {speech.texts.map((text, i) => (
            <p
              key={i}
              className="text-white/75 text-sm md:text-base leading-relaxed"
              style={{ fontFamily: "Maitree, serif" }}
            >
              {text}
            </p>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <button
            onClick={prev}
            className="text-white/60 active:text-white transition-colors px-2 py-3 text-sm min-w-[80px] text-left cursor-pointer"
            style={{ fontFamily: "Maitree, serif" }}
          >
            ← {t("memorial.speeches.prev")}
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2 items-center">
            {speeches.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className="rounded-full transition-all cursor-pointer"
                style={{
                  backgroundColor: "white",
                  opacity: i === current ? 1 : 0.25,
                  width: i === current ? "10px" : "7px",
                  height: i === current ? "10px" : "7px",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="text-white/60 active:text-white transition-colors px-2 py-3 text-sm min-w-[80px] text-right cursor-pointer"
            style={{ fontFamily: "Maitree, serif" }}
          >
            {t("memorial.speeches.next")} →
          </button>
        </div>
      </div>
    </section>
  );
}
