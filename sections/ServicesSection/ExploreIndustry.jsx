import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import React from "react";

function ExploreIndustry({ data, locale }) {
  return (
    <div className="bg-[#F8F8F8] p-5 rounded-lg space-y-3">
      <Typography weight="bold" size="xl" color="primary">
        {data?.title}
      </Typography>
      <div className="space-y-2">
        {data?.items?.map((item) => (
          <div key={item?.id} className="py-1">
            <LanguageAwareLink
              href={item?.url}
              className={`${
                locale ? "pr-2" : "pl-2"
              } text-sm text-gray font-semibold flex items-center gap-2 w-fit`}
            >
              <div className="p-[2px] bg-gray rounded-full"></div>
              {item?.title}
            </LanguageAwareLink>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExploreIndustry;
