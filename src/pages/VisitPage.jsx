import { usePageMeta } from "../hooks/usePageMeta.js";
import PageHero from "../components/PageHero.jsx";
import Reveal from "../components/Reveal.jsx";
import InfoCard from "../components/InfoCard.jsx";
import CallToAction from "../components/CallToAction.jsx";
import { ContactLinks } from "../components/SiteFooter.jsx";
import { visitQuestions } from "../data/content.js";
import { siteInfo } from "../data/siteInfo.js";

export default function VisitPage() {
  usePageMeta(
    "Plan a Visit",
    "Plan your first visit: Sundays at 3:30 PM, 86 Ainsworth Street, Mawson, Canberra."
  );

  return (
    <main className="inner-page">
      <PageHero
        eyebrow="Plan a visit"
        titleLead="We’ll save you"
        titleAccent="a seat"
        subtitle="Sundays at 3:30 PM in Mawson, Canberra."
        image="/images/welcome-hands.jpg"
        imagePosition="center 70%"
      />

      <section className="section">
        <div className="container">
          <div className="info-cards">
            <InfoCard label="When" title="Sundays, 3:30 PM">
              Every week. Come a little early and say hello.
            </InfoCard>
            <InfoCard label="Where" title={siteInfo.streetAddress}>
              {siteInfo.suburbAndCity}.{" "}
              <a href={siteInfo.directionsUrl} target="_blank" rel="noopener">
                Open in Google Maps
              </a>
              .
            </InfoCard>
            <InfoCard label="Contact" title="Get in touch">
              <ContactLinks />
            </InfoCard>
          </div>
        </div>
      </section>

      <section className="section map-section">
        <div className="container">
          <Reveal className="map">
            <iframe
              title={`Map showing ${siteInfo.fullAddress}`}
              src={siteInfo.mapEmbedUrl}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>

      <section className="section section-tint">
        <div className="container two-column">
          <Reveal as="figure" className="single-photo">
            <img
              src="/images/anniv/stage-speaker.jpg"
              alt="A welcome from the front during a gathering"
              loading="lazy"
            />
          </Reveal>
          <Reveal>
            <p className="eyebrow">Your first Sunday</p>
            <h2 className="section-title">What to expect</h2>
            <p>
              We sing together, we pray, and we open the Bible. You are welcome to join in or
              simply to watch and listen.
            </p>
            <p>Come as you are. We will be glad to meet you and help you find a seat.</p>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <Reveal as="p" className="eyebrow">
            Good to know
          </Reveal>
          <Reveal as="h2" className="section-title faq-title">
            Common <span className="accent">questions</span>
          </Reveal>
          <Reveal className="faq">
            {visitQuestions.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </Reveal>
        </div>
      </section>

      <CallToAction />
    </main>
  );
}
