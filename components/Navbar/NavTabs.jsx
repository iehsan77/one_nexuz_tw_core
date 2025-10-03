"use client";
import React, { useEffect, useState } from "react";
import Typography from "../ui/Typography";
import LinkCards from "./LinkCards";

function NavTabs({ data }) {
  const tabs = data || [];
  const [activeTab, setActiveTab] = useState(tabs[0]);
  useEffect(() => {
    if (tabs.length > 0) {
      setActiveTab(tabs[0]);
    }
  }, [data]);

  return (
    <div className="container space-y-8">
      <div className="flex items-center justify-between gap-4 flex-wrap bg-primaryLight px-4 pt-1">
        {tabs?.map((item) => (
          <Typography
            key={item?.id}
            weight="medium"
            onMouseEnter={() => setActiveTab(item)}
            className={`cursor-pointer py-3 border-b-2
              ${
                activeTab?.id === item?.id
                  ? "border-primary text-primary"
                  : "border-transparent"
              }`}>
            {item?.title}
          </Typography>
        ))}
      </div>
      <LinkCards data={activeTab?.items} />
    </div>
  );
}

export default NavTabs;
