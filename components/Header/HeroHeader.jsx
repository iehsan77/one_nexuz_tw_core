"use client";
import React from "react";
import Typography from "../ui/Typography";
import ModalBtn from "@/sections/ModalBtn";

function HeroHeader({ data, btn }) {
  return (
    <header
      className="pb-12 p-[10rem] relative sm:min-h-[80dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
      style={{ backgroundImage: `url(${data?.image})` }}>
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="container relative z-10 sm:min-h-[50dvh] flex items-center">
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
            {!btn && <ModalBtn text={data?.getQuoteToday} />}
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroHeader;
