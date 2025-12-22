"use client";
import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import HeroHeader from "@/components/Header/HeroHeader";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import TrustedBy from "@/sections/TrustedBy";
import LookingFor from "@/components/LookingFor";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import OurPartners from "@/sections/OurPartners";
import MeetVisionariesSlider from "@/sections/MeetVisionariesSlider";
import ThemSelves from "@/sections/ThemSelves";
import GridSec from "@/components/GridSec";
import AboutGridSec from "@/components/AboutGridSec";
import MissionVision from "@/sections/AboutUsSections/MissionVision";
import OurValues from "@/sections/AboutUsSections/OurValues";
import TrustUs from "@/sections/AboutUsSections/TrustUs";

function AboutUs() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;

  return (
    <div>
      <HeroHeader data={t.aboutHeader} aboutus={true} />
      <TrustedBy title={t.trusted} />
      <AboutGridSec data={t.whoWeAre} />
      <MissionVision data={t.missionVision} />
      <OurValues data={t.ourValues} />
      <TrustUs data={t.trustUs} />
      <ThemSelves data={t.themSelvesData} />
      <OurPartners data={t.outPartners} />
      <MeetVisionariesSlider data={t.MeetVisionariesSlider} />
      <GridSec data={t.aboutGridSec} />
      <SocialCommunitySection />
      <LookingFor />
    </div>
  );
}

export default AboutUs;
