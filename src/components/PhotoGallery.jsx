import { useState } from "react";
import Reveal from "./Reveal.jsx";
import Lightbox from "./Lightbox.jsx";

const pad = (number) => String(number).padStart(2, "0");

/** A captioned photo mosaic; selecting a photo opens it full screen. */
export default function PhotoGallery({ photos }) {
  const [openIndex, setOpenIndex] = useState(null);
  const total = photos.length;

  return (
    <>
      <Reveal className="photo-mosaic">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            className={`mosaic-tile mosaic-tile-${photo.layout}`}
            onClick={() => setOpenIndex(index)}
          >
            <img
              src={photo.src}
              alt={photo.caption}
              loading="lazy"
              style={photo.focus ? { objectPosition: photo.focus } : undefined}
            />
            <span className="mosaic-caption">
              <b>{pad(index + 1)}</b>
              <i>{photo.label}</i>
              <em>{photo.caption}</em>
            </span>
          </button>
        ))}
      </Reveal>

      {openIndex !== null && (
        <Lightbox
          photo={photos[openIndex]}
          counter={`${pad(openIndex + 1)} / ${pad(total)}`}
          onClose={() => setOpenIndex(null)}
          onPrevious={() => setOpenIndex((openIndex + total - 1) % total)}
          onNext={() => setOpenIndex((openIndex + 1) % total)}
        />
      )}
    </>
  );
}
