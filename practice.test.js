import * as practice from "./practice.js";

test("capitalises a word's first letter", () => {
  expect(practice.capitalise("test")).toBe("Test");
  expect(practice.capitalise("javascript")).toBe("Javascript");
});
