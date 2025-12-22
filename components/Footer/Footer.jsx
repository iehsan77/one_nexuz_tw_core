"use client";
import React, { useContext } from "react";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import Image from "../Image/Image";
import Typography from "../ui/Typography";
import Link from "next/link";
import { Icon } from "@iconify/react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { footerSocials } from "@/mock/data";
import { navData, navDataAr } from "@/lib/navigation-config";

function Footer() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;
  const servicesData = locale === "ar" ? navDataAr : navData;

  return (
    <div className="py-12 bg-secondary relative mb-14 sm:mb-16 lg:mb-0">
      <div className="absolute bottom-0">
        <Image
          src="/assets/backGrounds/footerBg.svg"
          alt="logo"
          width={153}
          height={46}
          className="w-auto h-auto object-contain"
        />
      </div>
      <div className="container grid sm:grid-cols-4 gap-4 relative z-15">
        {/*  */}
        <div className="sm:col-span-1 flex flex-col gap-4">
          <LanguageAwareLink href="/">
            <Image
              src="/logo/whiteLogo.svg"
              alt="logo"
              width={153}
              height={46}
              className="w-auto h-auto object-contain"
            />
          </LanguageAwareLink>
          <Typography color="white" size="2xl" weight="bold">
            {t.footer.title}
          </Typography>
          <LanguageAwareLink href="#" variant="rightIcon">
            {t.btn.contactUsNow}
          </LanguageAwareLink>
          <div className="space-y-3 sm:block hidden">
            <Typography color="white" size="base">
              {t.footer.social}
            </Typography>
            <div className="flex items-center gap-4">
              {footerSocials?.map((item, i) => (
                <Link href={item?.href} key={i} className="text-white">
                  <Icon icon={item?.icon} width={22} height={22} />
                </Link>
              ))}
            </div>
            <Image
              src="/assets/qrCode.svg"
              alt="logo"
              width={153}
              height={46}
              className="w-auto h-auto object-contain"
            />
          </div>
        </div>
        {/*  */}
        <div className="sm:col-span-3 mt-6 sm:mt-0">
          <div className="grid grid-cols-4 gap-4">
            <div className="col-span-4 lg:col-span-3 grid grid-cols-2 lg:grid-cols-3 gap-4 h-fit">
              {servicesData?.map((item) => (
                <div key={item?.id} className="space-y-6">
                  <LanguageAwareLink
                    href={item?.url || "#"}
                    className={"block w-fit !border-b border-white !pb-2 "}
                  >
                    <Typography color="white" weight="medium">
                      {item?.title}
                    </Typography>
                  </LanguageAwareLink>
                  {item?.tabs?.length ? (
                    <div className="flex flex-col gap-4">
                      {item?.tabs?.slice(0, 4)?.map((tab) => (
                        <LanguageAwareLink
                          key={tab?.id}
                          href={tab?.url || "#"}
                          className={"w-fit"}
                        >
                          <Typography as="p" size="sm" color="white">
                            {tab?.title}
                          </Typography>
                        </LanguageAwareLink>
                      ))}
                    </div>
                  ) : (
                    <div className="flex flex-col gap-4">
                      {item?.items?.slice(0, 4)?.map((i) => (
                        <div key={i?.id}>
                          <LanguageAwareLink href="#">
                            <LanguageAwareLink
                              href={i?.url || "#"}
                              className={"block !w-fit"}
                            >
                              <Typography as="p" size="sm" color="white">
                                {i?.title}
                              </Typography>
                            </LanguageAwareLink>
                          </LanguageAwareLink>
                          {i?.title === "" && (
                            <div className="flex flex-col gap-4">
                              {i?.links?.slice(0, 4)?.map((l) => (
                                <LanguageAwareLink key={l?.id} href="#">
                                  <Typography as="p" size="sm" color="white">
                                    {l?.title}
                                  </Typography>
                                </LanguageAwareLink>
                              ))}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                  <LanguageAwareLink
                    // href="/services"
                    href={`/services?section=${item?.title
                      .toLowerCase()
                      .replace(/[^a-z0-9]+/g, "-")}`}
                    className="flex w-fit"
                  >
                    <Typography
                      as="p"
                      size="sm"
                      color="primary"
                      className="flex items-center gap-2"
                    >
                      {t.btn.viewAll}
                      <Icon
                        icon={
                          locale === "ar"
                            ? "mingcute:left-line"
                            : "mingcute:right-line"
                        }
                        width="20"
                        height="20"
                      />
                    </Typography>
                  </LanguageAwareLink>
                </div>
              ))}
            </div>
            {/*  */}
            <div className="col-span-4 lg:col-span-1 grid grid-cols-2 lg:grid-cols-1 gap-4 h-fit">
              {t.footer.footerData.map((item) => (
                <div key={item?.id} className="space-y-6">
                  <Typography
                    color="white"
                    weight="medium"
                    className="border-b pb-2 w-fit"
                  >
                    {item?.title}
                  </Typography>
                  <div className="flex flex-col gap-4">
                    {item?.items?.map((item) => (
                      <LanguageAwareLink key={item?.id} href={item?.url || "#"}>
                        <Typography as="p" size="sm" color="white">
                          {item?.title}
                        </Typography>
                      </LanguageAwareLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            {/*  */}
          </div>
        </div>
        <div className="space-y-3 sm:hidden block">
          <Typography color="white" size="base">
            {t.footer.social}
          </Typography>
          <div className="flex items-center gap-4">
            {footerSocials?.map((item, i) => (
              <Link href={item?.href} key={i} className="text-white">
                <Icon icon={item?.icon} width={22} height={22} />
              </Link>
            ))}
          </div>
          <Image
            src="/assets/qrCode.svg"
            alt="logo"
            width={153}
            height={46}
            className="w-auto h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
