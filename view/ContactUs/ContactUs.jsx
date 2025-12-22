"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import ContactHeader from "@/components/Header/ContactHeader";
import GetInTouch from "./GetInTouch";

function ContactUs() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div>
      <ContactHeader data={t.contactHeader} />
      <GetInTouch data={t.getInTouch} />
    </div>
  );
}

export default ContactUs;
