import { SEOAction } from "@/actions/seo-action";
import Loader from "@/components/Loader/Loader";
import { isIndex } from "@/constants/constants";
import Thankyou from "@/sections/Thankyou/Thankyou";
import React, { Suspense } from "react";

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

export default function page() {
  return (
    <Suspense fallback={<Loader />}>
      <Thankyou />
    </Suspense>
  );
}
