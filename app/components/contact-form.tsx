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

        <div className="mt-0 flex flex-row gap-4">
          <div className="flex-grow">
            <label htmlFor="firstName" className="sr-only">
              First Name
            </label>
            <input
              id="firstName"
              required
              type="text"
              placeholder="First Name"
              className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
              {...register("firstName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
          <div className="flex-grow">
            <label htmlFor="lastName" className="sr-only">
              Last Name
            </label>
            <input
              id="lastName"
              required
              type="text"
              placeholder="Last Name"
              className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
              {...register("lastName", { required: true })}
              onChange={(e) => setSubmitterName(e.target.value)}
            />
          </div>
        </div>

        <div className="mt-4">
          <label htmlFor="email" className="sr-only">
            E-mail Address
          </label>
          <input
            id="email"
            required
            type="email"
            placeholder="E-mail Address"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="offSeasonBase" className="sr-only">
            Where are you based in the off season?
          </label>
          <input
            id="offSeasonBase"
            required
            type="text"
            placeholder="Where are you based in the off season?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("offSeasonBase", { required: true })}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="currentCompany" className="sr-only">
            Which company are you currently, or most recently working for?
          </label>
          <input
            id="currentCompany"
            type="text"
            placeholder="Which company are you currently, or most recently working for?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("currentCompany")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="pastComapinies" className="sr-only">
            What other companies have you worked for in the past?
          </label>
          <input
            id="otherCompanies"
            type="text"
            placeholder="What other companies have you worked for in the past?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("pastCompanies")}
          />
        </div>
        <div className="mt-4">
          <label htmlFor="positions" className="sr-only">
            What positions have you held in those companies?
          </label>
          <input
            id="positions"
            type="text"
            placeholder="What positions have you held in those companies?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("positions")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="refer" className="sr-only">
            How did you hear about us?
          </label>
          <input
            id="refer"
            type="text"
            placeholder="How did you hear about us?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            {...register("refer")}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="desiredChange" className="sr-only">
            What would you like to change about the industry?
          </label>
          <textarea
            id="desiredChange"
            placeholder="What would you like to change about the industry?"
            className="block w-full bg-white border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-500 focus:ring-2 focus:ring-inset focus:ring-gray-900 sm:text-sm"
            rows={4}
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
