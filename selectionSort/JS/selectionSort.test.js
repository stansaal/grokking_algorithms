const selectionSort = require("./selectionSort");

describe("Selection sort function", () => {
  it("should sort list in descending order", () => {
    expect(selectionSort([103, 50, 1, 57, 102, 3, 1, 0])).toEqual([
      103, 102, 57, 50, 3, 1, 1, 0,
    ]);
  });
});
