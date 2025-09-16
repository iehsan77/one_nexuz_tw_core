import React, { useContext } from "react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import Image from "next/image";
import { titleLangConverter } from "@/utils/apiHelper";
import NotFound from "@/components/NotFound/NotFound";

export default function CarComparisonTable({ data }) {
  const { locale } = useContext(LanguageContext);

  const specs = [
    {
      label: locale === "ar" ? "الشركة المصنعة" : "Make",
      value: (item) =>
        locale === "ar"
          ? item?.manufacturer_detail?.title_ar
          : item?.manufacturer_detail?.title_en,
    },
    {
      label: locale === "ar" ? "الموديل" : "Model",
      value: (item) =>
        locale === "ar"
          ? item?.model_detail?.title_ar
          : item?.model_detail?.title_en,
    },
    {
      label: locale === "ar" ? "القوة الحصانية" : "Horse Power",
      value: (item) => item?.horse_power,
    },
    {
      label: locale === "ar" ? "سنة الصنع" : "Year",
      value: (item) => item?.year,
    },
    {
      label: locale === "ar" ? "نظام الدفع" : "Drive Train",
      value: (item) =>
        locale === "ar"
          ? item?.drive_train_detail?.title_ar
          : item?.drive_train_detail?.title_en,
    },
    {
      label: locale === "ar" ? "نوع الهيكل" : "Body Style",
      value: (item) =>
        locale === "ar"
          ? item?.body_type_detail?.title_ar
          : item?.body_type_detail?.title_en,
    },
    {
      label: locale === "ar" ? "المحرك" : "Engine",
      value: (item) =>
        locale === "ar"
          ? item?.engine_detail?.title_ar
          : item?.engine_detail?.title_en,
    },
    {
      label: locale === "ar" ? "ناقل الحركة" : "Transmission",
      value: (item) =>
        locale === "ar"
          ? item?.transmission_detail?.title_ar
          : item?.transmission_detail?.title_en,
    },
    {
      label: locale === "ar" ? "عدد المقاعد" : "Seats",
      value: (item) => item?.no_of_seats,
    },
    {
      label: locale === "ar" ? "اللون الداخلي" : "Interior Color",
      value: (item) =>
        locale === "ar"
          ? item?.interior_color_detail?.title_ar
          : item?.interior_color_detail?.title_en,
    },
    {
      label: locale === "ar" ? "اللون الخارجي" : "Exterior Color",
      value: (item) =>
        locale === "ar"
          ? item?.exterior_color_detail?.title_ar
          : item?.exterior_color_detail?.title_en,
    },
    {
      label: locale === "ar" ? "التسارع 0-100 كم/س" : "0-100 KM/h",
      value: (item) => item?.acceleration,
    },
    {
      label: locale === "ar" ? "نوع الوقود" : "Fuel Type",
      value: (item) =>
        locale === "ar"
          ? item?.fuel_type_detail?.title_ar
          : item?.fuel_type_detail?.title_en,
    },
  ];

  return (
    <>
      {data?.length ? (
        <div className="overflow-x-auto mt-8">
          <div className="min-w-[1000px] grid grid-cols-4 rounded-lg">
            {/* Feature Labels Column */}
            <div className="display3 font-bold p-4 text-start flex items-end mb-4">
              {locale === "ar" ? "سمات" : "Features"}
            </div>

            {/* Cars */}
            {data.map((item) => (
              <div
                key={item?.id}
                className="text-center p-4 flex flex-col gap-2 justify-between">
                <div className="h-[150px] w-[220px] mx-auto rounded-md mb-2 overflow-hidden">
                  <Image
                    src={item?.thumbnails?.[0]?.media_url}
                    alt={"image"}
                    width={180}
                    height={120}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold text-base">
                    {titleLangConverter(item?.title_en, item?.title_ar, locale)}
                  </div>
                  <div className="font-semibold text-base">
                    (
                    {titleLangConverter(
                      item?.exterior_color_detail?.title_en,
                      item?.exterior_color_detail?.title_ar,
                      locale
                    )}{" "}
                    {item?.year})
                  </div>
                </div>
              </div>
            ))}

            {/* Invisible Placeholder Columns for alignment */}
            {Array.from({ length: 3 - data.length }).map((_, i) => (
              <div
                key={`placeholder-${i}`}
                className="text-center p-4 flex flex-col gap-2 justify-between opacity-0">
                <div className="h-[150px] w-[220px] mx-auto mb-2 rounded-md overflow-hidden bg-gray-100" />
                <div>
                  <div className="font-semibold text-base">&nbsp;</div>
                  <div className="font-semibold text-base">&nbsp;</div>
                </div>
              </div>
            ))}

            {/* Feature Rows */}
            {specs.map((spec, specIndex) => (
              <React.Fragment key={specIndex}>
                <div className="p-4 font-medium text-start">{spec.label}</div>
                {data.map((item, carIndex) => (
                  <div
                    key={`spec-${specIndex}-${carIndex}`}
                    className="p-4 text-center">
                    {spec.value(item)}
                  </div>
                ))}
                {/* Placeholder for feature rows */}
                {Array.from({ length: 3 - data.length }).map((_, i) => (
                  <div
                    key={`spec-placeholder-${specIndex}-${i}`}
                    className="p-4 text-center opacity-0">
                    &nbsp;
                  </div>
                ))}
              </React.Fragment>
            ))}
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <NotFound />
        </div>
      )}
    </>
  );
}
