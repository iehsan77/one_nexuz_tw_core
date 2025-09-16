"use client";
import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

function NotFound() {
  const { locale } = useContext(LanguageContext);
  return (
    <div className="flex justify-center items-center">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-8 w-full w-full text-center">
        <div className="flex justify-center mb-4 text-primary">
          <Icon icon="mdi:alert-circle-outline" width="48" height="48" />
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          {locale === "ar" ? "لم يتم العثور على نتائج" : "No Results Found"}
        </h2>
        <p className="text-gray-500">
          {locale === "ar"
            ? "نأسف، لم نتمكن من العثور على أي بيانات تطابق طلبك.."
            : "Sorry, we couldn't find any data that matches your request."}
        </p>
      </div>
    </div>
  );
}

export default NotFound;
