import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function MissionVision({ data }) {
  return (
    <div className="secPadding container">
      <div className="grid sm:grid-cols-2 gap-6">
        {data?.map((item, i) => (
          <div
            key={i}
            className="border border-gray-200 p-5 lg:p-6 rounded-lg space-y-4"
          >
            <div>
              <Image src={item?.image} alt="image" height={50} width={50} />
            </div>
            <Typography size="2xl" weight="bold" color="black">
              {item?.title}
            </Typography>
            <Typography size="base" color="black">
              "{item?.description}"
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MissionVision;
