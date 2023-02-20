const missingNumber = require("./selectionSort");

describe("Missing number function by Selection Sort", () => {
  it("should find the only number that missing in array [0...n], n = array.length", () => {
    expect(missingNumber([1, 2])).toEqual(0);
    expect(missingNumber([3, 0, 1])).toEqual(2);
    expect(missingNumber([4, 2, 1, 0, 3])).toEqual(5);
  });
});
