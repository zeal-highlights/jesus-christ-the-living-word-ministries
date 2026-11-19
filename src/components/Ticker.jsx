import { heroTickerWords } from "../data/content.js";

const REPEATS = 5;

/** Moving gold strip along the bottom of a hero. */
export default function Ticker() {
  return (
    <div className="ticker" aria-hidden="true">
      <p>
        {Array.from({ length: REPEATS }, (_, round) =>
          heroTickerWords.map((word) => (
            <span key={`${round}-${word}`}>
              {word} <i>and</i>{" "}
            </span>
          ))
        )}
      </p>
    </div>
  );
}
