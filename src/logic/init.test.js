import { init } from "./index";

describe("Init test", () => {
  it("should return array size 16 and 0 item", () => {
    const result = init();
    expect(result).toHaveLength(16);
    expect(result).toContain(0);
  });
});
