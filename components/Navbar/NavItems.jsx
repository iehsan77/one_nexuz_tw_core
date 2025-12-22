"use client";
import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { navData, navDataAr } from "@/lib/navigation-config";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";
import { useDrawer } from "@/context/drawer-context";

function NavItems() {
  const { locale } = useContext(LanguageContext);
  const servicesData = locale === "ar" ? navDataAr : navData;

  return (
    <div className="space-y-2">
      {servicesData?.map((item) => (
        <MenuItem key={item.id} item={item} depth={0} />
      ))}
    </div>
  );
}

function MenuItem({ item, depth = 0 }) {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const [open, setOpen] = useState(false);
  const { hideDrawer } = useDrawer();

  const hasChildren = () => {
    return (
      (item.tabs && item.tabs.length > 0) ||
      (item.items && item.items.length > 0) ||
      (item.links && item.links.length > 0)
    );
  };

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  // Agar title empty hai aur child items hain, unko direct open karwa dein
  const shouldOpenDirectly = !item.title && hasChildren();

  return (
    <div className={`${depth === 0 ? "border-b border-gray-700" : ""} py-2`}>
      {item.title && (
        <div className="flex items-center justify-between gap-2">
          <LanguageAwareLink
            href={item.url || "#"}
            onClick={() => hideDrawer()}
            className={`font-medium text-sm sm:text-base ${
              depth > 0 ? "text-gray-300 hover:text-white" : "text-white"
            } transition-colors duration-300`}
          >
            {item.title}
          </LanguageAwareLink>

          {hasChildren() && (
            <button onClick={handleToggle} className="cursor-pointer p-1">
              <Icon
                icon={open ? "mingcute:up-line" : "mingcute:down-line"}
                width="20"
                height="20"
                className="text-white"
              />
            </button>
          )}
        </div>
      )}

      {/* Children with animation */}
      <AnimatePresence initial={false}>
        {(open || shouldOpenDirectly) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className={`${
              arabic
                ? "pr-4 border-r border-gray-700"
                : "pl-4 border-l border-gray-700"
            } mt-2 space-y-2 overflow-hidden`}
          >
            {item.tabs &&
              item.tabs.map((tab) => (
                <MenuItem key={tab.id} item={tab} depth={depth + 1} />
              ))}

            {item.items &&
              item.items.map((subItem) => (
                <MenuItem key={subItem.id} item={subItem} depth={depth + 1} />
              ))}

            {item.links &&
              item.links.map((link) => (
                <MenuItem key={link.id} item={link} depth={depth + 1} />
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavItems;
