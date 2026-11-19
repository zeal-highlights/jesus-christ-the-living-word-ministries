import { useEffect } from "react";
import { siteInfo } from "../data/siteInfo.js";

/** Sets the browser tab title and meta description for the current page. */
export function usePageMeta(pageName, description) {
  useEffect(() => {
    document.title = pageName ? `${pageName} | ${siteInfo.fullName}` : siteInfo.fullName;
    const meta = document.querySelector('meta[name="description"]');
    if (meta && description) meta.setAttribute("content", description);
  }, [pageName, description]);
}
