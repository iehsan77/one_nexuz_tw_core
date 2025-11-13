import Image from "@/components/Image/Image";
import LanguageAwareLink from "@/components/LanguageAwareLink/LanguageAwareLink";
import Typography from "@/components/ui/Typography";
import { navData, navDataAr } from "@/lib/navigation-config";
import React, { useEffect, useState } from "react";

function EndTOEndSetup({ data, t, locale }) {
  const servicesData = locale === "ar" ? navDataAr : navData;
  const tabs = servicesData || [];
  const [activeTab, setActiveTab] = useState(tabs[0]?.id);
  const [activeItem, setActiveItem] = useState(null);

  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0]?.id);
    }
  }, [tabs]);

  useEffect(() => {
    const filterData = data?.items?.find((item) => item.id === activeTab);
    if (filterData && filterData.data?.length > 0) {
      setActiveItem(filterData.data[0].id);
    }
  }, [activeTab, data]);

  const filterData = data?.items?.find((item) => item.id === activeTab);
  const activeDetail = filterData?.data?.find((d) => d.id === activeItem);

  return (
    <>
      <div className="secPadding container space-y-6 hidden lg:block">
        <Typography size="2xl" align="center" weight="bold" as="p">
          {data.title}
        </Typography>
        {/*  */}
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap xl:justify-between gap-4 bg-primaryLight">
          {tabs?.map((item) => (
            <Typography
              key={item?.id}
              size="base"
              align="center"
              color={activeTab === item?.id ? "primary" : ""}
              weight="medium"
              onClick={() => setActiveTab(item?.id)}
              className={`${
                activeTab === item?.id ? "border-primary" : "border-transparent"
              } border-b-2 sm:px-3 py-1 sm:py-3 cursor-pointer`}
            >
              {item?.title}
            </Typography>
          ))}
        </div>
        {/*  */}
        {/*  */}
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-10 mt-10">
          {/* 1 */}
          <div className="col-span-3 lg:col-span-1 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <Typography color="primary" weight="bold" size="2xl">
                {activeDetail?.title}
              </Typography>
              <Typography color="gray" weight="normal" size="base">
                {activeDetail?.description}
              </Typography>
              <LanguageAwareLink
                variant="rightIcon"
                href="#"
                className="!text-primary"
              >
                {t.btn.exploreMore}
              </LanguageAwareLink>
            </div>

            <div className="order-last bg-primaryLight p-4 space-y-2 rounded-lg w-full xs:max-w-[340px]">
              <Typography weight="bold" size="lg">
                {activeDetail?.title}
              </Typography>
              <div className="bg-white p-4 rounded-lg space-y-4">
                <Typography weight="bold" size="4xl">
                  {activeDetail?.count}
                </Typography>
                <Typography weight="normal" size="sm">
                  {activeDetail?.cardDescription}
                </Typography>
              </div>
            </div>
          </div>
          {/*  */}
          {/* 2 */}
          <div className="space-y-4 col-span-3 lg:col-span-2">
            <div className="flex items-center flex-wrap lg:flex-nowrap justify-between gap-6 sm:gap-3">
              <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
                {filterData?.data?.map((item) => (
                  <Typography
                    key={item?.id}
                    weight="medium"
                    align="center"
                    color={
                      activeDetail?.id === item?.id ? "primary" : "grayDarks"
                    }
                    className={`${
                      activeDetail?.id === item?.id
                        ? "border-primary"
                        : "border-transparent"
                    } sm:px-2 py-1 sm:py-2 cursor-pointer border-b-2`}
                    onClick={() => setActiveItem(item?.id)}
                  >
                    {item?.title}
                  </Typography>
                ))}
              </div>
              <LanguageAwareLink
                href="#"
                className="underline font-medium text-grayDark underline-offset-2"
              >
                {t.btn.viewAll}
              </LanguageAwareLink>
            </div>
            {/* image */}
            <div className="w-full">
              <Image
                src={activeDetail?.image}
                alt={activeDetail?.title}
                width={796}
                height={456}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
      {/* mobile sec */}
      <div className="secPadding container space-y-6 block lg:hidden">
        <Typography size="2xl" align="center" weight="bold" as="p">
          {data.title}
        </Typography>
        {/*  */}
        <div className="flex items-center justify-center flex-wrap lg:flex-nowrap xl:justify-between gap-4 bg-primaryLight">
          {tabs?.map((item) => (
            <Typography
              key={item?.id}
              size="base"
              align="center"
              color={activeTab === item?.id ? "primary" : ""}
              weight="medium"
              onClick={() => setActiveTab(item?.id)}
              className={`${
                activeTab === item?.id ? "border-primary" : "border-transparent"
              } border-b-2 sm:px-3 py-1 sm:py-3 cursor-pointer`}
            >
              {item?.title}
            </Typography>
          ))}
        </div>
        {/*  */}
        {/*  */}
        <div className="grid lg:grid-cols-3 gap-5 xl:gap-10 mt-10">
          <div className="col-span-3 flex items-center flex-wrap lg:flex-nowrap justify-between gap-6 sm:gap-3">
            <div className="flex items-center gap-3 flex-wrap lg:flex-nowrap">
              {filterData?.data?.map((item) => (
                <Typography
                key={item.id}
                  weight="medium"
                  align="center"
                  color={
                    activeDetail?.id === item?.id ? "primary" : "grayDarks"
                  }
                  className={`${
                    activeDetail?.id === item?.id
                      ? "border-primary"
                      : "border-transparent"
                  } sm:px-2 py-1 sm:py-2 cursor-pointer border-b-2`}
                  onClick={() => setActiveItem(item?.id)}
                >
                  {item?.title}
                </Typography>
              ))}
            </div>
            <LanguageAwareLink
              href="#"
              className="underline font-medium text-grayDark underline-offset-2"
            >
              {t.btn.viewAll}
            </LanguageAwareLink>
          </div>
          {/* 1 */}
          <div className="col-span-3 lg:col-span-1 flex flex-col justify-between gap-5">
            <div className="space-y-3">
              <Typography color="primary" weight="bold" size="2xl">
                {activeDetail?.title}
              </Typography>
              <Typography color="gray" weight="normal" size="base">
                {activeDetail?.description}
              </Typography>
              <LanguageAwareLink
                variant="rightIcon"
                href="#"
                className="!text-primary"
              >
                {t.btn.exploreMore}
              </LanguageAwareLink>
            </div>

            <div className="w-full">
              <Image
                src={activeDetail?.image}
                alt={activeDetail?.title}
                width={796}
                height={456}
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="bg-primaryLight p-4 space-y-2 rounded-lg w-full xs:max-w-[340px]">
              <Typography weight="bold" size="lg">
                {activeDetail?.title}
              </Typography>
              <div className="bg-white p-4 rounded-lg space-y-4">
                <Typography weight="bold" size="4xl">
                  {activeDetail?.count}
                </Typography>
                <Typography weight="normal" size="sm">
                  {activeDetail?.cardDescription}
                </Typography>
              </div>
            </div>
          </div>
          {/*  */}
        </div>
        {/*  */}
      </div>
    </>
  );
}

export default EndTOEndSetup;
