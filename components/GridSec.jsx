"use client";
import React from "react";
import Image from "./Image/Image";
import Typography from "./ui/Typography";
import ModalBtn from "@/sections/ModalBtn";

function GridSec({ data }) {
  return (
    <div className="secPadding container grid lg:grid-cols-2 gap-5 xl:gap-8 items-center">
      <div className="">
        <Image
          src={data?.image}
          alt={data?.title}
          width={640}
          height={383}
          // className="w-auto h-auto object-cover"
        />
      </div>
      <div className="space-y-3 lg:order-last order-first">
        <Typography size="3xl" weight="bold" color="gray">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
        <ModalBtn text={data?.btn} className="!text-primary" />
      </div>
    </div>
  );
}

export default GridSec;
