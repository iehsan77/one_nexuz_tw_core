import Typography from "@/components/ui/Typography";
import React from "react";

function ThemSelves({ data }) {
  return (
    <div className="py-6 bg-primaryLight">
      <div className="container space-y-6">
        <Typography size="2xl" align="center" weight="bold" as="p">
          {data?.title}
        </Typography>

        <div className="flex flex-wrap justify-center gap-5">
          {data?.items?.map((item, i) => (
            <div
              key={i}
              className="basis-[45%] md:basis-[22.6%] lg:basis-[18%] flex flex-col gap-2 items-center">
              <Typography
                size="4xl"
                color="primary"
                align="center"
                as="p"
                weight="extrabold">
                {item?.title}
              </Typography>
              <Typography size="lg" align="center" weight="bold" as="p">
                {item?.description}
              </Typography>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ThemSelves;
