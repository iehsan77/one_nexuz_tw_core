import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function OurValues({ data }) {
  return (
    <div className="secPadding bg-primaryLight">
      <div className="container">
        <div className="bg-white p-5 rounded-xl shadow-[0_0_20px_rgba(0,0,0,0.20)] space-y-4">
          <Typography size="2xl" weight="bold">
            {data?.title}
          </Typography>
          <Typography size="base">{data?.description}</Typography>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {data?.items.map((item, i) => (
              <div
                key={i}
                className="bg-primaryLight rounded-lg p-4 lg:p-6 basis-[45%] md:basis-[22.6%] lg:basis-[18%] flex flex-col gap-4 items-center border-r-2 border-b-2 border-gray-200 shadow-md"
              >
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={50}
                  height={50}
                />
                <Typography size="base" align="center" as="p" weight="bold">
                  {item?.title}
                </Typography>
                <Typography size="sm" align="center" as="p" weight="bold">
                  {item?.description}
                </Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurValues;
