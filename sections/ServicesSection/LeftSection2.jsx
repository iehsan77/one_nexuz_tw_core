import LeftCard1 from "@/components/Cards/ServicesCard/LeftCard1";
import Typography from "@/components/ui/Typography";
import React from "react";

function LeftSection2({ data, locale }) {
  return (
    <div className="secPadding space-y-6">
      <div className="space-y-3">
        {data?.title && (
          <Typography size="3xl" weight="bold" as="p">
            {data?.title}
          </Typography>
        )}
        {data?.description && (
          <Typography size="base" weight="normal" as="p">
            {data?.description}
          </Typography>
        )}
      </div>
      <div className="grid sm:grid-cols-2 gap-6">
        {data?.items?.map((item) => (
          <LeftCard1 key={item?.id} data={item} locale={locale} />
        ))}
      </div>
    </div>
  );
}

export default LeftSection2;
