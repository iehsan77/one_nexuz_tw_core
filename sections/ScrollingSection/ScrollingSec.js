"use client";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "@/components/Image/Image";
import Heading3 from "@/components/Typography/Heading3";
import Heading5 from "@/components/Typography/Heading5";
import Button from "@/components/Button/Button";
import { SkeletonBlogCard1 } from "@/mockData/Skeleton";
import SplideSlider from "@/components/SplideSlider/SplideSlider";

const assetsData = [
  {
    imageUrl: "/assets/images/image_46.webp",
  },
  {
    imageUrl: "/assets/images/image_47.webp",
  },
  {
    imageUrl: "/assets/images/image_48.webp",
  },
  {
    imageUrl: "/assets/images/image_49.webp",
  },
  {
    imageUrl: "/assets/images/image_50.webp",
  },
  {
    imageUrl: "/assets/images/image_51.webp",
  },
];

const tabs = ["Features", "Details", "Safety"];

const highlightedFeatures = [
  "Alloy Wheels", "Backup Camera/Assist", "Blind Spot Monitor", "Bluetooth",
  "Cooled Seats", "Head-Up Display", "Heated Seats", "Keyless Entry",
  "Leather Seats", "Navigation System", "Power Seats", "Premium Sound System",
  "Remote Start", "Satellite Radio", "Stability Control", "Traction Control",
];

const allFeatures = {
  "Audio and Navigation": [
    "14 Speakers", "Bose Sound System", "Chevrolet Infotainment System",
  ],
  "Package": [
    "Convenience Package", "Preferred Equipment Package", "Z07 Performance Package",
  ],
  "Safety and Security": [
    "4-Wheel Disc Brakes", "Anti-Lock Brakes", "Anti-Theft System",
  ],
  "Other Car Features": [
    "20 Inch Wheels", "AM/FM", "Alloy Wheels",
  ],
  "Comfort and Convenience": [
    "Adjustable Seats", "Adjustable Steering Wheel", "Air Conditioning",
  ],
  "Performance": [
    "4-Wheel Independent Suspension", "Adaptive Suspension", "Speed-Sensing Steering",
  ],
};
const highlightedDetails = [
  "Alloy Wheels", "Backup Camera/Assist", "Blind Spot Monitor", "Bluetooth",
  "Cooled Seats", "Head-Up Display", "Heated Seats", "Keyless Entry",
  "Leather Seats", "Navigation System", "Power Seats", "Premium Sound System",
  "Remote Start", "Satellite Radio", "Stability Control", "Traction Control",
];

const allDetails = {
  "Audio and Navigation": [
    "14 Speakers", "Bose Sound System", "Chevrolet Infotainment System",
  ],
  "Package": [
    "Convenience Package", "Preferred Equipment Package", "Z07 Performance Package",
  ],
  "Safety and Security": [
    "4-Wheel Disc Brakes", "Anti-Lock Brakes", "Anti-Theft System",
  ],
  "Other Car Features": [
    "20 Inch Wheels", "AM/FM", "Alloy Wheels",
  ],
  "Comfort and Convenience": [
    "Adjustable Seats", "Adjustable Steering Wheel", "Air Conditioning",
  ],
  "Performance": [
    "4-Wheel Independent Suspension", "Adaptive Suspension", "Speed-Sensing Steering",
  ],
};
const highlightedSafety = [
  "Alloy Wheels", "Backup Camera/Assist", "Blind Spot Monitor", "Bluetooth",
  "Cooled Seats", "Head-Up Display", "Heated Seats", "Keyless Entry",
  "Leather Seats", "Navigation System", "Power Seats", "Premium Sound System",
  "Remote Start", "Satellite Radio", "Stability Control", "Traction Control",
];

const allSafety = {
  "Audio and Navigation": [
    "14 Speakers", "Bose Sound System", "Chevrolet Infotainment System",
  ],
  "Package": [
    "Convenience Package", "Preferred Equipment Package", "Z07 Performance Package",
  ],
  "Safety and Security": [
    "4-Wheel Disc Brakes", "Anti-Lock Brakes", "Anti-Theft System",
  ],
  "Other Car Features": [
    "20 Inch Wheels", "AM/FM", "Alloy Wheels",
  ],
  "Comfort and Convenience": [
    "Adjustable Seats", "Adjustable Steering Wheel", "Air Conditioning",
  ],
  "Performance": [
    "4-Wheel Independent Suspension", "Adaptive Suspension", "Speed-Sensing Steering",
  ],
};
gsap.registerPlugin(ScrollTrigger);

