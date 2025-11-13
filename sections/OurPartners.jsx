"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React, { useState } from "react";

function OurPartners({ data }) {
  const [activeTab, setActiveTab] = useState(1);
  const activeData = data?.items?.find((d) => d.id === activeTab);

  return (
    <div className="secPadding container space-y-6">
      <Typography size="2xl" align="center" weight="bold">
        {data?.title}
      </Typography>

      {/* Tabs */}
      <div className="bg-primaryLight grid grid-cols-2 lg:flex items-center justify-between gap-3 sm:p-2">
        {data?.items?.map((item) => (
          <Typography
            key={item?.id}
            align="left"
            size="sm"
            weight="medium"
            onClick={() => setActiveTab(item?.id)}
            className={`${
              activeTab === item?.id
                ? "bg-primary text-white"
                : "text-gray bg-transparent"
            } py-2 px-4 cursor-pointer `}>
            {item?.title}
          </Typography>
        ))}
      </div>

      {/* Active Tab Images with horizontal scroll */}
      <div className="flex items-center lg:justify-center gap-6 mt-8 pb-2 overflow-x-auto scrollbar-hide">
        {activeData?.data?.map((img, idx) => (
          <div
            key={idx}
            className="flex-shrink-0 flex items-center justify-center h-10 w-40">
            <Image
              src={img.image}
              alt={`partner-${idx}`}
              width={180}
              height={100}
              className="object-contain w-full h-full"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default OurPartners;
