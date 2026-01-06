"use client";
import React, {
  Suspense,
  useContext,
  useRef,
  useState,
  useEffect,
} from "react";
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

  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filteredData = query ? filterNavData(servicesData, query) : [];
  const searchRef = useRef(null);

  useOnClickOutside(searchRef, () => {
    if (searchOpen) setSearchOpen(false);
  });

  useEffect(() => {
    if (searchOpen && searchRef.current) {
      setTimeout(() => {
        searchRef.current.focus();
      }, 100);
    }
  }, [searchOpen]);

  const handleSearchResultClick = () => {
    setQuery("");
    setSearchOpen(false);
    hideMenu();
  };

  return (
    <div className="bg-white w-full">
      <div className="container py-4 flex items-center justify-between gap-4">
        {/* Logo */}
        {!searchOpen && (
          <LanguageAwareLink href="/" className="block lg:hidden">
            <Image
              src="/logo/blackLogo.svg"
              alt="logo"
              width={153}
              height={46}
            />
          </LanguageAwareLink>
        )}

        {/* Info Section */}
        <div className="hidden lg:flex items-center gap-6">
          {info?.map((item, i) => (
            <Typography key={i} as="p" weight="medium">
              <Link href={item?.link} className="flex items-center gap-2">
                <Icon icon={item?.icon} width={20} height={20} />
                {item?.title}
              </Link>
            </Typography>
          ))}
        </div>

        {/* Search Input */}
        <div className="flex-1 relative">
          <AnimatePresence>
            {searchOpen && (
              <motion.div
                ref={searchRef}
                key="search-bar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "100%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full"
              >
                <div className="relative">
                  <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={t?.navPlaceholder}
                    className={`${
                      locale === "ar" ? "pl-10" : "pr-10"
                    } bg-white w-full px-4 rounded-lg py-2 text-sm focus:outline-none border border-gray`}
                  />
                  {query && (
                    <button
                      onClick={() => {
                        setQuery("");
                      }}
                      className={`${
                        locale === "ar" ? "left-3" : "right-3"
                      } cursor-pointer absolute top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700`}
                    >
                      <Icon icon="lucide:x" width="16" height="16" />
                    </button>
                  )}
                </div>

                {/* Search Suggestions */}
                {query && filteredData.length > 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute left-0 top-full mt-2 w-full bg-white shadow-xl rounded-lg max-h-80 overflow-y-auto z-50 border border-gray-200"
                  >
                    <div className="p-2">
                      <div className="text-xs text-gray-500 px-3 py-2 border-b border-gray-200">
                        {filteredData.length}{" "}
                        {`${
                          locale === "ar" ? "نتائج البحث" : "result(s) found"
                        }`}
                      </div>
                      {filteredData.map((item) => (
                        <LanguageAwareLink
                          key={`${item.id}-${item.parent}`}
                          href={item.url || "#"}
                          className="block px-3 py-3 text-sm hover:bg-gray-50 border-b border-gray-200 last:border-b-0 transition-colors"
                          onClick={handleSearchResultClick}
                        >
                          <Typography size="sm" weight="medium">
                            {item.title}
                          </Typography>
                          {item.parent && (
                            <div className="text-xs text-gray-500 mt-1">
                              {item.parent}
                            </div>
                          )}
                        </LanguageAwareLink>
                      ))}
                    </div>
                  </motion.div>
                )}

                {query && filteredData.length === 0 && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-0 top-full mt-2 w-full bg-white shadow-xl rounded-lg z-50 border border-gray-200 p-4"
                  >
                    <div className="text-center text-gray-500">
                      <Icon
                        icon="lucide:search-x"
                        width="24"
                        height="24"
                        className="mx-auto mb-2"
                      />
                      <Typography size="base" className="text-wrap break-words">
                        {`${
                          locale === "ar"
                            ? "لا نتائج مطابقة"
                            : "No results found for"
                        }`}{" "}
                        "{query}"
                      </Typography>
                      <Typography size="sm" className="mt-1">
                        {`${
                          locale === "ar"
                            ? "حاول استخدام كلمات مختلفة"
                            : "Try different keywords"
                        }`}
                      </Typography>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          <button
            onClick={() => setSearchOpen((prev) => !prev)} // ✅ functional toggle
            className="bg-gray text-white rounded-md p-1 cursor-pointer block lg:hidden"
          >
            <Icon
              icon={searchOpen ? "lucide:x" : "lucide:search"}
              width={18}
              height={18}
            />
          </button>

          {!searchOpen && (
            <Suspense fallback={<div>Loading...</div>}>
              <LanguageSwitcher />
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
