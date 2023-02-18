const binarySearch = (array, value) => {
  let low = 0;
  let high = array.length - 1;

  while (low <= high) {
    const mid = Math.round((low + high) / 2);
    const guess = array[mid];

    if (guess === value) {
      return mid;
    } else if (guess < value) {
      low = mid + 1;
    } else if (guess > value) {
      high = mid - 1;
    }
  }

  return null;
};

module.exports = binarySearch;
