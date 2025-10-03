import { FaqAccordian } from "@/components/FaqAccordian/FaqAccordian";
import Typography from "@/components/ui/Typography";
import React from "react";

function FaqsSection({ data }) {
  return (
    <div className="secPadding container space-y-6">
      <Typography
        size="3xl"
        weight="bold"
        align="center"
        className="max-w-[600px] mx-auto">
        {data.title}
      </Typography>
      <FaqAccordian data={data?.items} />
    </div>
  );
}

export default FaqsSection;
