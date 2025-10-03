import { navData } from "@/lib/navigation-config";

// locale strip karne ka helper
function stripLocale(path) {
  if (!path) return path;
  return path.replace(/^\/(en|ar)(?=\/|$)/, ""); // /en ya /ar ko hata dega
}

export function getPageHierarchy(url) {
  const cleanUrl = stripLocale(url);

  function traverse(items, parents = []) {
    for (const item of items) {
      // direct url check
      if (item.url && stripLocale(item.url) === cleanUrl) {
        return {
          parents: parents.length ? parents : [{ title: "Home", url: "/" }],
          current: { title: item.title, url: item.url },
        };
      }

      // tabs case
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

      // items case
      if (item.items) {
        for (const sub of item.items) {
          // links check
          if (sub.links) {
            for (const link of sub.links) {
              if (stripLocale(link.url) === cleanUrl) {
                return {
                  parents: [
                    ...parents,
                    { title: item.title, url: item.url },
                    { title: sub.title, url: "#" },
                  ],
                  current: { title: link.title, url: link.url },
                };
              }
            }
          }

          // nested items recursive
          const found = traverse(sub.items || [], [
            ...parents,
            { title: item.title, url: item.url },
            { title: sub.title, url: "#" },
          ]);
          if (found) return found;
        }
      }

      // direct links case
      if (item.links) {
        for (const link of item.links) {
          if (stripLocale(link.url) === cleanUrl) {
            return {
              parents: [...parents, { title: item.title, url: item.url }],
              current: { title: link.title, url: link.url },
            };
          }
        }
      }
    }
    return null;
  }

  // agar match na mile to default home + current path
  return (
    traverse(navData) || {
      parents: [{ title: "Home", url: "/" }],
      current: { title: "Not Found", url },
    }
  );
}
