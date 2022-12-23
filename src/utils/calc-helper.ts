import { scores } from "../scores";

export const calculateScrabbleScore = (word: string): number => {
  const letters = [...word];

  console.log(letters);
  const score = letters.reduce(
    (acc, letter) => acc + scores[letter.toLowerCase() as keyof typeof scores],
    0
  );

  return score;
};
