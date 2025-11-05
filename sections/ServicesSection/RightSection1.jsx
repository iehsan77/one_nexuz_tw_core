import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import Typography from "@/components/ui/Typography";
import React, { useContext, useEffect, useState } from "react";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import ModalBtn from "../ModalBtn";

function RightSection1() {
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
    <div className="p-5 bg-[#F8F8F8] rounded-lg">
      <div className="space-y-4">
        {/*  */}
        <div className="flex justify-between gap-3 bg-white rounded-lg p-4">
          <div className="flex flex-col items-center ">
            <Typography size="base">{t?.serviceRightCounter?.hours}</Typography>
            <Typography size="4xl" weight="bold" color="primary">
              {String(hours).padStart(2, "0")}
            </Typography>
          </div>
          <Typography size="5xl" weight="bold" className="flex items-center">
            :
          </Typography>
          <div className="flex flex-col items-center ">
            <Typography size="base">
              {t?.serviceRightCounter?.minutes}
            </Typography>
            <Typography size="4xl" weight="bold" color="primary">
              {String(minutes).padStart(2, "0")}
            </Typography>
          </div>
          <Typography size="5xl" weight="bold" className="flex items-center">
            :
          </Typography>
          <div className="flex flex-col items-center ">
            <Typography size="base">
              {t?.serviceRightCounter?.seconds}
            </Typography>
            <Typography size="4xl" weight="bold" color="primary">
              {String(seconds).padStart(2, "0")}
            </Typography>
          </div>
        </div>
        {/*  */}
        <Typography weight="bold" size="xl">
          {t?.serviceRightCounter?.title}
        </Typography>
        <Typography weight="normal" size="base">
          {t?.serviceRightCounter?.description}
        </Typography>
        <ModalBtn
          variant="primary"
          text={t?.serviceRightCounter?.btn}
          className={"!text-primary"}
          calendar={true}
          icon={true}
        />
      </div>
    </div>
  );
}

export default RightSection1;
