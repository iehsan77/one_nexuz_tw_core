"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import RHFTextField from "@/components/FormFields/RHFTextField";
import FormProvider from "@/components/FormFields/FormProvider";
import Button from "@/components/Button/Button";
import RHFileUpload from "@/components/FormFields/RHFileUpload";
import TextInput from "@/components/FormFields/TextInput";
import NumberInput from "./Forms/NumberInput";
import Heading4 from "@/components/Typography/Heading4";
import { Icon } from "@iconify/react";
import { EditSVG } from "@/public/assets/icons/SVGIcons";

const formSchema = z.object({
  firstName: z.string().min(1, "Required"),
  lastName: z.string().min(1, "Required"),
  email: z.string().email("Invalid email"),
  confirmEmail: z.string().email("Invalid email"),
  city: z.string().min(1, "Required"),
  phone: z.string().optional(),
  linkedin: z.string().optional(),
  facebook: z.string().optional(),
  x: z.string().optional(),
  website: z.string().optional(),
  message: z.string().optional()
});

export default function CareerForm({ currentData }) {
  const methods = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      confirmEmail: "",
      city: "",
      phone: "",
      linkedin: "",
      facebook: "",
      x: "",
      website: "",
      message: ""
    }
  });

  const {
    handleSubmit,
    watch,
    register,
    setError,
    setValue,
    formState: { errors }
  } = methods;

  const onSubmit = (data) => {
    console.log("Form Data Submitted:", data);
  };

  return (
    <section className="secPadding !pt-14">
      <div className="container">
        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          {/* Easy Apply */}
          <div className="py-6">
            <Heading4 blackHeading={`Easy Apply`} />
            <p className="mt-2">
              {`Choose an option to autocomplete your application. You can still fill your profile manually.`}
            </p>

            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <RHFileUpload
                name="model_logo"
                accept={{
                  "image/jpeg": [".jpeg", ".jpg"],
                  "image/png": [".png"],
                  "image/webp": [".webp"]
                }}
                // isHide={true}
                value={
                  currentData ? watch("old_model_logo") : watch("model_logo")
                } // File or string (URL)
                onChange={(val) => setValue("model_logo", val)}
                onRemove={(val) => setValue("old_model_logo", val)}
                setError={setError}
                error={errors?.model_logo?.message}
              />

              <span className="text-sm font-medium">or</span>
              <div className="flex flex-col gap-2 w-full max-w-62">
                <Button
                  className="bg-[#0A66C2] text-white"
                  text={`Apply With LinkedIn`}
                  icon="mdi:linkedin"
                />
                <Button
                  className="bg-[#266EEB] text-white"
                  text={`Apply With Indeed`}
                />
              </div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="py-6">
            <Heading4 blackHeading={`Personal information`} />
            <p className="text-sm text-gray-600">
              Fields marked with * are required.
            </p>
            <div className="w-24 h-24 rounded-full bg-gray-300 my-4 relative">
              <div className="!text-secondary hover:cursor-pointer absolute right-0">
                <EditSVG />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6 pt-2">
                <TextInput
                  label={`first_name*`}
                  type="first_name"
                  error={errors.last_name?.message}
                  {...register("first_name")}
                />
                <TextInput
                  label={`email*`}
                  type="email"
                  error={errors.email?.message}
                  {...register("email")}
                />
                <NumberInput
                  label={`city*`}
                  error={errors.city?.message}
                  autoComplete="off"
                  {...register("city")}
                />
              </div>
              <div className="space-y-6 pt-2">
                <TextInput
                  label={`last_name*`}
                  type="last_name"
                  error={errors.last_name?.message}
                  {...register("last_name")}
                />
                <TextInput
                  label={`Confirm your Email*`}
                  type="password"
                  error={errors.email?.message}
                  {...register("password")}
                />
                <NumberInput
                  label={`Phone Number`}
                  error={errors.phone?.message}
                  autoComplete="off"
                  {...register("phone")}
                />
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="py-6">
            <div className="flex justify-between items-center border-b border-gray-500 pb-2">
              <Heading4 blackHeading={`Experience`} />
              <Button
                variant={"primary"}
                className={"!py-1.5"}
                type="button"
                text={`+ Add`}
              />
            </div>
          </div>

          {/* Education Section */}
          <div className="py-6">
            <div className="flex justify-between items-center border-b border-gray-500 pb-2">
              <Heading4 blackHeading={`Education`} />
              <Button
                variant={"primary"}
                className={"!py-1.5"}
                type="button"
                text={`+ Add`}
              />
            </div>
          </div>

          {/* Your Profile */}
          <div className="py-6">
            <Heading4 blackHeading={`Your Profile`} />
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-6 pt-4">
                <TextInput
                  label={`LinkedIn`}
                  type="LinkedIn"
                  error={errors.last_name?.message}
                  {...register("LinkedIn")}
                />
                <TextInput
                  label={`X`}
                  type="X"
                  error={errors.email?.message}
                  {...register("X")}
                />
              </div>
              <div className="space-y-6 pt-4">
                <TextInput
                  label={`Facebook`}
                  type="Facebook"
                  error={errors.last_name?.message}
                  {...register("Facebook")}
                />
                <TextInput
                  label={`Website`}
                  type="website"
                  error={errors.email?.message}
                  {...register("website")}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="py-6">
            <Heading4 blackHeading={`Message to the Hiring Team`} />
            <p className="text-sm mb-2">
              Let the company know about your interest working there
            </p>
            <RHFTextField
              name="message"
              title=""
              placeholder="Write your message here..."
              textArea
              className="w-full border rounded-md"
            />
          </div>

          {/* Consent */}
          <div className="flex items-start gap-2 py-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="mt-1"
            />
            <label htmlFor="consent" className="text-sm text-gray-600">
              {`Please be informed that your application to this job offer will trigger some processing of your personal data by the recruiting company, the data controller. Smart Recruiters, the data processor, has no control over such personal data processing. For more information on these personal data processing, please refer to the recruiting company’s privacy policy.`}
            </label>
          </div>

          {/* Submit Button */}
          <div className="py-2">
            <Button variant={"primary"} type="submit" text={`Submit`} />
          </div>
        </FormProvider>
      </div>
    </section>
  );
}
