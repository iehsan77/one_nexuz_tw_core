import LeftCard2 from "@/components/Cards/ServicesCard/LeftCard2";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function LeftSection3({ data, locale }) {
  return (
    <div className="relative bg-secondary overflow-hidden">
      {/*  */}
      <div className="absolute bottom-0 left-0">
        <Image
          src="/assets/backGrounds/leftSec3Bg.svg"
          alt="bg image"
          width={909}
          height={180}
        />
      </div>
      {/*  */}
      <div className="px-6 py-8 relative z-15 space-y-6">
        <div className="space-y-3 ">
          {data?.title && (
            <Typography size="3xl" weight="bold" as="p" color="white">
              {data?.title}
            </Typography>
          )}
          {data?.description && (
            <Typography size="base" weight="normal" as="p" color="white">
              {data?.description}
            </Typography>
          )}
        </div>
        <div
          className={`grid gap-6 ${
            data?.items?.length > 2
              ? "sm:grid-cols-2 md:grid-cols-3"
              : "sm:grid-cols-2"
          }`}>
          {data?.items?.map((item) => (
            <LeftCard2
              key={item?.id}
              data={item}
              btn={data?.btn}
              locale={locale}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSection3;
