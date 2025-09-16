import React from "react";
import CareerForm from "@/sections/CareerForm";
import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";

export async function generateMetadata() {
  const vMetaData = await SEOAction();
  return {
    title: vMetaData?.seo_title || "",
    description: vMetaData?.seo_description || "",
    alternates: {
      canonical: vMetaData?.canonical_url || "",
    },
    openGraph: vMetaData?.opengraph_data,
    twitter: vMetaData?.twitter_tag,
    robots: {
      index: isIndex,
      nocache: false,
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

export default async function Page() {
  const { h1, faq } = await generateMetadata();
  return (
    <>
      <CareerForm />
    </>
  );
}
