"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getBlogDetail } from "@/actions/blog-actions";
import { vendorId } from "@/constants/constants";
import GuideDetail from "@/components/Guide/GuideDetail";
import GuideRelatedPosts from "@/components/Guide/GuideRelatedPosts";
import GuideStickyBar from "@/components/Guide/GuideStickyBar";
import InterestedCategoriesSection from "../BlogSection/InterestedCategoriesSection";

const guideDetailData = [
  {
    title: "Top Property Investment Hotspots in The UAE (2025 Edition)",
    description:
      "Great design seamlessly integrates with the user experience, making the interaction smooth and intuitive. It's not just about aesthetics; it's about functionality and usability, ensuring users can achieve their goals effortlessly.",
    createdDate: "Thursday, Jan 11,2024",
    image: "/assets/images/image_15.webp",
    gDetail: [
      {
        paragraph: [
          `The UAE real estate market continues to evolve with high investor confidence, government reforms, and infrastructure mega-projects redefining property opportunities. Whether you're an international investor or a local buyer, understanding where to invest in 2025 can significantly affect your returns.`,
          `Note – Ensure that your connection is secure while accessing games online, especially if they’re betting sites. Not all online gambling or gaming platforms are safe to use. For this, we recommend connecting to TV internet Deals USA to access them. It aids in better connection encryption, data protection, and other security measures. 
However, in what ways does this influence the prospects of the entertainment industry? Which new patterns are appearing, and what predictions can be made?`,
        ],
      },
      
      {
        title: "Dubai South – The Emerging Investment Magnet",
        paragraph:[
          "Thanks to Expo City and Al Maktoum International Airport expansion, Dubai South has transformed into a vibrant, futuristic urban zone attracting both residential and commercial developers.",
        ]
      },
      {
        title: "Mohammed Bin Rashid City (MBR City)",
        paragraph:[
          "These factors or prospects include:",
          "Strategically located between Downtown Dubai and Meydan, MBR City offers luxury villas, waterfront living, and high ROI potential, making it one of the hottest investment corridors.",
        ]
      },
      {
        title: "Abu Dhabi's Al Reem Island",
        paragraph:[
          "With premium seafront properties and growing infrastructure, Al Reem Island has become a preferred choice for high-net-worth individuals and families looking for luxury and lifestyle.",
        ]
      },
      {
        title: "Monetization and Economic Impact",
        paragraph:[
          "The economic contribution of online gaming cannot be underestimated. It has created fresh ways of earning income as well as work options, which include designing and developing games, being professional gamers, and creating online game content. ",
        ]
      },
      {
        title: "Jumeirah Village Circle (JVC)",
        paragraph:[
          "JVC continues to attract mid-income buyers and renters due to its affordability, growing community vibe, and easy access to major highways and business hubs.",
        ]
      },
      {
        title: "Ras Al Khaimah – Real Estate’s Rising Star",
        paragraph:[
          "Fuelled by upcoming integrated resorts, tourism projects, and investor-friendly policies, RAK is now competing with major emirates for residential and commercial investments.",
        ]
      },
      {
        title: "Why These Areas Are Booming",
        lists:[
          "High rental yields and low property prices (in select areas)",
          "Massive infrastructure development (airports, ports, metro lines)",
          "Investor residency reforms like Golden Visa and 0% tax incentives",
          "Tourism growth pushing demand for short-term and vacation rentals",
        ]
      },
      
    ],
  },
];

const GuideDetailSection = ({ id }) => {
  const [data, setData] = useState([]);
  const [nextPrev, setNextPrev] = useState([]);
  const [loading, setLoading] = useState(false);
  const params = useParams();

  useEffect(() => {
    const fetch = async () => {
      setLoading(true);
      const res = await getBlogDetail(0, vendorId, params?.slug);
      setData(res?.data);
      setNextPrev(res?.others_blogs);
      setLoading(false);
    };
    fetch();
  }, []);

  return (
    <>
      <section className="">
        <InterestedCategoriesSection className={`!py-0`} />
        <div className="grid grid-cols-12 gap-4">
          <div className="lg:col-span-9 col-span-12 lg:pr-6 pr-0">
            <GuideDetail
              topTitle={`Sub Heading`}
              data={guideDetailData}
            />
            <GuideRelatedPosts heading={"Related Posts"} data={data} />
          </div>
          <div className="lg:col-span-3 col-span-12 my-6">
            <GuideStickyBar blogCategories data={data} />
          </div>
        </div>
      </section>
    </>
  );
};

export default GuideDetailSection;
