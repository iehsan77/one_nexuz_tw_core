import React from "react";
import Image from "../Image/Image";
import Typography from "../ui/Typography";
import Link from "next/link";
import { Icon } from "@iconify/react";

function MeetVisionariesCard({ data }) {
  return (
    <div className="rounded-xl border border-gray-200 w-full h-full overflow-hidden flex flex-col">
      {/* Top Image */}
      <div className="h-[300px]">
        <Image
          src={data?.image}
          alt={data?.title}
          width={256}
          height={234}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="bg-white p-5 flex flex-col flex-1 justify-between">
        <div className="flex flex-col items-center gap-2">
          <Typography size="lg" weight="bold" align="center">
            {data?.title}
          </Typography>
          <Typography size="base" weight="normal" align="center">
            {data?.description}
          </Typography>
        </div>

        {/* Icons at Bottom */}
        <div className="flex items-center justify-center gap-4 text-gray mt-4">
          {data?.links?.map((dta, i) => (
            <Link key={i} href={dta?.link}>
              <Icon icon={dta?.icon} width="24" height="22" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MeetVisionariesCard;
