/**
 * Searches number from the list
 * @param {Array} list Source array
 * @param {number} item Search item
 * @returns {(number|null)} Number if the value is found or NULL otherwise
 */
const binarySearch = (list, item) => {
  let low = 0;
  let high = list.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const guess = list[mid];

    if (guess === item) {
      return mid;
    } else if (guess < item) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return null;
};

module.exports = binarySearch;
