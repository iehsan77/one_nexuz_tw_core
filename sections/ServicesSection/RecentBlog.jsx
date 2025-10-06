"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React, { useContext } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function RecentBlog() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div className="bg-[#F8F8F8] p-5 rounded-lg space-y-5">
      <Typography weight="bold" size="xl">
        {t?.recentBlogs?.title}
      </Typography>
      <div className="space-y-3">
        <div>
          <Image
            src={t?.recentBlogs?.image}
            alt={t?.recentBlogs?.title}
            width={384}
            height={347}
          />
        </div>
        <div className="flex items-center gap-3">
          <Typography weight="normal" size="sm" className="!text-gray-400">
            {t?.recentBlogs?.date}
          </Typography>
          <Typography
            weight="normal"
            size="sm"
            color="primary"
            className="bg-[#FFE5E7] rounded-full py-1 px-2">
            {t?.recentBlogs?.pageName}
          </Typography>
        </div>
        <Typography weight="bold" size="xl">
          {t?.recentBlogs?.subTitle}
        </Typography>
        <Typography weight="normal" size="base">
          {t?.recentBlogs?.description}
        </Typography>
      </div>
    </div>
  );
}

export default RecentBlog;
