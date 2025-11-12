import React, { useMemo } from "react";
import { cn } from "@/lib/utils"; // your classnames helper
import Image from "next/image";

const sizeMap = {
  sm: "w-8 h-8 text-xs",
  md: "w-10 h-10 text-sm",
  lg: "w-14 h-14 text-base",
  xl: "w-20 h-20 text-lg",
  xxl: "w-[100px] h-[100px] text-xl",
};

const sizeIndicator = {
  sm: "w-2.5 h-2.5",
  md: "w-3 h-3",
  lg: "w-3.5 h-3.5",
  xl: "w-4 h-4",
};

const statusColorMap = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500",
};

// fallback color palette
const fallbackColors = [
  "bg-red-200 text-red-800",
  "bg-blue-200 text-blue-800",
  "bg-green-200 text-green-800",
  "bg-yellow-200 text-yellow-800",
  "bg-purple-200 text-purple-800",
  "bg-pink-200 text-pink-800",
  "bg-indigo-200 text-indigo-800",
  "bg-teal-200 text-teal-800",
];

// get initials from name
function getInitials(name = "") {
  const words = name.trim().split(" ");
  if (words.length === 1) return words[0][0]?.toUpperCase() ?? "";
  return (words[0][0] + words[1][0]).toUpperCase();
}

// pick a consistent random color based on fallback string
function getColorClass(seed = "") {
  const index = seed.charCodeAt(0) % fallbackColors.length;
  return fallbackColors[index];
}

export default function Avatar({
  src,
  alt = "Avatar",
  fallback = "NA",
  size = "md",
  status,
  withRing = false,
  className = "",
}) {
  const initials = useMemo(() => getInitials(fallback), [fallback]);
  const colorClass = useMemo(() => getColorClass(fallback), [fallback]);

  return (
    <div className={cn("relative", sizeMap[size])}>
      <div
        className={cn(
          "relative inline-flex items-center justify-center rounded-full overflow-hidden",
          sizeMap[size],
          withRing && "ring-2 ring-primary",
          !src && colorClass,
          "font-medium uppercase",
          className
        )}>
        {src ? (
          <Image src={src} alt="image" fill className="object-cover" />
        ) : (
          initials
        )}
      </div>

      {/* Status indicator */}
      {status && (
        <span
          className={cn(
            "absolute bottom-0 right-0 block rounded-full ring-2 ring-white",
            sizeIndicator[size],
            statusColorMap[status]
          )}
        />
      )}
    </div>
  );
}
