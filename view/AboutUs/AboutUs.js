"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Banner from "@/components/Banners/Banner";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import Image from "@/components/Image/Image";
import { CarSolutionAboutData, GuideToBuying, homeTitleAr, homeTitleEn, ServicesAboutData1 } from "@/mockData/dummyData";
import { faq1 } from "@/mockData/faqDummy";
import AssetsSection from "@/sections/AssetsSection";
import ContactEmarionSection from "@/sections/ContactEmarionSection";
import FaqsSection from "@/sections/FaqsSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import OurTeamSection from "@/sections/OurTeamSection";
import ServicesSection from "@/sections/ServicesSection";
import ShowRoom from "@/sections/ShowRoom";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import TimelineCounter from "@/sections/TimelineCounter";
import React, { Suspense, useContext } from "react";

export default function AboutUs({ h1, faq }) {

  const { locale } = useContext(LanguageContext);
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;

  const aboutDataEn = {
    // title: "About Us",
    heading: "We're More Than a Dealership",
    paragraph: [
      "Located in Houston, Car Solutions is your trusted destination for premium pre-owned, late-model vehicles at unbeatable prices. We’re not just about buying and selling cars we’re about delivering a top-tier automotive experience with zero hassle. Whether you’re looking to upgrade your ride or sell your current vehicle, we make the process fast, fair, and completely stress-free.",
      "Our passion for quality drives everything we do. From expert guidance to transparent deals, we're here to help you every step of the way. Need directions? We’ve got you covered with a detailed map, our full address, and a direct contact line for easy access. Stop by today, take your dream car for a spin, or get the best value for your vehicle on your terms.",
    ],
    imageUrl: "/assets/images/image_40.webp",
    imageAlt: "Luxury rental car",
    imageW: 620,
    imageH: 445,
    reverse: false,
  };

  const aboutDataAr = {
    title: "من نحن",
    heading: "ابدأ رحلتك مع تجارب أيقونية مع HJK لتأجير السيارات",
    paragraph: [
      "نحن نؤمن بأن قيادة سيارة فاخرة لا يجب أن تكون مجرد حلم بعيد المنال. لهذا السبب، نضع أكثر السيارات شهرة في العالم في متناول يديك، بدون أي تعقيدات وبأقصى درجات الإثارة. من سيارات لامبورغيني التي تزأر إلى سيارات رولز رويس التي تهمس بالفخامة، نختار الأفضل فقط. كل سيارة في أسطولنا هي بيان، وكذلك الخدمة التي نقدمها لك.",
    ],

    imageUrl: "/assets/images/image_40.webp",
    imageAlt: "سيارة فاخرة للإيجار",
    imageW: 620,
    imageH: 445,
    reverse: false,
  };

  const content = locale === "ar" ? aboutDataAr : aboutDataEn;

  return (
    <div>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_03.webp)] bg-[url(/assets/images/bgimage_04.webp)]`}
        // heading={content.title}
        heading={h1 || 'Driven by Trust, Fueled by Value Focus on Customer Satisfaction!'}
      />
      <AssetsSection {...content} />
      <ContactEmarionSection data={CarSolutionAboutData}
        heading={`Driven by Trust, Powered by Service`}
        paragraph={[
          `At Car Solutions, we make it easy to buy a used car within a 3-step process; no sweat at all:`
        ]}
      />

      <TimelineCounter
        heading={`Accelerating Through the Years`}
        paragraph={[
          `From humble beginnings to a trusted name in automotive excellence, our journey has been fueled by passion, progress, and customer trust.`
        ]}
      />

      <OurTeamSection heading={`Meet the Experts Behind Car Solutions`}
        paragraph={[
          `At Car Solutions, our team is made up of passionate automotive experts committed to helping you buy or sell with confidence. With years of industry experience, we’re here to guide you every step of the way.`
        ]}
      />
      <ShowRoom
        heading={`Step Inside Our Virtual Showroom`}
        paragraph={[
          `Step inside our virtual showroom and explore our curated collection of premium vehicles anytime, anywhere. Experience every detail up close with a 360° view, all from the comfort of your screen.`
        ]}
      />
      <TestimonialsVideosSection />

      <GuidesSection
        heading="Essential Car Buying Tips"
        paragraph={[
          `Navigate the car buying process with confidence.`
        ]}
        data={GuideToBuying}
        link
      />

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
        heading={homeTilte.blog_title}
        paragraph={[
          `Stay updated with the latest automotive trends, expert insights, and industry news. From new car launches to buying tips and market updates, we keep you informed and ahead of the curve.`
        ]}
      />
      <ServicesSection
        heading="Comprehensive Services for Your Car Needs"
        paragraph={[
          `At Car Solutions, we offer a range of essential services to make your car buying and selling experience seamless. From inspections to financing, we have you covered.`,
        ]}
        data={ServicesAboutData1}
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
    </div>
  );
}
