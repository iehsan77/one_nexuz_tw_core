import { SEOAction } from "@/actions/seo-action";
import Loader from "@/components/Loader";
import { isIndex, nocache } from "@/constants/constants";
import ViewAllService from "@/view/Services/ViewAllService";
import { Suspense } from "react";

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
      nocache: nocache,
    },
    h1: vMetaData?.h1 || "",
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.png",
    },
  };
}

export default function Page() {
  return (
    <Suspense fallback={<Loader />}>
      <ViewAllService />
    </Suspense>
  );
}
