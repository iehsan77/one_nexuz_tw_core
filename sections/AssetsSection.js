"use client";
import React, { useContext } from "react";
import Image from "@/components/Image/Image";
import Heading4 from "@/components/Typography/Heading4";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
import Link from "@/components/Link/Link";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Heading5 from "@/components/Typography/Heading5";

const AssetsSection = ({
  topTitle,
  heading,
  bottomTitle,
  paragraph,
  list,
  lists,
  imageUrl,
  imageW,
  heading2,
  imageH,
  reverse,
  callNowBtn,
  imageAlt,
  text,
  href,
  listTitle,
  colorChange,
}) => {
  const { locale } = useContext(LanguageContext);
  return (
    <section className={`secPadding`}>
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-4">
          <div className={`flex flex-col justify-center `}>
            {topTitle && <Heading4 blackText1={topTitle} />}
            {heading2 &&
              < Heading2 blackHeading={heading2} className={`!mb-0`} />
            }
            <Heading2 blackHeading={heading} />
            {bottomTitle && <Heading4 blackHeading={listTitle} />}
            <div>
              {paragraph?.map((para, ind) => (
                <Paragraph blackText1={para} key={ind} className="" />
              ))}
              {list && (
                <ul className="space-y-1 pt-2">
                  {listTitle && <Heading5 blackHeading={listTitle} />}
                  {list?.map((item, ind) => {
                    const segments = item.split("^"); // Handle inline emphasis
                    return (
                      <li className="displayPara text-black list-disc ml-6" key={ind}>
                        {segments.map((text, index) =>
                          index % 2 === 0 ? (
                            text
                          ) : (
                            <span key={index} className="text-black font-semibold">
                              {text}
                            </span>
                          )
                        )}
                      </li>
                    );
                  })}
                </ul>
              )}
              {lists && lists.length > 0 && (
                <div className="mt-4 space-y-4">
                  {lists.map((item, idx) => (
                    <div key={idx}>
                      <Heading4
                        blackHeading={item.subHeading}
                        className="mb-2 !text-primary"
                      />
                      <Paragraph blackText1={item.text} />
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="flex gap-4 mt-4">
              {callNowBtn && (
                <Link
                  variant={`primary`}
                  href={`/${locale}/${href || "category"}`}
                  className={`${colorChange ? "bg-secondary" : ""}`}>
                  {text}
                </Link>
              )}
            </div>
          </div>
          <div
            className={`flex ${reverse ? "lg:order-first order-last lg:justify-start" : "lg:justify-end"
              }`}>
            <div className="relative">
              <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
                <Image
                  src={"/assets/icons/wm_11.svg"}
                  alt={"logo"}
                  fill
                  className="opacity-35 scale-150"
                />
              </div>
            <Image
              src={imageUrl}
              alt={imageAlt}
              width={imageW}
              height={imageH}
              className="rounded-xl"
            />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssetsSection;
