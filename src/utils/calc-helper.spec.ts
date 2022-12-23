import { calculateScrabbleScore } from "./calc-helper";

describe("calc-helper.ts", () => {
  describe("calculateScrabbleScore()", () => {
    test("SHOULD: return correct scrabble score for the given word", () => {
      const word = "test";
      const score = calculateScrabbleScore(word);
      expect(score).toBe(4);
    });
  });
});
