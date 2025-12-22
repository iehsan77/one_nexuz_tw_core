"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import Typography from "@/components/ui/Typography";
import Image from "@/components/Image/Image";
import ShortHeader from "@/components/Header/ShortHeader";

function AffiliatesPartners() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div>
      {/*  */}
      <ShortHeader data={t?.affiliatesPartners} />
      {/*  */}
      <div className="secPadding container">
        {t?.outPartners?.items?.map((item) => (
          <div
            key={item?.id}
            className="space-y-3 border-b border-primary py-6 first:pt-0 last:border-b-0"
          >
            <Typography size="2xl" weight="bold" align="center">
              {item?.title}
            </Typography>
            <Typography size="base" align="center">
              {item?.description}
            </Typography>
            <div className="flex items-center flex-wrap justify-center gap-x-3 gap-y-2 lg:gap-y-2 lg:gap-x-6 mt-4 lg:mt-6">
              {item?.data?.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-shrink-0 flex items-center justify-center h-10 w-40"
                >
                  <Image
                    src={img.image}
                    alt={`partner-${idx}`}
                    width={180}
                    height={100}
                    className="object-contain w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AffiliatesPartners;
