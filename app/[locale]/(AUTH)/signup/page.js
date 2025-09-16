import { SEOAction } from "@/actions/seo-action";
import Image from "@/components/Image/Image";
import Signup from "@/components/UserAuth/Signup";
import { isIndex } from "@/constants/constants";
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

const page = () => {
  return (
    <>
      <section className="py-4 md:py-0">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-[100vh]">
          <div className="min-h-[100vh] md:block hidden">
            <Image
              src={`/assets/images/image_62.png`}
              width={845}
              height={1024}
              alt={`Auth Image`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-center items-center h-full md:px-0 px-6 py-6">
            <div className="w-full max-w-lg 2xl:max-w-xl">
              <Suspense>
                <Signup />
              </Suspense>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
