"use client";
import { useContext } from "react";
import Link from "next/link";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { Icon } from "@iconify/react";

export const LanguageAwareLink = ({
  href,
  variant,
  children,
  className,
  ...props
}) => {
  const { locale } = useContext(LanguageContext);
  const ar = locale === "ar";

  let localizedHref;

  if (typeof href === "string") {
    if (href.startsWith(`/${locale}`)) {
      localizedHref = hash ? `${href}#${hash}` : href;
    } else {
      localizedHref = `/${locale}${href.startsWith("/") ? href : "/" + href}`;
    }
  } else if (typeof href === "object" && href.pathname) {
    if (href.pathname.startsWith(`/${locale}`)) {
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
    <Link
      href={localizedHref}
      {...props}
      className={`${className} transition-colors ${
        variant === "primary"
          ? "rounded-md font-medium text-white bg-primary hover:bg-primary/80 text-center px-4 py-2"
          : variant === "rightIcon"
          ? "!px-0 text-nowrap h-fit w-fit !py-1 text-white flex items-center gap-1 text-md font-medium text-base border-b-2"
          : ""
      }`}>
      {children}
      {variant === "rightIcon" && (
        <Icon
          icon={ar ? "uil:angle-left" : "uil:angle-right"}
          width="26"
          height="26"
          className={ar ? "-ml-1" : "-mr-1"}
        />
      )}
    </Link>
  );
};

export default LanguageAwareLink;
