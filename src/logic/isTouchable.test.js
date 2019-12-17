import { isTouchable } from "./index";

describe("isTouchable test", () => {
  it("should return true", () => {
    const result = isTouchable(1, 5);
    expect(result).toBe(true);
  });
  it("should return true", () => {
    const result = isTouchable(9, 10);
    expect(result).toBe(true);
  });
  it("should return true", () => {
    const result = isTouchable(5, 6);
    expect(result).toBe(true);
  });
  it("should return true", () => {
    const result = isTouchable(9, 5);
    expect(result).toBe(true);
  });
  it("should return false", () => {
    const result = isTouchable(null);
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = isTouchable({});
    expect(result).toBe(false);
  });
  it("should return false", () => {
    const result = isTouchable();
    expect(result).toBe(false);
  });
});
