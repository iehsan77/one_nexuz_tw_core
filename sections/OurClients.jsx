"use client";
import Image from "@/components/Image/Image";
import Typography from "@/components/ui/Typography";
import { Icon } from "@iconify/react";
import React, { useContext, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function OurClients({ data }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";

  const handleNext = () => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % data?.items.length);
  };

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(
      (prev) => (prev - 1 + data?.items.length) % data?.items.length
    );
  };

  const activeData = data?.items[activeIndex];

  return (
    <section className="secPadding container space-y-6">
      <div className="space-y-3 max-w-[500px]">
        <Typography size="3xl" weight="bold" as="p" color="gray">
          {data?.title}
        </Typography>
        <Typography size="base" weight="normal" as="p">
          {data?.description}
        </Typography>
      </div>
      {/*  */}
      <div className="flex items-center relative">
        <div className="lg:absolute lg:w-[70%] lg:mt-10 overflow-hidden z-10">
          <div className="bg-secondary shadow-lg">
            {/*  */}
            <div className="relative">
              {/*  */}
              <div className="absolute top-0 right-0">
                <Image
                  src="/assets/backGrounds/ourClientBg1.svg"
                  alt={"bg image"}
                  width={50}
                  height={50}
                  className="w-auto h-auto object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0">
                <Image
                  src="/assets/backGrounds/ourClientBg2.svg"
                  alt={"bg image"}
                  width={50}
                  height={50}
                  className="w-auto h-auto object-cover"
                />
              </div>
              {/*  */}
              <div className="pb-7 px-5 lg:px-8 relative z-15">
                <div className="px-3 pb-1 pt-4 md:pt-8 bg-[#EF6078] w-fit lg:w-[100px] overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={activeIndex}
                      custom={direction}
                      initial={{ x: direction === 1 ? 200 : -200, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      exit={{ x: direction === 1 ? -200 : 200, opacity: 0 }}
                      transition={{ duration: 0.4 }}>
                      <Typography
                        size="6xl"
                        weight="bold"
                        as="h2"
                        align="center"
                        className="!text-primaryLight/30">
                        {String(activeData?.id).padStart(2, "0")}
                      </Typography>
                    </motion.div>
                  </AnimatePresence>
                </div>
                <AnimatePresence mode="wait" custom={direction}>
                  <motion.div
                    key={activeIndex}
                    custom={direction}
                    initial={{ x: direction === 1 ? 200 : -200, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -200 : 200, opacity: 0 }}
                    transition={{ duration: 0.4 }}>
                    <div className="mt-8 space-y-5">
                      <Typography size="base" as="p" color="white">
                        {`“${activeData?.quote}”`}
                      </Typography>
                      <div className="flex items-center gap-3">
                        <div className="block lg:hidden max-w-10 w-fit h-10 rounded-full overflow-hidden">
                          <Image
                            src={activeData?.image}
                            alt="client image"
                            width={640}
                            height={703}
                            className="w-auto h-auto object-contain"
                          />
                        </div>
                        <Typography
                          size="lg"
                          weight="medium"
                          as="p"
                          color="white">
                          {activeData?.role}
                        </Typography>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
          {/*  */}
          <div className="mt-8">
            <div className="flex items-center gap-3 text-gray">
              <button
                className="cursor-pointer hover:scale-150 transition-transform"
                onClick={handlePrev}>
                <Icon
                  icon={arabic ? "mingcute:right-fill" : "mingcute:left-fill"}
                  width="25"
                  height="25"
                />
              </button>
              <Typography size="base" weight="bold" color="gray">
                {String(activeIndex + 1).padStart(2, "0")}
              </Typography>
              <Typography size="base" weight="bold" color="gray">
                /
              </Typography>
              <Typography size="base" weight="bold" color="gray">
                {String(data?.items.length).padStart(2, "0")}
              </Typography>
              <button
                className="cursor-pointer hover:scale-150 transition-transform"
                onClick={handleNext}>
                <Icon
                  icon={arabic ? "mingcute:left-fill" : "mingcute:right-fill"}
                  width="25"
                  height="25"
                />
              </button>
            </div>
          </div>
        </div>
        {/*  */}
        {/* image */}
        <div className="w-full hidden lg:flex justify-end">
          <div className="w-[35%]">
            <Image
              src={activeData?.image}
              alt="client image"
              width={640}
              height={703}
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClients;
