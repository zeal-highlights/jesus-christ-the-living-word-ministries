import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import NumberedRows from "../components/NumberedRows.jsx";
import InfoCard from "../components/InfoCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { nextStepsFirstSteps, pillars } from "../data/content.js";
import { planAVisitLink } from "../data/siteInfo.js";

export default function NextStepsPage() {
  usePageMeta("Next Steps", "Find your next step: worship, grow, serve and reach.");

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Next steps"
        titleLead="Find your"
        titleAccent="next step"
        subtitle="Wherever you are starting from, there is a way forward."
        image="/images/anniv/dance-ribbons.jpg"
        imagePosition="center 45%"
      />

      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            Four ways to take part
          </Reveal>
          <Reveal as="h2" className="section-title">
            Worship, grow,
            <br />
            <span className="accent">serve and reach.</span>
          </Reveal>
          <p className="section-intro">Start with one. Each step leads naturally to the next.</p>
          <NumberedRows items={pillars} />
        </div>
      </section>

      <section className="section section-navy">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            Where to begin
          </Reveal>
          <Reveal as="h2" className="section-title">
            Three simple <span className="accent">first steps</span>
          </Reveal>
          <p className="section-intro">You do not need to have it all worked out. Come as you are.</p>
          <div className="info-cards">
            {nextStepsFirstSteps.map((step) => (
              <InfoCard key={step.title} tone="deep" label={step.step} title={step.title}>
                {step.text} {step.link && <Link to={step.link.to}>{step.link.label}</Link>}
                {step.link && "."}
              </InfoCard>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container two-column">
          <Reveal>
            <p className="eyebrow">New here?</p>
            <h2 className="section-title">New to the Church</h2>
            <p>
              If you are new to our community, we would love to tell you more about our church
              family and the ways you can get involved.
            </p>
            <Link className="button-outline" to={planAVisitLink.to}>
              {planAVisitLink.label}
            </Link>
          </Reveal>
          <Reveal as="figure" className="single-photo single-photo-tall">
            <img
              src="/images/welcome-hands.jpg"
              alt="Two people shaking hands in welcome"
              loading="lazy"
              style={{ objectPosition: "center 68%" }}
            />
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
