import React from "react";

const Heading4 = ({ heading, blackHeading, className, multiThemeColor }) => {
  let resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h4
      className={`display4 mb-4 ${className}`}
    >
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : multiThemeColor ? (
          <span
            className={`text-transparent bg-clip-text bg-gradient-to-r ${multiThemeColor}`}
            key={index}
          >{` ${text} `}</span>
        ) : (
          <span
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary"
            }
            key={index}
          >{` ${text} `}</span>
        )
      )}
    </h4>
  );
};

export default Heading4;
