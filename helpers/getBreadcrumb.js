// import { navData, navDataAr } from "@/lib/navigation-config";

import { navData, navDataAr } from "@/lib/navigation-config";

// function stripLocale(path) {
//   if (!path) return path;
//   // en/ar prefix remove karne ke liye
//   return path.replace(/^\/(en|ar)(?=\/|$)/, "");
// }

// export function getPageHierarchy(url, locale = "en") {
//   const cleanUrl = stripLocale(url);
//   console.log("🧭 Clean URL:", cleanUrl);

//   // Agar root URL hai to directly home return karo
//   if (cleanUrl === "/" || cleanUrl === "") {
//     return {
//       parents: [],
//       current: { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//     };
//   }

//   // locale ke hisaab se data choose karo
//   const navItems = locale === "ar" ? navDataAr : navData;

//   function traverse(items, parents = []) {
//     for (const item of items) {
//       const itemUrl = stripLocale(item.url);
//       console.log("🔍 Checking item:", item.title, "| URL:", itemUrl);

//       // ✅ Direct match
//       if (itemUrl && itemUrl === cleanUrl) {
//         // HAMESHA Home add karo parents mein agar nahi hai to
//         const finalParents =
//           parents.length > 0
//             ? [
//                 { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//                 ...parents,
//               ]
//             : [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }];

//         return {
//           parents: finalParents,
//           current: { title: item.title, url: item.url },
//         };
//       }

//       // ✅ Check for tabs
//       if (item.tabs) {
//         for (const tab of item.tabs) {
//           const tabUrl = stripLocale(tab.url);
//           if (tabUrl === cleanUrl) {
//             return {
//               parents: [
//                 { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//                 { title: item.title, url: item.url },
//               ],
//               current: { title: tab.title, url: tab.url },
//             };
//           }

//           const found = traverse(tab.items || [], [
//             { title: item.title, url: item.url },
//           ]);
//           if (found) {
//             // Found result mein Home add karo
//             return {
//               parents: [
//                 { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//                 ...found.parents,
//               ],
//               current: found.current,
//             };
//           }
//         }
//       }

//       // ✅ Nested items check
//       if (item.items) {
//         const found = traverse(item.items, [
//           { title: item.title, url: item.url },
//         ]);
//         if (found) {
//           // Found result mein Home add karo
//           return {
//             parents: [
//               { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//               ...found.parents,
//             ],
//             current: found.current,
//           };
//         }
//       }

//       // ✅ Links check
//       if (item.links) {
//         for (const link of item.links) {
//           const linkUrl = stripLocale(link.url);

//           if (linkUrl === cleanUrl) {
//             return {
//               parents: [
//                 { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//                 { title: item.title, url: item.url },
//               ],
//               current: { title: link.title, url: link.url },
//             };
//           }

//           // Nested links
//           if (link.items) {
//             const found = traverse(link.items, [
//               { title: item.title, url: item.url },
//               { title: link.title, url: link.url },
//             ]);
//             if (found) {
//               return {
//                 parents: [
//                   { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//                   ...found.parents,
//                 ],
//                 current: found.current,
//               };
//             }
//           }
//         }
//       }
//     }
//     return null;
//   }

//   // 🔚 Fallback if not found - HAMESHA Home include karo
//   const result = traverse(navItems);

//   if (result) {
//     console.log("📦 Final breadcrumb with Home:", result);
//     return result;
//   }

//   // Agar kuch bhi nahi mila, toh simple breadcrumb with Home return karo
//   const fallbackResult = {
//     parents: [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
//     current: {
//       title: locale === "ar" ? "الصفحة" : "Page",
//       url: url,
//     },
//   };

//   console.log("📦 Fallback breadcrumb:", fallbackResult);
//   return fallbackResult;
// }

function stripLocale(path) {
  if (!path) return path;
  return path.replace(/^\/(en|ar)(?=\/|$)/, "");
}

export function getPageHierarchy(url, locale = "en") {
  const cleanUrl = stripLocale(url);

  if (cleanUrl === "/" || cleanUrl === "") {
    return {
      parents: [],
      current: { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
    };
  }

  const navItems = locale === "ar" ? navDataAr : navData;

  function traverse(items, parents = []) {
    for (const item of items) {
      const itemUrl = stripLocale(item.url);

      // ✅ Direct match
      if (itemUrl && itemUrl === cleanUrl) {
        return {
          parents,
          current: { title: item.title, url: item.url },
        };
      }

      // ✅ Tabs
      if (item.tabs) {
        for (const tab of item.tabs) {
          const tabUrl = stripLocale(tab.url);

          if (tabUrl === cleanUrl) {
            return {
              parents: [...parents, { title: item.title, url: item.url }],
              current: { title: tab.title, url: tab.url },
            };
          }

          if (tab.items) {
            const found = traverse(tab.items, [
              ...parents,
              { title: item.title, url: item.url },
              { title: tab.title, url: tab.url },
            ]);
            if (found) return found;
          }
        }
      }

      // ✅ Nested items
      if (item.items) {
        const found = traverse(item.items, [
          ...parents,
          { title: item.title, url: item.url },
        ]);
        if (found) return found;
      }

      // ✅ Links
      if (item.links) {
        for (const link of item.links) {
          const linkUrl = stripLocale(link.url);

          if (linkUrl === cleanUrl) {
            return {
              parents: [...parents, { title: item.title, url: item.url }],
              current: { title: link.title, url: link.url },
            };
          }

          if (link.items) {
            const found = traverse(link.items, [
              ...parents,
              { title: item.title, url: item.url },
              { title: link.title, url: link.url },
            ]);
            if (found) return found;
          }
        }
      }
    }
    return null;
  }

  const result = traverse(navItems, [
    { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
  ]);

  if (result) {
    return result;
  }

  return {
    parents: [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
    current: {
      title: locale === "ar" ? "الصفحة" : "Page",
      url: url,
    },
  };
}
