const calculator = require("./calculator");

test("calculation", () => {
  expect(calculator("+", 1, 2)).toBe(3);
});

test("calculation", () => {
  expect(calculator("-", 2, 1)).toBe(1);
});

test("calculation", () => {
  expect(calculator("*", 2, 2)).toBe(4);
});

test("calculation", () => {
  expect(calculator("/", 4, 2)).toBe(2);
});
