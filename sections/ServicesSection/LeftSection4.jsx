import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";
import ModalBtn from "../ModalBtn";

function LeftSection4({ data, locale }) {
  return (
    <div className="secPadding">
      <div className="relative overflow-hidden flex items-center h-[400px] sm:h-[490px]">
        <Image
          src={data?.sec1?.image || "/assets/businessSetup/left4/1.webp"}
          alt="image"
          width={909}
          height={539}
          className="w-full h-full object-cover"
        />
        <div
          className={`${
            locale ? "left-0" : "right-0"
          } absolute z-5 top-0 opacity-30`}
        >
          <Image
            src={
              locale
                ? "/assets/backGrounds/leftSec4Bg_ar.svg"
                : "/assets/backGrounds/leftSec4Bg_en.svg"
            }
            alt="img"
            width={909}
            height={539}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/30 z-0" />
        <div className="absolute p-5 z-15 sm:p-8 space-y-4 max-w-[550px]">
          <Typography as="p" color="white" size="2xl" weight="bold">
            {data?.sec1?.title}
          </Typography>
          <div className="p-[1px] bg-primary max-w-[200px]"></div>
          <Typography as="p" color="white" size="base" weight="normal">
            {data?.sec1?.description}
          </Typography>
          <ModalBtn text={data?.sec1?.btn} className={"!text-sm"} />
        </div>
      </div>
      {/*  */}
      {data?.sec2?.title && (
        <div className="p-6 bg-primary grid md:grid-cols-3 gap-10 items-center">
          <div className="col-span-3 md:col-span-2 space-y-4">
            {data?.sec2?.title && (
              <Typography as="p" color="white" size="lg" weight="bold">
                {data?.sec2?.title}
              </Typography>
            )}
            {data?.sec2?.description && (
              <Typography as="p" color="white" size="base" weight="normal">
                {data?.sec2?.description}
              </Typography>
            )}
            <ModalBtn text={data?.sec2?.btn} className={"!text-sm"} />
          </div>
          <div className="col-span-3 md:col-span-1">
            <Image
              src={data?.sec2?.image || "/assets/businessSetup/left4/2.webp"}
              alt="img"
              width={510}
              height={346}
              className="w-auto h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default LeftSection4;
