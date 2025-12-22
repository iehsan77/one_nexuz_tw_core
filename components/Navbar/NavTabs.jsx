"use client";
import React, { useEffect, useState } from "react";
import Typography from "../ui/Typography";
import LinkColumCard from "./LinkColumCard";
import GridLinkCard from "./GridLinkCard";
import { useMenu } from "@/context/menu-context";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import InnerTabView from "./InnerTabView";

function NavTabs({ data }) {
  const { hideMenu } = useMenu();
  const tabs = data || [];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0]);
    }
  }, [data]);

  return (
    <div className={`container ${activeTab?.items?.length ? "space-y-8" : ""}`}>
      <div className="flex items-center justify-between gap-4 flex-wrap bg-primaryLight px-4 pt-1">
        {tabs?.map((item) => (
          <LanguageAwareLink
            key={item?.id}
            href={item?.url || "#"}
            onClick={() => hideMenu()}
            className={`cursor-pointer py-3 border-b-2
              ${
                activeTab?.id === item?.id
                  ? "border-primary"
                  : "border-transparent"
              }`}
            onMouseEnter={() => setActiveTab(item)}
          >
            <Typography
              weight="medium"
              className={`
              ${activeTab?.id === item?.id && "!text-primary"}`}
            >
              {item?.title}
            </Typography>
          </LanguageAwareLink>
        ))}
      </div>
      {activeTab?.view === "childView" ? (
        <GridLinkCard data={activeTab?.items} />
      ) : activeTab?.view === "innerTabView" ? (
        <InnerTabView data={activeTab?.items} />
      ) : (
        <LinkColumCard data={activeTab?.items} />
      )}
    </div>
  );
}

export default NavTabs;
