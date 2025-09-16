"use client";
import React, { Suspense, useContext } from "react";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import FaqsSection from "@/sections/FaqsSection";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import {
  CarSolServiceData,
  GuideToBuying,
  homeTitleAr,
  homeTitleEn
} from "@/mockData/dummyData";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import ContactEmarionSection from "@/sections/ContactEmarionSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import FullServicesSection from "@/sections/FullServicesSection";
import TabSectionHero from "@/sections/TabSectionHero";
import Image from "@/components/Image/Image";
import { faq1 } from "@/mockData/faqDummy";

const ServicePage = () => {
  const { locale } = useContext(LanguageContext);
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;
  return (
    <>
      <FullServicesSection />
      <TabSectionHero />
      <ContactEmarionSection
        data={CarSolServiceData}
        heading={`Driven by Trust, Powered by Service`}
        paragraph={[
          `At Car Solutions, we make it easy to buy a used car within a 3-step process; no sweat at all:`
        ]}
      />
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

export default ServicePage;
