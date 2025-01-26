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



/**
 * Converts an ISO date string to a human-readable format with an updated year.
 *
 * @param {string} isoDate - The ISO date string (e.g., "2016-11-01T23:59:00-04:00").
 * @param {number} targetYear - The year to set for the output date.
 * @returns {string} - The formatted date string (e.g., "Jan 24, 2024").
 */
export function convertToReadableDate(isoDate) {
  const date = new Date(isoDate);

  // Format the date to a human-readable format
  const options = { year: 'numeric', month: 'short', day: 'numeric' };
  return date.toLocaleDateString('en-US', options);
}

export function convertNumberToLocaleString(number, isString=false) {
  if(isString){
    return parseInt(number).toLocaleString(undefined, {maximumFractionDigits:2});
  }else{
    return number.toLocaleString(undefined, {maximumFractionDigits:2});
  }
}

