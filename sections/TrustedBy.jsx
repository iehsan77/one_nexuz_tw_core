"use client";
import Typography from "@/components/ui/Typography";
import React, { useContext } from "react";
import "@splidejs/react-splide/css";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "@/components/Image/Image";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function TrustedBy({ title }) {
  const { locale } = useContext(LanguageContext);

  const data = [
    { id: 1, logo_url: "/assets/trustedBy/1.svg" },
    { id: 2, logo_url: "/assets/trustedBy/2.svg" },
    { id: 3, logo_url: "/assets/trustedBy/3.svg" },
    { id: 4, logo_url: "/assets/trustedBy/4.svg" },
    { id: 5, logo_url: "/assets/trustedBy/5.svg" },
  ];
  const options = {
    type: "loop",
    perPage: 6,
    interval: 0,
    direction: locale === "ar" ? "rtl" : "ltr",
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1.5,
    },
    drag: false,
    breakpoints: {
      420: { perPage: 2 },
      640: { perPage: 3 },
      1024: { perPage: 3 },
      1280: { perPage: 5 },
      1536: { perPage: 6 },
    },
  };
  return (
    <div className="secPadding container space-y-6">
      <Typography size="2xl" align="center" weight="bold">
        {title}
      </Typography>
      <div className="relative">
        {/* Left shadow */}
        <div className="absolute top-0 left-0 h-full w-10 bg-gradient-to-r from-purple-100 to-transparent z-10 pointer-events-none"></div>
        {/* Right shadow */}
        <div className="absolute top-0 right-0 h-full w-10 bg-gradient-to-l from-purple-100 to-transparent z-10 pointer-events-none"></div>

        <UniversalSplide
          options={options}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
          extensions={{ AutoScroll }}>
          <SplideTrack>
            {data?.map((item) => (
              <SplideSlide aria-roledescription="none" key={item?.id}>
                <div className="flex items-center justify-center">
                  <Image
                    src={item?.logo_url}
                    height={104}
                    width={187}
                    alt="image"
                    className="object-contain w-auto h-20"
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </UniversalSplide>
      </div>
    </div>
  );
}

export default TrustedBy;
