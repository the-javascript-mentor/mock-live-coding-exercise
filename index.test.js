import diceGame from "./index";

it("diceGame 1", () => {
  expect(diceGame([1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6])).toStrictEqual([
    21,
    21
  ]);
});

it("diceGame 2", () => {
  expect(diceGame([1, 1, 2, 3, 3, 4, 1, 2, 3, 4])).toStrictEqual([7, 17]);
});

it("diceGame 3", () => {
  expect(diceGame([1, 2, 2, 3, 3, 4, 5, 6])).toStrictEqual([10, 16]);
});

it("diceGame 4", () => {
  expect(diceGame([1, 2, 2, 2, 3, 3, 4, 5, 6])).toStrictEqual([10, 18]);
});
