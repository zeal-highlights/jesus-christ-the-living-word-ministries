import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScrolled } from "../hooks/useScrolled.js";
import { mainNavigation, planAVisitLink, routes, siteInfo } from "../data/siteInfo.js";

export default function SiteHeader() {
  const isScrolled = useScrolled();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const onKeyDown = (event) => event.key === "Escape" && setIsMenuOpen(false);
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <header className={isScrolled ? "site-header is-scrolled" : "site-header"}>
      <div className="header-bar">
        <Link className="brand" to={routes.home} aria-label={`${siteInfo.fullName}, home`}>
          <img src="/images/logo.jpg" alt="" width="58" height="58" />
          <span className="brand-text">
            <span className="brand-name">{siteInfo.name}</span>
            <span className="brand-subtitle">{siteInfo.subtitle}</span>
          </span>
        </Link>

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
            <NavLink key={link.to} to={link.to} onClick={closeMenu}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="nav-cta" to={planAVisitLink.to} onClick={closeMenu}>
            {planAVisitLink.label}
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
