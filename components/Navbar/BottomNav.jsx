"use client";
import { useDrawer } from "@/context/drawer-context";
import { Icon } from "@iconify/react";
import React, { useContext, useEffect, useState } from "react";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import Image from "../Image/Image";
import Link from "next/link";
import { navSocials } from "@/mock/data";
import Typography from "../ui/Typography";
import NavItems from "./NavItems";
import ModalBtn from "@/sections/ModalBtn";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function BottomNav() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;
  const { showDrawer } = useDrawer();
  const currentYear = new Date().getFullYear();
  const [timeLeft, setTimeLeft] = useState(12 * 60 * 60);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="bg-primary w-full lg:hidden fixed bottom-0 z-50">
      <div className="container py-4 flex items-center justify-between">
        <div className="flex items-center gap-2 border border-white rounded-lg py-1 px-3 !bg-white/10">
          <div className="flex flex-col items-center justify-center">
            <Typography weight="bold" color="white" size="sm">
              {t?.btn?.min}
            </Typography>
            <Typography
              weight="bold"
              color="white"
              className="text-xs sm:text-sm">
              {minutes}
            </Typography>
          </div>
          <Typography weight="bold" color="white" size="lg">
            :
          </Typography>
          <div className="flex flex-col items-center justify-center">
            <Typography weight="bold" color="white" size="sm">
              {t?.btn?.sec}
            </Typography>
            <Typography
              weight="bold"
              color="white"
              className="text-xs sm:text-sm">
              {seconds}
            </Typography>
          </div>
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <ModalBtn
            variant="solid"
            text={t?.btn?.getQuoteToday}
            className="!bg-white !text-primary text-xs"
          />
        </div>
        {/*  */}
        <button
          className="text-white cursor-pointer"
          onClick={() =>
            showDrawer({
              className: "!bg-secondary",
              header: (
                <div className="">
                  <LanguageAwareLink href="/">
                    <Image
                      src="/logo/whiteLogo.svg"
                      alt="logo"
                      width={150}
                      height={38}
                    />
                  </LanguageAwareLink>
                </div>
              ),
              footer: (
                <div className="space-y-4">
                  <div className="flex items-end justify-between gap-4">
                    <div className="flex items-center gap-2 mb-2">
                      {navSocials?.map((item, i) => (
                        <Link
                          href={item?.href}
                          key={i}
                          target="_blank"
                          className="text-secondary bg-white h-10 w-10 rounded-full flex items-center justify-center">
                          <Icon icon={item?.icon} width={18} height={18} />
                        </Link>
                      ))}
                    </div>
                    <div>
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
                  <Typography as="p" color="white" align="center">
                    Copyright © {currentYear} All Rights Reserved
                  </Typography>
                </div>
              ),
              children: (
                <div>
                  <NavItems />
                </div>
              ),
            })
          }>
          <Icon
            icon="iconamoon:menu-burger-horizontal-duotone"
            width="28"
            height="28"
          />
        </button>
      </div>
    </div>
  );
}

export default BottomNav;
