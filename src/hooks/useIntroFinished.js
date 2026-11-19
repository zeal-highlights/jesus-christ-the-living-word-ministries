import { useEffect, useState } from "react";

const MIN_INTRO_MS = 2700; // how long the loading animation takes to play
const MAX_INTRO_MS = 6000; // never keep the loading screen up longer than this

// The loading screen plays once per visit, not every time someone returns to the home page.
let introAlreadyPlayed = false;

/** True once the loading animation has played and the page has finished loading. */
export function useIntroFinished() {
  const [finished, setFinished] = useState(introAlreadyPlayed);

  useEffect(() => {
    if (introAlreadyPlayed) return;
    const finish = () => {
      introAlreadyPlayed = true;
      setFinished(true);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      finish();
      return;
    }

    const startedAt = performance.now();
    let minTimer;
    const onLoaded = () => {
      const remaining = Math.max(0, MIN_INTRO_MS - (performance.now() - startedAt));
      minTimer = setTimeout(finish, remaining);
    };

    if (document.readyState === "complete") onLoaded();
    else window.addEventListener("load", onLoaded);
    const maxTimer = setTimeout(finish, MAX_INTRO_MS);

    return () => {
      window.removeEventListener("load", onLoaded);
      clearTimeout(minTimer);
      clearTimeout(maxTimer);
    };
  }, []);

  return finished;
}
