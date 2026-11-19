import { useEffect, useRef } from "react";

export default function Lightbox({ photo, counter, onClose, onPrevious, onNext }) {
  const closeButtonRef = useRef(null);

  // Keyboard controls and page scroll lock while the viewer is open.
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "ArrowLeft") onPrevious();
      if (event.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onClose, onPrevious, onNext]);

  useEffect(() => {
    const opener = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      opener?.focus?.();
    };
  }, []);

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      onClick={(event) => event.target === event.currentTarget && onClose()}
    >
      <button ref={closeButtonRef} type="button" className="lightbox-close" aria-label="Close" onClick={onClose}>
        ×
      </button>
      <button type="button" aria-label="Previous photo" onClick={onPrevious}>
        ‹
      </button>
      <figure>
        <img key={photo.src} src={photo.src} alt={photo.caption} />
        <figcaption>
          <b>{counter}</b>
          <span>{photo.caption}</span>
        </figcaption>
      </figure>
      <button type="button" aria-label="Next photo" onClick={onNext}>
        ›
      </button>
    </div>
  );
}
