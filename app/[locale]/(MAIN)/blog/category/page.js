import React from "react";
import ViewAllPostCards from "@/components/BlogComponents/ViewAllPostCards";
import InterestedCategoriesSection from "@/sections/BlogSection/InterestedCategoriesSection";

const page = ({ searchParams }) => {
  return (
    <div>
      <section className="">
        <InterestedCategoriesSection />
        <div className="container">
          <div className="mb-6">
            <ViewAllPostCards searchParams={searchParams} lGrid={true} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
