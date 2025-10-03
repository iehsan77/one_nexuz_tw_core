"use client";
import React from "react";
import Image from "./Image/Image";
import Typography from "./ui/Typography";
import LanguageAwareLink from "./LanguageAwareLink/LanguageAwareLink";

function GridSec({ data }) {
  return (
    <div className="secPadding container grid lg:grid-cols-2 gap-5 xl:gap-8 items-center">
      <div className="">
        <Image
          src={data?.image}
          alt="image"
          width={400}
          height={400}
          className="w-auto h-auto object-cover"
        />
      </div>
      <div className="space-y-3">
        <Typography size="3xl" weight="bold" color="gray">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
        <LanguageAwareLink
          href={data?.url || "#"}
          variant="rightIcon"
          className="!text-primary">
          {data?.btn}
        </LanguageAwareLink>
      </div>
    </div>
  );
}

export default GridSec;
