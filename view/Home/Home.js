"use client";
import { GET } from "@/actions/actions";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Banner from "@/components/Banners/Banner";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import Image from "@/components/Image/Image";
import {
  allCarsDatadummy,
  assetsDataAr,
  assetsDataAr1,
  assetsDataEn,
  assetsDataEn1,
  assetsDatahomeAr3,
  assetsDatahomeAr4,
  assetsDatahomeEn3,
  assetsDatahomeEn4,
  BodyTypeData,
  brandLogoData,
  btnTextAr,
  btnTextEn,
  CarSolutionData,
  featuredDatadummy,
  GuideToBuying,
  homeTitleAr,
  homeTitleEn,
  ServicesHomeData1,
} from "@/mockData/dummyData";
import { faq1 } from "@/mockData/faqDummy";
import AffiliateSection from "@/sections/AffiliateSection";
import AssetsSection from "@/sections/AssetsSection";
import BodyTypeSection from "@/sections/BodyTypeSection";
import BrandSection from "@/sections/BrandSection";
import ContactEmarionSection from "@/sections/ContactEmarionSection";
import FaqsSection from "@/sections/FaqsSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import OurTeamSection from "@/sections/OurTeamSection";
import ProductAllCarsSection from "@/sections/ProductAllCarsSection";
import ProductCardSection from "@/sections/ProductCardSection";
import ServicesSection from "@/sections/ServicesSection";
import ShowRoom from "@/sections/ShowRoom";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import TestimonialsVideosSection from "@/sections/TestimonialsVideosSection";
import useFilterStore from "@/stores/filterStore";
import { endpoints } from "@/utils/endpoints";
import React, { Suspense, useContext, useState } from "react";
import { useEffect } from "react";

export default function Home({ h1, faq }) {
  const { locale } = useContext(LanguageContext);
  const [featuredData, setFeaturedData] = useState([]);
  const [featuredLoading, setFeaturedLoading] = useState(false);
  const [featuredError, setFeaturedError] = useState(null);
  const [categoryData, setCategoryData] = useState({});
  const [categoryLoading, setCategoryLoading] = useState(false);
  const [categoryError, setCategoryError] = useState(null);

  const content = locale === "ar" ? assetsDataAr : assetsDataEn;
  const content2 = locale === "ar" ? assetsDataAr1 : assetsDataEn1;
  const content3 = locale === "ar" ? assetsDatahomeAr3 : assetsDatahomeEn3;
  const content4 = locale === "ar" ? assetsDatahomeAr4 : assetsDatahomeEn4;
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  const { filters } = useFilterStore();

  // Featured api
  const fetchFeaturedData = async () => {
    try {
      setFeaturedLoading(true);
      setFeaturedError(null);
      const res = await GET(endpoints.HOME.GET_FEATURED);
      if (res?.status === 200) {
        setFeaturedLoading(false);
        setFeaturedError(null);
        setFeaturedData(res?.data);
      } else {
        setFeaturedLoading(false);
        setFeaturedError(res?.message || "Failed to load categories");
      }
    } catch (err) {
      setFeaturedLoading(false);
      setFeaturedError(err.message || "Error loading navigation");
    }
  };

  // Elite api
  const fetchCategoryData = async () => {
    try {
      setCategoryLoading(true);
      setCategoryError(null);
      const res = await GET(endpoints.HOME.GET_CAR_CATEGORIES);
      if (res?.status === 200) {
        setCategoryLoading(false);
        setCategoryError(null);
        setCategoryData(res?.data);
      } else {
        setCategoryLoading(false);
        setCategoryError(res?.message || "Failed to load categories");
      }
    } catch (err) {
      setCategoryLoading(false);
      setCategoryError(err.message || "Error loading navigation");
    }
  };

  useEffect(() => {
    fetchFeaturedData();
    fetchCategoryData();
  }, []);

  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_01.webp)] bg-[url(/assets/images/bgimage_02.webp)]`}
        heading={
          locale === "ar"
            ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
            : "Find the Best Used Cars for Sale in Houston"
        }
        Filter={true}
      />
      <AffiliateSection
        heading={
          locale === "ar"
            ? "خدمة تأجير السيارات الفاخرة الرائدة في دبي"
            : "Trusted By The Best!"
        }
      />
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
      <AssetsSection {...content2} />
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

      <ContactEmarionSection data={CarSolutionData}
        heading={`How Our Car Solutions Work in Simple Steps`}
        paragraph={[
          `Navigating the car buying and selling process has never been easier. Our streamlined approach ensures you find the right vehicle or buyer quickly and confidently.`
        ]}
      />
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
      <OurTeamSection heading={`Meet the Experts Behind Car Solutions`}
        paragraph={[
          `At Car Solutions, our team is made up of passionate automotive experts committed to helping you buy or sell with confidence. With years of industry experience, we’re here to guide you every step of the way.`
        ]}
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
