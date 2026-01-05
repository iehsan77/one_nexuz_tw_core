"use client";
import React from "react";
import Typography from "@/components/ui/Typography";
import "@splidejs/react-splide/css";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import Image from "@/components/Image/Image";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";

function LogoSliders({ data, locale }) {
  const options = {
    type: "loop",
    perPage: 2,
    interval: 0,
    direction: locale === "ar" ? "rtl" : "ltr",
    gap: "1rem",
    pagination: false,
    arrows: false,
    autoScroll: {
      speed: 1.5,
    },
    drag: false,
    mediaQuery: "min",
    breakpoints: {
      420: { perPage: 2 },
      640: { perPage: 4 },
    },
  };

  return (
    <div className="secPadding space-y-6">
      <div className="space-y-3">
        <Typography size="3xl" weight="bold" as="p">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
      </div>
      {/*  */}
      <div>
        <UniversalSplide
          options={options}
          aria-labelledby="autoplay-example-heading"
          hasTrack={false}
          extensions={{ AutoScroll }}
        >
          <SplideTrack>
            {data?.items?.map((item) => (
              <SplideSlide aria-roledescription="none" key={item?.id}>
                <div className="flex items-center justify-center">
                  <Image
                    src={item?.logo_url}
                    height={50}
                    width={50}
                    alt="image"
                    className="object-contain w-32 h-10"
                  />
                </div>
              </SplideSlide>
            ))}
          </SplideTrack>
        </UniversalSplide>
      </div>
      {/*  */}
    </div>
  );
}

export default LogoSliders;
