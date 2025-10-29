import Table from "@/components/Table";
import Typography from "@/components/ui/Typography";
import { tableDataAr, tableDataEn } from "@/mock/data";
import React from "react";

function SecondCitizenship({ locale }) {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Typography size="3xl" weight="bold" as="p">
          {locale
            ? "استكشف برامج الجنسية الثانية الشاملة عن طريق الاستثمار"
            : "Explore Our Holistic Second Citizenship by Investment Programs"}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {locale
            ? "احمِ ثروتك وامنح زوجتك وأطفالك مستقبلًا آمنًا من خلال تنويع أصولك في العديد من البلدان:"
            : `Protect your wealth and safeguard your spouse and children’s future by
          diversifying your assets in countless countries:`}
        </Typography>
      </div>
      <Table data={locale ? tableDataAr : tableDataEn} />
    </div>
  );
}

export default SecondCitizenship;
