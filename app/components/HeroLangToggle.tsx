"use client";
import { useLang } from "../context/LanguageContext";

export default function HeroLangToggle() {
  const { lang, toggle } = useLang();

  return (
    <div className="animate-fade-in-delay flex items-center gap-4 mt-6 text-white">
      <button
        onClick={toggle}
        aria-label="Switch to English"
        className={`text-2xl tracking-widest font-bold transition-colors duration-200 ${lang === "en" ? "text-white underline underline-offset-4" : "text-white hover:underline"}`}
      >
        English
      </button>
      <span className="text-black-white text-xl">|</span>
      <button
        onClick={toggle}
        aria-label="Passer en français"
        className={`text-2xl tracking-widest font-bold transition-colors duration-200 ${lang === "fr" ? "text-white underline underline-offset-4" : "text-white hover:underline"}`}
      >
        Français
      </button>
    </div>
  );
}
