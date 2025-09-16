"use client";
import { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";

export const LanguageAwareLink = ({ href, children, ...props }) => {
  const { locale } = useContext(LanguageContext);

  let localizedHref;

  if (typeof href === "string") {
    if (href === "/") {
      localizedHref = `/${locale}`;
    } else if (href.startsWith(`/${locale}`)) {
      localizedHref = href; // already localized
    } else {
      localizedHref = `/${locale}${href.startsWith("/") ? href : "/" + href}`;
    }
  } else if (typeof href === "object" && href.pathname) {
    if (href.pathname === "/") {
      localizedHref = { ...href, pathname: `/${locale}` };
    } else if (href.pathname.startsWith(`/${locale}`)) {
      localizedHref = href;
    } else {
      localizedHref = {
        ...href,
        pathname: `/${locale}${
          href.pathname.startsWith("/") ? href.pathname : "/" + href.pathname
        }`,
      };
    }
  } else {
    console.error("Invalid href passed to LanguageAwareLink:", href);
    return null;
  }

  return (
    <Link href={localizedHref} {...props}>
      {children}
    </Link>
  );
};
export default LanguageAwareLink;
