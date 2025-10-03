"use client";
import React, { useContext } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import Typography from "@/components/ui/Typography";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";

function RightCompare() {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const t = locale === "ar" ? ar : en;

  return (
    <div className="bg-[#F8F8F8] p-5 rounded-lg space-y-3">
      <Typography weight="bold" size="xl">
        {t?.serviceRightCompare?.title}
      </Typography>
      <Typography weight="normal" size="base">
        {t?.serviceRightCompare?.description}
      </Typography>
      <LanguageAwareLink variant="rightIcon" className="!text-primary" href="#">
        {t?.serviceRightCompare?.btn}
      </LanguageAwareLink>
    </div>
  );
}

export default RightCompare;
