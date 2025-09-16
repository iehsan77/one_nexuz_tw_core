"use client";
import React, { useContext } from "react";
import Button from "@/components/Button/Button";
import Image from "@/components/Image/Image";
import Heading2 from "@/components/Typography/Heading2";
import Heading3 from "@/components/Typography/Heading3";
import Heading5 from "@/components/Typography/Heading5";
import Paragraph from "@/components/Typography/Paragraph";
import "react-calendar/dist/Calendar.css";
import BookingSection from "./BookingSection";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { ConvertToCurrency } from "@/utils/apiHelper";
import { useRouter } from "next/navigation";

const ProductDetailSection = ({ data }) => {
  const { locale } = useContext(LanguageContext);
  return (
    <>
      <section className="pt-4 pb-8">
        <div className="container">
          <div className="">
            <Heading2
              blackHeading={locale === "ar" ? data?.title_ar : data?.title_en}
            />
          </div>
          <div className="pt-6">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className=" space-y-6">
                <CarCompare data={data} />
                <SpecificationsSection data={data} />
              </div>
              <div className="">
                <BookingSection data={data} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

const CarCompare = ({ data }) => {
  const router = useRouter();
  const { locale } = useContext(LanguageContext);

  const handleCompareClick = () => {
    if (data?.slug) {
      router.push(`/${locale}/compare-your-car/${data?.slug}`);
    }
  };

  return (
    <div className="bg-secondaryLight lg:px-6 px-4 lg:py-8 py-6 rounded-xl">
      <div className="flex items-center gap-2">
        <Paragraph blackText1={locale === "ar" ? "السعر لـ" : "Price for"} />
        <Paragraph
          blackText1={locale === "ar" ? "يوم واحد" : "1 Day"}
          className={`bg-secondary text-white rounded-full px-3 py-1`}
        />
      </div>
      <Heading3 blackHeading={`${ConvertToCurrency(data?.rental_price)}`} />
      <div className="space-y-4">
        <ul>
          <li className="displayPara text-secondary flex gap-2 py-1">
            <Image
              src={"/assets/icons/icon_12.svg"}
              alt={"available"}
              width={24}
              height={24}
            />
            {locale === "ar" ? "متوفر الآن" : "Available Now"}
          </li>
          <li className="displayPara text-secondary flex gap-2 py-1">
            {data?.commission_value > 0 ? (
              <Image
                src={"/assets/icons/calendar-check.png"}
                alt={"deposit"}
                width={24}
                height={24}
              />
            ) : (
              <Image
                src={"/assets/icons/icon_13.svg"}
                alt={"deposit"}
                width={24}
                height={24}
              />
            )}
            {data?.commission_value > 0
              ? locale === "ar"
                ? `مبلغ الوديعة الأمنية ${ConvertToCurrency(
                    data?.security_deposit_amount
                  )}`
                : `Security Deposit Amount ${ConvertToCurrency(
                    data?.security_deposit_amount
                  )}`
              : locale === "ar"
              ? "لا حاجة للتأمين"
              : "No Deposit Needed"}
          </li>
          <li className="displayPara text-secondary flex gap-2 py-1">
            <Image
              src={"/assets/icons/check_icon.svg"}
              alt={"mileage"}
              width={24}
              height={24}
            />
            {locale === "ar"
              ? `الحد الأقصى للكيلومترات - ${data?.mileage_limit} كم لمدة يوم`
              : `Mileage limit - ${data?.mileage_limit} km for 1 Day`}
          </li>
          <li className="displayPara text-secondary flex gap-2 py-1">
            <Image
              src={"/assets/icons/check_icon.svg"}
              alt={"delivery"}
              width={24}
              height={24}
            />
            {locale === "ar" ? "توصيل مجاني في دبي" : "Free delivery in Dubai"}
          </li>
          <li className="displayPara text-secondary flex gap-2 py-1">
            <Image
              src={"/assets/icons/check_icon.svg"}
              alt={"payment"}
              width={24}
              height={24}
            />
            {locale === "ar"
              ? "نقبل الدفع نقدًا أو ببطاقات الائتمان / الخصم"
              : "Cash, Credit/debit cards accepted"}
          </li>
        </ul>
        <Button
          variant={`secondary`}
          text={locale === "ar" ? "قارن سيارتك" : "Compare Your Car"}
          className={`w-full`}
          onClick={handleCompareClick}
        />
      </div>
    </div>
  );
};

const SpecificationsSection = ({ data }) => {
  const { locale } = useContext(LanguageContext);

  const specs = [
    {
      label: locale === "ar" ? "الشركة المصنعة" : "Make",
      value:
        locale === "ar"
          ? data?.manufacturer_detail?.title_ar
          : data?.manufacturer_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "الموديل" : "Model",
      value:
        locale === "ar"
          ? data?.model_detail?.title_ar
          : data?.model_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "القوة الحصانية" : "Horse Power",
      value: data?.horse_power,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "سنة الصنع" : "Year",
      value: data?.year,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "نظام الدفع" : "Drive Train",
      value:
        locale === "ar"
          ? data?.drive_train_detail?.title_ar
          : data?.drive_train_detail?.title_en,
      icon: "/assets/icons/icon_16.svg",
    },
    {
      label: locale === "ar" ? "نوع الهيكل" : "Body Style",
      value:
        locale === "ar"
          ? data?.body_type_detail?.title_ar
          : data?.body_type_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "المحرك" : "Engine",
      value:
        locale === "ar"
          ? data?.engine_detail?.title_ar
          : data?.engine_detail?.title_en,
      icon: "/assets/icons/icon_15.svg",
    },
    {
      label: locale === "ar" ? "ناقل الحركة" : "Transmission",
      value:
        locale === "ar"
          ? data?.transmission_detail?.title_ar
          : data?.transmission_detail?.title_en,
      icon: "/assets/icons/icon_18.svg",
    },
    {
      label: locale === "ar" ? "عدد المقاعد" : "Seats",
      value: data?.no_of_seats,
      icon: "/assets/icons/icon_17.svg",
    },
    {
      label: locale === "ar" ? "اللون الداخلي" : "Interior Color",
      value:
        locale === "ar"
          ? data?.interior_color_detail?.title_ar
          : data?.interior_color_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "اللون الخارجي" : "Exterior Color",
      value:
        locale === "ar"
          ? data?.exterior_color_detail?.title_ar
          : data?.exterior_color_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "التسارع 0-100 كم/س" : "0-100 KM/h",
      value: data?.acceleration,
      icon: "/assets/icons/icon_14.svg",
    },
    {
      label: locale === "ar" ? "نوع الوقود" : "Fuel Type",
      value:
        locale === "ar"
          ? data?.fuel_type_detail?.title_ar
          : data?.fuel_type_detail?.title_en,
      icon: "/assets/icons/icon_14.svg",
    },
  ];

  return (
    <div className="">
      <Heading3
        blackHeading={locale === "ar" ? "المواصفات" : "Specifications"}
      />
      <ul className="flex items-center flex-wrap lg:grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-3 text-sm pt-4">
        {specs.map((spec, index) => (
          <li key={index} className="flex items-start gap-2">
            <Image src={spec.icon} alt={spec.label} width={24} height={24} />
            <div>
              <Heading5 className="!mb-0" blackHeading={spec.label} />
              <span className="text-gray-600">{spec.value}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="mt-6 space-y-4">
        <Heading2
          blackHeading={locale === "ar" ? data?.title_ar : data?.title_en}
        />
        <p
          className="displayPara font-[400] my-2"
          dangerouslySetInnerHTML={{
            __html:
              locale === "ar" ? data?.description_ar : data?.description_en,
          }}></p>
      </div>
    </div>
  );
};

export default ProductDetailSection;
