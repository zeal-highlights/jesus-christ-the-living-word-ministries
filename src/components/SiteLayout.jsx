import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import SiteHeader from "./SiteHeader.jsx";
import SiteFooter from "./SiteFooter.jsx";

/** Jumps back to the top whenever the visitor moves to another page. */
function ScrollToTopOnNavigation() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  return (
    <>
      <ScrollToTopOnNavigation />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </>
  );
}
