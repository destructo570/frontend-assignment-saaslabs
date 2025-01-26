export const range = (start, end) => {
  let length = end - start + 1;
  /*
        Create an array of certain length and set the elements within it from
      start value to end value.
    */
  return Array.from({ length }, (_, idx) => idx + start);
};

/**
 * Get items for a specific page.
 * @param {Array} items - The array of items.
 * @param {number} page - The current page number (1-based index).
 * @param {number} pageSize - The number of items per page.
 * @returns {Array} - The items for the specified page.
 */
export const getprojectListByPage = (items, page, pageSize) => {
  const startIndex = (page - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return items.slice(startIndex, endIndex);
};
