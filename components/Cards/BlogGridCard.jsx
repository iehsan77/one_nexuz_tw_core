import React from "react";
import Image from "../Image/Image";
import Typography from "../ui/Typography";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";

function BlogGridCard({ data, ar }) {
  return (
    <div className="bg-white h-full flex flex-col">
      {/* Thumbnail Image */}
      <div className="w-full">
        <Image
          src={data?.thumbnail_image}
          alt={data?.title}
          width={400}
          height={400}
          className="w-full h-[260px] object-cover"
        />
      </div>

      {/* Content */}
      <div className="pt-5 pb-3 flex flex-col flex-grow">
        <div className="flex items-center gap-7 mb-3">
          <Typography weight="normal" size="base" color="primary">
            08-11-2021
          </Typography>
          <Typography weight="normal" size="base" color="primary">
            {data?.category}
          </Typography>
        </div>

        <div className="space-y-2 mb-2">
          <Typography weight="medium" size="lg">
            {data?.title}
          </Typography>
          <Typography weight="normal" size="sm" color="gray">
            {data?.description}
          </Typography>
        </div>

        <LanguageAwareLink
          href="#"
          className="text-sm underline underline-offset-2 mt-auto flex items-center gap-3">
          {ar.btn.readMore}
        </LanguageAwareLink>
      </div>
    </div>
  );
}

export default BlogGridCard;
