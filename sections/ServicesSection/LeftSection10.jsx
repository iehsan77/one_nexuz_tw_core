import Image from "@/components/Image/Image";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import React from "react";

function LeftSection10({ data, locale }) {
  return (
    <div className="secPadding bg-primaryLight overflow-hidden">
      <div className="container space-y-6 relative">
        {/*  */}
        <div className="absolute bottom-0 right-0">
          <Image
            src="/assets/backGrounds/leftSec10Bg.svg"
            alt="bg image"
            width={952}
            height={376}
          />
        </div>
        {/*  */}
        <Typography size="3xl" weight="bold" as="p">
          {data?.title}
        </Typography>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 relative z-15">
          {data?.items?.map((item) => (
            <div
              key={item?.id}
              className="bg-white py-6 sm:min-h-[230px] px-5 rounded-lg shadow-lg flex flex-col gap-6"
            >
              <div className="space-y-4 ">
                <Typography as="p" weight="medium" size="lg">
                  {item?.title}
                </Typography>
                <Typography
                  as="p"
                  weight="normal"
                  size="base"
                  className="!text-gray-500"
                >
                  {item?.description}
                </Typography>
              </div>
              {/* Link always at bottom */}
              <LanguageAwareLink
                href={item?.url}
                variant=""
                className="!text-sm w-fit !text-gray flex items-center gap-1 font-medium mt-auto"
              >
                {data?.btn}
                <Icon
                  icon={locale ? "uil:angle-left" : "uil:angle-right"}
                  width="26"
                  height="26"
                />
              </LanguageAwareLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LeftSection10;
