import React from "react";
import Heading5 from "./Typography/Heading5";

const DataNotFound = () => {
  return (
    <>
      <div className="pt-6">
      <div className="sm:w-xl w-full mx-auto border shadow-md rounded-md py-4 px-8">
        <Heading5
          className="text-center !mb-0 text-nowrap "
          blackHeading={`Data Not Found`}
        />
      </div>
      </div>
    </>
  );
};

export default DataNotFound;
