import Heading1 from "@/components/Typography/Heading1";
import React from "react";
import FilterBar from "../Filter/FilterBar";
import Paragraph from "@/components/Typography/Paragraph";
import Image from "@/components/Image/Image";
import SearchBar from "@/components/BlogComponents/SearchBar/SearchBar";

const HeroSection = ({ className, heading, Filter, searchbar, paragraph }) => {
  return (
    <>
      <section className="secPadding bg-[url(/assets/icons/car_icon2.svg)] bg-cover bg-no-repeat bg-bottom">
        <div className={`container relative`}>
          <div className="absolute top-0 z-20">
            <Image
              src={`/assets/icons/car_icon.svg`}
              alt={`Altr`}
              fill
              className="object-cover"
            />
          </div>
          <div className={`${className} bgimg rounded-2xl`}>
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
        </div>
      </section>
    </>
  );
};

export default HeroSection;
