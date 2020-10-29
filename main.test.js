const dates = require("./main.js");

test("Return argument 10 from @Date(10)", () => {
  expect(dates.getArgumentFromStr("@Date(10)")).toBe(10);
});

test("Return 0 when no argument is passed @Date()", () => {
  expect(dates.getArgumentFromStr("@Date()")).toBe(0);
});

test("Jump forward 10 days from Aug 14, 2020", () => {
  expect(dates.modifyDateBy(new Date(2020, 7, 14), 10)).toBe("Aug 24, 2020");
});

test("Check for presence of a month, then return that month", () => {
  expect(
    dates.extractMonth("Your trial expires on Sep 20, 2020. Subscribe")
  ).toBe("Sep");
});

// test("Return formatted date 10 days from today", () => {
//   expect(date.newDate(10)).toBe("Aug 18, 2020");
// });
