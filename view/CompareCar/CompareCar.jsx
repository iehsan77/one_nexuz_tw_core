"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Banner from "@/components/Banners/Banner";
import LatestBlogs from "@/components/BlogComponents/LatestBlogs";
import { homeTitleAr, homeTitleEn } from "@/mockData/dummyData";
import CompareSection from "@/sections/CompareSection";
import TestimonialsVideoSection from "@/sections/TestimonialsVideoSection";
import { useContext } from "react";

export default function CompareCar({ slug }) {
  const { locale } = useContext(LanguageContext);
  const blogTilte = locale === "ar" ? homeTitleAr : homeTitleEn;

  return (
    <>
      <Banner image={"/assets/images/image_49.webp"} />
      <CompareSection slug={slug} />
      <Banner image={"/assets/images/image_48.webp"} />
      <TestimonialsVideoSection />
      <LatestBlogs heading={blogTilte.blog_title} />
    </>
  );
}
