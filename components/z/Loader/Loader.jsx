"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import React, { useContext } from "react";

const translations = {
  en: "LOADING",
  ar: "جاري التحميل", // "Loading" in Arabic
};

const Loader = () => {
  const { locale } = useContext(LanguageContext);
  const loadingText = translations[locale] || translations.en;

  return (
    <div className="flex flex-col items-center justify-center space-y-4 secPadding">
      {/* Main spinner */}
      <div className="relative h-16 w-16">
        {/* Outer ring */}
        <div className="absolute h-full w-full animate-spin rounded-full border-4 border-t-transparent border-primary/25"></div>

        {/* Inner ring */}
        <div className="absolute left-1/2 top-1/2 h-8 w-8 -translate-x-1/2 -translate-y-1/2 animate-spin rounded-full border-4 border-b-transparent border-primary/75"></div>

        {/* Center dot */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary"></div>
      </div>

      {/* Localized loading text */}
      <div
        className={`flex gap-[2px] ${
          locale === "ar" ? "flex-row-reverse" : ""
        }`}>
        {loadingText.split("").map((char, index) => (
          <span
            key={index}
            className={`animate-bounce`}
            style={{ animationDelay: `${index * 100}ms` }}>
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Loader;
