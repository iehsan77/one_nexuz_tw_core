"use client";
import React, { useRef, useEffect, useState } from "react";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-xs sm:text-sm",
  base: "text-sm sm:text-base",
  lg: "text-base sm:text-lg leading-snug",
  xl: "text-lg sm:text-xl leading-snug",
  "2xl": "text-xl sm:text-2xl leading-snug",
  "3xl": "text-2xl sm:text-3xl leading-tight",
  "4xl": "text-2xl sm:text-4xl leading-tight",
  "5xl": "text-4xl sm:text-5xl leading-none",
  "6xl": "text-4xl md:text-5xl lg:text-6xl leading-none",
};

const weightClasses = {
  thin: "font-thin",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
  justify: "text-justify",
};

const colorClasses = {
  default: "text-gray",
  secondary: "text-secondary",
  primary: "text-primary",
  white: "text-white",
  gray: "text-gray",
  black: "text-black",
};

const Typography = ({
  as: Component = "p",
  size = "base",
  weight = "normal",
  align,
  color = "default",
  italic = false,
  underline = false,
  truncate = false,
  className = "",
  children,
  ...props
}) => {
  const textRef = useRef(null);
  const [isTruncated, setIsTruncated] = useState(false);

  useEffect(() => {
    if (truncate && textRef.current) {
      const el = textRef.current;
      setIsTruncated(el.scrollWidth > el.clientWidth);
    }
  }, [children, truncate]);

  const finalClassName = [
    sizeClasses[size] || "",
    weightClasses[weight] || "",
    align ? alignClasses[align] : "",
    colorClasses[color] || "",
    italic ? "italic" : "",
    underline ? "underline" : "",
    truncate ? "truncate" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const renderChildren = () => {
    if (typeof children === "string") {
      const regex = /\^(.*?)\^/g;
      const parts = [];
      let lastIndex = 0;
      let match;

      while ((match = regex.exec(children)) !== null) {
        if (match.index > lastIndex) {
          parts.push(children.slice(lastIndex, match.index));
        }
        parts.push(
          <span key={match.index} className="text-primary">
            {match[1]}
          </span>
        );
        lastIndex = regex.lastIndex;
      }

      if (lastIndex < children.length) {
        parts.push(children.slice(lastIndex));
      }

      return parts;
    }
    return children;
  };

  return (
    <Component
      ref={truncate ? textRef : null}
      className={finalClassName}
      title={
        truncate && isTruncated
          ? typeof children === "string"
            ? children
            : ""
          : undefined
      }
      {...props}>
      {renderChildren()}
    </Component>
  );
};

export default Typography;
