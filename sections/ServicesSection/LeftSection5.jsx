import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function LeftSection5({ data, locale }) {
  return (
    <div className="bg-primaryLight relative overflow-hidden">
      {/*  */}
      <div
        className={`${
          locale ? "left-0" : "right-0"
        } absolute z-5 top-0 opacity-10`}>
        <Image
          src={
            locale
              ? "/assets/backGrounds/leftSec5Bg_ar.svg"
              : "/assets/backGrounds/leftSec5Bg_en.svg"
          }
          alt="img"
          width={909}
          height={539}
          className="w-full h-full object-cover"
        />
      </div>
      {/*  */}
      <div className="space-y-6 px-5 py-8">
        <Typography size="3xl" weight="bold" as="p" className="max-w-[600px]">
          {data?.title}
        </Typography>
        {/*  */}
        <div className="grid sm:grid-cols-2 gap-8 items-center">
          {data?.items?.map((item) => (
            <div key={item?.id} className="space-y-4 h-full">
              <div className="flex items-center gap-4 border-b border-primary pb-3">
                <Image
                  src={item?.image}
                  alt={item?.title}
                  width={36}
                  height={45}
                  className="h-9 w-auto object-contain"
                />
                <Typography as="p" weight="bold">
                  {item?.title}
                </Typography>
              </div>
              {/*  */}
              <Typography size="sm" color="gray">
                {item?.description}
              </Typography>
            </div>
          ))}
        </div>
        {/*  */}
      </div>
    </div>
  );
}

export default LeftSection5;
