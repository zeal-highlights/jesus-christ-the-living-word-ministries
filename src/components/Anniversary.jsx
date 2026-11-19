import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import PhotoGallery from "./PhotoGallery.jsx";
import { anniversaryPhotos } from "../data/content.js";
import { routes } from "../data/siteInfo.js";

export default function Anniversary() {
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
            <Link className="button-outline" to={routes.story}>
              See All the Moments
            </Link>
          </div>
        </Reveal>

        <PhotoGallery photos={anniversaryPhotos} />
      </div>
    </section>
  );
}
