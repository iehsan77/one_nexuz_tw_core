"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import React, { useState } from "react";

function LeftSection1({ data, locale }) {
  const [activeTab, setActiveTab] = useState(data?.items?.[0]);

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
      {/* */}
      <div className="md:border border-[#CCCCCC] md:rounded-3xl grid md:grid-cols-2 gap-4 overflow-hidden">
        {/* 1 */}
        <div
          className={`${
            locale ? "md:ml-10 md:border-l" : "md:mr-10 md:border-r"
          } md:bg md:px-8 md:py-18 bg-transparent md:bg-primaryLight border-[#CCCCCC]`}>
          <div className="space-y-4 md:space-y-6">
            {data?.items?.map((item) => (
              <div key={item?.id} className="w-full">
                <button
                  onClick={() => setActiveTab(item)}
                  className={`${
                    activeTab?.id === item?.id
                      ? `${
                          locale ? "pr-5 pl-3" : "pl-5 pr-3"
                        } text-white bg-primary border-primary relative md:w-[320px] lg:w-[280px] xl:w-[365px]`
                      : "text-gray border-[#CCCCCC] px-4 bg-[#F4E8EC] "
                  } cursor-pointer font-medium text-sm sm:text-base py-2 rounded-lg border !text-start flex items-center justify-center gap-5`}>
                  {item?.title}
                  {activeTab?.id === item?.id && (
                    <div className="!h-full p-4 bg-secondary text-white flex items-center rounded-lg justify-center">
                      <Icon icon="ep:top-right" width="20" height="20" />
                    </div>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>
        {/* 1 */}
        {/* 2 */}
        <div
          className={`${
            locale ? "md:pl-5" : "md:pr-5"
          } py-6 rounded-xl border border-[#CCCCCC] md:border-0 md:py-10 px-5 md:px-0 space-y-8 md:bg-transparent`}>
          <div className="flex items-center justify-center">
            <Image
              src={activeTab?.image}
              alt={activeTab?.title}
              width={384}
              height={351}
            />
          </div>
          <div className="border-t border-gray pt-4 md:py-6 space-y-3">
            <Typography weight="bold">{activeTab?.subTitle}</Typography>
            <Typography>{activeTab?.description}</Typography>
          </div>
        </div>
        {/* 2 */}
      </div>
      {/* */}
    </div>
  );
}

export default LeftSection1;
