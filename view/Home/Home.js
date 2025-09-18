"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { CardsData1, CardsData2, CardsData3, CarSolutionData } from "@/mockData/dummyData";
import AffiliateSection from "@/sections/AffiliateSection";
import CardsSection from "@/sections/CardsSection";
import CounterSection from "@/sections/CounterSection";
import FeaturesCardsSection from "@/sections/FeaturesCardsSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import MultiCardsSection from "@/sections/MultiCardsSection";
import PartnersSection from "@/sections/PartnersSection";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import TabsSection from "@/sections/TabSection";
import AssetsSection from "@/sections/z/AssetsSection";
import NewsletterSection from "@/sections/z/NewsletterSection";
import OurTeamSection from "@/sections/z/OurTeamSection";
import SubscribeSection from "@/sections/z/SubscribeSection";
import React, { useContext } from "react";

export default function Home({ h1, faq }) {
  const { locale } = useContext(LanguageContext);

  const assetsDataEn1 = {
    heading: "Let’s Get You Started!",
    paragraph: [
      "The faster you start, the faster you grow. Let’s get your Dubai business up and running today.",
    ],
    imageUrl: "/assets/images/image_13.webp",
    imageAlt: "Luxury rental car",
    imageW: 620,
    imageH: 520,
    reverse: false,
    callNowBtn: true,
    text: "List Your Car Now",
    href: "/listing/listing-form",
  };
  const assetsDataAr1 = {
    heading: "فخامة لا مثيل لها على عجلات",
    paragraph: [
      "سواء كانت مناسبة بسجادة حمراء، أو عطلة نهاية أسبوع، أو رحلة عمل تلفت الأنظار، فإن مجموعتنا من السيارات الفاخرة وعالية الأداء مصممة لأولئك الذين يطلبون أكثر من مجرد وسيلة نقل.",
      "اختر من علامات تجارية شهيرة مثل لامبورغيني، رولز رويس، بنتلي، وفيراري، مع خيارات تأجير مرنة وخدمة فاخرة من البداية إلى النهاية.",
    ],
    imageUrl: "/assets/images/image_13.webp",
    imageAlt: "سيارة فاخرة للإيجار",
    imageW: 620,
    imageH: 520,
    reverse: false,
    callNowBtn: true,
    text: "احجز سيارتك الآن",
    href: "/listing/listing-form",
  };

  const content1 = locale === "ar" ? assetsDataAr1 : assetsDataEn1;

  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_01.webp)] bg-[url(/assets/images/bgimage_02.webp)]`}
        heading={
          locale === "ar"
            ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
            : "All-in-One Business Setup & Corporate Solutions, ^Powered by One Nexuz"
        }
        paragraph={[
          "We eliminate the pain of business formation, relocation, and compliance by offering an integrated suite of corporate, wealth, and digital services, empowering you to launch faster and scale smarter in Dubai and beyond.",
        ]}
        btn
      />
      <AffiliateSection
        heading={
          locale === "ar"
            ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
            : "Trusted By The Best!"
        }
      />
      <TabsSection />
      <CounterSection />
      <CardsSection
        data={CardsData1}
        heading={`Why Partner with One Nexuz for Business Setup in Dubai?`}
        paragraph={[
          `Worried about rejections and wasted time? Our one-window setup gets you approved and market-ready`
        ]}
      />

      <FeaturesCardsSection
        data={CardsData2}
        heading={`Here’s What Makes One Nexuz Different`}
        paragraph={[
          `Experience a seamless journey, One Nexuz handles every business need from setup to digital success.`
        ]}
      />
      <MultiCardsSection
        data={CardsData3}
        heading={`Cut the Red Tape, We Handle Every Step of Your ^ UAE Business Journey`}
        fourGrids
      />

      <PartnersSection
        heading={`Our Partners`}
      />
      <OurTeamSection heading={`Meet the Visionaries Behind Your Success`}
        paragraph={[
          `Our dedicated leadership team brings decades of expertise and local insight to help your business thrive. Connect with the people who turn your ambitions into reality.`
        ]}
      />
      <AssetsSection {...content1}
      reverse
      />
      <SubscribeSection />
      <SocialCommunitySection />
      {/* 
      
      <div className="relative">
        <div className="absolute right-0 top-0 sm:block hidden">
          <Image
            src={"/assets/icons/wm_07.svg"}
            alt={"logo"}
            width={350}
            height={543}
            className=""
          />
        </div>
        <BrandSection heading={homeTilte.brands} brandData={brandLogoData} />
      </div>
      <BodyTypeSection heading={homeTilte.body_type} data={BodyTypeData} />
      
      <ProductCardSection
        heading={homeTilte.featured}
        paragraph={[`At Car Solutions, we offer a wide selection of vehicles tailored to your lifestyle. Whether you're looking for a spacious SUV, a sleek sedan, or an eco-friendly electric car, we have you covered. Discover the perfect match for your driving needs today!`]}
        data={featuredDatadummy}
        tBtn={btnText.view_all_cars}
        bBtn={btnText.view_all_cars}
        loading={featuredLoading}
        error={featuredError}
        cardNum={3}
      />
      <AssetsSection {...content} reverse />
      <div className="relative">
        <div className="absolute right-0 top-0 sm:block hidden">
          <Image
            src={"/assets/icons/wm_09.svg"}
            alt={"logo"}
            width={909}
            height={543}
            className=""
          />
        </div>
        <ProductAllCarsSection
          heading={homeTilte.all_cars}
          data={allCarsDatadummy}
          loading={featuredLoading}
          error={featuredError}
          cardNum={3}
        />
        <div className="absolute -bottom-28 -z-10 w-full mx-auto">
          <Image
            src={"/assets/icons/wm_04.svg"}
            alt={"logo"}
            width={909}
            height={543}
            className="w-full"
          />
        </div>
      </div>

      
      <GuidesSection
        heading="Essential Car Buying Tips"
        paragraph={[
          `Navigate the car buying process with confidence.`
        ]}
        data={GuideToBuying}
      />
      <ServicesSection
        heading="Comprehensive Services for Your Car Needs"
        paragraph={[
          `At Car Solutions, we offer a range of essential services to make your car buying and selling experience seamless. From inspections to financing, we have you covered.`,
        ]}
        data={ServicesHomeData1}
      />
      
      <AssetsSection {...content3} reverse />
      <Banner
        heading={`Drive Luxury on Your Terms with Car Solutions`}
        link={`/listing`}
        linktxt={`Explore Our Collection`}
        image={`md:bg-[url(/assets/images/image_34.webp)] bg-[url(/assets/images/image_34-1.webp)]`}
        paragraph={[
          `Experience the pinnacle of automotive excellence. Whether you're looking to buy or sell premium vehicles, Car Solutions offers a seamless, transparent, and hassle-free journey`
        ]}
      />
      <AssetsSection {...content4} />
      <ShowRoom
        heading={`Step Inside Our Virtual Showroom`}
        paragraph={[
          `Step inside our virtual showroom and explore our curated collection of premium vehicles anytime, anywhere. Experience every detail up close with a 360° view, all from the comfort of your screen.`
        ]}
      />
      <TestimonialsVideosSection />
      <LatestBlogs
        heading={homeTilte.blog_title}
        paragraph={[
          `Stay updated with the latest automotive trends, expert insights, and industry news. From new car launches to buying tips and market updates, we keep you informed and ahead of the curve.`
        ]}
      />
      

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
        <FaqsSection data={faq1} /> */}
      {/* <Suspense fallback={<LoadFaqs />}>
        {faq && <FaqsSection data={JSON.parse(faq)} />}
        {faq && <BottomFAQSchema data={JSON.parse(faq)} />}
      </Suspense> */}
      {/* <StillHaveQuestions />
      </div>
       */}
    </>
  );
}
