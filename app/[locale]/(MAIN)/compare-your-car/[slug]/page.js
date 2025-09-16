import React, { Suspense } from "react";
import Loader from "@/components/Loader/Loader";
import CompareCar from "@/view/CompareCar/CompareCar";
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
      nocache: true,
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const page = async ({ params }) => {
  const { slug } = await params;
  return (
    <Suspense fallback={<Loader />}>
      <CompareCar slug={slug} />
    </Suspense>
  );
};

export default page;
