import React, { Suspense } from "react";
import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import HeroSection from "@/sections/HeroSection/HeroSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import { GuideToBuying } from "@/mockData/dummyData";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import FaqsSection from "@/sections/FaqsSection";
import DealCalculatorSection from "@/sections/DealCalculatorSection";
import Image from "@/components/Image/Image";
import { faq1 } from "@/mockData/faqDummy";

export async function generateMetadata() {
  const vMetaData = await SEOAction();
  return {
    title: vMetaData?.seo_title || "",
    description: vMetaData?.seo_description || "",
    alternates: {
      canonical: vMetaData?.canonical_url || ""
    },
    openGraph: vMetaData?.opengraph_data,
    twitter: vMetaData?.twitter_tag,
    robots: {
      index: isIndex,
      nocache: false
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg"
    }
  };
}

export default async function Page() {
  const { h1, faq } = await generateMetadata();
  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_11.webp)] bg-[url(/assets/images/bgimage_12.webp)]`}
        heading={h1 || `Plan Your Payments with Our Lease Calculator`}
      />
      <div className="relative">
        <div className="absolute right-0 top-0">
          <Image
            src={"/assets/icons/wm_07.svg"}
            alt={"logo"}
            width={350}
            height={543}
            className=""
          />
        </div>
        <DealCalculatorSection />
        <div className="absolute left-0 bottom-0 -z-10">
          <Image
            src={"/assets/icons/wm_05.svg"}
            alt={"logo"}
            width={350}
            height={543}
            className=""
          />
        </div>
      </div>
      <GuidesSection
        heading="Essential Car Buying Tips"
        paragraph={[`Navigate the car buying process with confidence.`]}
        data={GuideToBuying}
        link
      />
      <TestimonialsVideosSection />
      <LatestBlogs
        heading={"Latest Automotive Insights"}
        paragraph={[
          `Stay updated with the latest automotive trends, expert insights, and industry news. From new car launches to buying tips and market updates, we keep you informed and ahead of the curve.`
        ]}
      />
      <SocialCommunitySection />
      <div className="relative">
        <div className="absolute left-0 bottom-0 -z-10">
          <Image
            src={"/assets/icons/wm_05.svg"}
            alt={"logo"}
            width={350}
            height={543}
            className=""
          />
        </div>
        <FaqsSection data={faq1} />
        <StillHaveQuestions />
      </div>
    </>
  );
}
