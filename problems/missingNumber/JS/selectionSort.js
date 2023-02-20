/**
 * @param {number[]} nums
 * @return {number}
 */
const missingNumber = function (nums) {
  const n = nums.length;
  const numsClone = [...nums];

  const findMin = (list) => {
    let min = list[0];
    let minIndex = 0;

    let i = 1;
    while (i < list.length) {
      if (list[i] < min) {
        min = list[i];
        minIndex = i;
      }
      i++;
    }

    return minIndex;
  };

  let j = 0;
  while (j <= n) {
    const minIndex = findMin(numsClone);
    if (numsClone[minIndex] !== j) return j;
    numsClone.splice(minIndex, 1);
    j++;
  }
};

module.exports = missingNumber;
