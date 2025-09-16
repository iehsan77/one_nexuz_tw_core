"use client";
import React, { useEffect, useState } from "react";
import BlogCard2 from "./BlogCard2";
import Heading2 from "../Typography/Heading2";
import { GetBlogs } from "@/actions/blog-actions";
import { SkeletonBlogCard1 } from "@/mockData/Skeleton";
import { vendorId } from "@/constants/constants";

const ViewAllPostCards = ({ searchParams, lGrid, heading }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const params = {
        id: 0,
        isActive: 1,
        isDeleted: 0,
        nPerPage: 12,
        showAll: false,
        sortby: 0,
        author_id: 0,
        vendor_website_id: vendorId,
        category_id: searchParams?.category_id
          ? [searchParams?.category_id]
          : [],
        tag_id: searchParams?.tag_id ? [searchParams?.tag_id] : [],
        keywords: searchParams?.keywords ? searchParams?.keywords : "",
      };
      try {
        const res = await GetBlogs(params);
        // setData(res?.data);
        setData(res?.data);
        setTotalPages(res?.totalPages || 1);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch blogs:", error);
        setLoading(false);
      }
    };

    fetch();
  }, [searchParams]);

  return (
    <>
      <div className="">
        <div className="mb-6">
          <Heading2 blackHeading={heading} className={`!text-left`} />
        </div>
        {loading ? (
          <div
            className={`grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6 ${
              lGrid ? "lg:!grid-cols-4 md:grid-cols-2 grid-cols-1" : ""
            }`}>
            {Array.from({ length: 12 })?.map((_, index) => (
              <SkeletonBlogCard1 key={index} />
            ))}
          </div>
        ) : data && data.length > 0 ? (
          <>
            <div
              className={`grid lg:grid-cols-2 grid-cols-1 gap-4 ${
                lGrid
                  ? "xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1"
                  : ""
              }`}>
              {data?.map((blog, index) => (
                <BlogCard2 {...blog} key={index} />
              ))}
            </div>
          </>
        ) : (
          <p>No posts available</p>
        )}
      </div>
    </>
  );
};

export default ViewAllPostCards;
