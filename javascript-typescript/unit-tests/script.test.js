import { sum, sub, operation } from "./script";

describe("sum and sub test", () => {
  it("should sum two numbers", () => {
    const result = sum(2, 1);
    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    const result = sub(2, 1);
    expect(result).toBe(1);
  });
});

describe("operation test", () => {
  it("should sum two numbers", () => {
    const result = operation(2, 1, "+");
    expect(result).toBe(3);
  });

  it("should subtract two numbers", () => {
    const result = operation(2, 1, "-");
    expect(result).toBe(1);
  });

  it("should throw an error because operator is not valid", () => {
    expect(() => {
      operation(1, 2, "*");
    }).toThrow("Operation not supported");
  });
});
