"use client";
import BgImgCard from "@/components/Cards/BgImgCard";
import Typography from "@/components/ui/Typography";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import React, { useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function BgImageSec({ data }) {
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
      <div className="space-y-3 max-w-[950px]">
        <Typography size="3xl" weight="bold" as="p">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
      </div>
      {/*  */}
      <div className="hidden lg:grid grid-cols-3 gap-4">
        {data?.items?.map((item, i) => (
          <BgImgCard key={i} data={item} />
        ))}
      </div>
      {/*  */}
      <div className="block lg:hidden">
        <UniversalSplide
          ref={splideRef}
          hasTrack={false}
          options={options}
          onMoved={(splide, newIndex) => setActiveIndex(newIndex)}>
          <SplideTrack className="!px-0">
            {data?.items?.map((item, i) => (
              <SplideSlide key={i}>
                <BgImgCard key={i} data={item} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="mt-6 flex items-center justify-center gap-2 w-full">
            {data?.items?.map((_, idx) => (
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
    </div>
  );
}

export default BgImageSec;
