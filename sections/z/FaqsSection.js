import { FaqAccordian } from "@/components/FaqAccordian/FaqAccordian";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import React from "react";

const FaqsSection = ({ data }) => {
  return (
    <section className={`secPadding`}>
      <div className="container">
        <div className="max-w-3xl w-full mx-auto">
          <Heading2
            blackHeading="Frequently Asked Questions"
            className={`text-center`}
          />
          <Paragraph
            className={`text-center`}
            blackText1={`Find answers to common questions about buying, selling, and financing your next vehicle.`}
          />
        </div>
        <div className="mt-12">
          <FaqAccordian data={data} />
        </div>
      </div>
    </section>
  );
};

export default FaqsSection;
