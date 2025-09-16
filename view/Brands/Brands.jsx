"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import Heading4 from "@/components/Typography/Heading4";
import {
  BrandPageData1,
  GuideToBuying,
  homeTitleAr,
  homeTitleEn
} from "@/mockData/dummyData";
import { faq1 } from "@/mockData/faqDummy";
import { BrandLoading } from "@/sections/BrandSection";
import ContactEmarionSection from "@/sections/ContactEmarionSection";
import FaqsSection from "@/sections/FaqsSection";
import GuidesSection from "@/sections/GuidesSection/GuidesSection";
import HeroSection from "@/sections/HeroSection/HeroSection";
import SocialCommunitySection from "@/sections/SocialCommunitySection";
import StillHaveQuestions from "@/sections/StillHaveQuestions";
import useAllBrandStore from "@/stores/AllBrandStore";
import useFilterStore from "@/stores/filterStore";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { Suspense, useContext, useEffect } from "react";

export default function Brands({ faq }) {
  const { locale } = useContext(LanguageContext);
  const { allBrandData, allBrandLoading, fetchAllBrandData } =
    useAllBrandStore();
  const { setFilter } = useFilterStore();
  const router = useRouter();

  useEffect(() => {
    fetchAllBrandData();
  }, []);

  const brandDataEn = {
    title: "Top Automotive Brands, All in One Place",
    heading: "The Best of the Best, Right in Houston"
    // subHeading: "Curated for the Bold and the Driven"
  };

  const brandDataAr = {
    title: "سيارات فاخرة من علامات تجارية شهيرة",
    heading: "جميع العلامات التجارية في دبي"
    // subHeading: "مصممة خصيصًا لأصحاب الجرأة والطموح"
  };

  const content = locale === "ar" ? brandDataAr : brandDataEn;
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;
  const handelClick = (item) => {
    setFilter("brand_id", item?.id);
    router.push(`/${locale}/brands/${item?.slug}`);
  };

  const allBrandDummyData = [
    { brand_logo: "/assets/images/brandlogo/brand_logo_09.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_38.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_24.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_13.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_04.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_07.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_36.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_28.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_35.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_31.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_11.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_01.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_02.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_03.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_30.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_05.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_06.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_08.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_10.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_14.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_34.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_33.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_29.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_32.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_37.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_40.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_42.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_26.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_25.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_41.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_27.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_12.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_23.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_39.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_17.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_18.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_22.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_21.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_20.webp" },
    { brand_logo: "/assets/images/brandlogo/brand_logo_19.webp" }
  ];
  return (
    <div>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_07.webp)] bg-[url(/assets/images/bgimage_08.webp)]`}
        heading={content.title}
        // subHeading={content.subHeading}
      />
      <section className="secPadding">
        <div className="relative">
          <div className="absolute left-0 bottom-0 -z-10">
            <Image
              src={"/assets/icons/wm_08.svg"}
              alt={"logo"}
              width={350}
              height={543}
              className=""
            />
          </div>
          <div className="container">
            <div className="text-center">
              <Heading4 blackHeading={content.heading} className={`!mb-0`} />
            </div>
            <div className="pt-10">
              {allBrandLoading ? (
                <BrandLoading />
              ) : (
                <div className="grid xl:grid-cols-6 lg:grid-cols-5 md:grid-cols-4 grid-cols-3 place-items-center md:gap-4 gap-2">
                  {allBrandDummyData?.map((item, i) => (
                    <div
                      key={i}
                      className={`bg-[#DEDEDE] py-2 w-full h-full rounded-lg flex items-center justify-center
                      ${i % 1 ? "col-start-" : ""}
                      `}
                    >
                      <button
                        onClick={() => handelClick(item)}
                        className={`flex flex-col justify-center cursor-pointer`}
                      >
                        <Image
                          src={item.brand_logo}
                          alt=""
                          width={100}
                          height={100}
                          className="object-contain mx-auto"
                        />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <ContactEmarionSection
        data={BrandPageData1}
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
    </div>
  );
}
