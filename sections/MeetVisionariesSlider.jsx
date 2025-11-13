"use client";
import MeetVisionariesCard from "@/components/Cards/MeetVisionariesCard";
import Typography from "@/components/ui/Typography";
import React, { useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";

function MeetVisionariesSlider({ data }) {
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
    autoWidth: true,
  };
  return (
    <div className="bg-primaryLight secPadding">
      <div className="container space-y-6">
        <div className="space-y-3 max-w-[700px]">
          <Typography size="3xl" weight="bold">
            {data?.title}
          </Typography>
          <Typography size="base" weight="normal" as="p">
            {data?.description}
          </Typography>
        </div>
        {/*  */}
        <div className="hidden lg:grid lg:grid-cols-2 xl:grid-cols-4 gap-5">
          {data?.items?.map((item, i) => (
            <MeetVisionariesCard key={i} data={item} />
          ))}
        </div>
        <div className="block lg:hidden">
          <UniversalSplide
            ref={splideRef}
            hasTrack={false}
            options={options}
            onMoved={(splide, newIndex) => setActiveIndex(newIndex)}>
            <SplideTrack className="!px-0">
              {data?.items?.map((item, i) => (
                <SplideSlide key={i}>
                  <MeetVisionariesCard key={i} data={item} />
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
        {/*  */}
      </div>
    </div>
  );
}

export default MeetVisionariesSlider;
