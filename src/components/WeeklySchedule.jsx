import Reveal from "./Reveal.jsx";
import { weeklySchedule } from "../data/content.js";

export default function WeeklySchedule() {
  return (
    <section className="section section-tint" id="week">
      <div className="container">
        <Reveal as="p" className="eyebrow">
          The weekly rhythm
        </Reveal>
        <Reveal as="h2" className="section-title">
          Through
          <br />
          <span className="accent">the week</span>
        </Reveal>
        <p className="section-intro">
          Church does not stop on Sunday. Join us to pray and to study the Bible together.
        </p>
        <Reveal as="ul" className="schedule">
          {weeklySchedule.map((event) => (
            <li key={event.name}>
              <h3>{event.name}</h3>
              <p>{event.when}</p>
              <p>{event.where ?? <span className="to-be-announced">To be announced</span>}</p>
            </li>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
