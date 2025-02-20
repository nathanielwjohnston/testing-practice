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

test("shifts a string using a key", () => {
  expect(practice.caesarCipher("test", 2)).toBe("vguv");
  expect(practice.caesarCipher("xyz", 4)).toBe("bcd");
  expect(practice.caesarCipher("caSE PreserVation", 3)).toBe(
    "fdVH SuhvhuYdwlrq"
  );
  expect(practice.caesarCipher("3, 2, 1 ... blast off!", 1)).toBe(
    "3, 2, 1 ... cmbtu pgg!"
  );
});

test("returns an object with certain array properties detailed", () => {
  expect(practice.analyseArray([1, 2, 3, 4, 5])).toStrictEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
  // Unsorted Array
  expect(practice.analyseArray([2, 6, 1, 4, 3, 2])).toStrictEqual({
    average: 3,
    min: 1,
    max: 6,
    length: 6,
  });
  // Negative Numbers
  expect(practice.analyseArray([6, -3, 2, 1, 5])).toStrictEqual({
    average: 2.2,
    min: -3,
    max: 6,
    length: 5,
  });
});
