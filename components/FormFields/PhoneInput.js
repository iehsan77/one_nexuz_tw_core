"use client";
import { useState } from "react";
import { Icon } from "@iconify/react";
import {
  AsYouType,
  getCountries,
  getCountryCallingCode,
} from "libphonenumber-js";
import { useFormContext } from "react-hook-form";

const countries = getCountries();

export default function PhoneInput({
  label = "Phone Number",
  icon,
  error,
  helperText,
  tooltip,
  disabled,
  //   value = "",
  placeholder = " ",
  id,
  ...props
}) {
  const { setValue, getValues } = useFormContext();

  const inputId = id || `phone-input-${Math.random().toString(36)}`;
  const [selectedCountry, setSelectedCountry] = useState("US");
  const [formatted, setFormatted] = useState(getValues(props?.name));

  const handleNumberChange = (e) => {
    const raw = e.target.value;
    const formatter = new AsYouType(selectedCountry);
    const formattedNumber = formatter.input(raw);
    setFormatted(formattedNumber);
    setValue(
      props?.name,
      `+${getCountryCallingCode(selectedCountry)} ${formattedNumber}`
    );
  };

  const handleCountryChange = (e) => {
    const newCountry = e.target.value;
    setSelectedCountry(newCountry);
    const formatter = new AsYouType(newCountry);
    const formattedNumber = formatter.input(formatted.replace(/\D/g, ""));
    setFormatted(formattedNumber);
    setValue(
      props?.name,
      `+${getCountryCallingCode(newCountry)} ${formattedNumber}`
    );
  };

  return (
    <div>
      <div className="w-full relative group">
        <div
          className={`relative border-b ${
            error ? "border-red-500" : "border-gray-400"
          } focus-within:border-secondary transition-all`}>
          {/* Icon */}
          {icon && (
            <div className="absolute inset-y-0 left-0 flex items-center pl-2 pointer-events-none">
              <Icon
                icon={icon}
                className={`h-5 w-5 ${
                  error ? "text-red-500" : "text-gray-400"
                } group-focus-within:text-secondary`}
              />
            </div>
          )}

          {/* Country Selector */}
          <select
            value={selectedCountry}
            onChange={handleCountryChange}
            className={`absolute  top-1 bottom-1 bg-transparent pr-1 text-sm focus:outline-none ${
              icon ? "left-10" : "left-2"
            }`}>
            {countries.map((country) => (
              <option key={country} value={country}>
                +{getCountryCallingCode(country)}
              </option>
            ))}
          </select>

          {/* Phone Input */}
          <input
            id={inputId}
            onChange={handleNumberChange}
            disabled={disabled}
            placeholder={placeholder}
            className={`w-full py-1 text-sm focus:outline-none peer ${
              icon ? "pl-28" : "pl-20"
            } ${disabled ? "cursor-not-allowed opacity-50" : ""}`}
            {...props}
          />

          {/* Label */}
          <label
            htmlFor={inputId}
            className={`absolute text-gray-400 cursor-text truncate max-w-[calc(100%-18px)] float-labels ${
              icon ? "left-28" : "left-20"
            } ${
              error ? "text-red-500" : "peer-focus:text-secondary"
            } peer-placeholder-shown:text-sm peer-placeholder-shown:top-0 peer-focus:text-xs peer-focus:left-0 peer-focus:-top-5 -top-5 text-xs`}>
            {label}
          </label>

          {/* Tooltip */}
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

        {/* Helper Text */}
        {helperText && !error && (
          <div className="text-[10px] text-gray-500 mt-1">{helperText}</div>
        )}

        {/* Error */}
        {error && <div className="text-[10px] text-red-500 mt-1">{error}</div>}
      </div>
    </div>
  );
}
