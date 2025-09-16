import { default as NextLink } from "next/link";
import React from "react";
import PropTypes from "prop-types";
import { Icon } from "@iconify/react";

const Link = ({
  href,
  children,
  variant,
  icon1,
  icon2,
  iconClass,
  className = "",
  ...other
}) => {
  if (!href) {
    console.error("Missing `href` prop in <Link> component.");
    return null;
  }

  return (
    <NextLink
      href={href}
      className={`displayPara rounded-lg text-nowrap border-2 border-primaryDark sm:text-base text-xs sm:px-6 px-4 py-2 text-center transition-all duration-500 flex items-center justify-center ${className}
        ${
          variant === "primary"
            ? "bg-primary group-hover:bg-secondary text-white"
            : variant === "secondary"
            ? "border border-secondary hover:border-primary !text-white !bg-secondary hover:!bg-primary cursor-pointer transition-colors duration-200"
            : variant === "outline"
            ? "bg-transparent border border-primary text-primary hover:!bg-primary hover:!text-white hover:border-white"
            : variant === "outlineGray"
            ? "bg-transparent border border-gray text-gray hover:bg-gray hover:text-white hover:border-white"
            : variant === "white"
            ? "bg-white border border-white text-secondary"
            : variant === "whiteOutline"
            ? "bg-transparent border border-white text-white hover:bg-white hover:text-primary hover:border-primary"
            : variant === "txt"
            ? "!px-0 !py-0 !border-none bg-transparent text-primary hover:text-secondary"
            : variant === "black"
            ? "!border-none bg-secondary text-primary"
            : variant === "txtDarkbg"
            ? "!border-none bg-transparent text-white hover:text-primary"
            : ""
        }`}
      {...other}
    >
      {children}
      <span>
        {icon1 && (
          <Icon
            icon={"iconamoon:arrow-right-2-duotone"}
            width="1.5rem"
            height="1.5rem"
            className={`${iconClass} text-black`}
          />
        )}
      </span>
      <span>
        {icon2 && (
          <Icon
            icon={"fluent:arrow-right-48-filled"}
            width="1.5rem"
            height="1.5rem"
            className="text-black"
          />
        )}
      </span>
    </NextLink>
  );
};

Link.propTypes = {
  href: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  variant: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

export default Link;
