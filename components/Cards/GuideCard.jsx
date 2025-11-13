import React from "react";
import Typography from "../ui/Typography";
import Image from "../Image/Image";
import { Icon } from "@iconify/react";

function GuideCard({ data }) {
  return (
    <div className="bg-white h-full border rounded-lg border-primary overflow-hidden flex flex-col">
      {/* Thumbnail Image */}
      <div className="w-full">
        <Image
          src={data?.thumbnail_image}
          alt={data?.title}
          width={400}
          height={400}
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex items-center gap-2 pb-1">
          <Icon icon="mdi:calendar-outline" className="text-sm" />
          <Typography weight="normal" size="sm" color="">
            {data?.date || "08-11-2021"}
          </Typography>
          {/* <Typography weight="normal" size="base" color="">
            {data?.category || "Business Setup"}
          </Typography> */}
        </div>
        <Typography weight="medium" size="lg" className="mb-6">
          {data?.title}
        </Typography>
        {data?.description && (
          <Typography weight="normal" size="sm" color="gray">
            {data?.description}
          </Typography>
        )}

        <div className="mt-auto flex items-center gap-2">
          <Image
            src="/assets/guide/client.png"
            alt={data?.title}
            width={33}
            height={33}
          />
          <div>
            <Typography weight="normal" size="sm">
              {data?.client}
            </Typography>
            <Typography weight="normal" size="xs">
              {data?.designation}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GuideCard;
