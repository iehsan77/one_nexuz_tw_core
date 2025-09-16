"use client";
import React, { useContext } from "react";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import Heading3 from "@/components/Typography/Heading3";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import { SplideSlide } from "@splidejs/react-splide";

const data = [
  {
    video: "/assets/videos/video_1.mp4",
    thumbnail: "/assets/images/image_45.webp",
  },
  {
    video: "/assets/videos/video_2.mov",
    thumbnail: "/assets/images/image_44.webp",
  },
  {
    video: "/assets/videos/video_2.mov",
    thumbnail: "/assets/images/image_43.webp",
  },
];

function TestimonialsVideoSection({
  heading,
  topTitle,
  bottomTitle,
  paragraph,
}) {
  const { locale } = useContext(LanguageContext);

  const textEn = {
    title: "What Our Customers Say",
  };

  const textAr = {
    title: "ماذا يقول عملاؤنا",
  };

  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: "1rem",
    arrows: false,
    autoplay: false,
    drag: true,
    autoScroll: {
      speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
    },
  };

  const content = locale === "ar" ? textAr : textEn;

  return (
    <div className="secPadding">
      <div className="container hidden lg:block">
        <div className="lg:mb-8 mb-6">
          {topTitle && <Heading3 blackHeading={topTitle} className="" />}
          <Heading2 blackHeading={content.title} className="" />
          {bottomTitle && <Heading3 blackHeading={bottomTitle} className="" />}
          {paragraph?.map((para, ind) => (
            <Paragraph className="" blackText1={para} key={ind} />
          ))}
        </div>
        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 rounded-md">
          {data?.map((item, i) => (
            <VideoData key={i} data={item} />
          ))}
        </div>
      </div>
      {/* slider */}
      <div className="container lg:hidden block">
        <UniversalSplide options={options} aria-labelledby="carousel-heading">
          {data?.map((item, index) => (
            <SplideSlide key={index}>
              <VideoData data={item} />
            </SplideSlide>
          ))}
        </UniversalSplide>
      </div>
    </div>
  );
}

const VideoData = ({ data }) => {
  return (
    <>
      <div className="h-[600px] w-full max-w-[520px]">
        <video
          className="w-full h-full object-cover"
          controls
          preload="none"
          poster={data.thumbnail}>
          <source src={data.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </>
  );
};

export default TestimonialsVideoSection;
