const binarySearch = require("./binarySearch");

describe("Binary search function", () => {
  it("should return index of number in array if it exists", () => {
    expect(binarySearch([1, 2, 6, 8, 10], 8)).toEqual(3);
    expect(binarySearch([0, 2, 4], 2)).toEqual(1);
    expect(binarySearch([5], 5)).toEqual(0);
    expect(binarySearch([0, 1, 2, 3, 4], 4)).toEqual(4);
    expect(binarySearch([0, 1, 2, 3, 4], 0)).toEqual(0);
  });

  it("should return null if number doesn't exist", () => {
    expect(binarySearch([1, 7, 10, 12], 15)).toEqual(null);
    expect(binarySearch([0, 2], 3)).toEqual(null);
    expect(binarySearch([], 7)).toEqual(null);
  });
});
