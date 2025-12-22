"use client";
import React from "react";
import Typography from "../ui/Typography";

function ShortHeader({ data }) {
  return (
    <header
      className="pb-12 lg:pb-14 pt-[3rem] lg:pt-[9rem] relative w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
      style={{ backgroundImage: `url(${data?.image})` }}
    >
      <div className="absolute inset-0 bg-black/20 z-0" />
      <div className="container w-full relative z-10 flex items-center">
        <div className="flex flex-col justify-center h-full gap-6 max-w-[550px]">
          <Typography as="h1" size="4xl" weight="semibold" color="white">
            {data?.title}
          </Typography>
          {data?.subTitle && (
            <Typography as="p" size="xl" color="white" weight="bold">
              {data?.subTitle}
            </Typography>
          )}
          {data?.description && (
            <Typography as="p" size="base" color="white" className="">
              {data?.description}
            </Typography>
          )}
        </div>
      </div>
    </header>
  );
}

export default ShortHeader;
