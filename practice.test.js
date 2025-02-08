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

test("add numbers"), () => {};
test("subtracts numbers"), () => {};
test("multiplies numbers"), () => {};
test("divides numbers"), () => {};
