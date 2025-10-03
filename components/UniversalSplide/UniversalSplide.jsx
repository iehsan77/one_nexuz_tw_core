"use client";
import React, { useContext } from "react";
import { Splide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // don't forget the styles
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

const UniversalSplide = ({ options = {}, children, ...rest }) => {
  const { locale } = useContext(LanguageContext);

  const combinedOptions = {
    direction: locale === "ar" ? "rtl" : "ltr",
    ...options,
  };

  return (
    <Splide key={locale} options={combinedOptions} {...rest}>
      {children}
    </Splide>
  );
};

export default UniversalSplide;
