import { FC } from "react";

export type WordWithScore = {
  word: string;
  score: number;
};

interface IHistoryProps {
  words: WordWithScore[];
}

export const History: FC<IHistoryProps> = ({ words }) => {
  return (
    <div>
      <h3 className="font-bold text-lg mt-6 mb-2">History</h3>
      {words.map(({ word, score }, idx) => (
        <div key={`${idx}_${word}`} className="flex flex-row mb-1">
          <span>{word}</span>
          <span className="text-green-600 ml-3">{score}</span>
        </div>
      ))}
    </div>
  );
};
