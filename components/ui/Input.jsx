// components/ui/input.tsx
import React from "react";
import { cn } from "@/lib/utils";

const Input = (
  {
    className,
    variant = "default",
    size = "default",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    fullWidth = false,
    error = false,
    ...props
  },
  ref
) => {
  return (
    <div className={cn("relative", fullWidth ? "w-full" : "w-fit")}>
      {LeftIcon && (
        <div className="absolute left-3 top-1/2 -translate-y-1/2">
          <LeftIcon
            className={cn(
              "text-muted-foreground",
              size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
            )}
          />
        </div>
      )}
      <input
        className={cn(
          "flex rounded-md border border-input bg-background font-medium ring-offset-background transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
          // Variants
          {
            "border-input": variant === "default",
            "border border-border hover:border-primary": variant === "outline",
            "border-none bg-transparent hover:bg-accent": variant === "ghost",
            "border-none bg-accent hover:bg-accent/80": variant === "filled",
          },
          // Sizes
          {
            "h-8 px-2 text-xs": size === "sm",
            "h-10 px-3 py-2 text-sm": size === "default",
            "h-12 px-4 text-base": size === "lg",
          },
          // Icons
          LeftIcon ? "pl-9" : "pl-3",
          RightIcon ? "pr-9" : "pr-3",
          // Error state
          error && "border-destructive focus-visible:ring-destructive",
          fullWidth && "w-full",
          className
        )}
        ref={ref}
        {...props}
      />
      {RightIcon && (
        <div className="absolute right-3 top-1/2 -translate-y-1/2">
          <RightIcon
            className={cn(
              "text-muted-foreground",
              size === "sm" ? "h-3 w-3" : size === "lg" ? "h-5 w-5" : "h-4 w-4"
            )}
          />
        </div>
      )}
    </div>
  );
};

Input.displayName = "Input";

export { Input };
