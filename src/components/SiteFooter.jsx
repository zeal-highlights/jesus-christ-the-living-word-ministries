import { footerNavigation, siteInfo } from "../data/siteInfo.js";

function PhoneIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

function EmailIcon() {
  return (
    <svg className="contact-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M3 6h18v12H3z" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container footer-columns">
        <div>
          <a className="footer-logo" href="#top" aria-label="Home">
            <img src="/images/logo.jpg" alt="" width="76" height="76" loading="lazy" />
          </a>
          <p className="footer-name">
            Jesus Christ the Living Word
            <br />
            {siteInfo.subtitle}
          </p>
          <small>{siteInfo.motto}</small>
        </div>

        <div>
          <h4>Visit</h4>
          <p className="footer-address">
            {siteInfo.serviceTime}
            <br />
            {siteInfo.streetAddress}
            <br />
            {siteInfo.suburbAndCity}
          </p>
        </div>

        <div>
          <h4>Contact</h4>
          <p className="contact-list">
            <a href={siteInfo.phoneLink}>
              <PhoneIcon />
              {siteInfo.phoneDisplay}
            </a>
            <a href={`mailto:${siteInfo.email}`}>
              <EmailIcon />
              {siteInfo.email}
            </a>
          </p>
        </div>

        <nav className="footer-links" aria-label="Footer">
          <h4>Explore</h4>
          {footerNavigation.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <div className="container footer-base">
        <small>
          © {new Date().getFullYear()} {siteInfo.fullName}
        </small>
      </div>
    </footer>
  );
}
