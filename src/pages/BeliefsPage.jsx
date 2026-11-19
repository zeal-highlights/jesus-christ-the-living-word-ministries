import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import NumberedRows from "../components/NumberedRows.jsx";
import BeliefIcon from "../components/BeliefIcon.jsx";
import VerseBand from "../components/VerseBand.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { beliefs } from "../data/beliefs.js";
import { routes } from "../data/siteInfo.js";

const beliefRows = beliefs.map((belief) => ({
  title: belief.title,
  description: belief.statement,
  icon: <BeliefIcon shapes={belief.icon} />,
}));

export default function BeliefsPage() {
  usePageMeta("What We Believe", "Our Statement of Faith.");

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Our Statement of Faith"
        titleLead="What we"
        titleAccent="believe"
        subtitle="Seven truths that shape everything we do."
        image="/images/reach-bible.jpg"
        imagePosition="center 60%"
      />

      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            The foundation
          </Reveal>
          <Reveal as="h2" className="section-title">
            Seven truths we <span className="accent">stand on</span>
          </Reveal>
          <p className="section-intro">
            Our Statement of Faith is the foundational expression of our Christian beliefs. It
            underpins the church’s membership, leadership and activities.
          </p>
          <NumberedRows items={beliefRows} withIcons />
        </div>
      </section>

      <VerseBand image="/images/anniv/stage-wide.jpg" imageAlt="" />

      <section className="section section-tint">
        <div className="container two-column">
          <Reveal>
            <p className="eyebrow">Have questions?</p>
            <h2 className="section-title">Come and ask</h2>
            <p>
              Faith grows in conversation. Bring your questions on a Sunday, or join one of our
              Bible studies through the week.
            </p>
            <Link className="button-outline" to={routes.gatherings}>
              See Our Gatherings
            </Link>
          </Reveal>
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/presentation.jpg"
              alt="Church members on stage during a gathering"
              loading="lazy"
            />
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
