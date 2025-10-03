import Image from "@/components/Image/Image";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import React from "react";

function LeftCard1({ data, locale }) {
  return (
    <div className="bg-secondaryLight p-4 space-y-3">
      <div className="flex items-center gap-3 justify-between">
        <Typography as="p" weight="bold">
          {data?.title}
        </Typography>
        <LanguageAwareLink href={data?.url || "#"}>
          <Image
            src={locale ? "/icons/right1_ar.svg" : "/icons/right1_en.svg"}
            alt="icon"
            width={20}
            height={20}
            className="w-auto h-auto object-contain"
          />
        </LanguageAwareLink>
      </div>
      <Typography as="p" size="sm" weight="normal" color="gray">
        {data?.description}
      </Typography>
    </div>
  );
}

export default LeftCard1;
