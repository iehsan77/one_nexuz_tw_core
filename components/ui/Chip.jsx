import { cn } from "@/lib/utils"; // Optional: Tailwind classnames utility
import React from "react";

/**
 * Chip Component
 * @param {{
 *  label: string,
 *  icon?: string,
 *  endIcon?: string,
 *  onClick?: () => void,
 *  onRemove?: () => void,
 *  selected?: boolean,
 *  tooltip?: string,
 *  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'danger' | 'warning',
 *  size?: 'sm' | 'md' | 'lg',
 *  className?: string
 * }} props
 */
const Chip = ({
  label,
  icon,
  endIcon,
  onClick,
  onRemove,
  selected = false,
  tooltip,
  variant = "default",
  size = "md",
  className = "",
}) => {
  const baseStyles =
    "inline-flex items-center gap-1 rounded-full font-medium transition-colors";

  const sizeMap = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
    lg: "text-base px-4 py-1.5",
  };

  const variantMap = {
    default: "bg-gray-200 text-gray-800",
    primary: "bg-secondary text-white",
    secondary: "bg-purple-100 text-purple-700",
    success: "bg-green-100 text-green-700",
    danger: "bg-red-100 text-red-700",
    warning: "bg-yellow-100 text-yellow-800",
  };

  const selectedClasses = selected ? "ring-2 ring-offset-1 ring-blue-500" : "";

  return (
    <div
      className={cn(
        baseStyles,
        sizeMap[size],
        variantMap[variant],
        selectedClasses,
        className,
        onClick ? "cursor-pointer hover:opacity-90" : ""
      )}
      onClick={onClick}
      title={tooltip}>
      {icon ? icon : null}
      <span className="text-nowrap">{label}</span>
      {endIcon ? endIcon : null}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
          className="cursor-pointer ml-1 text-white hover:text-red-500 focus:outline-none">
          {/* <X size={16} /> */}
        </button>
      )}
    </div>
  );
};

export default Chip;
