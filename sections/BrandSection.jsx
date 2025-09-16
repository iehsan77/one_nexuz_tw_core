"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "@/components/Image/Image";
// import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Link from "@/components/Link/Link";
import Heading2 from "@/components/Typography/Heading2";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import useBrandStore from "@/stores/brandStore";
import useFilterStore from "@/stores/filterStore";
import { textToRouteUrl } from "@/utils/apiHelper";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const BrandSection = ({
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  brandData
}) => {
  // const { brandData, brandLoading, fetchBrandData } = useBrandStore();
  const { brandLoading } = useBrandStore();

  const { locale } = useContext(LanguageContext);
  const { setFilter } = useFilterStore();
  const router = useRouter();

  // useEffect(() => {
  //   fetchBrandData();
  // }, [fetchBrandData]);

  const btnText = locale === "ar" ? btnTextAr : btnTextEn;

  const handelClick = (item) => {
    setFilter("brand_id", item?.id);
    router.push(`/${locale}/brands/${item?.slug}`);
  };

  return (
    <>
      <section className="secPadding relative">
        <div className="absolute top-0 z-20">
          <Image
            src={`/assets/icons/car_icon.svg`}
            alt={`Altr`}
            fill
            className="object-cover"
          />
        </div>
        <div className="container">
          <div className="flex items-center justify-between">
            <div>
              {topTitle && (
                <Heading4 blackHeading={topTitle} className="text-center" />
              )}
              <Heading2 blackHeading={heading} className="" />
              {bottomTitle && (
                <Heading4 heading={bottomTitle} className="text-center" />
              )}
              {paragraph?.map((para, ind) => (
                <Paragraph className="" blackText1={para} key={ind} />
              ))}
            </div>
            <div className="">
              <Link
                variant={`primary`}
                href={textToRouteUrl("/brands")}
                className=""
              >
                {btnText.view_all_brands}
              </Link>
            </div>
          </div>
          {brandLoading ? (
            <BrandLoading />
          ) : (
            <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 lg:gap-4 gap-2 py-8">
              {brandData?.map((item) => (
                <button
                  onClick={() => handelClick(item)}
                  key={item?.id}
                  className=""
                >
                  <Image
                    src={item?.brand_logo}
                    alt={"logo"}
                    width={207}
                    height={120}
                    className="border-gray-300 rounded-lg object-contain mx-auto cursor-pointer"
                  />
                </button>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export const BrandLoading = () => {
  return (
    <div className="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-4 pt-8 pb-6">
      {Array.from({ length: 12 }).map((_, index) => (
        <div
          key={index}
          className="h-[120px] w-full bg-slate-200 rounded-md animate-pulse"
        />
      ))}
    </div>
  );
};

export default BrandSection;
