"use client";
import React, { useContext } from "react";
import Typography from "./ui/Typography";
import { Button } from "./ui/Button";
import { Icon } from "@iconify/react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function LookingFor() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div className="container py-5 flex items-center flex-col sm:flex-row justify-center gap-5">
      <Typography size="lg">{t.lookingFor}</Typography>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 font-normal !text-sm">
          <Icon icon="uiw:like-o" width="18" height="18" />
          {t.btn.yes}
        </Button>
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 font-normal !text-sm">
          <Icon icon="uiw:dislike-o" width="18" height="18" />
          {t.btn.notReally}
        </Button>
      </div>
    </div>
  );
}

export default LookingFor;
