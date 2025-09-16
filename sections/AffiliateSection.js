"use client";
import React from "react";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import Image from "@/components/Image/Image";
import Heading4 from "@/components/Typography/Heading4";

const AffiliateSection = ({ heading}) => {
  const telecomCompanies = [
    { alt: "Facebook", src: "/assets/icons/frame39251.svg" },
    { alt: "Facebook", src: "/assets/icons/frame39252.svg" },
    { alt: "Facebook", src: "/assets/icons/frame39253.svg" },
    { alt: "Facebook", src: "/assets/icons/frame39254.svg" },

  ];

  const options = {
    type: "loop",
    rewind: true,
    perPage: 1.5,
    padding: "0.8rem",
    perMove: 1,
    pagination: true,
    gap: "15px",
    arrows: false,
    autoplay: true,
    autoScroll: {
      speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
      360: { perPage: 2 },
      640: { perPage: 3 },
      768: { perPage: 4 },
    },
  };
  return (
    <section className=" py-4 md:py-6 lg:py-8">
      <div className="container">
        <div className="max-w-4xl w-full mx-auto">
          <Heading4 heading={heading} className={`text-center`} />
        </div>
        <div className="max-w-4xl w-full mx-auto">
          <SplideSlider data={telecomCompanies} options={options}>
             <Image width={176} height={100} alt="" className="" />
          </SplideSlider>
        </div>
      </div>
    </section>
  );
};

export default AffiliateSection;
