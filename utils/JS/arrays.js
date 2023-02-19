/**
 * Creates the array that contains numbers 1...N
 * @param {number} n - number N
 * @returns {Array} Array that contains numbers 1...N
 */
const createArray = (n) => Array.from({ length: n }, (v, k) => k + 1);

/**
 * Creates the array that contains numbers A1...An
 * @param {number} start - first number A1
 * @param {number} end - last number An
 * @returns {Array} Array that contains numbers A1...An
 */
const createArrayFromRange = (start, end) => {
  const array = [];

  let i = start;
  while (i <= end) {
    array.push(i);
    i++;
  }

  return array;
};

const MAX_POSSIBLE_ARRAY_INDEX = 112_813_857; //after that v8 will crash

module.exports = {
  createArray,
  createArrayFromRange,
  MAX_POSSIBLE_ARRAY_INDEX,
};
