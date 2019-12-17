import { validateValue } from "./index";

describe("validate test", () => {
  it("should return true", () => {
    const result = validateValue([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
    expect(result).toBe(true);
  });
  it("should return true", () => {
    const result = validateValue([1, 2, 3, 4, 5, 6, 0, 7, 8, 9, 10]);
    expect(result).toBe(true);
  });
  it("should return true", () => {
    const result = validateValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
    expect(result).toBe(true);
  });
  it("should return false", () => {
    const result = validateValue([0, 15, 15, 13, 644, 49, 46, 6, 4, 4, 6]);
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = validateValue({});
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = validateValue();
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = validateValue(null);
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = validateValue(4);
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = validateValue("null");
    expect(result).toBe(false);
  });
});
