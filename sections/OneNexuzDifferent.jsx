import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function OneNexuzDifferent({ data }) {
  return (
    <div className="relative bg-primaryLight secPadding">
      <div className="absolute bottom-0 right-0">
        <Image
          src="/assets/backGrounds/homeNexuzDifferentBg.svg"
          alt="bg image"
          width={856}
          height={161}
          className="object-cover w-auto h-auto"
        />
      </div>
      <div className="relative z-15 p-5 space-y-6 rounded-xl container bg-white shadow-[0_0_20px_rgba(0,0,0,0.20)]">
        <div className="space-y-3">
          <Typography size="3xl" weight="bold">
            {data?.title}
          </Typography>
          <Typography size="base" weight="normal" as="p">
            {data?.description}
          </Typography>
        </div>
        {/*  */}
        <div className="flex flex-wrap justify-center gap-5">
          {data?.items?.map((item, i) => (
            <div
              key={i}
              className="bg-primaryLight rounded-lg p-4 lg:p-6 basis-[45%] md:basis-[22.6%] lg:basis-[18%] flex flex-col gap-4 items-center border-r-2 border-b-2 border-gray-200 shadow-md">
              <Image
                src={item?.image}
                alt={item?.title}
                width={60}
                height={60}
              />
              <Typography size="base" align="center" as="p" weight="bold">
                {item?.title}
              </Typography>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default OneNexuzDifferent;
