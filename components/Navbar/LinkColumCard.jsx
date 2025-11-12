"use client";
import React from "react";
import Typography from "../ui/Typography";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { useMenu } from "@/context/menu-context";

function LinkColumCard({ data = [] }) {
  const { hideMenu } = useMenu();
  return (
    <div>
      {/* 4 column flow */}
      <div className="columns-1 sm:columns-2 lg:columns-4 gap-6">
        {data?.map((item) => (
          <div key={item?.id} className="break-inside-avoid mb-6">
            <LanguageAwareLink
              href={item?.url || "#"}
              onClick={() => hideMenu()}>
              <Typography
                as="h3"
                weight="semibold"
                className="border-b-2 border-gray w-fit mb-4">
                {item?.title}
              </Typography>
            </LanguageAwareLink>
            {item?.links?.map((i) => (
              <div key={i?.id} className="mb-3">
                <LanguageAwareLink
                  onClick={() => hideMenu()}
                  href={i?.url}
                  className={`text-gray ${
                    i?.items ? "underline underline-offset-6 font-medium" : ""
                  }`}>
                  {i?.title}
                </LanguageAwareLink>
                {i?.items?.map((item) => (
                  <div key={item?.id} className="text-gray my-2">
                    <LanguageAwareLink
                      onClick={() => hideMenu()}
                      href={item?.url}>
                      {item?.title}
                    </LanguageAwareLink>
                  </div>
                ))}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default LinkColumCard;
