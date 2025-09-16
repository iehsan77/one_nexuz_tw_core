"use client";
import React, { useState } from "react";
import Heading4 from "@/components/Typography/Heading4";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import { categories } from "@/mockData/dummyData";
import CareerCards from "@/components/Card/CareerCards";

const CareerCardsData = [
  
];

const CareerJobSection = ({
  topTitle,
  heading,
  gourGrids,
  bottomTitle,
  paragraph,
}) => {
  const [activeCategory, setActiveCategory] = useState("View ALL");
  return (
    <section className="secPadding">
      <div className="container">
        <div className="">
          {topTitle && <Heading4 blackHeading={topTitle} />}
          <Heading2 blackHeading={heading} className={`text-center`} />
          {bottomTitle && <Heading4 blackHeading={bottomTitle} />}
          {paragraph?.map((para, ind) => (
            <Paragraph blackText1={para} key={ind} />
          ))}
        </div>

        {/* Categories */}
        <div className="flex gap-3 justify-center overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-2 mb-2 font-semibold text-nowrap transition-all text-sm ${
                activeCategory === cat
                  ? "text-primary border-b border-b-primary"
                  : "border-gray-300 text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Job Cards */}
        <div
          className={`grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4
  ${gourGrids ? "lg:grid-cols-4" : ""}
`}
        >
          {[...Array(12)].map((_, i) => (
            <CareerCards key={i} {...CareerCardsData[5]} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareerJobSection;
