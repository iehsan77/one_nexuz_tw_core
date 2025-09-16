import React, { Suspense } from "react";
import { headers } from "next/headers";
import Loading from "./loading";
import { isIndex, vendorId } from "@/constants/constants";
import { getBlogDetail } from "@/actions/blog-actions";
import GuideDetailSection from "@/sections/GuidesSection/GuideDetailSection";

export async function generateMetadata({ params }) {
  const {slug} = await params;
  const vMetaData = await getBlogDetail(0, vendorId, slug);

  return {
    title: vMetaData.data[0]?.seo_title || "",
    description: vMetaData.data[0]?.seo_description || "",
    keywords: vMetaData.data[0]?.seo_keywords || "",
    alternates: {
      canonical: vMetaData.data[0]?.seo_canonical || "",
    },
    openGraph: {
      title: vMetaData.data[0]?.seo_title || "",
      site: "HJK",
      url: vMetaData.data[0]?.seo_url || "",
      description: vMetaData.data[0]?.seo_description || "",
      type: "website",
      image: vMetaData.data[0]?.seo_url || "",
    },
    twitter: {
      card: " summary_large_image",
      site: " @HJK",
      title: vMetaData.data[0]?.title || "",
      description: vMetaData.data[0]?.seo_description || "",
      images: ["https://HJK.ae/assets/images/logo.png"],
    },
    robots: {
      index: isIndex,
      nocache: true,
    },
    icons: {
      icon: "/icon.jpg",
    },
  };
}

const page = async ({ params }) => {
  const {slug} = await params;
  const headersList = await headers();
  const header_url = headersList.get("x-url") || "";
  const slug2 = header_url?.split("/blog/")[1];
  const res = await getBlogDetail(0, vendorId, slug2);
  return (
    <Suspense fallback={<Loading />}>
      <section className="">
        <div className="container">
          <GuideDetailSection
            slug={slug}
            data={res?.data}
            nextPrev={res?.others_blogs}
          />
        </div>
      </section>
    </Suspense>
  );
};

export default page;
