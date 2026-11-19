import { useState } from "react";
import { useScrolled } from "../hooks/useScrolled.js";
import { mainNavigation, planAVisitLink, siteInfo } from "../data/siteInfo.js";

export default function SiteHeader() {
  const isScrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-bar">
        <a className="brand" href="#top" aria-label={`${siteInfo.fullName}, home`}>
          <img src="/images/logo.jpg" alt="" width="58" height="58" />
          <span className="brand-text">
            <span className="brand-name">{siteInfo.name}</span>
            <span className="brand-subtitle">{siteInfo.subtitle}</span>
          </span>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          aria-label="Menu"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>

        <nav
          id="main-navigation"
          className={isMenuOpen ? "main-navigation is-open" : "main-navigation"}
          aria-label="Main"
        >
          {mainNavigation.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={planAVisitLink.href} onClick={closeMenu}>
            {planAVisitLink.label}
          </a>
        </nav>
      </div>
    </header>
  );
}
