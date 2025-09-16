"use client";
import React from "react";
import Heading2 from "@/components/Typography/Heading2";
import Image from "@/components/Image/Image";
import Heading5 from "@/components/Typography/Heading5";

const serviceCards = [
  {
    type: "text",
    title: "Maintenance & Servicing",
    description:
      "Keep your vehicle in top shape with expert servicing tailored to your car's needs.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_62.webp"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_63.webp"
  },
  {
    type: "text",
    title: "Detailing & Wash",
    description:
      "Bring back the shine with premium exterior and interior car cleaning packages.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "text",
    title: "Car Insurance",
    description:
      "Get competitive quotes and reliable coverage through our trusted insurance partners.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_64.webp"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_65.webp"
  },
  {
    type: "text",
    title: "Car Finance",
    description:
      "Flexible financing options designed to fit your budget buy smarter with Vortexx.",
    bgClass: "bg-pingLight text-black"
  },

  {
    type: "text",
    title: "Car Evaluation",
    description:
      "Knowing the true value of your car is crucial whether you're selling, trading, or insuring it.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_66.webp"
  }
];
const serviceCards2 = [
  {
    type: "text",
    title: "Maintenance & Servicing",
    description:
      "Keep your vehicle in top shape with expert servicing tailored to your car's needs.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_28.webp"
  },
  
  {
    type: "text",
    title: "Car Insurance",
    description:
      "Get competitive quotes and reliable coverage through our trusted insurance partners.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_27.webp"
  },
 {
    type: "text",
    title: "Car Evaluation",
    description:
      "Knowing the true value of your car is crucial whether you're selling, trading, or insuring it.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_26.webp"
  },
  
  {
    type: "text",
    title: "Detailing & Wash",
    description:
      "Bring back the shine with premium exterior and interior car cleaning packages.",
    bgClass: "bg-pingLight text-black"
  },
{
    type: "image",
    imageURL: "/assets/images/image_25.webp"
  },
  {
    type: "text",
    title: "Car Finance",
    description:
      "Flexible financing options designed to fit your budget buy smarter with Vortexx.",
    bgClass: "bg-pingLight text-black"
  },
  {
    type: "image",
    imageURL: "/assets/images/image_24.webp"
  }
];

const FullServicesSection = () => {
  return (
    <section className="pt-12">
      <div className="container">
        <div className="max-w-3xl mb-8 mx-auto">
          <Heading2
            blackHeading="Solutions That Drive Results"
            className="mt-4 text-center"
          />
        </div>
        <div className="sm:block hidden columns-1 lg:columns-5 md:columns-2 sm:columns-2 gap-5 space-y-5">
          {serviceCards.map((item, index) =>
            item.type === "image" ? (
              <div
                key={index}
                className="w-full break-inside-avoid rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[246/383]">
                  <Image
                    src={item.imageURL}
                    alt={`Image ${index}`}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`w-full aspect-[246/230] break-inside-avoid rounded-xl p-5 shadow-sm flex flex-col items-center justify-center ${item.bgClass} bg-[url(/assets/icons/icons_94.svg)] bgImage`}
              >
                <Heading5
                  className="mb-2 text-center"
                  blackHeading={item.title}
                />
                <p className="text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
        <div className="sm:hidden block columns-1 space-y-5">
          {serviceCards2.map((item, index) =>
            item.type === "image" ? (
              <div
                key={index}
                className="w-full break-inside-avoid rounded-xl overflow-hidden"
              >
                <div className="relative aspect-[246/383]">
                  <Image
                    src={item.imageURL}
                    alt={`Image ${index}`}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
              </div>
            ) : (
              <div
                key={index}
                className={`w-full aspect-[246/230] break-inside-avoid rounded-xl p-5 shadow-sm flex flex-col items-center justify-center ${item.bgClass} bg-[url(/assets/icons/icons_94.svg)] bgImage`}
              >
                <Heading5
                  className="mb-2 text-center"
                  blackHeading={item.title}
                />
                <p className="text-sm leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default FullServicesSection;
