import Typography from "@/components/ui/Typography";
import Image from "next/image";
import React from "react";

function UaeBusinessJourney({ data }) {
  return (
    <div className="secPadding container space-y-6">
      <Typography size="3xl" weight="bold" className="max-w-[500px]">
        {data?.title}
      </Typography>
      <div className="grid xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {/*  */}
        {data?.items?.map((item, i) => (
          <div
            key={i}
            className="relative overflow-hidden p-4 shadow-md rounded-xl">
            <div className="absolute top-1 right-0">
              <Image
                src="/assets/backGrounds/uaeBusinessJourneyCardBg.svg"
                alt={"bg image"}
                width={50}
                height={50}
                className="w-auto h-auto object-cover"
              />
            </div>
            <div className="relative z-15 flex items-center justify-center flex-col gap-4">
              <Image
                src={item?.image}
                alt={item?.title}
                width={50}
                height={50}
                className="w-auto h-auto object-cover"
              />
              <Typography size="xl" weight="bold" align="center">
                {item?.title}
              </Typography>
              <Typography size="sm" weight="normal" align="center" color="gray">
                {item?.description}
              </Typography>
            </div>
          </div>
        ))}
        {/*  */}
      </div>
    </div>
  );
}

export default UaeBusinessJourney;
