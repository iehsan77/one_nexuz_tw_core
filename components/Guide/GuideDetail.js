"use client";
import React from "react";
import Paragraph from "@/components/Typography/Paragraph";
import { SEOAction } from "@/actions/seo-action";
import Image from "../Image/Image";
import Heading2 from "../Typography/Heading2";
import Heading5 from "../Typography/Heading5";

// Metadata Generator
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
      index: true,
      nocache: true,
    },
    faq: vMetaData?.faq?.mainEntity || null,
    icons: {
      icon: "/icon.jpg",
    },
  };
}

// Main Component
const GuideDetail = ({ data = [] }) => {
  return (
    <section className="pt-24">
      <div className="container mx-auto space-y-10">
        {data.length > 0 &&
          data.map((item, index) => (
            <div key={index} className="space-y-4">
              <Heading2 blackHeading={item.title} className={`!mb-0`} />
              <Paragraph blackText1={item.description} />
              <p className="text-sm text-gray-500">{item.createdDate}</p>
              <Image
                src={item.image}
                width={1000}
                height={418}
                alt={item.title}
                className="rounded-md"
              />

              {item.gDetail.length > 0 && (
                <div className="space-y-4">
                  {item.gDetail.map((detail, i) => (
                    <div key={i}>
                      <Heading5
                        blackHeading={detail.title}
                        className={`!mb-0`}
                      />
                      {detail.paragraph?.length > 0 &&
                        detail.paragraph.map((para, ind) => (
                          <Paragraph
                            className=""
                            blackText1={para}
                            key={ind}
                          />
                        ))}
                      
                      {detail.lists?.length > 0 && (
                        <ul className="list-disc ml-4">
                          {detail.lists.map((list, i) => (
                            <li key={i}>
                              <Paragraph blackText1={list} />
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  
                </div>
              )}
            </div>
          ))}
      </div>
    </section>
  );
};

export default GuideDetail;
