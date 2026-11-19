import { useState } from "react";
import Reveal from "./Reveal.jsx";
import BeliefIcon from "./BeliefIcon.jsx";
import { beliefs } from "../data/beliefs.js";

export default function Beliefs() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [hasChosen, setHasChosen] = useState(false);
  const selected = beliefs[selectedIndex];

  const choose = (index) => {
    setSelectedIndex(index);
    setHasChosen(true);
  };

  return (
    <section className="section section-navy beliefs" id="beliefs">
      <div className="beliefs-rays" aria-hidden="true" />
      <div className="container beliefs-layout">
        <Reveal className="beliefs-intro">
          <p className="eyebrow">Our Statement of Faith</p>
          <h2 className="section-title">
            What We
            <br />
            <span className="accent">Believe</span>
          </h2>
          <svg className="beliefs-underline" viewBox="0 0 220 14" preserveAspectRatio="none" aria-hidden="true">
            <path pathLength="100" d="M3 9 C 50 2, 100 13, 150 6 S 205 4, 217 8" />
          </svg>
          <p className="beliefs-lead">
            Seven truths are the foundation of our church: its membership, its leadership and
            everything we do.
          </p>
          <a className="pill-button pill-button-gold" href="beliefs.html">
            Read the full statement
          </a>
        </Reveal>

        <Reveal className="beliefs-explorer">
          <div className="belief-tiles" role="group" aria-label="The seven truths. Choose one to read it.">
            {beliefs.map((belief, index) => (
              <button
                key={belief.id}
                type="button"
                className="belief-tile"
                aria-pressed={index === selectedIndex}
                onClick={() => choose(index)}
              >
                <BeliefIcon shapes={belief.icon} />
                <span>{belief.title}</span>
              </button>
            ))}
          </div>

          <div
            key={selected.id}
            className={hasChosen ? "belief-panel is-changing" : "belief-panel"}
            aria-live="polite"
          >
            <span className="belief-panel-number" aria-hidden="true">
              {String(selectedIndex + 1).padStart(2, "0")}
            </span>
            <div className="belief-panel-badge">
              <BeliefIcon shapes={selected.icon} />
            </div>
            <div className="belief-panel-text">
              <h3>{selected.title}</h3>
              <p>{selected.statement}</p>
            </div>
          </div>
          <p className="beliefs-hint">Tap a symbol to read each truth.</p>
        </Reveal>
      </div>
    </section>
  );
}
