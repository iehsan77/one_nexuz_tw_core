import React from "react";

const Heading6 = ({ heading, blackHeading, className }) => {
  var resultHeading = heading?.split("^") || blackHeading?.split("^");
  return (
    <h5
      className={`display6 mb-2 ${className}`}
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

export default Heading6;
