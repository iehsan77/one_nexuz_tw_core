"use client";
import React, { useContext } from "react";
import Typography from "../ui/Typography";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { toast } from "sonner";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

function Newsletter() {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const t = locale === "ar" ? ar : en;

  const newsletterSchema = z.object({
    email: z.string().email("Please enter a valid email address"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(newsletterSchema),
    defaultValues: { email: "" },
  });
  const onSubmit = async (data) => {
    await new Promise((resolve) => setTimeout(resolve, 800));
    toast.success("Thank you for subscribing!");
    reset();
  };

  return (
    <div
      className="secPadding h-[30vh] w-full bg-cover bg-no-repeat border-b border-gray-600"
      style={{ backgroundImage: `url(/assets/newsLetter.webp)` }}>
      <div className="container w-full flex items-center flex-col justify-center h-full max-w-[700px] mx-auto space-y-5">
        <Typography
          size="2xl"
          weight="bold"
          align="center"
          className="lg:px-10"
          color="white">
          {t.newsletter.title}
        </Typography>
        {/*  */}
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div className={`p-3 px-4 bg-white w-full flex gap-4 relative`}>
            <input
              type="email"
              {...register("email")}
              placeholder={t.newsletter.placeholder}
              className={`w-full py-1 px-2 ${
                arabic ? "border-l" : "border-r"
              } border-gray-300 focus:outline-0 ${
                errors.email ? "placeholder:text-red-500" : ""
              }`}
            />
            <button
              disabled={isSubmitting}
              className="cursor-pointer text-gray font-semibold text-sm md:text-base flex items-center gap-3">
              <Icon icon="fa:send" width="20" height="20" />
              {t.btn.subscribe}
            </button>
            {/* <div className="absolute bott">asd</div> */}
          </div>
        </form>
        {/*  */}
      </div>
    </div>
  );
}

export default Newsletter;
