"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Heading2 from "@/components/Typography/Heading2";
import { CheckedSVG } from "@/public/assets/icons/SVGIcons";
import { textToRouteUrl } from "@/utils/apiHelper";
import Image from "next/image";
import React, { Suspense, useContext } from "react";

export default function ResetSuccess() {
  const { locale } = useContext(LanguageContext);

  return (
    <section className="">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 min-h-[100vh] pr-4">
        <div className="h-[100vh] md:block hidden">
          <Image
            src={`/assets/images/image_51.webp`}
            width={845}
            height={1024}
            alt={`Auth Image`}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex justify-center items-center h-full md:px-0 px-6 py-6">
          <div className="w-full max-w-lg">
            <Suspense>
              <div className="space-y-4 shadow-lg p-4 border rounded-md lg:border-0 lg:p-0 lg:shadow-none">
                <div className="flex justify-center">
                  <CheckedSVG />
                </div>
                <Heading2
                  className="!text-center"
                  blackHeading={
                    locale === "ar"
                      ? `تم إعادة تعيين كلمة المرور بنجاح`
                      : `Password Reset Successfully`
                  }
                />
                <div className="w-60 mx-auto">
                  <LanguageAwareLink
                    href={textToRouteUrl("/login")}
                    className={`flex justify-center bg-secondary text-white p-3 rounded-full`}>
                    {locale === "ar" ? "تسجيل الدخول" : "Login"}
                  </LanguageAwareLink>
                </div>
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
}
