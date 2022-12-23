import { useReducer, useState, FormEvent } from "react";
import { History } from "../../components/History";
import { WordWithScore } from "../../components/History/History";
import { calculateScrabbleScore } from "../../utils/calc-helper";

export const ScrabbleDashboard = () => {
  const {
    handleInputChange,
    handleCalculation,
    handleReset,
    history,
    isError,
    word,
    score,
  } = useScrabbleDashboard();

  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="mb-6 text-xl font-bold">Scrabble Calculator</h1>
      <div className="mb-4 w-80 p-4">
        <div className="relative mb-8">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="word"
          >
            Enter your word:
          </label>
          <input
            className="mb-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="word"
            type="text"
            placeholder="Word"
            value={word}
            onChange={handleInputChange}
          />
          {isError && (
            <span className="absolute left-0 bottom-14 text-blue-500 text-xs italic">
              Enter more than one letter
            </span>
          )}
          <div className="flex justify-between">
            <button
              onClick={handleCalculation}
              className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-9"
            >
              Calculate
            </button>
            <button
              onClick={handleReset}
              className="bg-red-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-8"
            >
              Reset
            </button>
          </div>
        </div>
        <div className="flex w-full">
          <span className="font-bold">Scrabble score:</span>
          {!!score && (
            <span className="text-green-600 ml-3 font-bold">{score}</span>
          )}
        </div>
        <History words={history} />
      </div>
    </div>
  );
};

function useScrabbleDashboard() {
  const [score, setScore] = useState<number | undefined>();
  const [word, setWord] = useState("");
  const [history, setHistory] = useState<WordWithScore[]>([]);
  const [isError, toggleError] = useReducer((v) => !v, false);

  const handleInputChange = (e: FormEvent<HTMLInputElement>) => {
    setWord(e.currentTarget.value);
  };

  const handleCalculation = () => {
    if (word) {
      if (word.length > 1) {
        const score = calculateScrabbleScore(word);
        setScore(score);
      } else {
        toggleError();
      }
    }
  };

  const handleReset = () => {
    if (word && score) {
      setHistory((prev) => [...prev, { word, score }]);
    }
    setWord("");
    setScore(undefined);
  };

  return {
    handleInputChange,
    handleCalculation,
    handleReset,
    word,
    score,
    history,
    isError,
  };
}
