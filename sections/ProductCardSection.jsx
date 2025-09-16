"use client";
import React, { useContext } from "react";
import "@splidejs/splide/dist/css/splide.min.css";
import Heading2 from "@/components/Typography/Heading2";
import Heading5 from "@/components/Typography/Heading5";
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

function ProductCardSection({
  data,
  heading,
  bottomTitle,
  paragraph,
  bBtn,
  tBtn,
  loading,
  btnright,
  cardNum,
  categoryId
}) {
    const options = {
    type: "loop",
    perPage: 1,
    // padding: "0.8rem",
    perMove: 1,
    pagination: true,
    gap: "1rem",
    arrows: true,
    autoplay: false,
    drag: true,
    autoScroll: {
      speed: 1
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
      1024: { perPage: 3,},
      1280: {
        perPage: cardNum ? cardNum : 4
      }
    }
  };
  const { setFilter } = useFilterStore();
  const router = useRouter();
  const { locale } = useContext(LanguageContext);

  const handelClick = (item) => {
    setFilter("category_id", item);
    router.push(`/${locale}/category`);
  };

  const handelCategoryClick = () => {
    router.push(`/${locale}/listing`);
  };

  return (
    <section className="relative bg-[#FBFBFB] secPadding">
      <div className="container md:pb-6">
        <div className="lg:mb-10 mb-4">
          <div className="grid md:grid-cols-2 grid-cols-1 lg:gap-16 gap-2">
            <Heading2 blackHeading={heading} className="!text-left" />
            <div className="">
              {paragraph && <Paragraph className="" blackText1={paragraph} />}
              {tBtn && (
                <div className={`md:block hidden ${btnright ? "md:flex justify-end" : ""}`}>
                  <Button
                    variant={"primary"}
                    className={`py-2 px-6`}
                    text={tBtn}
                    onClick={() => handelClick(categoryId)}
                  />
                </div>
              )}
            </div>
          </div>
          {bottomTitle && <Heading5 blackHeading={bottomTitle} className="" />}
        </div>
        <div className="dot">
          {loading ? (
          <UniversalSplide options={options} aria-labelledby="carousel-heading">
            <SplideSlide>
              <ProductCardSkeleton />
            </SplideSlide>
          </UniversalSplide>
        ) : data?.length ? (
          <UniversalSplide options={options} aria-labelledby="carousel-heading">
            {data?.map((item, index) => (
              <SplideSlide key={index}>
                <ProductCard data={item} />
              </SplideSlide>
            ))}
          </UniversalSplide>
        ) : (
          <NotFound />
        )}
        </div>
        {bBtn && (
          <div className="block md:hidden">
            <div className="flex justify-start pt-14">
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

export default ProductCardSection;
