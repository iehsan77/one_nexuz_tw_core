"use client";
import HeroHeader from "@/components/Header/HeroHeader";
import React, { useContext } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import TrustedBy from "@/sections/TrustedBy";
import ThemSelves from "@/sections/ThemSelves";
import WhyPartner from "@/sections/WhyPartner";
import OneNexuzDifferent from "@/sections/OneNexuzDifferent";
import UaeBusinessJourney from "@/sections/UaeBusinessJourney";
import MeetVisionariesSlider from "@/sections/MeetVisionariesSlider";
import GridSec from "@/components/GridSec";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import FaqsSection from "@/sections/FaqsSection";
import OurClients from "@/sections/OurClients";
import OurPartners from "@/sections/OurPartners";
import GuideSec from "@/sections/GuideSec";
import BlogSec from "@/sections/BlogSec";
import LookingFor from "@/components/LookingFor";
import EndTOEndSetup from "@/sections/EndTOEndSetup";

function Home() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div>
      <HeroHeader bgImage="/assets/header/home.webp" data={t.homeHeader} />
      <TrustedBy title={t.trusted} />
      <EndTOEndSetup data={t.endToEndBusinessSetup} t={t} />
      <ThemSelves data={t.themSelvesData} />
      <WhyPartner data={t.whyPartner} t={t} />
      <OneNexuzDifferent data={t.nexuzDifferent} />
      <UaeBusinessJourney data={t.uaeBusinessJourney} />
      <OurPartners data={t.outPartners} />
      <MeetVisionariesSlider data={t.MeetVisionariesSlider} />
      <GuideSec />
      <BlogSec />
      <OurClients data={t.homeOurClient} />
      <GridSec data={t.GetYouStarted} />
      <SocialCommunitySection />
      <FaqsSection data={t.faq} />
      <LookingFor />
    </div>
  );
}

export default Home;
