import React from "react";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { useMenu } from "@/context/menu-context";

function GridLinkCard({ data }) {
  const { hideMenu } = useMenu();
  return (
    <div>
      {data?.map((item) => (
        <div key={item?.id} className="grid grid-cols-4 gap-5">
          {item?.links?.map((i) => (
            <div key={i?.id} className="mb-2">
              <LanguageAwareLink
                onClick={() => hideMenu()}
                href={i?.url}
                className={`text-gray font-medium text-base`}>
                {i?.title}
              </LanguageAwareLink>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default GridLinkCard;
