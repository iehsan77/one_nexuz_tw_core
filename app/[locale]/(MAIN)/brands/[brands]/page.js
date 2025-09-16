import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import ListingPage from "@/view/listing/ListingPage";
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

async function page({ params }) {
  const { slug } = await params;

  return (
    <div>
      <ListingPage slug={slug} />
    </div>
  );
}

export default page;
