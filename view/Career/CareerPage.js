"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import HeroSection from "@/sections/HeroSection/HeroSection";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import FaqsSection from "@/sections/FaqsSection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import ContactEmarionSection from "@/sections/ContactEmarionSection";
import { CareerData } from "@/mockData/dummyData";
import CareerJobSection from "@/sections/CareerJobSection";
import WhyChooseUsSection from "@/sections/WhyChooseUsSection";
import Image from "@/components/Image/Image";
import { faq1 } from "@/mockData/faqDummy";

const CareerPage = () => {
  const { locale } = useContext(LanguageContext);
  const isArabic = locale === "ar";

  const contactDataEn = {
    title: "Build Your Future With Car Solutions",
  };

  const contactDataAr = {
    title: "اتصل بنا",
  };

  const content = isArabic ? contactDataAr : contactDataEn;

  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_15.webp)] bg-[url(/assets/images/bgimage_16.webp)]`}
        heading={content.title}
        searchbar
      />
      <ContactEmarionSection
        data={CareerData}
        fourGrids
        heading={`Our Hiring Process In 4 Simple Steps`}
      />
      <CareerJobSection heading="Job Categories" />
      <div className="pt-4">
        <WhyChooseUsSection />
      </div>
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

export default CareerPage;
