"use client";
import React, { Suspense, useContext, useRef, useState } from "react";
import Typography from "../ui/Typography";
import { info } from "@/mock/data";
import { Icon } from "@iconify/react";
import Link from "next/link";
import LanguageSwitcher from "../LanguageSwitcher/LanguageSwitcher";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import Image from "../Image/Image";
import { navData, navDataAr } from "@/lib/navigation-config";
import { filterNavData } from "@/helpers/filterNavData";
import { AnimatePresence, motion } from "framer-motion";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import useOnClickOutside from "@/hooks/useOnClickOutside";

function TopNavbar() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;
  const servicesData = locale === "ar" ? navDataAr : navData;
  const [searchHide, setSearchHide] = useState(false);
  const [query, setQuery] = useState("");
  const filteredData = filterNavData(servicesData, query);
  const searchRef = useRef(null);

  useOnClickOutside(searchRef, () => {
    if (searchHide) setSearchHide(false);
  });

  return (
    <div className="">
      <div className=" bg-white w-full">
        <div className="container py-4 flex items-center justify-between gap-4">
          {/*  */}
          {!searchHide && (
            <LanguageAwareLink href="/" className="block lg:hidden">
              <Image
                src="/logo/blackLogo.svg"
                alt="logo"
                width={153}
                height={46}
              />
            </LanguageAwareLink>
          )}
          <div className="hidden lg:flex items-center gap-6">
            {info?.map((item, i) => (
              <Typography key={i} as="p" weight="medium">
                <Link href={item?.link} className="flex items-center gap-2">
                  <Icon icon={item?.icon} weight="20" height="20" />
                  {item?.title}
                </Link>
              </Typography>
            ))}
          </div>
          {/*  */}
          {/*  */}
          {searchHide && (
            <AnimatePresence>
              <motion.div
                ref={searchRef}
                key="search-bar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={t?.navPlaceholder}
                  className="bg-white w-full px-4 rounded-lg py-2 text-sm focus:outline-0 border border-gray"
                />

                {/* Search Suggestions */}
                {query && filteredData?.length > 0 && (
                  <div className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-lg max-h-60 overflow-y-auto z-50">
                    {filteredData.map((item) => (
                      <LanguageAwareLink
                        key={item?.id}
                        href={item?.url || "#"}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        onClick={() => {
                          setQuery("");
                          setSearchHide(false);
                        }}>
                        {item?.parent
                          ? `${item.parent} › ${item.title}`
                          : item.title}
                      </LanguageAwareLink>
                    ))}
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          )}
          {/*  */}
          {/*  */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchHide(!searchHide)}
              className="bg-gray text-white rounded-md p-1 cursor-pointer block lg:hidden">
              <Icon icon="lucide:search" width="18" height="18" />
            </button>
            {!searchHide && (
              <Suspense fallback={<div>Loading...</div>}>
                <LanguageSwitcher />
              </Suspense>
            )}
          </div>
          {/*  */}
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
