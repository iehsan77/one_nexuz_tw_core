import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import OldCarsPage from "@/view/OldCars/OldCarsPage";
import React from "react";

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
      nocache: true,
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

async function page() {
  return (
    <div>
      <OldCarsPage />
    </div>
  );
}

export default page;
