import { default as NextImage } from "next/image";
import React from "react";

const Image = (props) => {
  return <NextImage {...props} loading="lazy" decoding="auto" />;
};

export default Image;
