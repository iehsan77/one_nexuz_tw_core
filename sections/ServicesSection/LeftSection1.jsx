"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function LeftSection1({ data, locale }) {
  const [activeTab, setActiveTab] = useState(data?.items?.[0]);

  return (
    <div className="secPadding space-y-6">
      {/* Heading Section */}
      <motion.div
        className="space-y-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Typography size="3xl" weight="bold" as="p">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
      </motion.div>

      {/* Tabs + Content */}
      <div className="md:border border-[#CCCCCC] md:rounded-3xl grid md:grid-cols-2 gap-4 overflow-hidden">
        {/* Left Tabs */}
        <motion.div
          className={`${
            locale ? "md:ml-10 md:border-l" : "md:mr-10 md:border-r"
          } md:px-6 md:py-12 py-4 bg-transparent md:bg-primaryLight relative border-[#CCCCCC]`}
          initial={{ opacity: 0, x: locale ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          {/*  */}
          <div
            className={`${
              locale ? "left-0" : "right-0"
            } hidden md:block absolute bottom-0 z-5`}>
            <Image
              src={
                locale
                  ? "/assets/backGrounds/leftSec1Ar.svg"
                  : "/assets/backGrounds/leftSec1En.svg"
              }
              alt="bg image"
              width={216}
              height={565}
            />
          </div>
          {/*  */}
          <div className="space-y-4 md:space-y-6 relative z-15">
            {data?.items?.map((item) => (
              <motion.div
                key={item?.id}
                whileHover={{ scale: 1.01 }}
                transition={{ duration: 0.2 }}
                className="w-full">
                <button
                  onClick={() => setActiveTab(item)}
                  className={`${
                    activeTab?.id === item?.id
                      ? `${
                          locale ? "pr-5 pl-3" : "pl-5 pr-2"
                        } text-white bg-primary border-primary w-full relative md:w-[320px] lg:w-[280px] xl:w-[365px]`
                      : "text-gray border-[#CCCCCC] px-4 bg-white block w-full"
                  } cursor-pointer font-medium text-sm sm:text-base py-2 rounded-lg border !text-start flex items-center justify-between gap-5`}>
                  {item?.title}
                  {activeTab?.id === item?.id && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                      className="!h-full p-4 bg-secondary text-white flex items-center rounded-lg justify-center">
                      <Icon
                        icon={locale ? "ep:top-left" : "ep:top-right"}
                        width="20"
                        height="20"
                      />
                    </motion.div>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          key={activeTab?.id}
          className={`${
            locale ? "md:pl-5" : "md:pr-5"
          } rounded-xl border border-[#CCCCCC] md:border-0 md:py-6 px-5 md:px-0 space-y-8 md:bg-transparent`}
          initial={{ opacity: 0, x: locale ? -40 : 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab?.image}
              className="flex items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}>
              <Image
                src={activeTab?.image}
                alt={activeTab?.title}
                width={384}
                height={351}
                // className="w-auto h-auto object-contain"
              />
            </motion.div>
          </AnimatePresence>

          <motion.div
            className="border-t border-gray pt-4 md:py-6 space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}>
            <Typography weight="bold">{activeTab?.subTitle}</Typography>
            <Typography>{activeTab?.description}</Typography>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LeftSection1;
