import * as practice from "./practice.js";

test("capitalises a word's first letter", () => {
  expect(practice.capitalise("test")).toBe("Test");
  expect(practice.capitalise("javascript")).toBe("Javascript");
});

test("reverses string", () => {
  expect(practice.reverseString("Reverse")).toBe("esreveR");
  expect(practice.reverseString("Using punctuation.")).toBe(
    ".noitautcnup gnisU"
  );
});

test("add numbers", () => {
  expect(practice.calculator.add(1, 2)).toBe(3);
  expect(practice.calculator.add(-1, 2)).toBe(1);
  expect(practice.calculator.add(1, -2)).toBe(-1);
  expect(practice.calculator.add(1, 0)).toBe(1);
});
test("subtracts numbers", () => {
  expect(practice.calculator.subtract(1, 2)).toBe(-1);
  expect(practice.calculator.subtract(-1, 2)).toBe(-3);
  expect(practice.calculator.subtract(1, -2)).toBe(3);
  expect(practice.calculator.subtract(1, 0)).toBe(1);
});
test("multiplies numbers", () => {
  expect(practice.calculator.multiply(1, 2)).toBe(2);
  expect(practice.calculator.multiply(-1, 2)).toBe(-2);
  expect(practice.calculator.multiply(1, -2)).toBe(-2);
  expect(practice.calculator.multiply(-2, -2)).toBe(4);
  expect(practice.calculator.multiply(1, 0)).toBe(0);
});
test("divides numbers", () => {
  expect(practice.calculator.divide(1, 2)).toBe(0.5);
  expect(practice.calculator.divide(-1, 2)).toBe(-0.5);
  expect(practice.calculator.divide(1, -2)).toBe(-0.5);
  expect(practice.calculator.divide(-2, -2)).toBe(1);
  expect(practice.calculator.divide(1, 0)).toBe(Infinity);
  expect(practice.calculator.divide(0, 0)).toBe(NaN);
});
