import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import React from "react";

function TrustUs({ data }) {
  return (
    <div className="secPadding container space-y-6">
      <Typography color="black" size="2xl" weight="bold">
        {data.title}
      </Typography>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {data?.items?.map((item, i) => (
          <div
            key={i}
            className="py-8 px-6 space-y-4 border border-gray-200 bg-[#FFFBFB] relative overflow-hidden"
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
            <Typography color="black" size="lg" weight="bold">
              {item.title}
            </Typography>
            <Typography size="sm">{item.description}</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TrustUs;
