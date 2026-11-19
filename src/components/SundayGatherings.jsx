import Reveal from "./Reveal.jsx";
import { sundayCollagePhotos } from "../data/content.js";
import { siteInfo } from "../data/siteInfo.js";

export default function SundayGatherings() {
  return (
    <section className="section" id="sundays">
      <div className="container two-column">
        <Reveal className="photo-collage">
          {sundayCollagePhotos.map((photo) => (
            <img key={photo.src} src={photo.src} alt={photo.alt} loading="lazy" />
          ))}
        </Reveal>
        <Reveal>
          <p className="eyebrow">Every Sunday</p>
          <h2 className="section-title">
            Sunday <span className="accent">Gatherings</span>
          </h2>
          <p>
            Sunday is the main way we gather as a church: to worship together, learn from
            Scripture, pray for one another and make room for the Holy Spirit. Everyone is
            welcome.
          </p>
          <p>
            <b>Time:</b> Sundays, 3:30 PM
          </p>
          <p>
            <b>Location:</b> {siteInfo.fullAddress}
          </p>
          <a className="button-outline" href="gatherings.html">
            More Information
          </a>
        </Reveal>
      </div>
    </section>
  );
}
