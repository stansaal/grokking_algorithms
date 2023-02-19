const sqrt = require("./sqrt");

describe("Square root function", () => {
  it("should return 0 if X === 0", () => {
    expect(sqrt(0)).toEqual(0);
  });

  it("should return 1 if X === 1", () => {
    expect(sqrt(1)).toEqual(1);
  });

  it("should return the square root rounded to the nearest integer", () => {
    expect(sqrt(2)).toEqual(1);
    expect(sqrt(4)).toEqual(2);
    expect(sqrt(8)).toEqual(2); //The square root of 8 is 2.82842..., and since we round it down to the nearest integer, 2 is returned.
  });
});
