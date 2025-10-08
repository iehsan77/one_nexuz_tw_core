"use client";
import BlogGridCard from "@/components/Cards/BlogGridCard";
import React, { useContext, useRef, useState } from "react";
import { SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Typography from "@/components/ui/Typography";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import BlogListCard from "@/components/Cards/BlogListCard";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function BlogSec() {
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
            {t.blog.title}
          </Typography>
          <Typography size="base" weight="normal" as="p">
            {t.blog?.description}
          </Typography>
        </div>
        <LanguageAwareLink
          href="#"
          variant="rightIcon"
          className="!text-primary">
          {t.btn.readMoreBlogs}
        </LanguageAwareLink>
      </div>
      {/*  */}
      <div className="hidden lg:grid grid-cols-3 gap-5">
        <>
          {t.blog?.items?.slice(0, 2)?.map((item) => (
            <BlogGridCard key={item?.id} data={item} ar={t} />
          ))}
        </>
        <div>
          {t.blog?.items?.slice(2, 5)?.map((item) => (
            <BlogListCard key={item?.id} data={item} ar={t} />
          ))}
        </div>
      </div>
      {/*  */}
      <div className="block lg:hidden">
        <UniversalSplide
          ref={splideRef}
          hasTrack={false}
          options={options}
          onMoved={(splide, newIndex) => setActiveIndex(newIndex)}>
          <SplideTrack className="!px-0">
            {t.blog?.items?.map((item) => (
              <SplideSlide key={item?.id}>
                <BlogGridCard key={item?.id} data={item} ar={t} />
              </SplideSlide>
            ))}
          </SplideTrack>
          <div className="mt-6 flex items-center justify-center gap-2 w-full">
            {t.blog?.items?.map((_, idx) => (
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

export default BlogSec;
