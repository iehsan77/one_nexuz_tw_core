"use client";
import React, { useContext, useEffect, useState } from 'react'
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { Icon } from "@iconify/react";
import { useFormContext } from "react-hook-form";

export default function TextInput({
  label,
  icon,
  error,
  helperText,
  tooltip,
  disabled,
  placeholder = " ",
  maxLength,
  id,
  is_required,
  ...props
}) {
  const inputId = id || `input-${Math.random().toString(36)}`;
  const { getValues } = useFormContext();
  const [charCount, setCharCount] = useState(
    getValues(props?.name)?.length || 0
  );

  useEffect(() => {
    setCharCount(getValues(props?.name)?.length || 0);
  }, [getValues, (props?.name)]);

  const { locale } = useContext(LanguageContext);
  const isRTL = locale === "ar";

  return (
    <div>
      <div className="w-full relative group">
        <div
          className={`relative border-b ${
            error ? "border-red-500" : "border-gray-500"
          } focus-within:border-secondary transition-all`}>
          {/* Icon */}
          {icon && (
            <div
              className={`absolute inset-y-0 ${
                isRTL ? "right-0 pr-2" : "left-0 pl-2"
              } flex items-center pointer-events-none`}>
              <Icon
                icon={icon}
                className={`h-5 w-5 ${
                  error ? "text-red-500" : "text-gray-400"
                } group-focus-within:text-secondary`}
              />
            </div>
          )}

          {/* Input */}
          <input
            id={inputId}
            {...props}
            disabled={disabled}
            placeholder={placeholder}
            maxLength={maxLength}
            className={`w-full py-1 text-base focus:outline-none peer ${
              icon ? (isRTL ? "pr-10" : "pl-10") : "px-2"
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
            dir="ltr"
          />

          {/* Label */}
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
              peer-placeholder-shown:text-base
              peer-placeholder-shown:top-0
              peer-focus:text-sm
              peer-focus:top-[-20px]
              transition-all`}>
            {label} {is_required && <span className="text-red-500">*</span>}
          </label>

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

        {/* Helper / Error Text & Char Count */}
        <div className={`flex items-center justify-between mt-1`}>
          {helperText && !error && (
            <div className="text-[10px] text-gray-400">{helperText}</div>
          )}
          {error && <div className="text-[10px] text-red-500">{error}</div>}
          {maxLength && (
            <div className="text-xs text-gray-400 ml-auto">
              {charCount}/{maxLength}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
