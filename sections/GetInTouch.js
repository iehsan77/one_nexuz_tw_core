"use client";
import { Modal } from "@/components/Modal/Modal";
import Image from "next/image";
import React from "react";
import Paragraph from "@/components/Typography/Paragraph";
import Heading2 from "@/components/Typography/Heading2";
import ContactForm from "./ContactForm/ContactForm";

const GetInTouch = ({ isModalOpen, toggleModal }) => {

  return (
    <Modal open={isModalOpen}>
      <div className="lg:grid lg:grid-cols-2">
        <div className="hidden lg:flex lg:items-center ">
          <Image
            src={"/assets/images/message-popup.webp"}
            width={596}
            height={739}
            objectFit="cover"
            alt="A girl looking at cell phone"
          />
        </div>
        <div className="p-4 lg:py-8">
          <div className="flex justify-between">
            <div>
              <Heading2
                blackHeading="Let’s Connect"
                className="text-start mb-0"
              />
              <Paragraph
                blackText1="Request A Call At Your Convenience"
                className="text-start"
              />
            </div>
            <div>
              <span
                onClick={toggleModal}
                className="flex items-start focus:bg-transparent focus:bg-opacity-80 active:bg-transparent active:bg-opacity-80 focus:text-white active:text-white focus:border-none active:border-none focus:outline-none active:outline-none cursor-pointer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2em"
                  height="2em"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#000"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="4"
                    d="m14 14l20 20m-20 0l20-20"
                  />
                </svg>
              </span>
            </div>
          </div>
          <ContactForm />
        </div>
      </div>
    </Modal>
  );
};

export default GetInTouch;
