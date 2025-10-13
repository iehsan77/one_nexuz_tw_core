import Image from "@/components/Image/Image";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import React from "react";

function LeftCard2({ data, btn, locale }) {
  return (
    <div className="bg-grayLight p-4 flex flex-col h-full">
      <div className="space-y-2 flex-1">
        {data?.title && (
          <Typography as="p" weight="bold">
            {data?.title}
          </Typography>
        )}
        {data?.description && (
          <Typography as="p" size="sm" weight="normal" color="gray">
            {data?.description}
          </Typography>
        )}
      </div>

      {btn && (
        <LanguageAwareLink
          href={data?.url || "#"}
          className="flex items-center gap-2 mt-4">
          <Typography as="p" size="sm" weight="medium" color="gray">
            {btn}
          </Typography>
          <Image
            src={locale ? "/icons/right1_ar.svg" : "/icons/right1_en.svg"}
            alt="icon"
            width={20}
            height={20}
            className="w-auto h-auto object-contain"
          />
        </LanguageAwareLink>
      )}
    </div>
  );
}

export default LeftCard2;
