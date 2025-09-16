"use client";
import React from "react";
import Link from "../Link/Link";
import Paragraph from "../Typography/Paragraph";
import Heading2 from "../Typography/Heading2";

function Banner({ heading, image, paragraph, link, linktxt }) {
  return (
    <section className="secPadding">
      <div className={`container`}>
      <div className={`sm:py-10 py-4 rounded-2xl overflow-hidden bgimg ${image}`}>
          <div className="flex flex-col sm:space-y-20 space-y-50 px-4">
            <div className="max-w-sm w-full">
              <Heading2 blackHeading={heading} className={`text-white`} />
              {paragraph?.map((para, ind) => (
                <Paragraph blackText1={para} key={ind} className="text-white" />
              ))}
            </div>
            <div>
              <Link
                href={link}
                variant={`white`}
                className={`!inline-flex font-semibold`}
              >
                {linktxt}
              </Link>
            </div>
          </div>
      </div>
      </div>
    </section>
  );
}

export default Banner;
