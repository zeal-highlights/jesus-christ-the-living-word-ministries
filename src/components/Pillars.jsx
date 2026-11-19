import Reveal from "./Reveal.jsx";
import { pillars } from "../data/content.js";

export default function Pillars() {
  return (
    <section className="section section-tint" id="pillars">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          What we are here to do
        </Reveal>
        <Reveal as="h2" className="section-title">
          Worship, grow,
          <br />
          <span className="accent">serve and reach.</span>
        </Reveal>
        <p className="section-intro">
          Four words sum up what we are here to do, on Sundays and through the week.
        </p>

        <Reveal as="figure" className="feature-photo">
          <img
            src="/images/youth-2026.jpg"
            alt="The young people of the church sitting together under a JCLWIM Young Youth 2026 wall sign"
            loading="lazy"
          />
          <figcaption>JCLWIM Young Youth, 2026</figcaption>
        </Reveal>

        <div className="pillar-grid">
          {pillars.map((pillar, index) => (
            <Reveal as="article" className="pillar" key={pillar.title}>
              <img src={pillar.image} alt={pillar.imageAlt} loading="lazy" />
              <span className="pillar-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{pillar.title}</h3>
              <p>{pillar.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
