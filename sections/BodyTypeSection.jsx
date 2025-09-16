"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "@/components/Image/Image";
import SplideSlider from "@/components/SplideSlider/SplideSlider";
import Heading4 from "@/components/Typography/Heading4";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import useBodyTypeStore from "@/stores/bodyTypeStore";
import useFilterStore from "@/stores/filterStore";
import { titleLangConverter } from "@/utils/apiHelper";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect } from "react";

const BodyTypeSection = ({
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  data
}) => {
  const { locale } = useContext(LanguageContext);
  const { bodyTypeData, bodyTypeLoading, fetchBodyTypeData } =
    useBodyTypeStore();
  const { setFilter } = useFilterStore();
  const router = useRouter();

  useEffect(() => {
    fetchBodyTypeData();
  }, []);

  const handelClick = (item) => {
    setFilter("body_type_id", item?.id);
    router.push(`/${locale}/body-types/${item?.slug}`);
  };
  const options = {
    type: "loop",
    rewind: true,
    resolve: "left",
    perPage: 1,
    padding: "0rem",
    perMove: 1,
    pagination: false,
    gap: "15px",
    arrows: false,
    autoplay: true,
    autoScroll: {
      speed: 1
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
      1024: { perPage: 4 },
      1280: { perPage: 5 }
    }
  };
  return (
    <>
      <section className="pt-10">
        <div className="container">
          <div className="">
            {topTitle && (
              <Heading4 blackHeading={topTitle} className="text-center" />
            )}
            <div className="flex items-center justify-center">
              <Heading4 blackHeading={heading} className="!text-center" />
            </div>
            {bottomTitle && (
              <Heading4 heading={bottomTitle} className="text-center" />
            )}
            {paragraph?.map((para, ind) => (
              <Paragraph className="" blackText1={para} key={ind} />
            ))}
          </div>
          <SplideSlider options={options} data={data}>
            <BodyType />
          </SplideSlider>
        </div>
      </section>
    </>
  );
};

export const BodyTypeCardAnimate = () => {
  return (
    <div className="flex flex-col items-center justify-center border border-white rounded-md w-full h-full px-4 py-6 animate-pulse">
      <div className="h-[100px] w-full bg-slate-200 rounded" />
      <div className="h-4 w-2/3 bg-slate-200 rounded mt-4" />
    </div>
  );
};

const BodyType = ({ ImageURL, item, title_en, title_ar, locale }) => {
  return (
    <>
      <div className="!basis-[100%] xs:!basis-[40%] md:!basis-[28%] lg:!basis-[23%]">
        <button
          onClick={() => handelClick(item)}
          className="flex flex-col items-center justify-center border border-white rounded-md w-full h-full cursor-pointer"
        >
          <div className="">
            <Image
              src={ImageURL}
              alt={title_en}
              width={160}
              height={76}
              className="object-contain "
            />
          </div>
          <Heading5
            className="pt-2 !mb-0"
            blackHeading={titleLangConverter(title_en, title_ar, locale)}
          />
        </button>
      </div>
    </>
  );
};

export default BodyTypeSection;
