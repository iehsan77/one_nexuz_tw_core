import React from "react";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import Typography from "../ui/Typography";
import { useMenu } from "@/context/menu-context";

function LinkGridCard({ data }) {
  const { hideMenu } = useMenu();
  return (
    <div className="grid grid-cols-4 gap-5">
      {data?.map((item) => (
        <div key={item?.id} className="">
          <LanguageAwareLink href={item?.url || "#"} onClick={() => hideMenu()}>
            <Typography
              as="h3"
              weight="semibold"
              className="border-b-2 border-gray w-fit text-nowrap mb-4">
              {item?.title}
            </Typography>
          </LanguageAwareLink>
          {item?.links?.map((i) => (
            <div key={i?.id} className="mb-3">
              <LanguageAwareLink
                href={i?.url}
                className={`text-gray`}
                onClick={() => hideMenu()}>
                {i?.title}
              </LanguageAwareLink>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default LinkGridCard;
