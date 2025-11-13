// import { default as NextImage } from "next/image";
// import React from "react";

// const Image = (props) => {
//   return <NextImage {...props} loading="lazy" decoding="auto" alt="" />;
// };

// export default Image;


import { default as NextImage } from "next/image";
import React from "react";

const Image = ({ src, alt = "", ...props }) => {
  // ✅ Avoid rendering if src is empty, null, or undefined
  if (!src) return null;

  return (
    <NextImage
      {...props}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
    />
  );
};

export default Image;
