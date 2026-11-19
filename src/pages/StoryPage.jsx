import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import PhotoGallery from "../components/PhotoGallery.jsx";
import VerseBand from "../components/VerseBand.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { storyPhotos } from "../data/content.js";

export default function StoryPage() {
  usePageMeta(
    "Our Story",
    "Three years of God's faithfulness: our 3rd anniversary, Breakthrough."
  );

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Our story"
        titleLead="Three years of"
        titleAccent="God’s faithfulness"
        subtitle="Our 3rd anniversary, “Breakthrough”, 27 September 2026."
        image="/images/anniv/dance.jpg"
        imagePosition="center 55%"
      />

      <section className="section">
        <div className="container two-column">
          <Reveal>
            <p className="eyebrow">27 September 2026</p>
            <h2 className="section-title">Breakthrough</h2>
            <p>
              We marked three years as a church with a celebration at the National Museum of
              Australia in Canberra: worship, dance, a shared meal and the whole church family
              together.
            </p>
            <p>
              Our theme verse was Hebrews 12:2, “Looking unto Jesus, the author and finisher of
              our faith.”
            </p>
          </Reveal>
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/church-family.jpg"
              alt="The whole church family at the anniversary"
              loading="lazy"
              style={{ objectPosition: "center 65%" }}
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <Reveal className="mosaic-heading">
            <div>
              <p className="eyebrow">The celebration</p>
              <h2 className="section-title">
                Moments from <span className="accent">the day</span>
              </h2>
            </div>
            <p>
              Eleven moments from 27 September 2026. Select any photo to see it larger.
            </p>
          </Reveal>
          <PhotoGallery photos={storyPhotos} />
        </div>
      </section>

      <VerseBand image="/images/anniv/prayer.jpg" imageAlt="" />
      <CallToAction />
    </main>
  );
}
