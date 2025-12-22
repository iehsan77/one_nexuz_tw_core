import React, { useContext, useState } from "react";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import Typography from "../ui/Typography";
import { useMenu } from "@/context/menu-context";
import { Icon } from "@iconify/react";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function InnerTabView({ data }) {
  const [activeTab, setActiveTab] = useState(data[0]);
  const { hideMenu } = useMenu();
  const { locale } = useContext(LanguageContext);
  const ar = locale === "ar";

  return (
    <div className="flex gap-4">
      <div
        className={`space-y-5 border-gray-200 ${ar ? "border-l" : "border-r"}`}
      >
        {data?.map((item) => (
          <button
            key={item?.id}
            onClick={() => setActiveTab(item)}
            className={`cursor-pointer flex items-center justify-between w-[150px] 
            ${activeTab?.id === item?.id ? "!text-primary" : ""} ${
              ar ? "pl-4" : "pr-4"
            }`}
          >
            <Typography
              weight="medium"
              className={`
            ${
              activeTab?.id === item?.id && "!text-primary"
            } flex items-center justify-between w-full`}
            >
              {item?.title}
              {ar ? (
                <Icon
                  icon={
                    activeTab?.id === item?.id
                      ? "mingcute:left-line"
                      : "mingcute:down-line"
                  }
                  width="22"
                  height="22"
                />
              ) : (
                <Icon
                  icon={
                    activeTab?.id === item?.id
                      ? "mingcute:right-line"
                      : "mingcute:down-line"
                  }
                  width="22"
                  height="22"
                />
              )}
            </Typography>
          </button>
        ))}
      </div>
      <div className="flex-1">
        <div className="grid xl:grid-cols-4 grid-cols-2 xl:gap-5 gap-y-5 gap-x-3">
          {activeTab?.links?.map((item) => (
            <div key={item?.id} className="">
              <LanguageAwareLink
                href={item?.url || "#"}
                onClick={() => hideMenu()}
                className={`text-gray font-medium text-base`}
              >
                {item?.title}
              </LanguageAwareLink>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InnerTabView;
