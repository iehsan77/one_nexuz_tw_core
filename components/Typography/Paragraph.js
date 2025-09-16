"use client";
import React from "react";

const Paragraph = ({
  blackText1,
  coloredText,
  blackText2,
  whiteText,
  className,
}) => {
  return (
    <p className={`displayPara font-[400] mb-4 ${className}`}>
      {blackText1} <span className={`text-primary`}>{coloredText}</span>{" "}
      {blackText2} <span className="!text-white">{whiteText}</span>
    </p>
  );
};

export default Paragraph;
