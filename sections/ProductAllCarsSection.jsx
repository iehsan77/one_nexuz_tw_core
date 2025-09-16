"use client";
import React, { useContext, useState } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import { SplideSlide } from "@splidejs/react-splide";
import UniversalSplide from "@/components/UniversalSplide/UniversalSplide";
import ProductCard, {
  ProductCardSkeleton
} from "@/components/Card/ProductCard";
import NotFound from "@/components/NotFound/NotFound";
import useFilterStore from "@/stores/filterStore";
import { useRouter } from "next/navigation";
import Button from "@/components/Button/Button";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { trandingTabs } from "@/mockData/dummyData";

function ProductAllCarsSection({
  data,
  heading,
  paragraph,
  bBtn,
  loading,
  cardNum,
}) {
  const options = {
    type: "loop",
    perPage: 1,
    perMove: 1,
    pagination: false,
    gap: "1rem",
    arrows: false,
    autoplay: false,
    drag: true,
    autoScroll: {
      speed: 1
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
      1024: { perPage: 3 },
      1280: {
        perPage: cardNum ? cardNum : 4
      }
    }
  };
  const { setFilter } = useFilterStore();
  const router = useRouter();
  const { locale } = useContext(LanguageContext);
  const [activeTab, setActiveTab] = useState("AllCategories");

  const handelClick = (item) => {
    setFilter("category_id", item);
    router.push(`/${locale}/category`);
  };

  const handelCategoryClick = () => {
    router.push(`/${locale}/listing`);
  };


  return (
    <section className="relative secPadding">
      <div className="container">
        <div className="max-w-3xl">
          <Heading2 blackHeading={heading} className="!text-left" />
          {paragraph && <Paragraph className="" blackText1={paragraph} />}
        </div>
        
        <div className="flex overflow-x-auto gap-6 ">
          {trandingTabs.map((tab) => (
            <button
              key={tab.slug}
              onClick={() => setActiveTab(tab.slug)}
              className={`hover:cursor-pointer pb-1 ${
                activeTab === tab.slug
                  ? "border-b-2 border-primary pb-1"
                  : ""
              }`}
            >
              {tab.title}
            </button>
          ))}
        </div>
        
        <div className="pt-10">
          {loading ? (
            <UniversalSplide
              options={options}
              aria-labelledby="carousel-heading"
            >
              <SplideSlide>
                <ProductCardSkeleton />
              </SplideSlide>
            </UniversalSplide>
          ) : data?.length ? (
            <>
              <div className="lg:block hidden">
                <div className="grid lg:grid-cols-3 gap-4">
                  {data?.map((item, index) => (
                    <ProductCard key={index} data={item} />
                  ))}
                </div>
              </div>
              <div className="lg:hidden block">
                <UniversalSplide
                  options={options}
                  aria-labelledby="carousel-heading"
                >
                  {data?.map((item, index) => (
                    <SplideSlide key={index}>
                      <ProductCard data={item} />
                    </SplideSlide>
                  ))}
                </UniversalSplide>
              </div>
            </>
          ) : (
            <NotFound />
          )}
        </div>
        {bBtn && (
          <div className="block md:hidden">
            <div className="flex justify-start mt-6">
              <Button
                variant={"primary"}
                className="py-2 px-6"
                text={bBtn}
                onClick={handelCategoryClick}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ProductAllCarsSection;
