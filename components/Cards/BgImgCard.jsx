import Image from "next/image";
import React from "react";
import Typography from "../ui/Typography";

function BgImgCard({ data }) {
  return (
    <div className="">
      <div className="relative w-full h-[400px] bg-amber-200">
        <Image
          src={data?.image || "/assets/1.png"}
          alt="img"
          width={200}
          height={200}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 p-6 space-y-4">
          <Typography as="p" weight="medium" color="white" size="lg">
            {data?.title || "All-in-One Business Setup Partner"}
          </Typography>
          <Typography as="p" weight="normal" color="white" size="base">
            {data?.description ||
              `Skip the hassle of juggling multiple business consultants. From
            trade licensing to banking and visas, we do all the heavy lifting so
            you can focus on growing your business.`}
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default BgImgCard;
