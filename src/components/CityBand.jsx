import Reveal from "./Reveal.jsx";
import { siteInfo } from "../data/siteInfo.js";

export default function CityBand() {
  return (
    <section className="band city-band">
      <img src="/images/canberra-city.jpg" alt="Canberra seen from a hilltop lookout" loading="lazy" />
      <video
        muted
        loop
        playsInline
        autoPlay
        preload="none"
        poster="/images/canberra-city.jpg"
        aria-hidden="true"
      >
        <source src="/video/canberra-loop.mp4" type="video/mp4" />
      </video>
      <div className="city-frame" aria-hidden="true" />
      <Reveal className="container city-content">
        <p className="eyebrow">Our city</p>
        <h2>
          In Canberra <span className="accent">as it is in Heaven</span>
        </h2>
        <span className="city-rule" aria-hidden="true" />
        <p className="city-verse">
          “Your kingdom come, your will be done, on earth as it is in heaven.”{" "}
          <b>Matthew 6:10</b>
        </p>
        <div className="city-details">
          <span>{siteInfo.serviceTime}</span>
          <span>86 Ainsworth Street, Mawson</span>
          <a
            className="pill-button pill-button-gold"
            href={siteInfo.directionsUrl}
            target="_blank"
            rel="noopener"
          >
            Get Directions
          </a>
        </div>
      </Reveal>
    </section>
  );
}
