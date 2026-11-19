import Ticker from "./Ticker.jsx";

/** Navy-toned photo hero used at the top of every inner page. */
export default function PageHero({
  eyebrow,
  titleLead,
  titleAccent,
  subtitle,
  image,
  imagePosition = "center",
  showTicker = false,
}) {
  return (
    <section className="band page-hero">
      <img src={image} alt="" fetchpriority="high" style={{ objectPosition: imagePosition }} />
      <div className="container page-hero-content">
        <div className="hero-cross" aria-hidden="true" />
        <p className="eyebrow">{eyebrow}</p>
        <h1>
          {titleLead} <span className="accent">{titleAccent}</span>
        </h1>
        <p className="page-hero-subtitle">{subtitle}</p>
      </div>
      {showTicker && <Ticker />}
    </section>
  );
}
