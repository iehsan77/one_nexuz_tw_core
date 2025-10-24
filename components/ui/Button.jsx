// components/ui/button.tsx
"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(
  (
    {
      as = "button", // "button" or "link"
      href,
      children,
      className,
      variant,
      size = "default",
      isLoading = false,
      icon: Icon,
      iconPosition = "left",
      fullWidth = false,
      disabled = false,
      ...props
    },
    ref
  ) => {
    const baseClasses = cn(
      "cursor-pointer inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
      // Variants
      {
        "text-center bg-primary text-white hover:bg-primary/90":
          variant === "primary",
        "!px-0 text-primary border-b-2 rounded-none": variant === "icon",
        "rounded-md border text-gray border-gray-300": variant === "outline",
        "border border-primary text-primary hover:bg-primary/10":
          variant === "solid",
        "text-primary underline-offset-4 hover:underline": variant === "link",
        "bg-destructive text-destructive-foreground hover:bg-destructive/90":
          variant === "danger",
      },
      // Sizes
      {
        "h-8 px-3 text-xs": size === "sm",
        "min-h-10 py-2 px-4": size === "default",
        "h-12 px-6 text-lg": size === "lg",
        "h-10 w-10": size === "icon",
      },
      fullWidth ? "w-full" : "",
      className
    );

    const IconLeft = !isLoading && Icon && iconPosition === "left" && (
      <Icon className={cn(children ? "mr-2" : "")} />
    );

    const IconRight = !isLoading && Icon && iconPosition === "right" && (
      <Icon className={cn(children ? "ml-2" : "")} />
    );

    const Spinner = isLoading && (
      <Icon
        icon="fluent:spinner-ios-16-filled"
        width="16"
        height="16"
        className="text-gray"
      />
    );

    if (as === "link" && href) {
      return (
        <Link href={href || "#"} className={baseClasses} ref={ref} {...props}>
          {Spinner}
          {IconLeft}
          {children}
          {IconRight}
        </Link>
      );
    }

    return (
      <button
        className={baseClasses}
        ref={ref}
        disabled={isLoading || disabled}
        {...props}>
        {Spinner}
        {IconLeft}
        {children}
        {IconRight}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
