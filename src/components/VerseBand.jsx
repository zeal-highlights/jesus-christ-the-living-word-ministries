import Reveal from "./Reveal.jsx";

export default function VerseBand({
  image = "/images/anniv/prayer.jpg",
  imageAlt = "A moment of prayer on stage",
}) {
  return (
    <section className="band verse-band">
      <img src={image} alt={imageAlt} loading="lazy" />
      <Reveal className="container">
        <blockquote>“Looking unto Jesus, the author and finisher of our faith.”</blockquote>
        <p className="verse-reference">Hebrews 12:2</p>
      </Reveal>
    </section>
  );
}
