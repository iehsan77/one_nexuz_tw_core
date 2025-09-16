export const updateQueryParams = (router, searchParams, newParams) => {
    const query = new URLSearchParams(searchParams);

    Object.entries(newParams).forEach(([key, value]) => {
        if (value) {
            query.set(key, value);
        } else {
            query.delete(key);
        }
    });

    const newQueryString = query.toString();
    const currentQueryString = searchParams.toString();

    if (newQueryString !== currentQueryString) {
        router.push(`?${newQueryString}`);
    }
};
