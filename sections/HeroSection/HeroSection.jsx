import Heading1 from "@/components/Typography/Heading1";
import React from "react";
import FilterBar from "../Filter/FilterBar";
import Paragraph from "@/components/Typography/Paragraph";
import SearchBar from "@/components/BlogComponents/SearchBar/SearchBar";
import Link from "@/components/Link/Link";

const HeroSection = ({
  className,
  heading,
  Filter,
  searchbar,
  paragraph,
  btn
}) => {
  return (
    <>
      <section className={`secPadding ${className} bgimg `}>
        <div className={`container`}>
          <div className={`py-24 px-4`}>
            <div className="space-y-4">
              <div className="max-w-md !space-y-8">
                <Heading1 className={`!text-white`} blackHeading={heading} />
                {paragraph && (
                  <Paragraph className={`!text-white`} blackText2={paragraph} />
                )}
                {btn && (
                  <Link href={"/"} variant={"primary"} className="!inline-flex">
                    Book a Free Consultation
                  </Link>
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
