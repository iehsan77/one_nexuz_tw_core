"use client";
import React from "react";
import Newsletter from "@/components/Newsletter/Newsletter";
import Paragraph from "@/components/Typography/Paragraph";
import Heading2 from "@/components/Typography/Heading2";

const NewsletterSection = () => {

  return (
    <section className="secPadding">
      <div className="container ">
      <div className="bg-primary py-6 md:!px-14 px-6 rounded-full ">
        <div className="grid md:grid-cols-2 grid-cols-1 items-center gap-4">
          <div className="">
            <Heading2
              className="font-[400] mb-4"
              heading={`Newsletter`}
            />
            <Paragraph
              className="!text-xs"
              blackText1={`Lorem ipsum dolor sit amet, consectetuer adipiscing elit.`}
            />
          </div>
          <Newsletter btn={true} />
        </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
