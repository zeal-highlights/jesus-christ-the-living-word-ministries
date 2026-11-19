import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import NumberedRows from "../components/NumberedRows.jsx";
import VerseBand from "../components/VerseBand.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { pillars } from "../data/content.js";
import { routes } from "../data/siteInfo.js";

export default function AboutPage() {
  usePageMeta("About", "Who we are: a Christ-centred church family in Canberra.");

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="About us"
        titleLead="A church family"
        titleAccent="in Canberra"
        subtitle="We exist to worship, grow, serve and reach."
        image="/images/anniv/church-family.jpg"
        imagePosition="center 60%"
        showTicker
      />

      <section className="section">
        <div className="container two-column">
          <Reveal>
            <p className="eyebrow">Who we are</p>
            <h2 className="section-title">Built on the Word, centred on Jesus</h2>
            <p>
              Jesus Christ the Living Word International Ministries is a church family in
              Canberra. We gather to worship God, to open the Bible together and to share the
              good news of Jesus with our city and the nations.
            </p>
            <p>Whoever you are and wherever you are from, you are welcome here.</p>
            <Link className="button-outline" to={routes.beliefs}>
              What We Believe
            </Link>
          </Reveal>
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/family-group.jpg"
              alt="Families of the church gathered for a photo"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            What we are here to do
          </Reveal>
          <Reveal as="h2" className="section-title">
            Worship, grow,
            <br />
            <span className="accent">serve and reach.</span>
          </Reveal>
          <p className="section-intro">
            Four words sum up our life together, on Sundays and through the week.
          </p>
          <NumberedRows items={pillars} />
        </div>
      </section>

      <VerseBand image="/images/anniv/prayer.jpg" imageAlt="" />

      <section className="section">
        <div className="container two-column two-column-flipped">
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/dance.jpg"
              alt="The tambourine dance team at the anniversary celebration"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Our story</p>
            <h2 className="section-title">Three years of God’s faithfulness</h2>
            <p>
              In September 2026 we celebrated our 3rd anniversary under the theme
              “Breakthrough”. We are thankful for every family God has added to this church.
            </p>
            <Link className="button-outline" to={routes.story}>
              See the Celebration
            </Link>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
