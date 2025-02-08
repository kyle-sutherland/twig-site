"use client";
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import { ActionButton } from "./buttons";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  guests: number;
  cocktails?: boolean;
  date: {
    startDate: Date;
    endDate: Date;
  };
  message: string;
  "g-recaptcha-response"?: string;
  _gotcha?: string;
}

export default function ContactForm() {
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { register, handleSubmit } = useForm<FormData>();
  const [submitterName, setSubmitterName] = useState("");
  const [value, setValue] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().setMonth(11)),
  });
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

  const handleValueChange = (newValue: typeof value) => {
    console.log("newValue:", newValue);
    setValue(newValue);
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
            <input
              type="text"
              name="_gotcha"
              className="hidden"
              {...register("_gotcha")}
            />
          </label>
        </p>

        <div className="mt-0">
          <label htmlFor="name" className="block text-sm font-medium leading-6">
            Name
          </label>
          <input
            id="name"
            required
            type="text"
            className="block flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("name", { required: true })}
            onChange={(e) => setSubmitterName(e.target.value)}
          />
        </div>

        <div className="mt-6">
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
            className="block flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("email", { required: true })}
          />
        </div>

        <div>
          <label
            htmlFor="guests"
            className="block text-sm font-medium leading-6"
          >
            No. Guests
          </label>
          <input
            id="guests"
            required
            type="number"
            className="block flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            {...register("guests", { required: true, valueAsNumber: true })}
          />
        </div>

        <div>
          <label htmlFor="cocktails" className="text-sm font-medium leading-6">
            Will you be having Signature Cocktails?
          </label>
          <input
            id="cocktails"
            type="checkbox"
            className="flex-1 border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4"
            {...register("cocktails")}
          />
        </div>

        <div className="mt-6">
          <label
            htmlFor="message"
            className="block text-sm font-medium leading-6"
          >
            Message
          </label>
          <textarea
            id="message"
            required
            className="block w-full border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-4 sm:text-sm"
            rows={3}
            {...register("message", { required: true })}
          />
        </div>

        <div className="mt-6 flex justify-end gap-x-6">
          <ActionButton text="Submit" type="submit" disabled={false} />
        </div>
      </div>
    </form>
  );
}
