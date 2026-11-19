import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { planAVisitLink } from "../data/siteInfo.js";

export default function NewVisitors() {
  return (
    <section className="section" id="new">
      <div className="container two-column two-column-flipped">
        {/* Photo: free to use from Pexels, https://www.pexels.com/photo/two-people-doing-a-handshake-7339327/ */}
        <Reveal className="single-photo single-photo-tall">
          <img
            src="/images/welcome-hands.jpg"
            alt="Two people shaking hands in welcome"
            loading="lazy"
            style={{ objectPosition: "center 68%" }}
          />
        </Reveal>
        <Reveal>
          <p className="eyebrow">New here?</p>
          <h2 className="section-title">
            New to
            <br />
            <span className="accent">the Church</span>
          </h2>
          <p>
            If you are new to our community, we would love to tell you more about our church
            family and the ways you can get involved.
          </p>
          <Link className="button-outline" to={planAVisitLink.to}>
            Learn More
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
