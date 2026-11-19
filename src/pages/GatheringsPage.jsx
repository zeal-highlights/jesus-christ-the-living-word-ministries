import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import WeeklySchedule from "../components/WeeklySchedule.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { planAVisitLink, routes, siteInfo } from "../data/siteInfo.js";

export default function GatheringsPage() {
  usePageMeta("Gatherings", "Sunday service and weekly gatherings in Mawson, Canberra.");

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Gatherings"
        titleLead="Sundays and"
        titleAccent="through the week"
        subtitle="Worship on Sunday. Prayer and Bible study in between."
        image="/images/anniv/stage-wide.jpg"
        imagePosition="center 45%"
        showTicker
      />

      <section className="section">
        <div className="container two-column">
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/worship-singers.jpg"
              alt="The worship team singing on a Sunday"
              loading="lazy"
              style={{ objectPosition: "center 25%" }}
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Every Sunday</p>
            <h2 className="section-title">Sunday Service</h2>
            <p>
              Sunday is the main way we gather as a church: to worship together, learn from
              Scripture, pray for one another and make room for the Holy Spirit. Everyone is
              welcome.
            </p>
            <p>
              <b>Time:</b> Sundays, 3:30 PM
              <br />
              <b>Location:</b> {siteInfo.fullAddress}
            </p>
            <Link className="pill-button pill-button-dark" to={planAVisitLink.to}>
              {planAVisitLink.label}
            </Link>
          </Reveal>
        </div>
      </section>

      <WeeklySchedule />

      <section className="section">
        <div className="container two-column two-column-flipped">
          <Reveal as="figure" className="single-photo">
            <img src="/images/youth-2026.jpg" alt="The young people of the church" loading="lazy" />
            <figcaption>JCLWIM Young Youth, 2026</figcaption>
          </Reveal>
          <Reveal>
            <p className="eyebrow">Young people</p>
            <h2 className="section-title">Youth Bible Study</h2>
            <p>
              Our young people meet every second Thursday at 86 Ainsworth Street to study the
              Bible, ask questions and grow in friendship.
            </p>
            <Link className="button-outline" to={routes.nextSteps}>
              Next Steps
            </Link>
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
