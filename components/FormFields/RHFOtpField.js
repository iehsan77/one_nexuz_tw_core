import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useFormContext, Controller } from "react-hook-form";

RHFOtpField.propTypes = {
  name: PropTypes.string.isRequired,
  numInputs: PropTypes.number,
  inputClassName: PropTypes.string,
  containerClassName: PropTypes.string,
};

export default function RHFOtpField({
  name,
  numInputs = 6,
  inputClassName,
  containerClassName,
  title,
  ...other
}) {
  const { control, setValue, trigger } = useFormContext();
  const [otp, setOtp] = useState(Array(numInputs).fill(""));

  const handleChange = (index, value) => {
    const newOtp = [...otp];
    newOtp[index] = value.slice(-1); // Ensure only one digit is entered
    setOtp(newOtp);
    setValue(name, newOtp.join(""));

    // Move focus to the next input if the current input is filled
    if (value && index < numInputs - 1) {
      const nextInput = document.getElementById(`otp-${index + 1}`);
      if (nextInput) nextInput.focus();
    }

    // Trigger validation when OTP length reaches the required number of inputs
    if (newOtp.join("").length === numInputs) {
      trigger(name);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index]) {
      const prevInput = document.getElementById(`otp-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleFocus = (index) => {
    const input = document.getElementById(`otp-${index}`);
    input?.setSelectionRange(0, 1);
  };

  const handlePaste = (e) => {
    const data = e.clipboardData.getData("text").split("");
    if (data.length === numInputs) {
      setOtp(data);
      setValue(name, data.join(""));
    }
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ fieldState: { error } }) => (
        <div className={`${containerClassName} flex justify-between flex-col gap-1 w-full`}>
          <div className="flex justify-between xs:gap-4 gap-2 w-full" onPaste={handlePaste}>
            {otp.map((digit, index) => (
              <input
                key={index}
                id={`otp-${index}`}
                type="text"
                maxLength="1"
                value={digit}
                onChange={(e) => handleChange(index, e.target.value)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onFocus={() => handleFocus(index)}
                className={`h-10 w-10 text-center border-b ${inputClassName} focus:outline-0`}
                autoComplete="off"
                placeholder="0"
              />
            ))}
          </div>
          {error?.message && (
            <p className="text-xs text-red-500">{error.message}</p>
          )}
        </div>
      )}
    />
  );
}
