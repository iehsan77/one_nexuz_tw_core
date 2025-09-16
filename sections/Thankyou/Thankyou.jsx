"use client";
import Link from "@/components/Link/Link";
import Heading3 from "@/components/Typography/Heading3";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import Image from "next/image";
import React from "react";

export default function Thankyou() {
  return (
    <div className="secPadding">
      <div className="container">
        <div className="max-w-md w-full mx-auto">
          {/* ✅ Thank You Image */}
          <Image
            src={"/assets/icons/thankyou.svg"}
            alt="Thank you Image"
            height={259}
            width={199}
            className="mx-auto"
          />

          {/* ✅ Text Section */}
          <div className="pt-4">
            {/* Heading */}
            <Heading3
              className="!font-[500] !text-center"
              blackHeading="Thank You for Listing Your Car!"
            />

            {/* Paragraph */}
            <Paragraph
              className="!text-center"
              blackText1="We’ve received your vehicle details and our team is reviewing them to ensure everything’s in top shape. Your listing will be live shortly and you’ll be one step closer to connecting with serious buyers. In the meantime, feel free to explore your dashboard, manage listings, or reach out if you have any questions."
            />

            {/* Sub-heading */}
            <Heading5
              className="!font-[500] !text-center"
              blackHeading="We’re excited to help you sell with ease and confidence."
            />

            {/* Back to Homepage Button */}
            <div className="flex justify-center">
              <Link
              variant="primary"
              href="/"
              className="!inline-flex justify-center"
            >
              Back To Website
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
