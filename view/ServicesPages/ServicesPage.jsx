"use client";
import HeroHeader from "@/components/Header/HeroHeader";
import React from "react";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import FaqsSection from "@/sections/FaqsSection";
import GuideSec from "@/sections/GuideSec";
import BlogSec from "@/sections/BlogSec";
import GridSec from "@/components/GridSec";
import OurClients from "@/sections/OurClients";
import BgImageSec from "@/sections/ServicesSection/BgImageSec";
import LeftSection2 from "@/sections/ServicesSection/LeftSection2";
import LeftSection3 from "@/sections/ServicesSection/LeftSection3";
import LeftSection4 from "@/sections/ServicesSection/LeftSection4";
import LeftSection5 from "@/sections/ServicesSection/LeftSection5";
import LookingFor from "@/components/LookingFor";
import LeftSection9 from "@/sections/ServicesSection/LeftSection9";
import LeftSection10 from "@/sections/ServicesSection/LeftSection10";
import RightSection1 from "@/sections/ServicesSection/RightSection1";
import RightForm from "@/sections/ServicesSection/RightForm";
import RightCompare from "@/sections/ServicesSection/RightCompare";
import ExploreIndustry from "@/sections/ServicesSection/ExploreIndustry";
import LeftSection1 from "@/sections/ServicesSection/LeftSection1";
import RecentBlog from "@/sections/ServicesSection/RecentBlog";
import { usePathname } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import { getPageHierarchy } from "@/helpers/getBreadcrumb";

function ServicesPage({ data, locale, path, compare, sec3, sec2 }) {
  const pathname = usePathname();
  const breadcrumb = getPageHierarchy(pathname, path);

  return (
    <div>
      <HeroHeader data={data?.homeHeader} />
      <Breadcrumb data={breadcrumb} />
      <div className="container lg:grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <LeftSection1 data={data?.leftSection_1} locale={locale} />
          {!sec2 && <LeftSection2 data={data?.leftSection_2} locale={locale} />}
          {!sec3 && <LeftSection3 data={data?.leftSection_3} locale={locale} />}
          <LeftSection4 data={data?.leftSection_4} locale={locale} />
          <LeftSection5 data={data?.leftSection_5} locale={locale} />
        </div>
        <div className="hidden lg:block col-span-1 h-fit secPadding space-y-6 sticky top-24">
          <RightSection1 />
          <RightForm />
          <ExploreIndustry data={data?.exploreIndustry} locale={locale} />
          <RecentBlog />
          {compare && <RightCompare />}
        </div>
      </div>
      <BgImageSec data={data?.leftSection_6} />
      <GridSec data={data?.leftSection_7} />
      <OurClients data={data?.leftSection_8} />
      <LookingFor />
      <LeftSection9 />
      <LeftSection10 data={data?.leftSection_10} locale={locale} />
      <GridSec data={data?.leftSection_11} />
      <GuideSec />
      <BlogSec />
      <SocialCommunitySection />
      <FaqsSection data={data?.faq} />
    </div>
  );
}

export default ServicesPage;
