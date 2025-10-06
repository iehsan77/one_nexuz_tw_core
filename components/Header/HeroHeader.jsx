"use client";
import React from "react";
import Typography from "../ui/Typography";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import ModalBtn from "@/sections/ModalBtn";

function HeroHeader({ data }) {
  return (
    <header
      className="pb-12 pt-[10rem] sm:pt-0 sm:pb-0 relative sm:h-[80dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
      style={{ backgroundImage: `url(${data?.image})` }}>
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="container relative z-10 !h-full">
        <div className="flex flex-col justify-center h-full gap-6 max-w-[650px]">
          {data?.title && (
            <Typography as="h1" size="4xl" weight="semibold" color="white">
              {data?.title}
            </Typography>
          )}
          {data?.description && (
            <Typography as="p" size="lg" color="white" className="">
              {data?.description}
            </Typography>
          )}
          <div className="flex items-center gap-6 flex-wrap">
            <ModalBtn text={data?.bookConsultation} />
            <ModalBtn text={data?.getQuoteToday} />
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
