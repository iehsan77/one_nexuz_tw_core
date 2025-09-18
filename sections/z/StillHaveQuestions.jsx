"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Link from "@/components/Link/Link";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import React, { useContext } from "react";

const StillHaveQuestions = () => {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  return (
    <>
      <section className="secPadding">
        <div className="container">
          <div className="max-w-5xl w-full mx-auto">
            <Heading2
              blackHeading={
                locale === "ar"
                  ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
                  : "Still have questions?"
              }
              className={`text-center`}
            />
            <Paragraph
              blackText1={
                locale === "ar"
                  ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
                  : "We're here to help you!"
              }
              className="text-center"
            />
          </div>
          <div className="flex justify-center">
            <Link href={`/contact-us`} variant={`primary`}>
              {btnText.contact_us}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default StillHaveQuestions;
