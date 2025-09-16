"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import {
  GuideToBuying,
  homeTitleAr,
  homeTitleEn
} from "@/mockData/dummyData";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import HeroSection from "@/sections/HeroSection/HeroSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import Banner from "@/components/Banners/Banner";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import Listing from "../listing/Listing";

export default function OldCarsPage({ slug, h1 }) {
  const { locale } = useContext(LanguageContext);
  const blogTilte = locale === "ar" ? homeTitleAr : homeTitleEn;

  return (
    <div>
      <div className="">
        <HeroSection
          className={`md:bg-[url(/assets/images/bgimage_05.webp)] bg-[url(/assets/images/bgimage_06.webp)]`}
          // heading={content.title}
          heading={h1 || "All Cars. All Categories. One Destination."}
        />
        <Listing slug={slug} />
        <GuidesSection
          heading="Essential Car Buying Tips"
          paragraph={[`Navigate the car buying process with confidence.`]}
          data={GuideToBuying}
          link
        />
        <TestimonialsVideosSection />
        <Banner
          heading={`Drive Luxury on Your Terms with Car Solutions`}
          link={`/listing`}
          linktxt={`Explore Our Collection`}
          image={`bg-[url(/assets/images/image_34.webp)]`}
          paragraph={[
            `Experience the pinnacle of automotive excellence. Whether you're looking to buy or sell premium vehicles, Car Solutions offers a seamless, transparent, and hassle-free journey`
          ]}
        />
        <LatestBlogs
          heading={blogTilte.blog_title}
          paragraph={[
            `Stay updated with the latest automotive trends, expert insights, and industry news. From new car launches to buying tips and market updates, we keep you informed and ahead of the curve.`
          ]}
        />
        <StillHaveQuestions />
      </div>
    </div>
  );
}
