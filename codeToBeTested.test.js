import sum, { subtract, Utils } from "./codeToBeTested";

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

test("subtracts 10-4 to equal 6", () => {
  expect(subtract(10, 4)).toBe(6);
});

test("Test wether value is undefined", () => {
  const value = undefined;

  expect(Utils.isUndefined(value)).toBe(true);
});

// Utils.randomString = function (len = 8) {
//   return Array.apply(0, Array(len))
//     .map(function () {
//       return (function (charset) {
//         return charset.charAt(Math.floor(Math.random() * charset.length));
//       })("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");
//     })
//     .join("");
// };
