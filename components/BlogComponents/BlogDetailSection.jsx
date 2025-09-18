"use client";
import React, { useEffect, useState } from "react";
import BlogStickyBar from "@/components/BlogComponents/BlogStickyBar";
import RelatedPosts from "@/components/BlogComponents/RelatedPosts";
import BlogsDetail from "@/components/BlogComponents/BlogsDetail";
import { useParams } from "next/navigation";
import { getBlogDetail } from "@/actions/blog-actions";
import { vendorId } from "@/constants/constants";
import InterestedCategoriesSection from "./InterestedCategoriesSection";

const BlogDetailSection = ({ id }) => {
  const [data, setData] = useState([]);
  const [nextPrev, setNextPrev] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getBlogDetail(0, vendorId, params?.slug);
      setData(res?.data);
      setNextPrev(res?.others_blogs);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      <section className="">
        <InterestedCategoriesSection className={`!py-0`} />
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-9 col-span-12 lg:pr-6 pr-0">
            <BlogsDetail
              topTitle={`Sub Heading`}
              data={data}
              nextPrev={nextPrev}
            />
            <RelatedPosts heading={"Related Posts"} data={data} />
          </div>
          <div className="lg:col-span-3 col-span-12 my-6">
            <BlogStickyBar blogCategories data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailSection;
