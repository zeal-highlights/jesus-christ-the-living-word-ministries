/** Draws one of the line icons from data/beliefs.js. */
export default function BeliefIcon({ shapes }) {
  return (
    <svg className="belief-icon" viewBox="0 0 24 24" aria-hidden="true">
      {shapes.map((shape, index) =>
        shape.type === "circle" ? (
          <circle key={index} pathLength="100" cx={shape.cx} cy={shape.cy} r={shape.r} />
        ) : (
          <path key={index} pathLength="100" d={shape.d} />
        )
      )}
    </svg>
  );
}
