"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ActionButton } from "./buttons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useLang } from "../context/LanguageContext";

const labels = {
  firstName: { en: "First Name", fr: "Prénom" },
  lastName: { en: "Last Name", fr: "Nom de famille" },
  email: { en: "E-mail Address", fr: "Adresse courriel" },
  offSeasonBase: {
    en: "Where are you based in the off season?",
    fr: "Où êtes-vous basé(e) hors saison?",
  },
  currentCompany: {
    en: "Which company are you currently, or most recently working for?",
    fr: "Pour quelle entreprise travaillez-vous actuellement, ou avez-vous travaillé le plus récemment?",
  },
  pastCompanies: {
    en: "What other companies have you worked for in the past?",
    fr: "Pour quelles autres entreprises avez-vous travaillé par le passé?",
  },
  positions: {
    en: "What positions have you held in those companies?",
    fr: "Quels postes avez-vous occupés au sein de ces entreprises?",
  },
  refer: {
    en: "How did you hear about us?",
    fr: "Comment avez-vous entendu parler de nous?",
  },
  desiredChange: {
    en: "What would you like to change about the industry?",
    fr: "Qu'aimeriez-vous changer dans l'industrie?",
  },
  submit: { en: "Submit", fr: "Envoyer" },
  confirmation: {
    en: "Thanks for reaching out! We will be in touch soon.",
    fr: "Merci de nous avoir contactés! Nous vous répondrons bientôt.",
  },
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  offSeasonBase?: string;
  currentCompany?: string;
  pastCompanies?: string;
  positions?: string;
  refer?: string;
  desiredChange?: string;
  "g-recaptcha-response"?: string;
  _gotcha?: string;
}

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { register, handleSubmit } = useForm<FormData>();
  const [submitterName, setSubmitterName] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { lang } = useLang();
  const t = (key: keyof typeof labels) => labels[key][lang] ?? labels[key]["en"];

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    try {
      if (executeRecaptcha) {
        data["g-recaptcha-response"] = await executeRecaptcha();
      }
      const response = await axios.post("/api/contact", data);
      console.log("API response:", response.data);
      setFormSubmitted(true);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const confirmationMessage = (
    <div className="container grid grid-flow-dense auto-cols-auto grid-rows-3">
      <div className="h-48">
        <p>{t("confirmation")}</p>
      </div>
    </div>
  );

  return formSubmitted ? (
    confirmationMessage
  ) : (
    <form onSubmit={handleSubmit(onSubmit)} action="#contact/?success=true">
      <div className="container grid grid-flow-dense auto-cols-auto grid-rows-3">
        <input
          type="hidden"
          name="subject"
          value={`${submitterName} has sent a message from your website`}
        />
        <input type="hidden" name="form-name" value="contact-form" />
        <p hidden>
          <label>
            <input type="text" className="hidden" {...register("_gotcha")} />
          </label>
        </p>

        <div className="mt-0 flex flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="firstName" className="sr-only">
              {t("firstName")}
            </label>
            <input
              id="firstName"
              required
              type="text"
              placeholder={t("firstName")}
              className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
              {...register("firstName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="lastName" className="sr-only">
              {t("lastName")}
            </label>
            <input
              id="lastName"
              required
              type="text"
              placeholder={t("lastName")}
              className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
              {...register("lastName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="sr-only">
            {t("email")}
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder={t("email")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="offSeasonBase" className="sr-only">
            {t("offSeasonBase")}
          </label>
          <input
            id="offSeasonBase"
            required
            type="text"
            placeholder={t("offSeasonBase")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("offSeasonBase", { required: true })}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="currentCompany" className="sr-only">
            {t("currentCompany")}
          </label>
          <input
            id="currentCompany"
            type="text"
            placeholder={t("currentCompany")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("currentCompany")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="pastComapinies" className="sr-only">
            {t("pastCompanies")}
          </label>
          <input
            id="otherCompanies"
            type="text"
            placeholder={t("pastCompanies")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("pastCompanies")}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="positions" className="sr-only">
            {t("positions")}
          </label>
          <input
            id="positions"
            type="text"
            placeholder={t("positions")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("positions")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="refer" className="sr-only">
            {t("refer")}
          </label>
          <input
            id="refer"
            type="text"
            placeholder={t("refer")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("refer")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="desiredChange" className="sr-only">
            {t("desiredChange")}
          </label>
          <textarea
            id="desiredChange"
            placeholder={t("desiredChange")}
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            rows={4}
            {...register("desiredChange")}
          />
        </div>

        <div className="mt-6 flex justify-end gap-x-6">
          <ActionButton text={t("submit")} type="submit" disabled={false} />
        </div>
      </div>
    </form>
  );
}
