// helpers/filterNavData.js

export function filterNavData(navData, query) {
  if (!query) return [];

  const results = [];

  const search = (data, parent = null) => {
    data.forEach((item) => {
      if (item?.title?.toLowerCase().includes(query.toLowerCase())) {
        results.push({
          id: item?.id,
          title: item?.title,
          url: item?.url || "#",
          parent: parent?.title || null,
        });
      }

      // Check nested: tabs -> items -> links
      if (item?.tabs) {
        search(item.tabs, item);
      }
      if (item?.items) {
        search(item.items, item);
      }
      if (item?.links) {
        search(item.links, item);
      }
    });
  };

  search(navData);
  return results;
}
