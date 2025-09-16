"use client";
import React from "react";

const Heading2 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");

  return (
    <h2 className={`display2 mb-4 ${className}`}>
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : (
          <span
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary"
            }
            key={index}>{` ${text} `}</span>
        )
      )}
    </h2>
  );
};

export default Heading2;
