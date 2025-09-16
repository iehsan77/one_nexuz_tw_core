import React from "react";
import ViewAllPostCards from "@/components/BlogComponents/ViewAllPostCards";
import InterestedCategoriesSection from "@/sections/BlogSection/InterestedCategoriesSection";
import { isIndex } from "@/constants/constants";
import { SEOAction } from "@/actions/seo-action";


export async function generateMetadata() {
  const vMetaData = await SEOAction();
  return {
    title: vMetaData?.seo_title || "",
    description: vMetaData?.seo_description || "",
    alternates: {
      canonical: vMetaData?.canonical_url || "",
    },
    openGraph: vMetaData?.opengraph_data,
    twitter: vMetaData?.twitter_tag,
    robots: {
      index: isIndex,
      nocache: true,
    },
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const ViewAllPost = ({ searchParams }) => {
  return (
    <section className="">
      <InterestedCategoriesSection />
      <div className="container">
        <ViewAllPostCards searchParams={searchParams} lGrid={true} />
      </div>
    </section>
  );
};

export default ViewAllPost;
