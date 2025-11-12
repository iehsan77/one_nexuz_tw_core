// "use client";

// import { useContext, useEffect, useRef, useState } from "react";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";
// import Image from "next/image";
// import { Icon } from "@iconify/react";
// import { useDrawer } from "@/context/drawer-context";
// import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

// const languages = [
//   {
//     value: "en",
//     label: "Eng",
//     short: "Eng",
//     icon: "/icons/en.svg",
//   },
//   {
//     value: "ar",
//     label: "العربية",
//     short: "العربية",
//     icon: "/icons/ar.svg",
//   },
// ];

// export default function LanguageSwitcher() {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();
//   const { locale, setLocale } = useContext(LanguageContext);
//   const { hideDrawer } = useDrawer();

//   const [open, setOpen] = useState(false);
//   const dropdownRef = useRef(null);

//   const handleLocaleChange = (newLocale) => {
//     const segments = pathname.split("/").filter(Boolean);

//     if (segments[0] === "en" || segments[0] === "ar") {
//       segments[0] = newLocale;
//     } else {
//       segments.unshift(newLocale);
//     }

//     let newPath = "/" + segments.join("/");
//     const queryString = searchParams.toString();
//     if (queryString) {
//       newPath += `?${queryString}`;
//     }

//     router.push(newPath);
//     setLocale(newLocale);
//     setOpen(false);
//     hideDrawer();
//   };

//   useEffect(() => {
//     const segments = pathname.split("/").filter(Boolean);
//     if (segments[0] === "en" || segments[0] === "ar") {
//       setLocale(segments[0]);
//     }
//   }, [pathname, setLocale]);

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
//         setOpen(false);
//       }
//     };

//     document.addEventListener("mousedown", handleClickOutside);
//     return () => {
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, []);

//   const selectedLang = languages.find((lang) => lang.value === locale);

//   return (
//     <div ref={dropdownRef} className="relative inline-block text-left">
//       <button
//         onClick={() => setOpen((prev) => !prev)}
//         className="flex items-center gap-2 rounded-md max-w-22 bg-transparent cursor-pointer">
//         <Image
//           src={selectedLang?.icon}
//           alt={selectedLang?.short}
//           width={30}
//           height={30}
//         />
//         <span className="font-sm text-gray font-medium">
//           {selectedLang?.short}
//         </span>
//         <Icon
//           icon="mdi:chevron-down"
//           className="text-gray"
//           width="22"
//           height="22"
//         />
//       </button>

//       {open && (
//         <div className="absolute z-10 mt-2 w-22 bg-white overflow-hidden rounded-md shadow-lg border border-gray-200">
//           {languages?.map((lang) => (
//             <button
//               onClick={() => handleLocaleChange(lang.value)}
//               key={lang.value}
//               className={`w-full px-4 py-2 font-sm text-center cursor-pointer
//       ${
//         lang.value === locale
//           ? "bg-primary text-white font-semibold"
//           : "text-gray hover:bg-gray-100"
//       }`}>
//               <span>{lang.label}</span>
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

"use client";

import { useContext, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useDrawer } from "@/context/drawer-context";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

const languages = [
  {
    value: "en",
    label: "Eng",
    short: "Eng",
    icon: "/icons/en.svg",
  },
  {
    value: "ar",
    label: "العربية",
    short: "العربية",
    icon: "/icons/ar.svg",
  },
];

export default function LanguageSwitcher() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { locale, setLocale } = useContext(LanguageContext);
  const { hideDrawer } = useDrawer();

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // ✅ Detect locale from current path
  useEffect(() => {
    const segments = pathname.split("/").filter(Boolean);
    if (segments[0] === "en" || segments[0] === "ar") {
      setLocale(segments[0]);
    }
  }, [pathname, setLocale]);

  // ✅ Close dropdown on outside click
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

  // ✅ Build language-specific path
  const buildPathForLocale = (newLocale) => {
    const segments = pathname.split("/").filter(Boolean);
    // Replace or prepend locale
    if (segments[0] === "en" || segments[0] === "ar") {
      segments[0] = newLocale;
    } else {
      segments.unshift(newLocale);
    }
    let newPath = "/" + segments.join("/");
    const queryString = searchParams.toString();
    if (queryString) newPath += `?${queryString}`;
    return newPath;
  };

  const selectedLang = languages.find((lang) => lang.value === locale);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      {/* ✅ Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex items-center gap-2 rounded-md max-w-22 bg-transparent cursor-pointer">
        <Image
          src={selectedLang?.icon}
          alt="image"
          width={30}
          height={30}
        />
        <span className="font-sm text-gray font-medium">
          {selectedLang?.short}
        </span>
        <Icon
          icon="mdi:chevron-down"
          className="text-gray"
          width="22"
          height="22"
        />
      </button>

      {/* ✅ Dropdown */}
      {open && (
        <div className="absolute z-10 mt-2 w-22 bg-white overflow-hidden rounded-md shadow-lg border border-gray-200">
          {languages.map((lang) => (
            <Link
              key={lang.value}
              href={buildPathForLocale(lang.value)}
              onClick={() => {
                setLocale(lang.value);
                setOpen(false);
                hideDrawer();
              }}
              className={`block px-4 py-2 text-center font-sm cursor-pointer ${
                lang.value === locale
                  ? "bg-primary text-white font-semibold"
                  : "text-gray hover:bg-gray-100"
              }`}>
              <div className="flex items-center justify-center gap-2">
                <Image
                  src={lang.icon}
                  alt="image"
                  width={20}
                  height={20}
                />
                <span>{lang.label}</span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
