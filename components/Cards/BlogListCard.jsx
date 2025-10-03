import React from "react";
import Image from "../Image/Image";
import Typography from "../ui/Typography";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";

function BlogListCard({ data, ar }) {
  return (
    <div className="bg-white h-fit flex gap-5 first:pt-0 py-4 border-b border-gray-200">
      <div className="min-w-[110px] h-[110px]">
        <Image
          src={data?.thumbnail_image}
          alt={data?.title}
          width={105}
          height={107}
          className="w-full h-full object-cover"
        />
      </div>
      {/*  */}
      <div className="flex flex-col justify-between">
        <div className="flex items-center gap-7">
          <Typography weight="normal" size="sm" color="primary">
            08-11-2021
          </Typography>
          <Typography weight="normal" size="sm" color="primary">
            {data?.category}
          </Typography>
        </div>

        <Typography weight="medium" size="base">
          {data?.title}
        </Typography>

        <LanguageAwareLink
          href="#"
          className="text-sm underline underline-offset-2 flex items-center gap-3">
          {ar.btn.readMore}
        </LanguageAwareLink>
      </div>
    </div>
  );
}

export default BlogListCard;
