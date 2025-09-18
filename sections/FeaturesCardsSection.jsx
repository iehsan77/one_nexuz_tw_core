import Heading4 from "@/components/Typography/Heading4";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import React from "react";

const FeaturesCardsSection = ({ data, heading, paragraph }) => {
  return (
    <section className="secPadding">
      <div className="container">
        <div className="max-w-lg">
          <Heading4 className="!mb-0" blackHeading={heading} />
          {paragraph?.map((para, ind) => (
            <Paragraph blackText1={para} key={ind} className="!mb-0" />
          ))}
        </div>

        {/* ✅ FLEX instead of GRID */}
        <div className="flex flex-wrap justify-center md:pt-10 pt-4 gap-4 lg:gap-3">
          {data.map((item, i) => (
            <div
              key={i}
              className="bg-pingLight overflow-hidden rounded-sm shadow 
                         flex-1 min-w-[200px] max-w-[calc(20%-0.75rem)] 
                         sm:max-w-[calc(50%-1rem)] md:max-w-[calc(33.333%-1rem)] 
                         lg:max-w-[calc(20%-0.75rem)]"
            >
              <div className="px-4 py-6">
                {item.icon && (
                  <div className="pb-4 flex justify-center">{item.icon}</div>
                )}
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
  );
};

export default FeaturesCardsSection;
