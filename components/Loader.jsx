import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-primary"></div>
    </div>
  );
}

export default Loader;
