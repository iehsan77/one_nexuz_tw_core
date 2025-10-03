"use client";
import React, { useContext } from "react";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { useFormContext } from "react-hook-form";

export default function NumberInput({
  label,
  icon, // e.g. "line-md:phone"
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
  const { watch } = useFormContext();
  const value = watch(props?.name);

  const { locale } = useContext(LanguageContext);
  const isRTL = locale === "ar";

  return (
    <div className="w-full relative group">
      <div
        className={`relative border-b ${
          error ? "border-red-500" : "border-gray-dark"
        } focus-within:border-primary transition-all`}>
        {/* Iconify Icon */}
        {icon && (
          <div
            className={`absolute inset-y-0 mb-1 ${
              isRTL ? "right-0 pr-2" : "left-0 pl-2"
            } flex items-center pointer-events-none`}>
            <Icon
              icon={icon}
              className={`h-5 w-5 ${
                error ? "text-red-500" : "text-grayDark"
              } group-focus-within:text-primary`}
            />
          </div>
        )}

        <div className="flex">
          {/* Input */}
          <input
            id={inputId}
            type="number"
            min={min}
            max={max}
            step={step}
            disabled={disabled}
            placeholder={placeholder}
            {...props}
            className={`text-gray-dark w-full py-1 text-sm focus:outline-none peer ${
              icon ? (isRTL ? "pr-10" : "pl-10") : "px-2"
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
          />

          {/* Label */}
          <label
            className={`text-sm absolute cursor-text truncate max-w-[calc(100%-18px)] float-labels
              ${
                icon
                  ? value
                    ? isRTL
                      ? "right-0"
                      : "left-0"
                    : isRTL
                    ? "right-10 peer-focus:right-0"
                    : "left-10 peer-focus:left-0"
                  : isRTL
                  ? "right-0"
                  : "left-0"
              }
              ${error ? "text-red-500" : "peer-focus:text-primary"}
              peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:text-xs peer-focus:-top-5 -top-5 text-xs`}>
            {label}
          </label>

          {/* Dropdown (if any) */}
          {dropdownOptions?.length ? (
            <select
              {...dropdownprops}
              className="px-2 border-l border-gray-light text-sm text-gray-light ring-0 focus:ring-0 outline-0 focus:outline-0">
              {dropdownOptions?.map((e, i) => (
                <option key={i} value={e}>
                  {e}
                </option>
              ))}
            </select>
          ) : null}
        </div>

        {/* Tooltip */}
        {tooltip && (
          <div
            className={`absolute inset-y-0 ${
              isRTL ? "left-2" : "right-2"
            } flex items-center`}>
            <div className="relative group/tooltip">
              <Icon
                icon="mdi:information"
                className="h-4 w-4 text-gray-400 cursor-pointer"
              />
              <div
                className={`absolute bottom-full ${
                  isRTL ? "left-0" : "right-0"
                } mb-1 w-max rounded-md bg-gray-800 text-white text-xs py-1 px-2 hidden group-hover/tooltip:block`}>
                {tooltip}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Helper/Error */}
      <div className="flex items-center justify-between">
        {helperText && !error && (
          <div className="text-[10px] text-gray-500 mt-1">{helperText}</div>
        )}
      </div>
      {error && <div className="text-[10px] text-red-500 mt-1">{error}</div>}
    </div>
  );
}
