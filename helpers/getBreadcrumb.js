// import { navData } from "@/lib/navigation-config";

import { navData, navDataAr } from "@/lib/navigation-config";

// // locale strip karne ka helper
// function stripLocale(path) {
//   if (!path) return path;
//   return path.replace(/^\/(en|ar)(?=\/|$)/, ""); // /en ya /ar ko hata dega
// }

// export function getPageHierarchy(url) {
//   const cleanUrl = stripLocale(url);

//   function traverse(items, parents = []) {
//     for (const item of items) {
//       // direct url check
//       if (item.url && stripLocale(item.url) === cleanUrl) {
//         return {
//           parents: parents.length ? parents : [{ title: "Home", url: "/" }],
//           current: { title: item.title, url: item.url },
//         };
//       }

//       // tabs case
//       if (item.tabs) {
//         for (const tab of item.tabs) {
//           const found = traverse(tab.items || [], [
//             ...parents,
//             { title: item.title, url: item.url },
//             { title: tab.title, url: "#" },
//           ]);
//           if (found) return found;
//         }
//       }

//       // items case
//       if (item.items) {
//         for (const sub of item.items) {
//           // links check
//           if (sub.links) {
//             for (const link of sub.links) {
//               if (stripLocale(link.url) === cleanUrl) {
//                 return {
//                   parents: [
//                     ...parents,
//                     { title: item.title, url: item.url },
//                     { title: sub.title, url: "#" },
//                   ],
//                   current: { title: link.title, url: link.url },
//                 };
//               }
//             }
//           }

//           // nested items recursive
//           const found = traverse(sub.items || [], [
//             ...parents,
//             { title: item.title, url: item.url },
//             { title: sub.title, url: "#" },
//           ]);
//           if (found) return found;
//         }
//       }

//       // direct links case
//       if (item.links) {
//         for (const link of item.links) {
//           if (stripLocale(link.url) === cleanUrl) {
//             return {
//               parents: [...parents, { title: item.title, url: item.url }],
//               current: { title: link.title, url: link.url },
//             };
//           }
//         }
//       }
//     }
//     return null;
//   }

//   // agar match na mile to default home + current path
//   return (
//     traverse(navData) || {
//       parents: [{ title: "Home", url: "/" }],
//       current: { title: "Not Found", url },
//     }
//   );
// }

function stripLocale(path) {
  if (!path) return path;
  return path.replace(/^\/(en|ar)(?=\/|$)/, "");
}

export function getPageHierarchy(url, locale = "en") {
  const cleanUrl = stripLocale(url);

  // 🟢 locale ke hisaab se nav data choose karo
  const navItems = locale === "ar" ? navDataAr : navData;

  function traverse(items, parents = []) {
    for (const item of items) {
      const itemUrl = stripLocale(item.url);

      if (itemUrl && itemUrl === cleanUrl) {
        return {
          parents: parents.length
            ? parents
            : [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
          current: { title: item.title, url: item.url },
        };
      }

      if (item.tabs) {
        for (const tab of item.tabs) {
          const found = traverse(tab.items || [], [
            ...parents,
            { title: item.title, url: item.url },
            { title: tab.title, url: "#" },
          ]);
          if (found) return found;
        }
      }

      if (item.items) {
        const found = traverse(item.items, [
          ...parents,
          { title: item.title, url: item.url },
        ]);
        if (found) return found;
      }

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

  return (
    traverse(navItems) || {
      parents: [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
      current: { title: locale === "ar" ? "غير موجود" : "Not Found", url },
    }
  );
}

// import { navData } from "@/lib/navigation-config";

// // remove locale prefix (/en, /ar)
// function stripLocale(path) {
//   if (!path) return path;
//   return path.replace(/^\/(en|ar)(?=\/|$)/, "");
// }

// export function getPageHierarchy(url) {
//   const cleanUrl = stripLocale(url);

//   function traverse(items, parents = []) {
//     for (const item of items) {
//       const itemUrl = stripLocale(item.url);

//       // 🔹 Direct match
//       if (itemUrl && itemUrl === cleanUrl) {
//         return {
//           parents: parents.length ? parents : [{ title: "Home", url: "/" }],
//           current: { title: item.title, url: item.url },
//         };
//       }

//       // 🔹 Recurse into 'tabs'
//       if (item.tabs) {
//         for (const tab of item.tabs) {
//           const found = traverse(tab.items || [], [
//             ...parents,
//             { title: item.title, url: item.url },
//             { title: tab.title, url: "#" },
//           ]);
//           if (found) return found;
//         }
//       }

//       // 🔹 Recurse into 'items'
//       if (item.items) {
//         const found = traverse(item.items, [
//           ...parents,
//           { title: item.title, url: item.url },
//         ]);
//         if (found) return found;
//       }

//       // 🔹 Check 'links'
//       if (item.links) {
//         for (const link of item.links) {
//           const linkUrl = stripLocale(link.url);

//           if (linkUrl === cleanUrl) {
//             return {
//               parents: [...parents, { title: item.title, url: item.url }],
//               current: { title: link.title, url: link.url },
//             };
//           }

//           // 🧩 NEW: Handle nested items inside links
//           if (link.items) {
//             const found = traverse(link.items, [
//               ...parents,
//               { title: item.title, url: item.url },
//               { title: link.title, url: link.url },
//             ]);
//             if (found) return found;
//           }
//         }
//       }
//     }
//     return null;
//   }

//   return (
//     traverse(navData) || {
//       parents: [{ title: "Home", url: "/" }],
//       current: { title: "Not Found", url },
//     }
//   );
// }
