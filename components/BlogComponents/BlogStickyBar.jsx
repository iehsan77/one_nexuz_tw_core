"use client";
import React, { useEffect, useState } from "react";
import InterestedCategoriesSection from "@/sections/BlogSection/InterestedCategoriesSection";
import ContactForm from "@/sections/ContactForm/ContactForm";
import Heading4 from "../Typography/Heading4";
import Heading6 from "../Typography/Heading6";
import Paragraph from "../Typography/Paragraph";
import Link from "../Link/Link";

const BlogStickyBar = ({ data }) => {
  const [loading, setLoading] = useState(true);
  const [isSticky, setIsSticky] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      const threshold = 0;
      if (offset > threshold) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };
    setLoading(false);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="lg:h-full">
      <div
        className={`lg:pt-0 pt-16 ${isSticky ? "lg:sticky top-20 z-10" : ""}`}
      >
        {/* <div className="pb-6">
          {data?.length && data[0]?.banner_image_url ? (
            <Link href={data[0]?.banner_image_url} legacyBehavior>
              <a target="_blank">
                {data[0]?.banner_image && (
                  <Image
                    src={data[0]?.banner_image}
                    alt={data[0]?.banner_image_alt || "Image"}
                    width={330}
                    height={370}
                    className={"lg:mx-0 mx-auto"}
                  />
                )}
              </a>
            </Link>
          ) : (
            <div onClick={toggleModal}>
              {data?.length && data[0]?.banner_image && (
                <Image
                  src={data[0]?.banner_image}
                  alt={data[0]?.banner_image_alt || "Image"}
                  width={330}
                  height={370}
                  className={"lg:mx-0 mx-auto"}
                />
              )}
              <GetInTouch isModalOpen={isModalOpen} toggleModal={toggleModal} />
            </div>
          )}
        </div> */}
        {/* )} */}

        <div className="pt-4">
          <div className="space-y-4">
            <div className="">
              <Heading4 blackHeading={`Inquire the best deals`} />
              <ContactForm
                txtLeft={true}
                className={`display3 !w-full`}
                padding={`py-3 !mx-0 !px-0`}
              />
            </div>

            <div className="bg-black rounded-xl p-4 bgimg bg-[url(/assets/images/image_34-1.webp)]">
              <div className="text-white">
                <Heading6
                  blackHeading={`Drive Luxury on Your Terms with Car Solutions`}
                />
                <Paragraph
                  blackText1={`Experience the pinnacle of automotive excellence. Whether you're looking to buy or sell premium vehicles, Car Solutions offers a seamless, transparent, and hassle-free journey`}
                />
              </div>
              <div className="pt-44">
                <Link href={`#`} variant={`white`} className="!inline-flex">
                  {`Explore Our Collection`}
                </Link>
              </div>
            </div>

            <div>
              <InterestedCategoriesSection isStickyBar={true} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogStickyBar;
