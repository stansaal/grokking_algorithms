const getArrayFromRange = (start, end) => {
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
  getArrayFromRange,
  MAX_POSSIBLE_ARRAY_INDEX,
};
