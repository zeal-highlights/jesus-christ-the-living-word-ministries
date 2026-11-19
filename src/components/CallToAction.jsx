import { Link } from "react-router-dom";
import Reveal from "./Reveal.jsx";
import { planAVisitLink, siteInfo } from "../data/siteInfo.js";

export default function CallToAction() {
  return (
    <section className="call-to-action">
      <Reveal className="container">
        <h2>
          There is a seat <span className="accent">for you.</span>
        </h2>
        <p>Sundays at 3:30 PM, {siteInfo.fullAddress}.</p>
        <Link className="pill-button pill-button-dark" to={planAVisitLink.to}>
          {planAVisitLink.label}
        </Link>
      </Reveal>
    </section>
  );
}
