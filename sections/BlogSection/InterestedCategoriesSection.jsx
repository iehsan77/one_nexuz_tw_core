"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Heading2 from "@/components/Typography/Heading2";
import {
  SkeletonInterestedCategoriesbtn,
  SkeletonInterestedCategoriessticky
} from "@/mockData/Skeleton";
import { getBlogCategories } from "@/actions/blog-actions";
import { vendorId } from "@/constants/constants";

const InterestedCategoriesSection = ({
  className,
  isSingleIndex,
  isStickyBar
}) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  useEffect(() => {
    setLoading(true);
    const fetch = async () => {
      const body = {
        vendor_website_id: vendorId,
        isActive: 1,
        isDeleted: 0,
        ShowAll: true
      };
      const res = await getBlogCategories(body);
      setData(res?.data);
      setLoading(false);
    };
    fetch();
  }, []);
  const [activeTab, setActiveTab] = useState("View All");

  const tabs = [
    { id: "View All", label: "View All" },
    { id: "Sales", label: "Sales & Customer Service" },
    { id: "Product", label: "Product & Fashion Photography" },
    { id: "Content", label: "Content Creation & Social Media" },
    { id: "Design", label: "Design & Trend Research" },
    { id: "Warehouse", label: "Warehouse & Inventory Management" },
    { id: "Warehouse", label: "Inventory Management" },
  ];
  return (
    <>
      {isSingleIndex ? (
        data?.length ? (
          <Link
            href={`/blog/category/${data[0]?.title
              ?.replace(/\s+/g, "-")
              .toLowerCase()}?category_id=${data[0]?.id}`}
          >
            <p className="bg-primary text-white py-1 px-2 rounded-md text-xs inline-flex">
              {data[0]?.title}
            </p>
          </Link>
        ) : (
          ""
        )
      ) : isStickyBar ? (
        <>
          <div className="mb-5 border p-4">
            <Heading2
              blackHeading={"Categories"}
              className={`!text-black pb-4`}
            />
            <ul className="list-disc ml-6">
              {loading ? (
                <>
                  {[...Array(15)].map((_, index) => (
                    <div key={index}>
                      <SkeletonInterestedCategoriessticky />
                    </div>
                  ))}
                </>
              ) : (
                data?.map((item, index) => (
                  <Link
                    key={index}
                    className={`${className} text-[#555555] font-[500] hover:text-primary hover:underline hover:underline-offset-2`}
                    href={`/blog/category/${item?.title
                      ?.replace(/\s+/g, "-")
                      .toLowerCase()}?category_id=${item?.id}`}
                  >
                    <li className={`${className} mb-2 `}>{item?.title}</li>
                  </Link>
                ))
              )}
            </ul>
          </div>
        </>
      ) : (
        <section
          className={`py-10 ${className}`}
        >
          <div className="container">
            {/* <div className="max-w-[1024px] mx-auto mb-5">
              <Heading2 blackHeading={"Categories"} className={`text-center`} />
            </div> */}
            <div>
              {loading ? (
                <div className={`flex justify-between pt-10`}>
                  {[...Array(8)].map((_, index) => (
                    <SkeletonInterestedCategoriesbtn key={index} />
                  ))}
                </div>
              ) : (
                <>
                  {data?.length ? (
                    <>
                      {/* Tab Buttons */}
                      <div className="flex  overflow-x-auto pb-2 space-x-4 border-b border-gray-200 pt-10">
                        {tabs.map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`py-2 px-4 text-sm font-medium  text-nowrap ${
                              activeTab === tab.id
                                ? "border-b-2 border-red-600 text-red-600"
                                : "text-gray-500 hover:text-gray-700"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </div>
                    </>
                  ) : (
                    <p className="text-center">No categories available</p>
                  )}
                </>
              )}
            </div>
          </div>
        </section>
      )}
    </>
  );
};
export default InterestedCategoriesSection;
