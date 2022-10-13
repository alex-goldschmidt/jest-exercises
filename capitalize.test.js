const capitalize = require("./capitalize");

test("First letter capitalized", () => {
  expect(capitalize("cool")).toBe("Cool");
});
