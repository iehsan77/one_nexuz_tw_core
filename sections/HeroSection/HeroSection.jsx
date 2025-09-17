import Heading1 from "@/components/Typography/Heading1";
import React from "react";
import FilterBar from "../Filter/FilterBar";
import Paragraph from "@/components/Typography/Paragraph";
import SearchBar from "@/components/BlogComponents/SearchBar/SearchBar";

const HeroSection = ({ className, heading, Filter, searchbar, paragraph }) => {
  return (
    <>
      <section className={`secPadding ${className} bgimg `}>
        <div className={`container`}>
          <div className={`xs:py-44.5 py-32 px-4`}>
            <div className="space-y-4">
              <div className="max-w-lg mx-auto !space-y-8">
                <Heading1
                  className={`!text-center !text-white`}
                  blackHeading={heading}
                />
                {paragraph && (
                  <Paragraph
                    className={`md:!text-center text-left !text-white !text-lg`}
                    blackText2={paragraph}
                  />
                )}
              </div>
              <div className="max-w-xl w-full mx-auto xl:px-44 lg:px-20">
                {Filter && <FilterBar />}
                {searchbar && <SearchBar />}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
