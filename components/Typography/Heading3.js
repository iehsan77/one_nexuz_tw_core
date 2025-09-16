import React from "react";

const Heading3 = ({ heading, blackHeading, className, multiThemeColor }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h3
      className={`display3 mb-4 ${className}`}
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
    </h3>
  );
};

export default Heading3;
