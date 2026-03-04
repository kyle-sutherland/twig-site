"use client";
import React from "react";
import { useLang } from "../context/LanguageContext";

interface BilingualProps {
  en: React.ReactNode;
  fr?: React.ReactNode;
}

export default function Bilingual({ en, fr }: BilingualProps) {
  const { lang } = useLang();

  if (lang === "fr" && fr != null) {
    return <>{fr}</>;
  }

  if (lang === "fr" && fr == null) {
    return (
      <>
        <div className="bg-amber-100 border border-amber-400 text-amber-800 px-4 py-2 rounded mb-4 text-sm">
          Translation not available — showing English / Traduction non disponible
        </div>
        {en}
      </>
    );
  }

  return <>{en}</>;
}
