import React from "react";
import Image from "next/image";
import Paragraph from "../Typography/Paragraph";
import Heading2 from "../Typography/Heading2";
import Link from "../Link/Link";

export const BlogCard2 = ({
  thumbnail_image,
  title,
  createon,
  description,
  slug,
  categories_data,
}) => {
  const createdDate =
    createon && createon["$date"]
      ? new Date(createon["$date"]).toDateString()
      : "Unknown Date";

  return (
    <div className={`my-2`}>
      <div
        className={`shadow-md rounded-2xl overflow-hidden bg-white`}>
        <div
          className={`relative w-full h-0 pt-[52%] sm:min-w-[350px] sm:pt-[52%] overflow-hidden`}>
          <Link href={`/blog/${slug}`}>
            <Image
              src={thumbnail_image}
              alt={"Blog Image"}
              width={350}
              height={240}
              className="absolute object-cover w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            />
          </Link>
        </div>
        <div
          className={`p-5`}>
          <div className="flex items-center gap-3">
            <Link
              variant={`primary`}
              className={`!inline-flex !px-2 !py-1 !text-xs`}
              href={`/blog/category/${categories_data[0]?.title
                ?.replace(/\s+/g, "-")
                .toLowerCase()}?category_id=${categories_data[0]?.id}`}>
              {/* <p
              className={`inline-block text-xs mt-3 px-4 py-1 bg-primary text-white rounded-full`}>
              <TruncateText wordLimit={3}>
              </TruncateText>
            </p> */}
              {categories_data[0]?.title || "sell"}
            </Link>
            <div>{`5 min read`}</div>
          </div>
          <div className="flex flex-col ">
            <div
              className={`flex`}>
              <Paragraph
                className={`!text-xs !mb-2 pt-2 !text-left`}
                blackText1={createdDate}
              />
            </div>
            <Heading2
              blackHeading={title}
              className={`!text-left !mb-2 !font-[500] md:!text-lg !text-lg line-clamp-1`}
            />
            <Paragraph
              blackText1={description}
              className={`!text-left !text-sm line-clamp-1 !mb-0`}
            />
            <div className="mt-auto pt-2">
              <Link
                variant={`txt`}
                href={`/blog/${slug}`}
                icon1
                className={`!inline-flex justify-start !text-black !text-sm`}>
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard2;
