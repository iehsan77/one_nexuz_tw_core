import { SEOAction } from "@/actions/seo-action";
import { isIndex } from "@/constants/constants";
import ServicesPage from "@/view/ServicesPages/ServicesPage";
import React, { Suspense } from "react";
import ar from "@/locales/ar/digitalBranding.json";
import en from "@/locales/en/digitalBranding.json";
import Loader from "@/components/Loader";

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
    // robots: {
    //   index: isIndex,
    //   nocache: false,
    // },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.png",
    },
  };
}

export default async function Page({ params }) {
  const { locale } = await params;
  const t = locale === "ar";
  return (
    <Suspense fallback={<Loader />}>
      <ServicesPage
        data={t ? ar : en}
        locale={t}
        compare={true}
        path={locale}
      />
    </Suspense>
  );
}
