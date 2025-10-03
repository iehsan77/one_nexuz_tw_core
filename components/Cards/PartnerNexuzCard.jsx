import React from "react";
import Typography from "../ui/Typography";

function PartnerNexuzCard({ title, description }) {
  return (
    <div className="bg-secondaryLight sm:bg-white px-5 py-5 sm:py-1 space-y-3">
      <Typography size="lg" as="p" weight="bold">
        {title}
      </Typography>
      <Typography size="base" as="p" weight="normal" color="black">
        {description}
      </Typography>
    </div>
  );
}

export default PartnerNexuzCard;
