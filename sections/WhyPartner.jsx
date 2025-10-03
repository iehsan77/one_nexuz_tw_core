import PartnerNexuzCard from "@/components/Cards/PartnerNexuzCard";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import React from "react";

function WhyPartner({ data, t }) {
  return (
    <div className="secPadding container space-y-6">
      <div className="flex justify-between gap-3 flex-col md:flex-row">
        <div className="space-y-3">
          <Typography size="3xl" weight="bold" as="p">
            {data?.title}
          </Typography>
          <Typography size="base" weight="normal" as="p">
            {data?.description}
          </Typography>
        </div>
        <LanguageAwareLink
          href="#"
          variant="rightIcon"
          className="!text-primary">
          {t.btn.setupConsultation}
        </LanguageAwareLink>
      </div>
      {/*  */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {data?.items?.map((item, i) => (
          <PartnerNexuzCard key={i} {...item} />
        ))}
      </div>
    </div>
  );
}

export default WhyPartner;
