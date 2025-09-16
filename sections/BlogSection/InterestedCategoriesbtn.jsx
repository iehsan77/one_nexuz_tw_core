import React from "react";
import Link from "next/link";

const InterestedCategoriesbtn = ({ id, title }) => {
  const maxChars = 20;
  const truncatedTitle =
    title.length > maxChars ? title.substring(0, maxChars) + "..." : title;

  return (
    <>
      <Link
        href={`/blog/category/${title
          ?.replace(/\s+/g, "-")
          .toLowerCase()}?category_id=${id}`}
      >
        <div className="flex justify-center items-center text-nowrap text-center px-3 py-2 ">
          {truncatedTitle}
        </div>
      </Link>
    </>
  );
};

export default InterestedCategoriesbtn;
