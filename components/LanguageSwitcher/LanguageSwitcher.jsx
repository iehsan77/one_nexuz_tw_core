"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { useDrawer } from "@/context/drawer-context";

const languages = [
  {
    value: "en",
    label: "English",
    short: "EN",
    icon: "/assets/icons/english.svg",
  },
  {
    value: "ar",
    label: "Arabic",
    short: "AR",
    icon: "/assets/icons/arabic.svg",
  },
];

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale, setLocale } = useContext(LanguageContext);
  const { hideDrawer } = useDrawer();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleLocaleChange = (newLocale) => {
    const segments = pathname.split("/").filter(Boolean);

    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }

    let newPath = "/" + segments.join("/");
    const queryString = searchParams.toString();
    if (queryString) {
      newPath += `?${queryString}`;
    }

    router.push(newPath);
    setLocale(newLocale);
    setOpen(false);
    hideDrawer();
  };

  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "ar") {
      setLocale(segments[0]);
    }
  }, [pathname, setLocale]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const selectedLang = languages.find((lang) => lang.value === locale);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-1 rounded-md max-w-20 cursor-pointer text-sm">
        <span>{selectedLang.short}</span>
        <Icon icon="mdi:chevron-down" className="w-4 h-4" />
      </button>

      {open && (
        <div className="absolute z-50 mt-2 right-0 min-w-32 bg-white rounded-md shadow-lg border border-gray-200">
          {languages.map((lang) => (
            <button
              key={lang.value}
              onClick={() => handleLocaleChange(lang.value)}
              className="w-full flex items-center gap-2 px-4 py-2 text-left hover:bg-gray-100 cursor-pointer text-black text-sm">
              <span>{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
