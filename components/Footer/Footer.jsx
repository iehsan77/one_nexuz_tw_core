"use client";
import React, { useContext } from "react";
import Paragraph from "../Typography/Paragraph";
import {
  allBrandData,
  bodyTypeData,
  categoryData,
  column1,
  servicesData,
  socialFooterLinks,
} from "@/mockData/dummyData";
import Image from "../Image/Image";
import Link from "../Link/Link";
import Heading5 from "../Typography/Heading5";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { textToRouteUrl } from "@/utils/apiHelper";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import FooterNewsletter from "../Newsletter/FooterNewsletter";

const Footer = () => {
  const { locale } = useContext(LanguageContext);
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  const isArabic = locale === "ar";

  const footerContent = {
    Subscribe: isArabic ? "تابعنا على" : "Subscribe",
    placeholder: isArabic ? "تابعنا على" : "Enter your email",
    followUs: isArabic ? "تابعنا على" : "Follow Us:",
    newsletterh: isArabic
      ? "تابعنا على"
      : "Join our newsletter to stay up to date on features and releases.",
    newsletterd: isArabic
      ? "تابعنا على"
      : "By subscribing you agree to with our Privacy Policy and provide consent to receive updates from our company.",
    copyright: isArabic
      ? `© جميع الحقوق محفوظة HJK لتأجير السيارات ${currentYear}`
      : `© ${currentYear} Car Solutions | All rights reserved.`,
    viewAll: isArabic ? "عرض الكل" : "View More",
    brandsTitle: locale === "ar" ? "الماركات" : "Resources",
    bodyTypeTitle: locale === "ar" ? "نوع الهيكل" : "Buy",
    categoriesTitle: locale === "ar" ? "الفئات" : "Sell",
    servicesTitle: locale === "ar" ? "الفئات" : "Services",
    quickLinks: locale === "ar" ? "الفئات" : "Quick Links"
  };

  return (
    <>
      <div className="secPadding bg-secondary text-white">
        <div className="container">
          <div className="space-y-6">
            <div>
              <Paragraph
                blackText1={footerContent.newsletterh}
                className={`!text-sm`}
              />
            </div>
            <FooterNewsletter
              bgtxt={footerContent.Subscribe}
              placeholder={footerContent.placeholder}
            />
            <div>
              <Paragraph
                blackText1={footerContent.newsletterd}
                className={`!text-sm`}
              />
            </div>
          </div>
          <div className="pt-6">
            <div className="grid lg:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4">
              <div className="space-y-10 sm:col-span-1 col-span-2">
                <div>
                  <LanguageAwareLink href={`${textToRouteUrl("/")}`}>
                    <Image
                      src={`/assets/images/car_solution_logo.svg`}
                      alt={"logo"}
                      width={220}
                      height={120}
                    />
                  </LanguageAwareLink>
                </div>
                <div className="md:block hidden">
                  <div className="space-y-10">
                    <Image
                      src={`/assets/images/image_73.webp`}
                      alt={"logo"}
                      width={84}
                      height={84}
                    />
                    <div className="flex items-center sm:items-start gap-1 flex-col">
                      <Heading5
                        className={`!mb-0`}
                        blackHeading={footerContent.followUs}
                      />
                      <div className="flex items-center gap-2">
                        {socialFooterLinks?.map((item, index) => (
                          <Link
                            target="_blank"
                            variant={`txtDarkbg`}
                            key={index}
                            href={item.link}
                            className={`!px-0 flex items-center gap-2 !text-sm`}
                          >
                            {item.icon}
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-span-3">
                <div className="grid md:grid-cols-5 sm:grid-cols-3 grid-cols-2 gap-y-4 gap-x-4">
                  <LinkSection
                    title={footerContent.quickLinks}
                    links={column1.links}
                  />
                  <LinkSection
                    title={footerContent.brandsTitle}
                    links={allBrandData.links}
                  />
                  <LinkSection
                    title={footerContent.bodyTypeTitle}
                    links={bodyTypeData.links}
                  />
                  <LinkSection
                    title={footerContent.categoriesTitle}
                    links={categoryData.links}
                  />
                  <LinkSection
                    title={footerContent.servicesTitle}
                    links={servicesData.links}
                  />
                </div>
              </div>
            </div>
            <div className="md:hidden flex items-center gap-4 pt-4">
              <Image
                src={`/assets/images/image_73.webp`}
                alt={"logo"}
                width={50}
                height={50}
              />
              <div className="flex items-start gap-1 flex-col">
                <Heading5
                  className={`!mb-0 !text-left`}
                  blackHeading={footerContent.followUs}
                />
                <div className="flex items-center gap-2">
                  {socialFooterLinks?.map((item, index) => (
                    <Link
                      target="_blank"
                      variant={`txtDarkbg`}
                      key={index}
                      href={item.link}
                      className={`!px-0 flex items-center xs:gap-2 gap-1 xs:!text-sm !text-xs`}
                    >
                      {item.icon}
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="flex sm:flex-row flex-col sm:items-center items-start sm:justify-between jusctify-start pt-4 border-t xs:mt-10 mt-4">
            <p className="">{footerContent.copyright}</p>
            <div className="xs:space-x-4 flex gap-3">
              <Link
                variant={`txtDarkbg`}
                href={`/privacy-policy`}
                className={`!px-0 underline underline-offset-4 !text-sm`}
              >
                Privacy Policy
              </Link>
              <Link
                variant={`txtDarkbg`}
                href={`/terms-of-service`}
                className={`!px-0 underline underline-offset-4 !text-sm`}
              >
                Terms of Service
              </Link>
              <Link
                variant={`txtDarkbg`}
                href={`/`}
                className={`!px-0 underline underline-offset-4 !text-sm`}
              >
                Cookies Settings
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
const LinkSection = ({ title, links }) => {
  return (
    <div className="">
      <div className="flex flex-col items-start">
        <Heading5
          blackHeading={title}
          className={`underline underline-offset-8`}
        />
        <div>
          {links?.map((item, ind) => (
            <Link
              key={ind}
              variant={`txt`}
              href={item.links}
              className="hover:!text-primary !text-white sm:!text-sm !text-xs !py-2 justify-start !text-left"
            >
              <span>{item.title_en}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
