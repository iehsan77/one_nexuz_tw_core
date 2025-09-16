import React from "react";

const Heading5 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h5
      className={`display5 mb-4 ${className}`}
    >
      {resultHeading?.map((text, index) =>
        index % 2 === 0 ? (
          text
        ) : (
          <span
            className={
              "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary"
            }
            key={index}
          >{` ${text} `}</span>
        )
      )}
    </h5>
  );
};

export default Heading5;
