import { Icon } from "@iconify/react";
import React from "react";

const Button = ({
  text = [`Search`],
  icon,
  icon2,
  loading,
  variant,
  className,
  disabled,
  ...other
}) => {
  return (
    <button
      disabled={disabled}
      className={`px-4 py-2 border-1 text-nowrap rounded-lg hover:cursor-pointer sm:text-base text-xs transition-all ease-in-out duration-300 ${className}
        ${
          variant === "primary"
            ? "border-primaryDark !text-white bg-primary"
            : variant === "secondary"
            ? "border-secondary !text-white bg-secondary cursor-pointer"
            : variant === "solid"
            ? "border-primary !text-white bg-primary hover:bg-white hover:!text-primary cursor-pointer"
            : variant === "solidWhite"
            ? "border-white !text-primary bg-white hover:bg-primary hover:!text-white cursor-pointer"
            : variant === "solidBlack"
            ? "border-black !text-white bg-black hover:text-primary"
            : variant === "outline"
            ? "border-primary text-primary hover:text-white"
            : variant === "outlineWhite"
            ? "bg-transparent border-white text-white hover:bg-white hover:text-primary hover:border-primary"
            : variant === "lightGray"
            ? "bg-[#FAFAFA] border-[#E2E2E2] text-black !rounded-md"
            : variant === "txt"
            ? "text-black !px-0 !py-0 !border-none !rounded-none !text-base font-[500]"
            : ""
        }`}
      {...other}
    >
      {loading ? (
        <Icon
          icon="eos-icons:bubble-loading"
          width="1.5rem"
          height="1.5rem"
          className="mx-auto"
        />
      ) : (
        <span className="flex items-center justify-center gap-2">
          <span>
            {icon && <Icon icon={icon} width="1.5rem" height="1.5rem" />}
          </span>
          <span>{text}</span>
          <span>
            {icon2 && <Icon icon={icon2} width="1.5rem" height="1.5rem" />}
          </span>
        </span>
      )}
    </button>
  );
};

export default Button;
