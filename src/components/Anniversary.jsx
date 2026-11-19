import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Lightbox from "./Lightbox.jsx";
import { anniversaryPhotos } from "../data/content.js";

export default function Anniversary() {
  const [openIndex, setOpenIndex] = useState(null);
  const total = anniversaryPhotos.length;

  return (
    <section className="section" id="anniversary">
      <div className="container">
        <Reveal className="anniversary-heading">
          <div>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">
              Three years of
              <br />
              <span className="accent">God’s faithfulness</span>
            </h2>
          </div>
          <div>
            <p>
              On 27 September 2026 we celebrated our 3rd anniversary, “Breakthrough”, at the
              National Museum of Australia in Canberra.
            </p>
            <a className="button-outline" href="story.html">
              See All the Moments
            </a>
          </div>
        </Reveal>

        <Reveal className="photo-mosaic">
          {anniversaryPhotos.map((photo, index) => (
            <button
              key={photo.src}
              type="button"
              className={`mosaic-tile mosaic-tile-${photo.layout}`}
              onClick={() => setOpenIndex(index)}
            >
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <span className="mosaic-caption">
                <b>{String(index + 1).padStart(2, "0")}</b>
                <i>{photo.label}</i>
                <em>{photo.caption}</em>
              </span>
            </button>
          ))}
        </Reveal>
      </div>

      {openIndex !== null && (
        <Lightbox
          photo={anniversaryPhotos[openIndex]}
          position={openIndex + 1}
          total={total}
          onClose={() => setOpenIndex(null)}
          onPrevious={() => setOpenIndex((openIndex + total - 1) % total)}
          onNext={() => setOpenIndex((openIndex + 1) % total)}
        />
      )}
    </section>
  );
}
