"use client";
import { POST_JSON } from "@/actions/actions";
import NotFound from "@/components/NotFound/NotFound";
import Pagination from "@/components/Pagination/Pagination";
import SortingDropdown from "@/components/SortingDropdown/SortingDropdown";
import FilterSidebar from "@/sections/Filter/FilterSidebar";
import { endpoints } from "@/utils/endpoints";
import React, { useContext, useEffect, useRef, useState } from "react";
import Button from "@/components/Button/Button";
import Heading2 from "@/components/Typography/Heading2";
import Image from "@/components/Image/Image";
import ProductCard, {
  ProductCardSkeleton
} from "@/components/Card/ProductCard";
import useFilterStore from "@/stores/filterStore";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import {
  allCarsFilterDatadummy,
  btnTextAr,
  btnTextEn
} from "@/mockData/dummyData";

const Listing = ({ slug }) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState();
  const { filters } = useFilterStore();
  const [sort, setSort] = useState();
  const modalRef = useRef(null);
  const { locale } = useContext(LanguageContext);
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;

  // Close modal when clicking outside
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsModalOpen(false);
    }
  };
  useEffect(() => {
    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  const handleSortChange = (sortOption) => {
    setSort(sortOption);
  };

  const fetchData = async () => {
    const hasFilters =
      filters.category_id ||
      filters.brand_id ||
      filters.body_type_id ||
      filters.color_id ||
      sort !== "";

    const body = {
      nPerPage: 12,
      pageNumber,
      category_id: filters.category_id || 0,
      brand_id: filters.brand_id || 0,
      model_id: filters.model_id || 0,
      body_type_id: filters.body_type_id || 0,
      price_min: filters.price_min || 0,
      price_max: filters.price_max || 0,
      color_id: filters.color_id || 0,
      keywords: "",
      year: filters.year || "",
      showAll: !hasFilters,
      sort_by: sort || ""
    };

    try {
      setLoading(true);
      setError(null);
      const res = await POST_JSON(endpoints.LISTING.LISTING_FILTER, body);
      if (res?.status === 200) {
        setLoading(false);
        setData(res?.data);
        setCount(res?.total_records);
      } else {
        setLoading(false);
        setError(res?.message || "Failed to fetch data");
      }
    } catch (err) {
      setLoading(false);
      setError("Something went wrong");
    }
  };

  const handlePageNumber = (data) => {
    setPageNumber(data);
  };

  useEffect(() => {
    fetchData();
  }, [pageNumber, filters, sort]);

  useEffect(() => {
    setPageNumber(1);
  }, [filters]);

  return (
    <>
      <div className="container">
        <div className="grid lg:grid-cols-5 gap-8">
          <div className="col-span-1 hidden lg:block">
            <FilterSidebar />
          </div>

          <div className="lg:col-span-4 sm:col-span-2 pt-3">
            {/* <div className=" mb-4"> */}
            <div className="lg:hidden flex justify-center mb-4">
              <Button
                variant="outline"
                onClick={() => setIsModalOpen(true)}
                className="w-[220px] !text-secondary !border-secondary hover:!text-secondary"
                text={
                  <span className="flex items-center justify-center gap-2">
                    <Image
                      src="/assets/icons/filter.svg"
                      alt="Filter Icon"
                      width={16}
                      height={16}
                    />
                    <span>{locale === "ar" ? "فلتر" : "Filter"}</span>
                  </span>
                }
              />
            </div>
            <div className="flex items-start justify-between mb-4 gap-4">
              <div className="flex flex-col items-start gap-2">
                <Button variant="primary" text={btnText.tag} />
                <Heading2
                  blackHeading={
                    locale === "ar" ? "سيارة في دبي" : "Cars in Dubai"
                  }
                  className={`text-nowrap !mb-0`}
                />
              </div>
              <SortingDropdown onChange={handleSortChange} />
            </div>
            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {[...Array(14)].map((_, index) => (
                  <ProductCardSkeleton key={index} />
                ))}
              </div>
            ) : allCarsFilterDatadummy?.length ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {allCarsFilterDatadummy?.map((item, i) => (
                  <ProductCard key={i} data={item} />
                ))}
              </div>
            ) : (
              <NotFound />
            )}
            <div className="flex justify-end pt-6">
              <Pagination
                count={count}
                handlePageNumber={handlePageNumber}
                pageNumber={pageNumber}
                itemsPerPage={12}
              />
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div
            ref={modalRef}
            className="relative bg-white rounded-lg p-6 w-full max-w-2xl max-h-[80vh] flex flex-col shadow-xl border border-grayLight overflow-y-auto"
            style={{ minHeight: "500px" }}
          >
            <div className="absolute top-2 right-2">
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <FilterSidebar modal={true} />
          </div>
        </div>
      )}
    </>
  );
};

export default Listing;
