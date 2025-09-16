"use client";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";
const RHFCheckbox = ({ name, label, className,inputclass, ...other }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={false}
      render={({ field, fieldState: { error } }) => (
        <div className={`${className}`}>
          <label className="flex items-start">
            <input
              type="checkbox"
              {...field}
              {...other}
              checked={field.value}
              className={`${inputclass} mr-2 accent-primary rounded-full bg-gray-200 h-4 w-4`}
            />
            <div className="labelContent">
              <p
                dangerouslySetInnerHTML={{ __html: label }}
                className="sm:text-sm text-xs text-gray-700"
              />
            </div>
          </label>
          {error?.message && (
            <p
              variant="small"
              className="mt-1 text-xs font-normal text-red-500"
            >
              {error?.message}
            </p>
          )}
        </div>
      )}
    />
  );
};

RHFCheckbox.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default RHFCheckbox;
