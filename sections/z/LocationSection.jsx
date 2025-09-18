"use client";
import React, { useContext } from "react";
import Heading2 from "@/components/Typography/Heading2";
import Heading4 from "@/components/Typography/Heading4";
import Paragraph from "@/components/Typography/Paragraph";
import Link from "next/link";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

const LocationSection = () => {
  const { locale } = useContext(LanguageContext);

  const locationDataEn = {
    heading: "Our Location",
    city: "Dubai",
    address:
      "HJK rent a car · U.A.E, MRM Building - SHOP # 48 - ABU HAIL - Dubai - United Arab Emirates",
    mapLink: "View Map",
  };

  const locationDataAr = {
    heading: "موقعنا",
    city: "دبي",
    address:
      "شركة إتش جي كي لتأجير السيارات · الإمارات العربية المتحدة، مبنى إم آر إم - محل رقم 48 - أبو هيل - دبي - الإمارات العربية المتحدة",
    mapLink: "عرض الخريطة",
  };

  const content = locale === "ar" ? locationDataAr : locationDataEn;

  return (
    <section className="secPadding bg-white">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left Text Content */}
          <div>
            <Heading2 blackHeading={content.heading} className="mb-4" />

            <div className="border-l-2 border-primary pl-4">
              {/* <Heading4 blackText1={content.city} className="mb-2" /> */}
              <Paragraph blackText1={content.address} />

              <Link
                href="https://www.google.com/maps/dir/24.8250368,67.0728192/HJK+rent+a+car,+U.A.E,+MRM+Building+-+SHOP+%23+48+-+ABU+HAIL+-+Dubai+-+United+Arab+Emirates/@25.9413655,54.4745203,8z/data=!4m9!4m8!1m1!4e1!1m5!1m1!1s0x3e5f5dc4007d6b41:0xc83d4094c8b30556!2m2!1d55.3521774!2d25.2822075?entry=ttu&g_ep=EgoyMDI1MDYxMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                className="text-sm font-semibold text-black mt-4 inline-block hover:underline">
                {content.mapLink}
              </Link>
            </div>
          </div>

          {/* Right Google Map */}
          <div>
            <iframe
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3607.654293921633!2d55.34960247593187!3d25.282212328250978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5dc4007d6b41%3A0xc83d4094c8b30556!2sHJK%20rent%20a%20car!5e0!3m2!1sen!2s!4v1751462020374!5m2!1sen!2s"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              className="w-full h-[400px] md:h-[450px] rounded-md border"
              referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
