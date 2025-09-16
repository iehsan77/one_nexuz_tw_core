"use client";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import PropTypes from "prop-types";
// form
import { useFormContext, Controller } from "react-hook-form";
// ----------------------------------------------------------------------
RHFPhoneInput.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
export default function RHFPhoneInput({
  name,
  title,
  placeholder,
  className,
  ...other
}) {
  const { control } = useFormContext();
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field, fieldState: { error } }) => (
        <div className={`${className} flex flex-col`}>
          {title && (
            <div className="label">
              <span className="label-text text-gray text-sm">{title}</span>
            </div>
          )}
          <div className="border-b">
            <PhoneInput
              {...field}
              enableSearch={true}
              country={"ae"} // default country, customize as needed
              value={field.value || ""}
              onChange={(value) => field.onChange(value)}
              placeholder={placeholder}
              inputClass={`!w-full !border-none !border-b !pl-16 !pr-4 !py-3 ${
                error ? "!border-danger" : "!border-gray-300"
              }`}
              buttonClass="!bg-none !border-none !px-2 !py-3"
              containerClass="!w-full"
              {...other}
            />
          </div>
          {error?.message && (
            <p className="!text-xs text-red-500 mt-1">{error?.message}</p>
          )}
        </div>
      )}
    />
  );
}