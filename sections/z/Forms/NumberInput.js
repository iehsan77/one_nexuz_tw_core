"use client";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { Icon } from "@iconify/react";
import { useState, useEffect, useContext } from "react";
import { useFormContext } from "react-hook-form";

export default function NumberInput({
  label,
  icon,
  error,
  helperText,
  tooltip,
  disabled,
  placeholder = " ",
  id,
  min,
  max,
  step = 1,
  dropdownOptions = [],
  dropdownprops,
  ...props
}) {
  const inputId = id || `number-input-${Math.random().toString(36)}`;
  const { getValues } = useFormContext();
  const [value, setValue] = useState(getValues(props?.name) || "");

  useEffect(() => {
    setValue(getValues(props?.name) || "");
  }, [getValues(props?.name)]);

  const { locale } = useContext(LanguageContext);
  const isRTL = locale === "ar";

  return (
    <div>
      <div className="w-full relative group">
        <div
          className={`relative border-b ${
            error ? "border-red-500" : "border-gray-400"
          } focus-within:border-secondary transition-all`}>
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
              <Icon
                icon={icon}
                className={`h-5 w-5 ${
                  error ? "text-red-500" : "text-gray-400"
                } group-focus-within:text-secondary`}
              />
            </div>
          )}

          <div className="flex">
            <input
              id={inputId}
              {...props}
              type="number"
              value={value}
              min={min}
              max={max}
              step={step}
              disabled={disabled}
              placeholder={placeholder}
              onChange={(e) => setValue(e.target.value)}
              className={`w-full py-1 text-sm focus:outline-none peer ${
                icon ? "pl-10" : "pl-2"
              } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
              dir="ltr"
            />
            <label
              htmlFor={inputId}
              className={`text-sm absolute top-[-20px] ${
                isRTL
                  ? icon
                    ? "right-10"
                    : "right-0"
                  : icon
                  ? "left-10"
                  : "left-0"
              } text-gray-400 cursor-text truncate max-w-[calc(100%-18px)] float-labels
              ${error ? "text-red-500" : "peer-focus:text-secondary"}
              peer-placeholder-shown:text-sm
              peer-placeholder-shown:top-0
              peer-focus:text-xs
              peer-focus:top-[-20px]
              transition-all`}>
              {label}
            </label>
            {dropdownOptions?.length ? (
              <select
                {...dropdownprops}
                className="px-2 border-l border-gray-light text-sm text-gray-400 ring-0 focus:ring-0 outline-0 focus:outline-0">
                {dropdownOptions?.map((e, i) => (
                  <option key={i} value={e}>
                    {e}
                  </option>
                ))}
              </select>
            ) : (
              <></>
            )}
          </div>

          {tooltip && (
            <div className="absolute inset-y-0 right-2 flex items-center">
              <div className="relative group/tooltip">
                <Icon
                  icon={"mdi:information"}
                  className="h-4 w-4 text-gray-400 cursor-pointer"
                />
                <div className="absolute bottom-full right-0 mb-1 w-max rounded-md bg-gray-800 text-white text-xs py-1 px-2 hidden group-hover/tooltip:block">
                  {tooltip}
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="flex items-center justify-between">
          {helperText && !error && (
            <div className="text-[10px] text-gray-500 mt-1">{helperText}</div>
          )}
        </div>

        {error && <div className="text-[10px] text-red-500 mt-1">{error}</div>}
      </div>
    </div>
  );
}
