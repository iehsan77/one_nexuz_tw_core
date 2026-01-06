"use client";
import React, { useContext, useEffect, useRef, useState } from "react";
import TopNavbar from "./TopNavbar";
import Image from "../Image/Image";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { navData, navDataAr } from "@/lib/navigation-config";
import Typography from "../ui/Typography";
import { useMenu } from "@/context/menu-context";
import NavTabs from "./NavTabs";
import LinkColumCard from "./LinkColumCard";
import GridLinkCard from "./GridLinkCard";
import LinkGridCard from "./LinkGridCard";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { Icon } from "@iconify/react";
import { filterNavData } from "@/helpers/filterNavData";
import { AnimatePresence, motion } from "framer-motion";
import ModalBtn from "@/sections/ModalBtn";
import useOnClickOutside from "@/hooks/useOnClickOutside";

export default function Navbar() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;
  const { showMenu, hideMenu } = useMenu();
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const searchRef = useRef(null);
  const servicesData = locale === "ar" ? navDataAr : navData;

  const filteredData = query ? filterNavData(servicesData, query) : [];

  useOnClickOutside(searchRef, () => {
    if (searchOpen) setSearchOpen(false);
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <div
      className={`fixed top-0 z-50 w-full transition-colors duration-300 ${
        scrolled ? "bg-secondary" : "bg-transparent"
      }`}
    >
      <TopNavbar />
      <div
        className={`border-b-2 border-white/50 ${
          searchOpen ? "py-[8.5px]" : ""
        }`}
      >
        <div className="container flex items-center gap-4 justify-between relative">
          <LanguageAwareLink href="/" onClick={() => hideMenu()}>
            <Image
              src="/logo/whiteLogo.svg"
              alt="logo"
              width={153}
              height={46}
            />
          </LanguageAwareLink>

          {/* Search */}
          {searchOpen && (
            <div className="relative flex-1">
              <AnimatePresence>
                {searchOpen && (
                  <motion.div
                    ref={searchRef}
                    key="search-bar"
                    initial={{ opacity: 0, scale: 0.95, y: 5 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 5 }}
                    transition={{ duration: 0.3 }}
                    className="relative w-full max-w-md mx-auto"
                  >
                    <div className="relative">
                      <input
                        ref={searchRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder={t?.navPlaceholder || "Search services..."}
                        className={`${
                          locale === "ar" ? "pl-10" : "pr-10"
                        } bg-white w-full px-4 py-2 rounded-lg text-sm focus:outline-none`}
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
                              locale === "ar"
                                ? "نتائج البحث"
                                : "result(s) found"
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

                    {/* No Results Found */}
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
                          <Typography
                            size="base"
                            className="text-wrap break-words"
                          >
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
          )}

          {/* Navigation links */}
          {!searchOpen && (
            <div className="flex items-center gap-4">
              {servicesData.map((item) => (
                <LanguageAwareLink
                  key={item.id}
                  href={item.url || "#"}
                  onClick={() => hideMenu()}
                  onMouseEnter={() => {
                    showMenu({
                      children:
                        item.view === "tabView" ? (
                          <NavTabs data={item.tabs} />
                        ) : item.view === "parentChildView" ? (
                          <div className="container">
                            <LinkColumCard data={item.items} />
                          </div>
                        ) : item.view === "parentChildGridView" ? (
                          <div className="container">
                            <LinkGridCard data={item.items} />
                          </div>
                        ) : (
                          <div className="container">
                            <GridLinkCard data={item.items} />
                          </div>
                        ),
                      onCloseCallback: () => setActive(null),
                    });
                    setActive(item.id);
                  }}
                  className={`${
                    active === item.id ? "border-primary" : "border-transparent"
                  } border-t-3 py-5 cursor-pointer text-center`}
                >
                  <Typography color="white" size="sm">
                    {item.title}
                  </Typography>
                </LanguageAwareLink>
              ))}
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                hideMenu();
                setSearchOpen((prev) => !prev);
              }}
              className="bg-white rounded-md p-1 cursor-pointer"
            >
              <Icon
                icon={searchOpen ? "lucide:x" : "lucide:search"}
                width="20"
                height="20"
              />
            </button>

            <div className="hidden xl:block">
              <ModalBtn
                text={t.btn.inquireNow}
                variant="solid"
                className="!py-[10px] rounded-sm"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
