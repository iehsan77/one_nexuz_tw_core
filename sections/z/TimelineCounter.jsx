// components/TimelineSection.jsx
"use client";
import Heading2 from "@/components/Typography/Heading2";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import { HexagonSVG } from "@/public/assets/icons/SVGIcons";
import React from "react";

const timelineData = [
  {
    year: "2021",
    title: "Car Solutions Was Founded",
    step: "1"
  },
  {
    year: "2022",
    title: "First 1,000 Vehicles Sold",
    step: "2"
  },
  {
    year: "2023",
    title: "Launched Online Vehicle Listings",
    step: "3"
  },
  {
    year: "2024",
    title: "Nationwide Service Expansion",
    step: "4"
  },
  {
    year: "2025",
    title: "Launched Car Solutions Mobile App",
    step: "5"
  }
];

const TimelineSection = ({ heading, paragraph }) => {
  return (
    <section className="secPadding bg-white ">
      <section className="container">
        <div className="max-w-6xl mx-auto text-center">
          <div className="max-w-4xl w-full mx-auto">
            <Heading4
              className="md:text-center text-left"
              blackHeading={heading}
            />
            {paragraph?.map((para, ind) => (
              <Paragraph
                blackText1={para}
                key={ind}
                className="md:text-center text-left"
              />
            ))}
          </div>

          {/* Timeline */}
        </div>
        <div className="relative">
          {/* Timeline horizontal line */}
          <div className="absolute md:top-[49%] top-1/2 left-0 right-0 h-[2px] bg-gray-300 z-0"></div>

          {/* Timeline items */}
          <div className="overflow-x-auto">
            <div
              className="grid grid-flow-col auto-cols-[minmax(120px,1fr)] md:gap-10 gap-16 relative z-10"
              style={{ minWidth: "100%" }}
            >
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`flex flex-col items-center md:gap-y-16 gap-y-16 text-center 
                      ${index % 2 ? "flex-col-reverse" : ""}
                      `}
                >
                  <div className="">
                    {/* Year on top */}
                    <Heading2
                      className="text-center !text-5xl !text-primary !mb-0"
                      blackHeading={item.year}
                    />

                    {/* Description below */}
                    <Paragraph
                      blackText1={item.title}
                      className="text-center !mb-0 !text-xs"
                    />
                  </div>
                  {/* Hexagon step number */}
                  <div className="relative">
                    <HexagonSVG
                      className={`${index % 2 ? "rotate-180" : ""}`}
                    />
                    <div className="absolute inset-0 flex items-center justify-center font-semibold">
                      <Heading2
                        className={`text-center !text-5xl !mb-0 pt-12 ${
                          index % 2 ? "pt-0 pb-25" : ""
                        }`}
                        blackHeading={item.step}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default TimelineSection;
