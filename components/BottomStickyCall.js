"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { contactDetail } from "@/mockData/dummyData";
import React, { useContext } from "react";

const BottomStickyCall = () => {
  const { locale } = useContext(LanguageContext);

  return (
    <span className="sticky sm:hidden !bottom-0 z-40">
      <p className="text-xs text-white text-center p-2 bg-primary ">
        <a href={`tel:${contactDetail.telNumber}`} className=" font-medium">
          {locale === "ar"
            ? `HJK کار رینٹل کے ساتھ ابھی اپنی کار بک کروائیں۔`
            : `buy or sale Your Car With Car Solutions`}
        </a>
      </p>
    </span>
  );
};

export default BottomStickyCall;
