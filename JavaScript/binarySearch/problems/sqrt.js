/*
https://leetcode.com/problems/sqrtx/description/

Given a non-negative integer x, return the square root of x rounded down to the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

/**
 * Returns the square root of X rounded down to the nearest integer
 * @param {number} x
 * @return {number}
 */
const sqrt = function (x) {
  if (x === 0) return 0;

  let low = 1;
  let high = x;

  while (low <= high) {
    const guess = Math.floor((low + high) / 2);

    if (guess ** 2 <= x && x < (guess + 1) ** 2) {
      return guess;
    } else if (guess ** 2 < x) {
      low = guess + 1;
    } else {
      high = guess - 1;
    }
  }
};

module.exports = sqrt;
