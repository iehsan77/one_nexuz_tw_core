"use client";
import { Icon } from "@iconify/react";

export default function RadioInput({
  title,
  icon,
  error,
  helperText,
  tooltip,
  required,
  className,
  ...props
}) {
  return (
    <div className={`${className} group`}>
      <label className="flex items-center space-x-3 cursor-pointer">
        <div className="relative">
          <input type="radio" className="sr-only peer" {...props} />
          <div
            className={`w-5 h-5 rounded-full border border-gray-600 transition-all duration-200 flex items-center justify-center ${
              error ? "border-red-500" : ""
            } ${
              props.checked || props.defaultChecked
                ? "border-primary bg-primary"
                : "bg-white"
            }`}>
            <Icon
              icon="mdi:check"
              className={`h-5 w-5 text-white transition-opacity duration-200 ${
                props.checked || props.defaultChecked
                  ? "opacity-100"
                  : "opacity-0"
              }`}
            />
          </div>
        </div>

        <div className="relative flex items-center">
          {icon && (
            <Icon icon={icon} className="h-5 w-5 text-gray-light mr-2" />
          )}
          <span className="text-sm text-gray-light">{title}</span>

          {tooltip && (
            <div className="ml-2 flex items-center">
              <div className="relative group/tooltip">
                <Icon
                  icon={"mdi:information"}
                  className="h-4 w-4 text-gray-light cursor-pointer"
                />
                <div className="absolute bottom-full right-0 mb-1 w-max rounded-md bg-gray-800 text-white text-xs py-1 px-2 hidden group-hover/tooltip:block transition-opacity duration-200">
                  {tooltip}
                </div>
              </div>
            </div>
          )}
        </div>
      </label>

      {helperText && !error && (
        <div className="text-[10px] text-gray-500 mt-1">{helperText}</div>
      )}
      {error && <div className="text-[10px] text-red-500 mt-1">{error}</div>}
    </div>
  );
}
