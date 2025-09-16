"use client";
import React, { useContext, useEffect, useState } from "react";
import { BlogCard2 } from "./BlogCard2";
import SplideSlider from "../SplideSlider/SplideSlider";
import Heading2 from "../Typography/Heading2";
import Paragraph from "../Typography/Paragraph";
import { GetBlogs } from "@/actions/blog-actions";
import { SkeletonBlogCard1 } from "@/mockData/Skeleton";
import Link from "../Link/Link";
import { vendorId } from "@/constants/constants";
import { btnTextAr, btnTextEn } from "@/mockData/dummyData";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

const options = {
  type: "loop",
  rewind: true,
  resolve: "left",
  perPage: 1,
  padding: "0.8rem",
  perMove: 1,
  pagination: true,
  gap: "18px",
  arrows: true,
  autoplay: true,
  autoScroll: {
    speed: 1,
  },
  mediaQuery: "min",
  breakpoints: {
    640: { perPage: 2 },
    1024: { perPage: 3 },
  },
};

const LatestBlogs = ({ heading, paragraph, className }) => {
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;

  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetch = async () => {
      const data = {
        id: 0,
        isActive: 1,
        isDeleted: 0,
        keywords: "",
        nPerPage: 10,
        pageNumber: 1,
        showAll: false,
        sortby: 0,
        author_id: 0,
        vendor_website_id: vendorId,
      };
      const res = await GetBlogs(data);
      setData(res?.data);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      <section
        className={`secPadding bg-[url(/assets/icons/wm_07.svg)] bg-no-repeat bg-top-right ${className}`}>
        <div className="container">
          <div className="lg:mb-10 mb-4">
            <div className="flex items-center justify-between gap-6">
              <div className="lg:basis-1/2">
                <Heading2 blackHeading={heading} className={``} />
                {paragraph?.map((para, ind) => (
                  <Paragraph className="!mb-0 flex-wrap" blackText1={para} key={ind} />
                ))}
              </div>
              <div className="sm:flex justify-center hidden ">
                <Link
                  href="/blog"
                  variant={"primary"}
                  className="rounded-full">
                  {btnText.view_all_blogs}
                </Link>
              </div>
            </div>
          </div>

          {data?.length ? (
            <div className="dot">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <SkeletonBlogCard1 key={index} />
                  ))}
                </div>
              ) : (
                <SplideSlider options={options} data={data} >
                  <BlogCard2 />
                </SplideSlider>
              )}
            </div>
          ) : (
            <p>No posts available</p>
          )}
          <div className="flex sm:hidden pt-14">
            <Link
              href="/blog"
              variant={"primary"}
              className="rounded-full">
              {btnText.view_all_blogs}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestBlogs;
