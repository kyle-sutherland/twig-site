"use client";

import React, { useState } from "react";
import { useLang } from "../context/LanguageContext";

const DONATION_PRESETS = [5, 10, 20, 50];

const labels = {
  tabDonate: { en: "Donate", fr: "Faire un don" },
  tabMember: { en: "Pay Membership Fee", fr: "Payer la cotisation" },
  donationHeading: { en: "Choose an amount (CAD)", fr: "Choisissez un montant (CAD)" },
  custom: { en: "Custom", fr: "Autre" },
  customPlaceholder: { en: "Enter amount", fr: "Entrer un montant" },
  memberHeading: { en: "Annual Membership Dues", fr: "Cotisation annuelle" },
  memberDesc: {
    en: "Pay your annual TWIG membership dues. Your membership supports our advocacy work for silviculture workers across Canada.",
    fr: "Payez votre cotisation annuelle TWIG. Votre adhésion soutient nos activités de défense des droits des travailleurs en sylviculture partout au Canada.",
  },
  memberPrice: { en: "Annual dues amount set in configuration", fr: "Montant de la cotisation défini dans la configuration" },
  submit: { en: "Proceed to Payment", fr: "Passer au paiement" },
  processing: { en: "Processing…", fr: "Traitement en cours…" },
};

export default function SupportForm() {
  const { lang } = useLang();
  const t = (key: keyof typeof labels) => labels[key][lang] ?? labels[key]["en"];

  const [tab, setTab] = useState<"donation" | "membership">("donation");
  const [donationAmount, setDonationAmount] = useState<number | "custom">(25);
  const [customAmount, setCustomAmount] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      let body: { type: string; amount?: number };

      if (tab === "donation") {
        const cents =
          donationAmount === "custom"
            ? Math.round(parseFloat(customAmount) * 100)
            : donationAmount * 100;

        if (!cents || cents < 100 || cents > 1_000_000 || !Number.isFinite(cents)) {
          setError(
            lang === "fr"
              ? "Veuillez entrer un montant valide entre 1 $ et 10 000 $."
              : "Please enter a valid amount between $1 and $10,000."
          );
          setIsLoading(false);
          return;
        }

        body = { type: "donation", amount: cents };
      } else {
        body = { type: "membership" };
      }

      const res = await fetch("/api/checkout_sessions", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok || !data.sessionUrl) {
        setError(data.error ?? (lang === "fr" ? "Une erreur s'est produite." : "Something went wrong."));
        return;
      }

      window.location.href = data.sessionUrl;
    } catch {
      setError(lang === "fr" ? "Une erreur réseau s'est produite." : "A network error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const tabBase = "px-5 py-2 text-sm font-semibold border-b-2 transition-colors";
  const tabActive = `${tabBase} border-slate-950 text-slate-950`;
  const tabInactive = `${tabBase} border-transparent text-gray-500 hover:text-slate-950`;

  const presetBase =
    "px-4 py-2 text-sm font-semibold border-2 transition-colors";
  const presetActive = `${presetBase} border-slate-950 bg-slate-950 text-white`;
  const presetInactive = `${presetBase} border-slate-950 bg-white text-slate-950 hover:bg-slate-950 hover:text-white`;

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-lg mx-auto">
      {/* Tabs */}
      <div className="flex border-b border-gray-200 mb-6">
        <button
          type="button"
          className={tab === "donation" ? tabActive : tabInactive}
          onClick={() => setTab("donation")}
        >
          {t("tabDonate")}
        </button>
        <button
          type="button"
          className={tab === "membership" ? tabActive : tabInactive}
          onClick={() => setTab("membership")}
        >
          {t("tabMember")}
        </button>
      </div>

      {tab === "donation" && (
        <div className="space-y-4">
          <p className="text-sm text-gray-600">{t("donationHeading")}</p>
          <div className="flex flex-wrap gap-2">
            {DONATION_PRESETS.map((amount) => (
              <button
                key={amount}
                type="button"
                className={donationAmount === amount ? presetActive : presetInactive}
                onClick={() => setDonationAmount(amount)}
              >
                ${amount}
              </button>
            ))}
            <button
              type="button"
              className={donationAmount === "custom" ? presetActive : presetInactive}
              onClick={() => setDonationAmount("custom")}
            >
              {t("custom")}
            </button>
          </div>

          {donationAmount === "custom" && (
            <div className="mt-2">
              <div className="flex items-center ring-1 ring-inset ring-gray-300 bg-white px-3">
                <span className="text-gray-500 mr-1">$</span>
                <input
                  type="number"
                  min="1"
                  max="10000"
                  step="1"
                  placeholder={t("customPlaceholder")}
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  className="flex-1 py-2 bg-transparent outline-none text-sm"
                />
              </div>
            </div>
          )}
        </div>
      )}

      {tab === "membership" && (
        <div className="border-2 border-slate-950 p-5 bg-white space-y-2">
          <h3 className="font-semibold text-slate-950 text-base">{t("memberHeading")}</h3>
          <p className="text-sm text-gray-600">{t("memberDesc")}</p>
          <p className="text-xs text-gray-400 italic">{t("memberPrice")}</p>
        </div>
      )}

      {error && (
        <p className="mt-4 text-sm text-red-600">{error}</p>
      )}

      <div className="mt-6">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-slate-950 outline-2 px-3 py-2 text-m text-white outline-offset-0 outline-slate-950 hover:text-slate-950 hover:bg-slate-950/0 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? t("processing") : t("submit")}
        </button>
      </div>
    </form>
  );
}
