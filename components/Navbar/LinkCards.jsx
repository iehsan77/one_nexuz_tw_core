"use client";
import React from "react";
import Typography from "../ui/Typography";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";

function LinkCards({ data = [] }) {
  return (
    <div>
      {/* 4 column flow */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
        {data?.map((item) => (
          <div key={item?.id} className="break-inside-avoid mb-6">
            <Typography
              as="h3"
              weight="semibold"
              className="border-b-2 border-gray w-fit text-nowrap mb-4">
              {item?.title}
            </Typography>
            {item?.links?.map((i) => (
              <div key={i?.id} className="mb-2">
                <LanguageAwareLink href={i?.url}>{i?.title}</LanguageAwareLink>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkCards;
