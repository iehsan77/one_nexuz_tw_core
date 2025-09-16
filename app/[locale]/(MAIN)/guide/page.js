import React, { Suspense } from "react";
import ViewAllPostCards from "@/components/BlogComponents/ViewAllPostCards";
import InterestedCategoriesSection from "@/sections/BlogSection/InterestedCategoriesSection";
import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import HeroSection from "@/sections/HeroSection/HeroSection";
import ViewAllGuidePostCards from "@/components/Guide/ViewAllGuidePostCards";

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
    h1: vMetaData?.h1,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const page = async () => {
  const { h1 } = await generateMetadata();
  return (
    <Suspense>
      
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_17.webp)] bg-[url(/assets/images/bgimage_18.webp)]`}
        heading={h1 || `Expert Tips & How-To Guides`}
        searchbar
      />
      <InterestedCategoriesSection />
      <div className="container pb-8">
        <ViewAllGuidePostCards
          // heading={`All Blogs`}
          lGrid
        />
      </div>
    </Suspense>
  );
};

export default page;
