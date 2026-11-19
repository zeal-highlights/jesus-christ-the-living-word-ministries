import Reveal from "./Reveal.jsx";

export default function VerseBand() {
  return (
    <section className="band verse-band">
      <img src="/images/anniv/prayer.jpg" alt="A moment of prayer on stage" loading="lazy" />
      <Reveal className="container">
        <blockquote>“Looking unto Jesus, the author and finisher of our faith.”</blockquote>
        <p className="verse-reference">Hebrews 12:2</p>
      </Reveal>
    </section>
  );
}
