"use client";
import React, { useEffect, useState } from "react";
import ContactForm from "@/sections/ContactForm/ContactForm";
import Heading4 from "../Typography/Heading4";
import SubscribeSection from "@/sections/SubscribeSection";

const GuideStickyBar = ({ data }) => {
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
            <SubscribeSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GuideStickyBar;
