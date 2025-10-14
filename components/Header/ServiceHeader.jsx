"use client";
import React from "react";
import Typography from "../ui/Typography";
import ModalBtn from "@/sections/ModalBtn";

function ServiceHeader({ title }) {
  return (
    <header
      className="pb-12 pt-[7rem] lg:pt-[10rem] relative sm:min-h-[70dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
      style={{ backgroundImage: `url(/assets/header/services.webp)` }}>
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="container w-full relative z-10 sm:min-h-[50dvh] flex items-center">
        <div className="flex flex-col justify-center h-full gap-6 max-w-[650px]">
          <Typography as="h1" size="4xl" weight="semibold" color="white">
            {title}
          </Typography>
        </div>
      </div>
    </header>
  );
}

export default ServiceHeader;
