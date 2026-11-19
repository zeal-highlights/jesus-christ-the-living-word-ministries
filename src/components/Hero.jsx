import { heroTickerWords } from "../data/content.js";
import { planAVisitLink } from "../data/siteInfo.js";

const TICKER_REPEATS = 5;

export default function Hero() {
  return (
    <section className="band hero">
      <img
        src="/images/anniv/church-family.jpg"
        alt="The whole church family gathered for a group photo"
        fetchpriority="high"
        style={{ objectPosition: "center 62%" }}
      />
      <div className="container hero-content">
        <div className="hero-cross rise-in" aria-hidden="true" />
        <p className="eyebrow hero-eyebrow rise-in">Welcome to</p>
        <h1 className="hero-title">
          Jesus Christ <span className="accent">the Living Word</span>
        </h1>
        <p className="hero-subtitle rise-in">
          A church family in Canberra. Sundays at 3:30 PM.
        </p>
        <div className="hero-actions rise-in">
          <a className="pill-button pill-button-gold" href={planAVisitLink.href}>
            {planAVisitLink.label}
          </a>
          <a className="pill-button pill-button-ghost" href="#beliefs">
            What We Believe
          </a>
        </div>
      </div>

      <div className="ticker" aria-hidden="true">
        <p>
          {Array.from({ length: TICKER_REPEATS }, (_, round) =>
            heroTickerWords.map((word) => (
              <span key={`${round}-${word}`}>
                {word} <i>and</i>{" "}
              </span>
            ))
          )}
        </p>
      </div>
    </section>
  );
}
