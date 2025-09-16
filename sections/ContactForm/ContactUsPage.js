"use client";
import React, { useContext } from "react";
import ContactForm from "./ContactForm";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "@/components/Image/Image";
import HeroSection from "../HeroSection/HeroSection";
import Heading2 from "@/components/Typography/Heading2";
import Paragraph from "@/components/Typography/Paragraph";
const ContactUsPage = () => {
  const { locale } = useContext(LanguageContext);
  const isArabic = locale === "ar";

  const contactDataEn = {
    title: "Fill Out the Form Let's Talk!",
    subTitle:
      "Have questions about our inventory, financing, or your dream car? Fill out the form below, and the Car Solutions team will get in touch with you as soon as possible! ",
    location:
      "HJK rent a car · U.A.E, MRM Building - SHOP # 48 - ABU HAIL - Dubai - United Arab Emirates",
  };

  const contactDataAr = {
    title: "اتصل بنا",
    subTitle:
      "هل لديك أسئلة أو تحتاج إلى مساعدة؟ فريقنا جاهز لإرشادك بشأن الحجوزات، وخيارات السيارات، والمزيد. دعنا نبدأ رحلتك!",
    location:
      "شركة إتش جي كي لتأجير السيارات · الإمارات العربية المتحدة، مبنى إم آر إم - محل رقم 48 - أبو هيل - دبي - الإمارات العربية المتحدة",
  };

  const content = isArabic ? contactDataAr : contactDataEn;

  return (
    <>
      <HeroSection
        className={`md:bg-[url(/assets/images/bgimage_13.webp)] bg-[url(/assets/images/bgimage_14.webp)]`}
        heading={content.title}
      />
      <section className={`secPadding`}>
        <div className="container ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
            <div className="flex flex-col justify-center">
              <div className="max-w-xl">
                <Heading2 blackHeading={content.title} />
                <Paragraph blackText1={content.subTitle} className={`!mb-0`} />
              </div>
              <div className={`py-3 w-full`}>
                <ContactForm />
              </div>
            </div>
            <div className="flex lg:justify-end justify-start">
              <Image
                src={"/assets/images/image_59.webp"}
                alt="Thank you Image"
                height={562}
                width={634}
                className=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUsPage;
