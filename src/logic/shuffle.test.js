import { shuffle } from "./index";

describe("shuffle test", () => {
  it("should return array 11 size and 0 item inside", () => {
    const result = shuffle([0, 15, 15, 13, 644, 49, 46, 6, 4, 4, 6]);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(11);
    expect(result).toContain(0);
  });
  it("should return array 0 size ", () => {
    const result = shuffle();
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
  });
  it("should return array 0 size ", () => {
    const result = shuffle(null);
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
  });
  it("should return array 0 size ", () => {
    const result = shuffle({});
    expect(Array.isArray(result)).toBe(true);
    expect(result).toHaveLength(0);
  });
});
