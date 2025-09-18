"use client";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import Heading2 from "@/components/Typography/Heading2";
import NotFound from "@/components/NotFound/NotFound";
import Link from "@/components/Link/Link";
import Paragraph from "@/components/Typography/Paragraph";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import { useContext } from "react";
import ServicesSectionCards from "@/components/Card/ServicesSectionCards";

const options = {
  type: "loop",
  focus: 0,
  perPage: 1,
  padding: "0.8rem",
  perMove: 1,
  pagination: true,
  gap: "15px",
  autoplay: true,
  rewindByDrag: true,
  rewind: true,
  arrows: true,
  autoScroll: {
    speed: 0.5
  },
  mediaQuery: "min",
  breakpoints: {
    640: { perPage: 2 },
    1024: { perPage: 3}
  }
};

const ServicesSection = ({ heading, data, link, paragraph }) => {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  return (
    <section className="secPadding bg-[url(/assets/icons/wm_05.svg)] bg-no-repeat bg-top-left">
      <div className="container">
        <div className="">
          <div className="flex items-start justify-between gap-6">
            <div className="max-w-3xl w-full">
              <Heading2 blackHeading={heading} className={``} />
            </div>
            <div className="">
              {paragraph?.map((para, ind) => (
                <Paragraph className="" blackText1={para} key={ind} />
              ))}
              <div className="sm:flex justify-start hidden ">
                <Link
                  href="/services"
                  variant={"primary"}
                  className="rounded-full"
                >
                  {btnText.View_All_Services}
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dot pt-4">
          <Splide options={options} hasTrack={false}>
            <SplideTrack className="py-5 !px-0">
              {data?.length ? (
                data.map((item, i) => (
                  <SplideSlide key={i}>
                    <ServicesSectionCards {...item} link={link} />
                  </SplideSlide>
                ))
              ) : (
                <NotFound />
              )}
            </SplideTrack>
          </Splide>
        </div>
        <div className="flex justify-start md:hidden pt-14">
          <Link href="/guide" className="text-nowrap" variant={`primary`}>
            {btnText.View_All_Services}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
