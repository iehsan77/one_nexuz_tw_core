// "use client";
// import React, { useContext, useState } from "react";
// import { Icon } from "@iconify/react";
// import { motion, AnimatePresence } from "framer-motion";
// import LanguageAwareLink from "../LanguageAwareLink/LanguageAwareLink";
// import { navData } from "@/lib/navigation-config";
// import { LanguageContext } from "@/app/[locale]/(main)/context/LanguageContext";

// function NavItems() {
//   return (
//     <div className="space-y-2">
//       {navData.map((item) => (
//         <MenuItem key={item.id} item={item} />
//       ))}
//     </div>
//   );
// }

// // Recursive Component
// function MenuItem({ item }) {
//   const { locale } = useContext(LanguageContext);
//   const arabic = locale === "ar";
//   const [open, setOpen] = useState(false);

//   const hasTabs = item.tabs && item.tabs.length > 0;
//   const hasItems = item.items && item.items.length > 0;
//   const hasLinks = item.links && item.links.length > 0;

//   return (
//     <div className="border-b border-gray-600 py-2">
//       {/* Header */}
//       <div className="flex items-center justify-between gap-2">
//         {item.url ? (
//           <LanguageAwareLink
//             href={item.url}
//             className="font-medium text-white text-sm sm:text-base">
//             {item.title}
//           </LanguageAwareLink>
//         ) : (
//           <span className="font-medium text-white text-sm">{item.title}</span>
//         )}

//         {(hasTabs || hasItems || hasLinks) && (
//           <button onClick={() => setOpen(!open)} className="cursor-pointer">
//             <Icon
//               icon={open ? "mingcute:up-line" : "mingcute:down-line"}
//               width="20"
//               height="20"
//               className="text-white"
//             />
//           </button>
//         )}
//       </div>

//       {/* Children with Animation */}
//       <AnimatePresence initial={false}>
//         {open && (
//           <motion.div
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3, ease: "easeInOut" }}
//             className="overflow-hidden">
//             <div className={`${arabic ? "pr-3" : "pl-3"} mt-2 space-y-2`}>
//               {hasTabs &&
//                 item.tabs.map((tab) => <MenuItem key={tab.id} item={tab} />)}

//               {hasItems &&
//                 item.items.map((child) => (
//                   <MenuItem key={child.id} item={child} />
//                 ))}

//               {hasLinks &&
//                 item.links.map((link) => (
//                   <LanguageAwareLink
//                     key={link.id}
//                     href={link.url}
//                     className="block text-gray-300 text-sm hover:text-white py-1">
//                     {link.title}
//                   </LanguageAwareLink>
//                 ))}
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   );
// }

// export default NavItems;
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

// 🔁 Recursive Menu Item Component
function MenuItem({ item, depth = 0 }) {
  const { locale } = useContext(LanguageContext);
  const arabic = locale === "ar";
  const [open, setOpen] = useState(false);
  const { hideDrawer } = useDrawer();

  // ✅ detect if this item has children
  const hasChildren =
    (item.tabs && item.tabs.length > 0) ||
    (item.items && item.items.length > 0) ||
    (item.links && item.links.length > 0);

  // ✅ Combined child arrays
  const childData = [
    ...(item.tabs || []),
    ...(item.items || []),
    ...(item.links || []),
  ];

  const handleToggle = (e) => {
    e.stopPropagation();
    setOpen(!open);
  };

  return (
    <div
      className={`${
        depth === 0 ? "border-b border-gray-700" : ""
      } py-2 transition-all`}>
      {/* Header */}
      <div
        className={`flex items-center justify-between gap-2 ${
          depth > 0 ? "text-gray-300 hover:text-white" : "text-white"
        }`}>
        <LanguageAwareLink
          href={item.url || "#"}
          onClick={() => {
            hideDrawer();
          }}
          className={`font-medium text-sm sm:text-base ${
            depth > 0 ? "text-gray-300 hover:text-white" : "text-white"
          } transition-colors duration-300`}>
          {item.title}
        </LanguageAwareLink>

        {hasChildren && (
          <button
            onClick={handleToggle}
            className="cursor-pointer p-1 flex-shrink-0">
            <Icon
              icon={open ? "mingcute:up-line" : "mingcute:down-line"}
              width="20"
              height="20"
              className={`transition-transform duration-300 ${
                open ? "rotate-180" : "rotate-0"
              } text-white`}
            />
          </button>
        )}
      </div>

      {/* Animated Dropdown */}
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="dropdown"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden">
            <div
              className={`${
                arabic
                  ? "pr-4 border-r border-gray-700"
                  : "pl-4 border-l border-gray-700"
              } mt-2 space-y-2`}>
              {childData.map((child) => (
                <MenuItem key={child.id} item={child} depth={depth + 1} />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default NavItems;
