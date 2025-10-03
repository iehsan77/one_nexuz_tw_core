"use client";
import React, { useContext, useEffect, useState } from "react";
import TopNavbar from "./TopNavbar";
import Image from "../Image/Image";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { navData } from "@/lib/navigation-config";
import Typography from "../ui/Typography";
import { useMenu } from "@/context/menu-context";
import NavTabs from "./NavTabs";
import LinkCards from "./LinkCards";
import ar from "@/locales/ar/common.json";
import en from "@/locales/en/common.json";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { Icon } from "@iconify/react";
import { filterNavData } from "@/helpers/filterNavData";
import { AnimatePresence, motion } from "framer-motion";

function Navbar() {
  const { locale } = useContext(LanguageContext);
  const t = locale === "ar" ? ar : en;
  const { showMenu } = useMenu();
  const [active, setActive] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [searchHide, setSearchHide] = useState(false);
  const [query, setQuery] = useState("");
  const filteredData = filterNavData(navData, query);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 z-50 w-full transition-colors duration-300
    ${scrolled ? "bg-secondary" : "bg-transparent"}`}>
      <TopNavbar />
      <div
        className={`border-b-2 border-white/50 ${
          searchHide ? "py-[8.5px]" : "py-0"
        }`}>
        <div className="container flex items-center gap-4 justify-between relative">
          <LanguageAwareLink href="/">
            <Image
              src="/logo/whiteLogo.svg"
              alt="logo"
              width={153}
              height={46}
            />
          </LanguageAwareLink>

          {/* Search bar */}
          {searchHide ? (
            <AnimatePresence>
              <motion.div
                key="search-bar"
                initial={{ width: 0, opacity: 0 }}
                animate={{ width: "65%", opacity: 1 }}
                exit={{ width: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="relative w-full">
                <input
                  type="text"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search anything"
                  className="bg-white w-full px-4 rounded-lg py-2 text-sm focus:outline-0"
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
          ) : (
            <div className="flex items-center gap-4">
              {navData?.map((item) => (
                <LanguageAwareLink
                  key={item?.id}
                  href={item?.url || "#"}
                  onMouseEnter={() => {
                    showMenu({
                      children: item?.tabs?.length ? (
                        <NavTabs data={item?.tabs} />
                      ) : (
                        <div className="container">
                          <LinkCards data={item?.items} />
                        </div>
                      ),
                      onCloseCallback: () => {
                        setActive(null);
                      },
                    });
                    setActive(item?.id);
                  }}
                  className={`${
                    active === item?.id
                      ? "border-primary"
                      : "border-transparent"
                  } border-t-3 py-5 cursor-pointer text-center`}>
                  <Typography color="white" size="sm">
                    {item?.title}
                  </Typography>
                </LanguageAwareLink>
              ))}
            </div>
          )}

          {/* Right Section */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchHide(!searchHide)}
              className="bg-white rounded-md p-1 cursor-pointer">
              <Icon icon="lucide:search" width="20" height="20" />
            </button>
            <div className="hidden xl:block">
              <LanguageAwareLink
                variant="primary"
                href="#"
                className="py-3 !text-base text-nowrap">
                {t.btn.inquireNow}
              </LanguageAwareLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
