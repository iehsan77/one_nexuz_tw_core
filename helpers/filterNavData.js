// export function filterNavData(navData, query) {
//   if (!query) return [];

//   const results = [];

//   const search = (data, parent = null) => {
//     data.forEach((item) => {
//       if (item?.title?.toLowerCase().includes(query.toLowerCase())) {
//         results.push({
//           id: item?.id,
//           title: item?.title,
//           url: item?.url || "#",
//           parent: parent?.title || null,
//         });
//       }

//       // Check nested: tabs -> items -> links
//       if (item?.tabs) {
//         search(item.tabs, item);
//       }
//       if (item?.items) {
//         search(item.items, item);
//       }
//       if (item?.links) {
//         search(item.links, item);
//       }
//     });
//   };

//   search(navData);
//   return results;
// }

// ============================================ //
// Filter function directly in component
export const filterNavData = (data, query) => {
  const results = [];
  const lowerQuery = query.toLowerCase().trim();

  if (!lowerQuery) return results;

  const searchItems = (items, parentTitle = "", grandParentTitle = "") => {
    if (!items || !Array.isArray(items)) return;

    for (const item of items) {
      if (item.title && item.title.toLowerCase().includes(lowerQuery)) {
        let fullParent = "";
        if (grandParentTitle && parentTitle) {
          fullParent = `${grandParentTitle} >a ${parentTitle}`;
        } else if (parentTitle) {
          fullParent = parentTitle;
        }

        results.push({
          id: item.id || Math.random(),
          title: item.title,
          url: item.url || "#",
          parent: fullParent,
        });
      }

      if (item.tabs && item.tabs.length > 0) {
        searchItems(item.tabs, item.title, parentTitle);
      }

      if (item.items && item.items.length > 0) {
        searchItems(item.items, item.title, parentTitle);
      }

      if (item.links && item.links.length > 0) {
        searchItems(item.links, item.title, parentTitle);
      }
    }
  };

  searchItems(data);

  const uniqueResults = [];
  const seen = new Set();

  for (const result of results) {
    const key = `${result.title}-${result.url}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueResults.push(result);
    }
  }

  return uniqueResults;
};