const ScrollingSec = () => {
  const [pos, setPos] = useState(1653);
  const [activeTab, setActiveTab] = useState("Features");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cards = document.querySelectorAll(".custom-card");
    const height = 613;
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".cards",
        pin: true,
        scrub: 1,
        start: "top 10%",
        end: "+=600",
        onLeave: (self) => {
          // console.log("ScrollTrigger has reached the end point and left the viewport.", self.spacer.style);
          self.spacer.style.height = "1200px";
          self.spacer.style.paddingBottom = "300px";
          setPos(600);
          // Add any other actions you want to take place when this happens.
        },
      },
    });
    cards.forEach((card, index) => {
      timeline.fromTo(
        card,
        {
          y: height * index,
        },
        {
          y: 0,
          duration: 0.5,
          ease: "none",
          position: "absolute",
        },
        "-=0.10"
      );
    });
    setLoading(false)
  }, []);


  const options = {
    type: "loop",
    resolve: "left",
    perPage: 1,
    padding: "0.8rem",
    perMove: 1,
    pagination: true,
    gap: "15px",
    arrows: true,
    autoplay: true,
    autoScroll: {
      speed: 1,
    },
    mediaQuery: "min",
    breakpoints: {
      640: { perPage: 2 },
      1024: { perPage: 3 },
    },
  };

  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8">
        {/* Image Column */}
        <div className="lg:block hidden">
          <div className="cards relative" style={{ height: `${pos}px` }}>
            {assetsData.map((item, index) => (
              <div
                key={index}
                className={`custom-card ${item.top} ${item.zIndex} w-full`}
              >
                <Image
                  src={item.imageUrl}
                  width={760}
                  height={500}
                  alt={``}
                  className={`rounded-xl`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Image Column */}
        <div className="lg:hidden block dot mb-6">
          {assetsData?.length ? (
            <div className="">
              {loading ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[...Array(3)].map((_, index) => (
                    <SkeletonBlogCard1 key={index} />
                  ))}
                </div>
              ) : (
                <SplideSlider options={options} data={assetsData} >
                  <DetailImages />
                </SplideSlider>
              )}
            </div>
          ) : (
            <p>No posts available</p>
          )}

        </div>

        {/* Detail Column */}
        <div className="lg:bg-[url(/assets/icons/frame2147224905.svg)] bg-cover bg-no-repeat bg-top">
          <div className="sticky lg:!top-20 !top-12">
            <div className="">
              <Heading3 blackHeading={`^2023 Chevrolet Corvette`} className={`!mb-2`} />
              <p className="font-semibold">{`Z06`}</p>
              <p>{`2,150 miles`}</p>
              <Heading5 blackHeading={`^$157,900`} className={`!mb-2`} />
              <p>{`est. $3,441/mo`}</p>
            </div>
            <div className="pt-4 flex justify-between">
              <Heading3 blackHeading={`Vehicle Insights`} className={`!mb-2`} />
              {/* Tabs */}
              <div className="flex space-x-6 border-b border-gray-300 mb-6">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-2 font-semibold xs:text-lg text-sm hover:cursor-pointer ${activeTab === tab
                      ? "border-b-2 border-black text-black"
                      : "text-gray-500 hover:text-black"
                      }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
            {/* Tab Content */}
            {activeTab === "Features" && (
              <>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Highlighted Features</h3>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                    {highlightedFeatures.map((feature, idx) => (
                      <li key={idx} className="xs:text-sm text-xs list-inside list-disc">
                        {feature}
                      </li>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">All Vehicle Features</h3>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-6">
                    {Object.entries(allFeatures).map(([section, items]) => (
                      <div key={section}>
                        <h4 className="font-semibold text-sm mb-2">{section}</h4>
                        <ul className="space-y-1">
                          {items.map((item, idx) => (
                            <li key={idx} className="xs:text-sm text-xs list-disc list-inside">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}

            {activeTab == "Details" && (
              <>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Highlighted Details</h3>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                    {highlightedDetails.map((feature, idx) => (
                      <li key={idx} className="xs:text-sm text-xs list-inside list-disc">
                        {feature}
                      </li>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">All Vehicle Details</h3>
                  <div className="grid grid grid-cols-2 xl:grid-cols-3 gap-6">
                    {Object.entries(allDetails).map(([section, items]) => (
                      <div key={section}>
                        <h4 className="font-semibold text-sm mb-2">{section}</h4>
                        <ul className="space-y-1">
                          {items.map((item, idx) => (
                            <li key={idx} className="xs:text-sm text-xs list-disc list-inside">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            {activeTab == "Safety" && (
              <>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">Highlighted Safety</h3>
                  <div className="grid grid-cols-2 xl:grid-cols-3 gap-2 mb-6">
                    {highlightedSafety.map((feature, idx) => (
                      <li key={idx} className="xs:text-sm text-xs list-inside list-disc">
                        {feature}
                      </li>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-red-600 mb-2">All Vehicle Safety</h3>
                  <div className="grid grid grid-cols-2 xl:grid-cols-3 gap-6">
                    {Object.entries(allSafety).map(([section, items]) => (
                      <div key={section}>
                        <h4 className="font-semibold text-sm mb-2">{section}</h4>
                        <ul className="space-y-1">
                          {items.map((item, idx) => (
                            <li key={idx} className="xs:text-sm text-xs list-disc list-inside">{item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
            <div className={`pt-6 rounded-2xl overflow-hidden`}>
              <div className={`bg-[url(/assets/icons/frame427320841.svg)] bgimg`}>
                <div className="xs:p-6 p-3">
                  <div className="flex items-end justify-between">
                    <div className="">
                      <Heading3 blackHeading={`Dealer Information`} className={`!mb-2`} />
                      <Heading5 blackHeading={`Jupiter Chevrolet`} className={`!mb-2`} />
                      <p>Garland, TX, 11611 Lyndon B Johnson Freeway</p>
                    </div>
                    <div>
                      <Image
                        src={`/assets/images/image_74.webp`}
                        width={110}
                        height={58}
                        alt={``}
                      // className={`w-full`}
                      />
                    </div>
                  </div>
                  <div className="pt-4">
                    <Image
                      src={`/assets/images/image_52.webp`}
                      width={660}
                      height={500}
                      alt={``}
                      className={`w-full rounded-2xl`}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <Button
                text={`Buy Now`}
                variant={`primary`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailImages = ({ imageUrl }) => {
  return (
    <>
      <Image
        src={imageUrl}
        width={760}
        height={500}
        alt={``}
        className={`rounded-xl`}
      />
    </>
  )
}
export default ScrollingSec;
