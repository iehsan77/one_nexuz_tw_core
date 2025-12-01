"use client";
import Typography from "@/components/ui/Typography";
import React, { useContext, useEffect, useState } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { Icon } from "@iconify/react";
import Image from "@/components/Image/Image";
import ModalBtn from "../ModalBtn";

function LeftSection9() {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const t = locale === "ar" ? ar : en;
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
    <div className="secPadding container">
      <div className="border p-2 rounded-lg bg-white shadow-xl border-gray-50">
        <div className="p-4 lg:p-8 bg-primaryLight rounded-lg grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4">
          {/* 1 */}
          <div className="flex flex-col gap-3 lg:gap-6">
            <div className="space-y-4 flex-1">
              <Typography as="p" weight="bold" size="xl">
                {t?.counterSec?.sec1?.title}
              </Typography>
              <Typography as="p" weight="normal" size="base">
                {t?.counterSec?.sec1?.description}
              </Typography>
            </div>
            <button className="flex items-center gap-2 w-fit text-primary font-medium py-2 border-b-2 border-primary">
              <Image
                src="/icons/download.svg"
                alt="icon"
                width={24}
                height={24}
              />
              {t?.counterSec?.sec1?.btn}
              <Icon
                icon={arabic ? "uil:angle-left" : "uil:angle-right"}
                width="26"
                height="26"
              />
            </button>
          </div>
          {/* 1 */}
          {/* 2 */}
          <div className="flex flex-col gap-3 lg:gap-6 lg:border-x lg:px-6 border-gray">
            <div className="space-y-4 flex-1">
              <Typography as="p" weight="bold" size="xl">
                {t?.counterSec?.sec2?.title}
              </Typography>
              <Typography as="p" weight="normal" size="base">
                {t?.counterSec?.sec2?.description}
              </Typography>
            </div>
            <ModalBtn
              variant="primary"
              text={t?.counterSec?.sec2?.btn}
              calendar={true}
              className={"!text-primary"}
            />
          </div>
          {/* 2 */}
          {/* 3 */}
          <div className="hidden lg:flex flex-col gap-6">
            <Typography as="p" weight="bold" size="xl">
              {t?.counterSec?.sec3?.title}
            </Typography>
            <div className="flex justify-between gap-3">
              <div className="flex flex-col items-center border border-primary p-2 xl:p-4 rounded-lg w-full xl:min-w-[100px]">
                <Typography size="base">
                  {t?.counterSec?.sec3?.hours}
                </Typography>
                <Typography size="5xl" weight="bold" color="primary">
                  {String(hours).padStart(2, "0")}
                </Typography>
              </div>
              <Typography
                size="5xl"
                weight="bold"
                className="flex items-center"
              >
                :
              </Typography>
              <div className="flex flex-col items-center border border-primary p-2 xl:p-4 rounded-lg w-full xl:min-w-[100px]">
                <Typography size="base">
                  {t?.counterSec?.sec3?.minutes}
                </Typography>
                <Typography size="5xl" weight="bold" color="primary">
                  {String(minutes).padStart(2, "0")}
                </Typography>
              </div>
              <Typography
                size="5xl"
                weight="bold"
                className="flex items-center"
              >
                :
              </Typography>
              <div className="flex flex-col items-center border border-primary p-2 xl:p-4 rounded-lg w-full xl:min-w-[100px]">
                <Typography size="base">
                  {t?.counterSec?.sec3?.seconds}
                </Typography>
                <Typography size="5xl" weight="bold" color="primary">
                  {String(seconds).padStart(2, "0")}
                </Typography>
              </div>
            </div>
          </div>
          {/* 3 */}
        </div>
      </div>
    </div>
  );
}

export default LeftSection9;
