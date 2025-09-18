"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "@/components/Image/Image";
import Link from "@/components/Link/Link";
import Heading2 from "@/components/Typography/Heading2";
import Heading5 from "@/components/Typography/Heading5";
import useCategoryStore from "@/stores/categoryStore";
import useFilterStore from "@/stores/filterStore";
import { titleLangConverter } from "@/utils/apiHelper";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const CategoriesSection = ({ heading }) => {
  const { locale } = useContext(LanguageContext);
  const { categoryData, categoryLoading, fetchCategoriesData } =
    useCategoryStore();
  const { setFilter } = useFilterStore();
  const router = useRouter();

  useEffect(() => {
    fetchCategoriesData();
  }, []);

  const handelClick = (item) => {
    setFilter("category_id", item?.id);
    router.push(`/${locale}/category/${item?.slug}`);
  };

  return (
    <>
      <section className="secPadding">
        <div className="container">
          <div className="md:mb-12 mb-8">
            <Heading2 blackHeading={heading} className="!text-center" />
          </div>
          <div className="flex items-center flex-wrap justify-center gap-4">
            {/* <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-4"> */}
            {categoryLoading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <div key={index} className="!basis-[100%] xs:!basis-[40%] md:!basis-[28%] lg:!basis-[23%]">
                    <BodyCategoryAnimate key={index} />
                  </div>
                ))
              : categoryData?.map((item) => (
                  <div
                    className="!basis-[100%] xs:!basis-[40%] md:!basis-[28%] lg:!basis-[23%]"
                    key={item?.id}>
                    <button
                      key={item?.id}
                      onClick={() => handelClick(item)}
                      className="flex flex-col items-center justify-center border rounded-md w-full h-full px-4 py-6 cursor-pointer">
                      <div className="h-[80px]">
                        <Image
                          src={item.icon || "/assets/icons/icon_05.svg"}
                          alt={item?.title_en}
                          width={190}
                          height={76}
                          className="object-contain h-full w-full"
                        />
                      </div>
                      <Heading5
                        className="pt-2 !mb-0"
                        blackHeading={titleLangConverter(
                          item?.title_en,
                          item?.title_ar,
                          locale
                        )}
                      />
                    </button>
                  </div>
                ))}
          </div>
          <Link
            href="/"
            variant={"white"}
            className={`sm:hidden block w-fit mx-auto mt-4`}>
            View All Categories
          </Link>
        </div>
      </section>
    </>
  );
};

export const BodyCategoryAnimate = () => {
  return (
    <div className="flex flex-col items-center justify-center border rounded-md w-full h-full px-4 py-6 animate-pulse">
      <div className="h-[100px] w-full bg-slate-200 rounded" />
      <div className="h-4 w-2/3 bg-slate-200 rounded mt-4" />
    </div>
  );
};

export default CategoriesSection;
