"use client";

import PropTypes from "prop-types";
import { Controller, useFormContext } from "react-hook-form";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { LanguageContext } from "@/app/[locale]/(MAIN)/context/LanguageContext";
import { useContext } from "react";

RHFMultiSlider.propTypes = {
  name: PropTypes.string.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  className: PropTypes.string,
  primaryColor: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
};

export default function RHFMultiSlider({
  name,
  min = 0,
  max = 100,
  step = 1,
  className = "",
  primaryColor = "#d40815",
  minLabel = "",
  maxLabel = "",
  ...other
}) {
  const { control, setValue } = useFormContext();
  const { locale } = useContext(LanguageContext);

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={[min, max]}
      render={({ field: { value = [min, max], onChange } }) => {
        const [valMin, valMax] = value;

        const handleInputChange = (index, newVal) => {
          const updated = [...value];
          updated[index] = Number(newVal);
          if (updated[0] <= updated[1]) {
            setValue(name, updated, { shouldValidate: true });
            onChange(updated);
          }
        };

        return (
          <div className={className}>
            <Slider
              range
              value={[valMin, valMax]}
              onChange={(val) => {
                setValue(name, val, { shouldValidate: true });
                onChange(val);
              }}
              min={min}
              max={max}
              step={step}
              trackStyle={[{ backgroundColor: primaryColor, height: 6 }]}
              handleStyle={[
                {  borderColor: primaryColor },
                { borderColor: primaryColor},
              ]}
              railStyle={{ backgroundColor: "#d40815", height: 6 }}
              {...other}
            />
            <div
              className={`flex items-center justify-between ${
                locale === "ar" ? "flex-row-reverse" : ""
              } gap-4 mb-2 mt-4`}>
              <div className="space-x-2">
                {minLabel && <span className="text-gray-600">{minLabel}</span>}
                <input
                  type="number"
                  value={valMin}
                  min={min}
                  max={valMax}
                  step={step}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="border-none focus:outline-none"
                  readOnly
                />
              </div>
              <div className="space-x-2">
                {maxLabel && <span className="text-gray-600">{maxLabel}</span>}
                <input
                  type="number"
                  value={valMax}
                  min={valMin}
                  max={max}
                  step={step}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  className="border-none focus:outline-none"
                  readOnly
                />
              </div>
            </div>
          </div>
        );
      }}
    />
  );
}
