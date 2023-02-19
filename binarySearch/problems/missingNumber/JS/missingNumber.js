/**
 * https://leetcode.com/problems/missing-number/description/
 *
 * Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;
  const sortedArr = nums.sort((a, b) => a - b);

  let low = 0;
  let high = n;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const value = sortedArr[mid];

    if (value === undefined) return mid;

    if (mid === value) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return low;
};

module.exports = missingNumber;
