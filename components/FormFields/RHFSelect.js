"use client";
import React, { useEffect } from 'react'
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
import Select from "react-select";

RHFSelect.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  className: PropTypes.string,
  innerDivClassName: PropTypes.string,
  resetField: PropTypes.string,
  resetValue: PropTypes.any,
  isLoading: PropTypes.bool,
  options: PropTypes.array.isRequired,
  defaultValue: PropTypes.any,
  menuPortalTarget: PropTypes.any,
};

export default function RHFSelect({
  name,
  title,
  placeholder,
  isMulti,
  className,
  innerDivClassName,
  resetField,
  resetValue,
  isLoading,
  options,
  defaultValue,
  menuPortalTarget,
  ...other
}) {
  const { control, setValue } = useFormContext();

  useEffect(() => {
    if (defaultValue) {
      setValue(name, defaultValue);
    }
  }, [name, setValue, defaultValue]);

  /** ✅ Updated customStyles for dropdown + option height */
  const customStyles = {
    container: (base) => ({
      ...base,
      width: "100%",
    }),
    control: (base) => ({
      ...base,
      boxShadow: "none",
      border: "0px solid #e5e7eb",
      borderRadius: "8px",
      minHeight: "42px", // Input height
      padding: "2px 4px",
    }),
    menu: (base) => ({
      ...base,
      maxHeight: "200px", // 👈 Dropdown max height
      overflowY: "auto",
      overflowX: "hidden",
      zIndex: 9999,
    }),
    menuList: (base) => ({
      ...base,
      maxHeight: "200px", // 👈 Same height applied here
      overflowY: "auto",
      overflowX: "hidden",
      padding: 0,
    }),
    option: (base, state) => ({
      ...base,
      height: "40px", // 👈 Each option height
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      backgroundColor: state.isFocused ? "#f3f4f6" : "#fff",
      color: "#000",
      cursor: "pointer",
    }),
    singleValue: (base) => ({
      ...base,
      color: "#000",
    }),
    placeholder: (base) => ({
      ...base,
      fontSize: "14px",
      color: "#9ca3af",
    }),
    indicatorSeparator: () => ({
      display: "none",
    }),
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || (isMulti ? [] : null)}
      render={({ field, fieldState: { error } }) => {
        return (
          <div className={`${className}`}>
            <div className={`${innerDivClassName} flex flex-col gap-2`}>
              {title && (
                <div className="label">
                  <span className="label-text text-gray text-sm">{title}</span>
                </div>
              )}
              <Select
                name={field.name}
                onBlur={field.onBlur}
                onChange={(e) => {
                  field.onChange(e);
                  if (resetValue) {
                    setValue(resetField, resetValue);
                  }
                }}
                value={
                  isMulti
                    ? field?.value?.length
                      ? field?.value
                      : []
                    : field?.value?.value
                    ? field.value
                    : null
                }
                ref={field.ref}
                placeholder={placeholder}
                isMulti={isMulti}
                isLoading={isLoading}
                options={options}
                defaultValue={defaultValue}
                menuPortalTarget={menuPortalTarget}
                styles={customStyles}
                {...other}
              />
            </div>
            {error?.label?.message && (
              <p className="text-xs text-red-500">{error?.label?.message}</p>
            )}
          </div>
        );
      }}
    />
  );
}
