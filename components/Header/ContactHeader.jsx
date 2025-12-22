"use client";
import React from "react";
import Typography from "../ui/Typography";
import CommonForm from "@/sections/Forms/CommonForm";

function ContactHeader({ data }) {
  return (
    <div>
      <header
        className="pb-12 pt-[7rem] lg:pt-[10rem] relative sm:min-h-[80dvh] w-full bg-cover bg-center bg-no-repeat lg:mt-[3.5rem]"
        style={{ backgroundImage: `url(${data?.image})` }}
      >
        <div className="absolute inset-0 bg-black/20 z-0" />
        <div className="container w-full relative z-10 sm:min-h-[50dvh] flex items-center">
          <div className="grid lg:grid-cols-2 gap-6">
            <div className="flex flex-col justify-center gap-6">
              <Typography as="h1" size="4xl" weight="semibold" color="white">
                {data?.title}
              </Typography>
              <Typography as="h2" size="4xl" weight="semibold" color="white">
                {data?.subTitle}
              </Typography>
              {data?.description?.map((item, index) => (
                <Typography
                  key={index}
                  as="p"
                  size="lg"
                  color="white"
                  className=""
                >
                  {item}
                </Typography>
              ))}
            </div>
            {/*  */}
            <CommonForm condition={true} />
          </div>
        </div>
      </header>
    </div>
  );
}

export default ContactHeader;
