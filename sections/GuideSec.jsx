"use client";
import GuideCard from "@/components/Cards/GuideCard";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import React, { useContext, useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";

function GuideSec() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  const splideRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const options = {
    type: "loop",
    rewind: true,
    resolve: "left",
    perPage: 1,
    padding: "0.8rem",
    perMove: 1,
    pagination: false,
    gap: "15px",
    arrows: false,
    autoplay: true,
    autoScroll: {
      speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
    },
  };
  return (
    <div className="secPadding container space-y-6">
      <div className="flex justify-between gap-3 flex-col md:flex-row">
        <div className="space-y-3 max-w-[700px]">
          <Typography size="3xl" weight="bold" as="p">
            {t?.guide.title}
          </Typography>
          <Typography size="base" weight="normal" as="p">
            {t?.guide.description}
          </Typography>
        </div>
        <LanguageAwareLink
          href="#"
          variant="rightIcon"
          className="!text-primary">
          {t.btn.readMoreGuides}
        </LanguageAwareLink>
      </div>
      {/*  */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {t?.guide?.items?.map((item) => (
          <GuideCard key={item?.id} data={item} />
        ))}
      </div>
      <div className="block lg:hidden">
        <UniversalSplide
          ref={splideRef}
          hasTrack={false}
          options={options}
          onMoved={(splide, newIndex) => setActiveIndex(newIndex)}>
          <SplideTrack className="!px-0">
            {t?.guide?.items?.map((item) => (
              <SplideSlide key={item?.id}>
                <GuideCard key={item?.id} data={item} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="mt-6 flex items-center justify-center gap-2 w-full">
            {t?.guide?.items?.map((_, idx) => (
              <button
                key={idx}
                onClick={() => splideRef.current?.go(idx)}
                className={`cursor-pointer w-3 h-3 rounded-full transition ${
                  activeIndex === idx ? "bg-gray" : "bg-gray/20"
                }`}
              />
            ))}
          </div>
        </UniversalSplide>
      </div>
      {/*  */}
    </div>
  );
}

export default GuideSec;
