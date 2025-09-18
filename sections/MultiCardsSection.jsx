import Heading4 from "@/components/Typography/Heading4";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import { OneSVG } from "@/public/assets/icons/SVGIcons";
import React from "react";

const MultiCardsSection = ({ data, heading, fourGrids, paragraph }) => {
  return (
    <>
      <section className="secPadding">
        <div className="container">
          <div className="max-w-lg">
            <Heading4 className="!mb-0" blackHeading={heading} />
            {paragraph?.map((para, ind) => (
              <Paragraph blackText1={para} key={ind} className="!mb-0" />
            ))}
          </div>
          <div
            className={`grid lg:grid-cols-3 grid-cols-1 lg:gap-3 gap-4 md:pt-10 pt-4
            ${fourGrids ? "lg:grid-cols-4 " : ""}
            `}
          >
            {data.map((item, i) => (
              <div
                key={i}
                className="relative bg-pingLight overflow-hidden rounded-sm shadow"
              >
                <div className="absolute right-0">
                  <OneSVG />
                </div>
                <div className="px-4 py-6">
                  {item.icon && <div className="pb-4 flex justify-center">{item.icon}</div>}
                  {item.num && (
                    <div className="font-semibold bg-[#242424] flex items-center justify-center mb-6 w-11 h-11 rounded-sm text-white">
                      {item.num}
                    </div>
                  )}
                  <Heading5
                    className="text-center font-semibold !text-lg"
                    blackHeading={item.title}
                  />
                  <Paragraph
                    className="displayPara text-center"
                    blackText1={item.description}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default MultiCardsSection;
