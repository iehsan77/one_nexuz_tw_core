"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function IconTitleSec({ data }) {
  return (
    <div className="secPadding space-y-6">
      <div className="space-y-3">
        <Typography size="3xl" weight="bold" as="p">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
      </div>
      {/*  */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {data?.items?.map((item) => (
          <div key={item?.id} className="flex items-center gap-3">
            <Image src={item?.icon} alt={item?.title} width={30} height={30} />
            <Typography size="base" weight="bold" as="p">
              {item?.title}
            </Typography>
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  );
}

export default IconTitleSec;
