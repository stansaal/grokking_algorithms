const findMax = (list) => {
  let max = list[0];
  let maxIndex = 0;

  let i = 1;
  while (i < list.length) {
    if (list[i] > max) {
      max = list[i];
      maxIndex = i;
    }
    i++;
  }
  return maxIndex;
};

const selectionSort = (list) => {
  const listClone = [...list];
  const sortedList = [];

  let i = 0;
  while (i < list.length) {
    const maxIndex = findMax(listClone);
    sortedList.push(listClone.splice(maxIndex, 1)[0]);
    i++;
  }
  return sortedList;
};

module.exports = selectionSort;
