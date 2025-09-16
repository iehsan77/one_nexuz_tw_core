"use client";
import Image from "next/image";
import React, { useContext } from "react";
import Heading5 from "../Typography/Heading5";
import Paragraph from "../Typography/Paragraph";
import { textToRouteUrl, titleLangConverter } from "@/utils/apiHelper";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { Icon } from "@iconify/react";
import Link from "../Link/Link";

function ProductCard({ data, toggleFavorite }) {
  const { locale } = useContext(LanguageContext);

  return (
    <>
      <div className="rounded-2xl overflow-hidden relative bg-white border border-gray-300 h-full">
        <div className="absolute right-4 top-4 z-10 bg-primary py-1 px-4 rounded-sm border-primaryDark border-2">
          <Paragraph
            className="!font-[400] !text-white !mb-0"
            blackText1={titleLangConverter(
              data?.feature_en,
              data?.feature_ar,
              locale
            )}
          />
        </div>
        <div className="h-full flex flex-col">
          <div className="aspect-[410/261] w-full relative overflow-hidden">
            <Image
              src={data?.thumbnails?.[0]?.media_url || "/placeholder.jpg"}
              alt={data?.car_manufacturer_detail?.title_en || "Car"}
              fill
              className={`object-cover h-full w-full transition-opacity duration-500 `}
            />
          </div>
          <div className="p-4">
            <div className="">
              <div>
                <Heading5
                  blackHeading={titleLangConverter(
                    data?.title_en,
                    data?.title_ar,
                    locale
                  )}
                  className="!text-secondary !mb-0 line-clamp-1"
                />
                <div className="flex items-start justify-between ">
                  <div className="flex items-center gap-2 pb-4">
                    {data?.rental_price1 && (
                      <Paragraph
                        blackText1={`USD ${data?.rental_price1} /`}
                        className="!text-gray-600 line-through !mb-0"
                      />
                    )}

                    <Heading5
                      blackHeading={`USD ${data?.rental_price}`}
                      className="!text-primary !mb-0"
                    />
                  </div>
                  <div className="flex space-x-4">
                    <button
                      className=""
                      //  onClick={handleAddRemoveFavorites}
                    >
                      <Icon
                        icon={`${
                          toggleFavorite
                            ? "mdi:cards-heart"
                            : "mdi:cards-heart-outline"
                        }`}
                        width="1.5rem"
                        height="1.5rem"
                        className={`!text-secondary hover:cursor-pointer
                    ${toggleFavorite && "!text-primary"} `}
                      />
                    </button>
                    <button
                      // onClick={() =>
                      //   getData({
                      //     id,
                      //     front_image,
                      //     city,
                      //     price,
                      //     beds,
                      //     baths,
                      //     land_area,
                      //     area_unit_txt,
                      //     title,
                      //     address,
                      //     active,
                      //     isShare: true
                      //   })
                      // }
                      className=""
                    >
                      <Icon
                        icon="fluent:share-16-filled"
                        width="1.5rem"
                        height="1.5rem"
                        className="!text-secondary hover:cursor-pointer"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* Features + Button */}
            <div className="border-t border-gray-300">
              <div className="flex flex-wrap items-center py-4 gap-x-2 gap-y-2 text-nowrap">
                {data?.carFeatures?.map((feature, index) => (
                  <div key={index} className="xs:grow">
                    <div className="flex items-center gap-2">
                      <Image
                        src={feature.icon}
                        alt="icon"
                        width={20}
                        height={20}
                      />
                      <Paragraph
                        className="!font-[400] !text-secondary lg:text-sm !text-xs !mb-0"
                        blackText1={titleLangConverter(
                          feature?.title_en,
                          feature?.title_ar,
                          locale
                        )}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="border-t border-gray-300">
              <div className="flex py-4 gap-2 text-nowrap">
                {data?.carColors?.map((feature, index) => (
                  <div key={index} className="">
                    <div className="flex items-center gap-2">
                      <Paragraph
                        className="!font-[400] !text-secondary !mb-0"
                        blackText1={titleLangConverter(
                          feature?.title_en,
                          feature?.title_ar,
                          locale
                        )}
                      />
                      <div
                        className={`w-6 h-6 rounded-full ${feature.carColor}`}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex gap-2">
                <Link
                  variant={`primary`}
                  href={`product/${textToRouteUrl(`${data?.slug}`)}`}
                  className={``}
                >
                  {locale === "ar" ? "اختر السيارة" : "Buy Now"}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export const ProductCardSkeleton = () => {
  const shimmer = "animate-pulse bg-gray-200";
  return (
    <div className="rounded-lg bg-white">
      <div className="h-full flex flex-col px-4">
        {/* Title + Price */}
        <div className="flex items-center justify-between pt-2 mb-2">
          <div>
            <div className={`h-4 w-24 mb-2 rounded ${shimmer}`} />
            <div className={`h-3 w-16 rounded ${shimmer}`} />
          </div>
          <div className="flex flex-col items-end">
            <div className={`h-4 w-20 mb-2 rounded ${shimmer}`} />
            <div className={`h-3 w-10 rounded ${shimmer}`} />
          </div>
        </div>

        {/* Image Placeholder */}
        <div className="aspect-[301/236] w-full relative overflow-hidden rounded-md mb-4">
          <div className={`absolute inset-0 rounded-md ${shimmer}`} />
        </div>

        {/* Tags */}
        <div className="mb-2 flex gap-2 flex-wrap">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className={`h-6 w-20 rounded-md ${shimmer}`} />
            ))}
        </div>

        {/* Features */}
        <div className="flex items-center gap-4 mb-3">
          {Array(3)
            .fill(0)
            .map((_, i) => (
              <div key={i} className="flex gap-2 items-center">
                <div className={`h-6 w-6 rounded-md ${shimmer}`} />
                <div className={`h-3 w-14 rounded ${shimmer}`} />
              </div>
            ))}
        </div>

        {/* Button */}
        <div className="flex gap-2 pb-4">
          <div className={`h-10 w-full rounded-md ${shimmer}`} />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
