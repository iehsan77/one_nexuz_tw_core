// function stripLocale(path) {
//   if (!path) return path;
//   return path.replace(/^\/(en|ar)(?=\/|$)/, "");
// }

import { navData, navDataAr } from "@/lib/navigation-config";

// export function getPageHierarchy(url, locale = "en") {
//   const cleanUrl = stripLocale(url);

//   if (cleanUrl === "/" || cleanUrl === "") {
//     return {
//       parents: [],
//       current: { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//     };
//   }

//   const navItems = locale === "ar" ? navDataAr : navData;

//   function traverse(items, parents = []) {
//     for (const item of items) {
//       const itemUrl = stripLocale(item.url);

//       // ✅ Direct match
//       if (itemUrl && itemUrl === cleanUrl) {
//         return {
//           parents,
//           current: { title: item.title, url: item.url },
//         };
//       }

//       // ✅ Tabs
//       if (item.tabs) {
//         for (const tab of item.tabs) {
//           const tabUrl = stripLocale(tab.url);

//           if (tabUrl === cleanUrl) {
//             return {
//               parents: [...parents, { title: item.title, url: item.url }],
//               current: { title: tab.title, url: tab.url },
//             };
//           }

//           if (tab.items) {
//             const found = traverse(tab.items, [
//               ...parents,
//               { title: item.title, url: item.url },
//               { title: tab.title, url: tab.url },
//             ]);
//             if (found) return found;
//           }
//         }
//       }

//       // ✅ Nested items
//       if (item.items) {
//         const found = traverse(item.items, [
//           ...parents,
//           { title: item.title, url: item.url },
//         ]);
//         if (found) return found;
//       }

//       // ✅ Links
//       if (item.links) {
//         for (const link of item.links) {
//           const linkUrl = stripLocale(link.url);

//           if (linkUrl === cleanUrl) {
//             return {
//               parents: [...parents, { title: item.title, url: item.url }],
//               current: { title: link.title, url: link.url },
//             };
//           }

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

//   const result = traverse(navItems, [
//     { title: locale === "ar" ? "الرئيسية" : "Home", url: "/" },
//   ]);

//   if (result) {
//     return result;
//   }

//   return {
//     parents: [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
//     current: {
//       title: locale === "ar" ? "الصفحة" : "Page",
//       url: url,
//     },
//   };
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

  // ✅ Filter out empty or blank titles (main fix)
  if (result) {
    const filteredParents = result.parents.filter(
      (p) => p.title && p.title.trim() !== ""
    );
    const current =
      result.current?.title && result.current.title.trim() !== ""
        ? result.current
        : {
            title: locale === "ar" ? "الصفحة" : "Page",
            url: url,
          };

    return { parents: filteredParents, current };
  }

  return {
    parents: [{ title: locale === "ar" ? "الرئيسية" : "Home", url: "/" }],
    current: {
      title: locale === "ar" ? "الصفحة" : "Page",
      url: url,
    },
  };
}
