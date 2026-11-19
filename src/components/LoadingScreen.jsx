import { Fragment } from "react";
import { siteInfo } from "../data/siteInfo.js";

const RAY_COUNT = 18;
const nameWords = siteInfo.name.split(" ");

export default function LoadingScreen() {
  return (
    <div className="loading-screen" aria-hidden="true">
      <svg viewBox="0 0 240 200">
        <g className="loading-rays">
          {Array.from({ length: RAY_COUNT }, (_, index) => (
            <line
              key={index}
              x1="120"
              y1="4"
              x2="120"
              y2="38"
              transform={`rotate(${index * 20} 120 104)`}
              style={{
                animationDelay: `${(index * 0.045).toFixed(2)}s, ${(1.2 + index * 0.1).toFixed(1)}s`,
              }}
            />
          ))}
        </g>
        <circle className="loading-ring" cx="120" cy="104" r="58" />
        <path className="loading-cross" pathLength="100" d="M120 66 V118 M104 82 H136" />
        <path
          className="loading-book"
          pathLength="100"
          d="M120 140 C106 130 86 129 68 134 V152 C86 147 106 148 120 158 C134 148 154 147 172 152 V134 C154 129 134 130 120 140 V158"
        />
        <path
          className="loading-book loading-book-cover"
          pathLength="100"
          d="M62 139 V158 C84 153 106 154 120 164 C134 154 156 153 178 158 V139"
        />
      </svg>
      <p className="loading-name">
        {nameWords.map((word, index) => (
          <Fragment key={word + index}>
            {index > 0 && " "}
            <span style={{ animationDelay: `${(1.15 + index * 0.09).toFixed(2)}s` }}>{word}</span>
          </Fragment>
        ))}
      </p>
      <p className="loading-subtitle">{siteInfo.subtitle}</p>
      <div className="loading-progress">
        <i />
      </div>
    </div>
  );
}
