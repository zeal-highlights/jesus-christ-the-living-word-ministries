import { useEffect } from "react";

export default function Lightbox({ photo, position, total, onClose, onPrevious, onNext }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, onPrevious, onNext]);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <button type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button type="button" className="lightbox-previous" aria-label="Previous photo" onClick={onPrevious}>
        ‹
      </button>
      <figure>
        <img src={photo.src} alt={photo.caption} />
        <figcaption>
          <b>
            {position} / {total}
          </b>
          <span>{photo.caption}</span>
        </figcaption>
      </figure>
      <button type="button" className="lightbox-next" aria-label="Next photo" onClick={onNext}>
        ›
      </button>
    </div>
  );
}
