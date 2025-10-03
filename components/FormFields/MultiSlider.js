"use client";

import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Typography from "../ui/Typography";

export default function MultiSlider({
  value = [0, 0],
  onChange,
  min = 0,
  max = 100,
  step = 1,
  className = "",
  primaryColor = "#01793b",
  minLabel = "",
  maxLabel = "",
  ...other
}) {
  const [valMin, setValMin] = useState(value[0] ?? min);
  const [valMax, setValMax] = useState(value[1] ?? max);

  // Keep internal state in sync with parent
  useEffect(() => {
    setValMin(value[0]);
    setValMax(value[1]);
  }, [value]);

  const updateValues = (newMin, newMax) => {
    if (newMin <= newMax) {
      setValMin(newMin);
      setValMax(newMax);
      onChange?.([newMin, newMax]);
    }
  };

  return (
    <div className={className}>
      {/* Range Slider */}
      <div className="px-2">
        <Slider
          range
          value={[valMin, valMax]}
          onChange={(val) => updateValues(val[0], val[1])}
          min={min}
          max={max}
          step={step}
          trackStyle={[{ backgroundColor: "var(--secondary)", height: 6 }]}
          handleStyle={[
            { backgroundColor: "#fff", borderColor: "var(--secondary)" },
            { backgroundColor: "#fff", borderColor: "var(--secondary)" },
          ]}
          railStyle={{ backgroundColor: "#e5e7eb", height: 6 }}
          {...other}
        />
      </div>

      <div className="w-full flex flex-row items-center justify-between gap-2 mt-4">
        {/* Min Input */}
        <div className="">
          {minLabel && minLabel !== "m²" && (
            <Typography
              as="span"
              size="sm"
              color="muted"
              className="group-hover:text-primary">
              {minLabel}
            </Typography>
          )}
          <input
            type="number"
            value={valMin}
            min={min}
            max={valMax}
            step={step}
            onChange={(e) => updateValues(Number(e.target.value), valMax)}
            className="text-sm w-24 border border-none focus:outline-none"
          />
          {minLabel === "m²" && (
            <Typography
              as="span"
              size="sm"
              color="muted"
              className="group-hover:text-primary">
              {minLabel}
            </Typography>
          )}
        </div>

        {/* Max Input */}
        <div className="">
          {maxLabel && maxLabel !== "m²" && (
            <Typography
              as="span"
              size="sm"
              color="muted"
              className="group-hover:text-primary text-right">
              {maxLabel}
            </Typography>
          )}
          <input
            type="number"
            value={valMax}
            min={valMin}
            max={max}
            step={step}
            onChange={(e) => updateValues(valMin, Number(e.target.value))}
            className="text-sm w-24 border border-none focus:outline-none text-right"
          />
          {maxLabel === "m²" && (
            <Typography
              as="span"
              size="sm"
              color="muted"
              className="group-hover:text-primary text-right">
              {maxLabel}
            </Typography>
          )}
        </div>
      </div>
    </div>
  );
}

MultiSlider.propTypes = {
  value: PropTypes.arrayOf(PropTypes.number).isRequired,
  onChange: PropTypes.func.isRequired,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  className: PropTypes.string,
  primaryColor: PropTypes.string,
  minLabel: PropTypes.string,
  maxLabel: PropTypes.string,
};
