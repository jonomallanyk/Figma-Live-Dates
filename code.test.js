const date = require("./code.js");

test("Return argument 10 from @Date(10)", () => {
  expect(date.getArgumentFromStr("@Date(10)")).toBe(10);
});

test("Return 0 when no argument is passed @Date()", () => {
  expect(date.getArgumentFromStr("@Date()")).toBe(0);
});

// test("Return formatted date 10 days from today", () => {
//   expect(date.newDate(10)).toBe("Aug 18, 2020");
// });
