"use client";

import { icons } from "@/utils/icon";
import { Icon } from "@iconify/react";
import PropTypes from "prop-types";
import { useState } from "react";
// form
import { useFormContext, Controller } from "react-hook-form";

// ----------------------------------------------------------------------

RHFTextField.propTypes = {
  name: PropTypes.string,
};

export default function RHFTextField({
  name,
  title,
  placeholder,
  className,
  textArea,
  variant,
  type,
  inputClass,
  isHidden,
  iconHide,
  colorHide,
  ...other
}) {
  const [togglePass, setTogglePass] = useState(type);
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} flex flex-col`}>
          {textArea ? (
            <>
              {title && (
                <div className={`mb-2`}>
                  <label className="displayPara font-semibold">{title}</label>
                </div>
              )}
              <textarea
                {...field}
                placeholder={placeholder}
                value={
                  typeof field.value === "number" && field.value === 0
                    ? ""
                    : field.value
                }
                // error={!!error}
                rows={7}
                {...other}
                className={`w-full py-2 px-2 bg-transparent outline-none !mb-0 border-gray-700
                  ${variant == "outlined" && "border-b"}
                  `}
                autoComplete="off"
              />
            </>
          ) : (
            <>
              {title && (
                <div className={`mb-2 ${isHidden && "hidden sm:block"}`}>
                  <label className=" font-semibold !text-gray-light">{title}</label>
                </div>
              )}

              {type === "password" ? (
                <div
                  className={`border-b overflow-hidden ${error ? 'border-red-500' : 'border-[#f1f1f1]'}
                    } flex items-center`}
                >
                  <input
                    {...field}
                    placeholder={placeholder}
                    type={togglePass}
                    value={
                      typeof field.value === "number" && field.value === 0
                        ? ""
                        : field.value
                    }
                    // error={!!error}
                    {...other}
                    className={`w-full para focus:outline-none px-4 py-2 ${inputClass}`}
                    autoComplete="off"
                  />
                  <Icon
                    onClick={() =>
                      togglePass === "password"
                        ? setTogglePass("text")
                        : setTogglePass("password")
                    }
                    className="shrink-0 mr-3"
                    icon={`${togglePass == "password"
                      ? "ion:eye-off-outline"
                      : "simple-line-icons:eye"
                      }`}
                    width="1.3rem"
                    height="1.3rem"
                  />
                </div>
              ) : (
                <div className="relative w-full">
                  {iconHide && <div className="absolute z-20 text-primary inset-y-2 pr-2 mt-[4px] right-0">
                    <Icon icon={icons.percent} width={"1.1rem"} height={"1.1rem"} />
                  </div>}
                  <input
                    {...field}
                    placeholder={placeholder}
                    type={type}
                    value={
                      typeof field.value === "number" && field.value === 0
                        ? ""
                        : field.value
                    }
                    // error={!!error}
                    {...other}
                    className={`border-b ${inputClass} ${error ? 'border-red-500' : 'border-[#f1f1f1]'} focus:outline-none ${colorHide ? "h-[42px]" : "px-4 py-2"} w-full`}
                    autoComplete="off"
                  />
                </div>
              )}
            </>
          )}
          {error?.message && (
            <p className="text-xs text-red-500 mt-1">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
}

RHFSubscribeTextField.propTypes = {
  name: PropTypes.string,
};

export function RHFSubscribeTextField({
  name,
  placeholder,
  className,
  inputClass,
  ...other
}) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <div className={`relative ${className}`}>
          <input
            {...field}
            placeholder={placeholder}
            value={
              typeof field.value === "number" && field.value === 0
                ? ""
                : field.value
            }
            {...other}
            className={`px-6 !py-2 outline-none bg-transparent border border-white w-full rounded-md shadow-lg placeholder:text-sm ${inputClass}`}
            autoComplete="off"
          />
          {error?.message && (
            <p
              variant="small"
              className="absolute left-0 text-xs font-normal text-red-500"
            >
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
}