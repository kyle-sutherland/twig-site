"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ActionButton } from "./buttons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

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
        <p>Thanks for reaching out! We will be in touch soon.</p>
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

        <div className="mt-0 flex flex-row">
          <div className="flex-grow">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium leading-6"
            >
              First Name
            </label>
            <input
              id="firstName"
              required
              type="text"
              className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
              {...register("firstName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
          <div className="flex-grow">
            <label
              htmlFor="lastName"
              className="block text-sm font-medium leading-6"
            >
              Last Name
            </label>
            <input
              id="lastName"
              required
              type="text"
              className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
              {...register("lastName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6"
          >
            E-mail Address
          </label>
          <input
            id="email"
            required
            type="email"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="offSeasonBase"
            className="block text-sm font-medium leading-6"
          >
            Where are you based in the off season?
          </label>
          <input
            id="offSeasonBase"
            required
            type="text"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("offSeasonBase", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="currentCompany"
            className="text-sm font-medium leading-6"
          >
            Which company are you currently, or most recently working for?
          </label>
          <input
            id="currentCompany"
            type="text"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("currentCompany")}
          />
        </div>

        <div>
          <label
            htmlFor="pastComapinies"
            className="text-sm font-medium leading-6"
          >
            What other companies have you worked for in the past?
          </label>
          <input
            id="otherCompanies"
            type="text"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("pastCompanies")}
          />
        </div>
        <div>
          <label htmlFor="positions" className="text-sm font-medium leading-6">
            What positions have you held in those companies?
          </label>
          <input
            id="positions"
            type="text"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("positions")}
          />
        </div>

        <div>
          <label htmlFor="refer" className="text-sm font-medium leading-6">
            how did you hear about us?
          </label>
          <input
            id="refer"
            type="text"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("refer")}
          />
        </div>

        <div>
          <label
            htmlFor="desiredChange"
            className="block text-sm font-medium leading-6"
          >
            What would you like to change about the industry?
          </label>
          <textarea
            id="desiredChange"
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            rows={3}
            {...register("desiredChange")}
          />
        </div>

        <div className="mt-6 flex justify-end gap-x-6">
          <ActionButton text="Submit" type="submit" disabled={false} />
        </div>
      </div>
    </form>
  );
}
