import React from "react";
import Image from "./Image/Image";
import Typography from "./ui/Typography";

function AboutGridSec({ data }) {
  return (
    <div className="secPadding container grid lg:grid-cols-2 gap-5 xl:gap-8 items-center">
      <div className="space-y-4">
        <Typography size="3xl" weight="bold" color="gray">
          {data?.title}
        </Typography>
        {data?.description?.map((item, index) => (
          <Typography size="base" weight="normal" as="p" key={index}>
            {item}
          </Typography>
        ))}
      </div>
      <div className="">
        <Image src={data?.image} alt={data?.title} width={640} height={383} />
      </div>
    </div>
  );
}

export default AboutGridSec;
