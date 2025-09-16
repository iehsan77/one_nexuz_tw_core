"use client";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import {
  assetsListingFormData1Ar,
  assetsListingFormData1En,
  GuideToBuying,
  homeTitleAr,
  homeTitleEn
} from "@/mockData/dummyData";
import FaqsSection from "@/sections/FaqsSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import React, { Suspense, useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import AssetsSection from "@/sections/AssetsSection";
import VehicleInformationForm from "@/sections/Forms/VehicleInformationForm";
import Image from "@/components/Image/Image";
import { faq1 } from "@/mockData/faqDummy";

const ListingForm = ({ h1, faq }) => {
  const { locale } = useContext(LanguageContext);
  const content2 =
    locale === "ar" ? assetsListingFormData1Ar : assetsListingFormData1En;
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;
  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_09.webp)] bg-[url(/assets/images/bgimage_10.webp)]`}
        // heading={content.title}
        heading={h1 || "Got a Car to Sell? We’ve Got the Buyers."}
      />
      <AssetsSection {...content2} />
      <VehicleInformationForm />
      <GuidesSection
        heading="Essential Car Buying Tips"
        paragraph={[`Navigate the car buying process with confidence.`]}
        data={GuideToBuying}
        link
      />
      <TestimonialsVideosSection />
      <LatestBlogs
        heading={homeTilte.blog_title}
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
};

export default ListingForm;
