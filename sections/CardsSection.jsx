import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Link from "@/components/Link/Link";
import Heading4 from "@/components/Typography/Heading4";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import React, { useContext } from "react";

const CardsSection = ({ data, heading, fourGrids, paragraph }) => {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  return (
    <>
      <section className="secPadding">
        <div className="container">
          <div className="flex items-center justify-between gap-6">
            <div className="max-w-3xl w-full">
              <Heading4 blackHeading={heading} className={``} />
              {paragraph?.map((para, ind) => (
                <Paragraph className="" blackText1={para} key={ind} />
              ))}
            </div>
            <div className="sm:flex justify-center hidden ">
              <Link href="/guide" variant={"primary"} className="rounded-full">
                {btnText.View_All_Guides}
              </Link>
            </div>
          </div>
          <div
            className={`grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-4 md:pt-10 pt-4
            ${fourGrids ? "lg:grid-cols-4 " : ""}
            `}
          >
            {data.map((item, i) => (
              <div key={i} className="bg-pingLight overflow-hidden rounded-3xl">
                <div className="px-4 py-6">
                  {item.icon && <div className="pb-4">{item.icon}</div>}
                  {item.num && (
                    <div className="font-semibold bg-[#242424] flex items-center justify-center mb-6 w-11 h-11 rounded-sm text-white">
                      {item.num}
                    </div>
                  )}
                  <Heading5
                    className="text-left font-semibold"
                    blackHeading={item.title}
                  />
                  <Paragraph
                    className="displayPara text-left"
                    blackText1={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-start md:hidden pt-14">
                    <Link href="/guide" className="text-nowrap" variant={`primary`}>
                     {btnText.View_All_Guides}
                    </Link>
                  </div>
        </div>
      </section>
    </>
  );
};

export default CardsSection;
