"use client";
import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
import { navData } from "@/lib/navigation-config";
import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

function NavItems() {
  return (
    <div className="space-y-2">
      {navData.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </div>
  );
}

// Recursive Component
function MenuItem({ item }) {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const [open, setOpen] = useState(false);

  const hasTabs = item.tabs && item.tabs.length > 0;
  const hasItems = item.items && item.items.length > 0;
  const hasLinks = item.links && item.links.length > 0;

  return (
    <div className="border-b border-gray-600 py-2">
      {/* Header */}
      <div className="flex items-center justify-between gap-2">
        {item.url ? (
          <LanguageAwareLink
            href={item.url}
            className="font-medium text-white text-sm sm:text-base">
            {item.title}
          </LanguageAwareLink>
        ) : (
          <span className="font-medium text-white text-sm">{item.title}</span>
        )}

        {(hasTabs || hasItems || hasLinks) && (
          <button onClick={() => setOpen(!open)} className="cursor-pointer">
            <Icon
              icon={open ? "mingcute:up-line" : "mingcute:down-line"}
              width="20"
              height="20"
              className="text-white"
            />
          </button>
        )}
      </div>

      {/* Children with Animation */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div className={`${arabic ? "pr-3" : "pl-3"} mt-2 space-y-2`}>
              {hasTabs &&
                item.tabs.map((tab) => <MenuItem key={tab.id} item={tab} />)}

              {hasItems &&
                item.items.map((child) => (
                  <MenuItem key={child.id} item={child} />
                ))}

              {hasLinks &&
                item.links.map((link) => (
                  <LanguageAwareLink
                    key={link.id}
                    href={link.url}
                    className="block text-gray-300 text-sm hover:text-white py-1">
                    {link.title}
                  </LanguageAwareLink>
                ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavItems;
