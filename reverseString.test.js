const reverseString = require("./reverseString");

test("String is reversed", () => {
  expect(reverseString("cool")).toBe("looc");
});
