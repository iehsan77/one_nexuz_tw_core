"use client";
import React, { Suspense, useContext, useState } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { GET } from "@/actions/actions";
import { endpoints } from "@/utils/endpoints";
import { useEffect } from "react";
import Loader from "@/components/Loader/Loader";
import ProductCardSection from "../ProductCardSection";
import Banner from "@/components/Banners/Banner";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import {
  btnTextAr,
  btnTextEn,
  featuredDatadummy,
  GuideToBuying,
  homeTitleAr,
  homeTitleEn
} from "@/mockData/dummyData";
import TestimonialsVideosSection from "../TestimonialsVideosSection";
import SocialCommunitySection from "../SocialCommunitySection";
import StillHaveQuestions from "../StillHaveQuestions";
import FaqsSection from "../FaqsSection";
import GuidesSection from "../GuidesSection/GuidesSection";
import ScrollingSec from "../ScrollingSection/ScrollingSec";
import { faq1 } from "@/mockData/faqDummy";
import Image from "@/components/Image/Image";

const ProductDetail = ({ slug, faq }) => {
  const { locale } = useContext(LanguageContext);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [likeData, setLikeData] = useState([]);
  const [featuredLoading, setFeaturedLoading] = useState(false);
  const [featuredError, setFeaturedError] = useState(null);
  const [likeLoading, setLikeLoading] = useState(false);
  const [likeError, setLikeError] = useState(null);
  const blogTitle = locale === "ar" ? homeTitleAr : homeTitleEn;
  const homeTilte = locale === "ar" ? homeTitleAr : homeTitleEn;
  const btnText = locale === "ar" ? btnTextAr : btnTextEn;
  // Detail api
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await GET(endpoints.DETAILS.GET_CAR_DETAILS(slug));
        if (res?.status === 200) {
          setLoading(false);
          setError(null);
          setData(res?.data);
        } else {
          setLoading(false);
          setError(res?.message || "Failed to load categories");
        }
      } catch (err) {
        setLoading(false);
        setError(err.message || "Error loading navigation");
      }
    };
    fetchData();
  }, []);

  // You may like api
  useEffect(() => {
    const fetchYouMayLike = async () => {
      try {
        setLikeLoading(true);
        setLikeError(null);
        const res = await GET(
          endpoints.DETAILS.GET_YOU_MAY_LIKE(
            data?.manufacturer_id,
            data?.category_id,
            data?.id
          )
        );
        if (res?.status === 200) {
          setLikeLoading(false);
          setLikeError(null);
          setLikeData(res?.data);
        } else {
          setLikeLoading(false);
          setLikeError(res?.message || "Failed to load categories");
        }
      } catch (err) {
        setLikeLoading(false);
        setLikeError(err.message || "Error loading navigation");
      }
    };

    if (data?.manufacturer_id && data?.category_id && data?.id) {
      fetchYouMayLike();
    }
  }, [data?.manufacturer_id, data?.category_id, data?.id]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div>
          <ScrollingSec />
          <ProductCardSection
            heading={homeTilte.featured2}
            data={featuredDatadummy}
            tBtn={btnText.view_all_cars}
            bBtn={btnText.view_all_cars}
            loading={featuredLoading}
            error={featuredError}
            btnright={true}
            cardNum={3}
          />
          <GuidesSection
            heading="Essential Car Buying Tips"
            paragraph={[`Navigate the car buying process with confidence.`]}
            data={GuideToBuying}
            link
          />
          <TestimonialsVideosSection />
          <Banner
            heading={`Drive Luxury on Your Terms with Car Solutions`}
            link={`/listing`}
            linktxt={`Explore Our Collection`}
            image={`bg-[url(/assets/images/image_34.webp)]`}
            paragraph={[
              `Experience the pinnacle of automotive excellence. Whether you're looking to buy or sell premium vehicles, Car Solutions offers a seamless, transparent, and hassle-free journey`
            ]}
          />
          <LatestBlogs
            heading={homeTilte.blog_title}
            paragraph={[
              `Stay updated with the latest automotive trends, expert insights, and industry news. From new car launches to buying tips and market updates, we keep you informed and ahead of the curve.`
            ]}
          />
          <SocialCommunitySection />
          <div className="relative">
            <div className="absolute left-0 bottom-0 -z-10">
              <Image
                src={"/assets/icons/wm_05.svg"}
                alt={"logo"}
                width={350}
                height={543}
                className=""
              />
            </div>
            <FaqsSection data={faq1} />
            <StillHaveQuestions />
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetail;
