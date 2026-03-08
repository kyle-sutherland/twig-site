"use client";
import { useLang } from "../context/LanguageContext";

export default function HeroLangToggle() {
  const { lang, toggle } = useLang();

  return (
    <div className="animate-fade-in-delay flex items-center gap-4 mt-6">
      <button
        onClick={toggle}
        aria-label="Switch to English"
        className={`text-2xl tracking-widest font-semibold transition-opacity duration-200 ${lang === "en" ? "opacity-100 underline underline-offset-4" : "opacity-50 hover:opacity-80"
          }`}
      >
        English
      </button>
      <span className="text-white/60 text-xl">|</span>
      <button
        onClick={toggle}
        aria-label="Passer en français"
        className={`text-2xl tracking-widest font-semibold transition-opacity duration-200 ${lang === "fr" ? "opacity-100 underline underline-offset-4" : "opacity-50 hover:opacity-80"
          }`}
      >
        Français
      </button>
    </div>
  );
}
