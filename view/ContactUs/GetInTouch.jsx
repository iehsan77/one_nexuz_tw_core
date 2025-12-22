import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function GetInTouch({ data }) {
  return (
    <div className="secPadding container space-y-8">
      <div className="flex items-center justify-center gap-4 flex-col max-w-[650px] mx-auto">
        <Typography align="center" size="3xl" weight="bold">
          {data.title}
        </Typography>
        <Typography align="center" size="lg">
          {data.description}
        </Typography>
      </div>
      {/*  */}
      <div className="grid sm:grid-cols-3 gap-5">
        {data?.items?.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-center flex-col gap-4 py-8 px-6 border border-gray-200 bg-[#FFFBFB] relative overflow-hidden"
          >
            {/*  */}
            <div className="absolute top-0 right-0">
              <Image
                src="/assets/backGrounds/trustUsBg.svg"
                alt=""
                width={96}
                height={240}
                className=""
              />
            </div>
            {/*  */}
            <div>
              <Image src={item.image} alt={item.title} width={50} height={50} />
            </div>
            <Typography align="center" size="xl" weight="bold">
              {item.title}
            </Typography>
            <Typography align="center" size="base">
              {item.description}
            </Typography>
            <Typography align="center" size="base">
              {item.info}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GetInTouch;
