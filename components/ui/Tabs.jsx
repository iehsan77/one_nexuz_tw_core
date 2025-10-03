"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import clsx from "clsx";

export default function Tabs({ tabs = [], basePath, className }) {
  const router = useRouter();
  const pathname = usePathname();

  const tabsRef = useRef([]);
  const underlineRef = useRef(null);

  const currentTabKey = pathname.split("/")[1];
  const activeIndex = tabs.findIndex((tab) => tab.key === currentTabKey);

  useEffect(() => {
    const currentTab = tabsRef.current[activeIndex];
    if (currentTab && underlineRef.current) {
      underlineRef.current.style.width = `${currentTab.offsetWidth}px`;
      underlineRef.current.style.left = `${currentTab.offsetLeft}px`;
    }
  }, [activeIndex, pathname, tabs]);

  const handleTabClick = (href) => {
    router.push(href);
  };

  return (
    <div className={clsx(className)}>
      <div className="relative flex">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(el) => (tabsRef.current[index] = el)}
            onClick={() => handleTabClick(`${basePath}/${tab.key}`)}
            className={clsx(
              "cursor-pointer relative px-4 py-2 text-md font-medium transition-colors duration-300",
              pathname === `${basePath}/${tab.key}`
                ? "text-primary"
                : "text-gray-600 hover:text-primary"
            )}>
            {tab.label}
          </button>
        ))}

        <span
          ref={underlineRef}
          className="absolute bottom-0 h-0.5 bg-primary transition-all duration-300 ease-in-out"
          style={{ left: 0, width: 0 }}
        />
      </div>
    </div>
  );
}
