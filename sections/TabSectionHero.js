"use client";
import React, { useState } from "react";
import Button from "@/components/Button/Button";
import Image from "next/image";
import Heading3 from "@/components/Typography/Heading3";
import Paragraph from "@/components/Typography/Paragraph";
import Heading2 from "@/components/Typography/Heading2";
import { TabSectionHeroData } from "@/mockData/dummyData";
import Heading6 from "@/components/Typography/Heading6";



const TabSectionHero = ({ title, paragraph, isHome, }) => {
  const [activeInd, setActiveInd] = useState(0);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="secPadding">
      <div className="container mx-auto">
        <div className="lg:max-w-[1024px] w-full mx-auto">
          <div className="flex flex-col justify-center items-start">
            {title && (
              <Heading2 heading={title} className="" />
            )}
            {paragraph?.map((para, ind) => (
              <Paragraph
                content={para}
                blackText1={para}
                key={ind}
                className={`!text-center pb-6 ${isHome && "md:!text-white"
                  }`}
              />
            ))}
          </div>
        </div>

        <div>
          {TabSectionHeroData?.map(
            ({ value, body }, index) =>
              activeTab === index && (
                <div key={value}>
                  <InnerTab data={body} activeInd={activeInd} />
                </div>
              )
          )}
        </div>
      </div>
    </section>
  );
};

const InnerTab = ({ data, activeInd }) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="lg:grid lg:grid-cols-4 sm:gap-4 flex flex-col-reverse">
      <div className="lg:col-span-3 ">
        {data?.map(
          ({ value, heading, paragraph, image, link, list, listTitle }, index) =>
            activeTab === index && (
              <div key={value} className="py-0">
                <div className={`grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-8 sm:py-4`}>
                  <div>
                    <Heading3
                      blackHeading={heading}
                      className="text-start lg:text-start"
                    />

                    {paragraph?.map((para, ind) => (
                      <Paragraph
                        key={ind}
                        blackText1={para}
                        className="text-start lg:text-start"
                      />
                    ))}

                    {list?.length > 0 && (
                      <div className="py-3">
                        {listTitle && (
                          <Paragraph className="pb-4" blackText1={listTitle} />
                        )}
                        <ul className="list-disc pl-5 space-y-3">
                          {list.map(({ item, listdes }, ind) => (
                            <li key={ind} className="text-secondary font-[500]">
                              <div className="font-semibold">{item}</div>
                              <div className="text-sm text-gray-500">{listdes}</div>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <Button href={link} variant={`primary`} className={``} text={`Inquire Now`} />
                  </div>
                  <div className="md:order-last order-first">
                    <div className="flex justify-center items-start overflow-hidden">
                      <Image
                        src={image}
                        width={350}
                        height={500}
                        alt={heading}
                        priority
                        className="rounded-xl"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )
        )}
      </div>
      <div className="lg:w-full lg:col-span-1 my-4 lg:mb-0 relative">
        <div className="hidden lg:block h-full absolute top-0 right-6 w-0.5 bg-black"></div>
        <div className="bg-transparent lg:flex-col flex snap-x overflow-x-scroll lg:overflow-x-auto no-scrollbar relative h-full">
          {data?.map(({ label, value, icon }, ind) => (
            <div
              key={value}
              className={`shrink-0 w-auto snap-start lg:justify-end text-end h-auto lg:mb-8 rounded-lg lg:rounded-none lg:bg-transparent mx-1 lg:mx-0 ${activeTab === ind ? "active !border-primary" : ""
                }`}
            >
              <div className=" transition-all duration-300 flex lg:justify-end items-center p-1">
                {ind === 0 ? (
                  <div
                    className="flex items-center cursor-pointer"
                    onClick={() => setActiveTab(ind)}
                  >
                    <Heading6
                      heading={label}
                      className={`!mb-0 lg:mr-5 lg:text-end hover:!text-primary text-nowrap ${activeTab === ind
                        ? "!text-primary"
                        : ""
                        }`}
                    />
                    <div className="relative block rounded-full w-4 h-4 lg:mr-[13px] mr-2 lg:order-last order-first ">
                      <div
                        className={`absolute right-0 top-0 bg-secondary w-4 h-4 rounded-full ${activeTab === ind
                          ? "!text-primary !bg-primary "
                          : ""
                          }`}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <div
                    className={`flex items-center cursor-pointer `}
                    onClick={() => setActiveTab(ind)}
                  >
                    <Heading6
                      heading={label}
                      className={`!mb-0 lg:mr-5 lg:text-end hover:!text-primary text-nowrap ${activeTab === ind
                        ? "!text-primary"
                        : ""
                        }`}
                    />
                    <div
                      className={`relative block rounded-full w-4 h-4 lg:mr-[13px] mr-2 lg:order-last order-first `}
                    >
                      <div
                        className={`absolute right-0 top-0 bg-secondary w-4 h-4 rounded-full ${activeTab === ind
                          ? "!text-primary !bg-primary"
                          : ""
                          }`}
                      ></div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default TabSectionHero;
