import { useIntroFinished } from "../hooks/useIntroFinished.js";
import { usePageMeta } from "../hooks/usePageMeta.js";
import LoadingScreen from "../components/LoadingScreen.jsx";
import Hero from "../components/Hero.jsx";
import SundayGatherings from "../components/SundayGatherings.jsx";
import CityBand from "../components/CityBand.jsx";
import Pillars from "../components/Pillars.jsx";
import VerseBand from "../components/VerseBand.jsx";
import NewVisitors from "../components/NewVisitors.jsx";
import Beliefs from "../components/Beliefs.jsx";
import WeeklySchedule from "../components/WeeklySchedule.jsx";
import Anniversary from "../components/Anniversary.jsx";
import CallToAction from "../components/CallToAction.jsx";

export default function HomePage() {
  const introFinished = useIntroFinished();
  usePageMeta("", "Following Jesus, the Living Word, together in Canberra.");

  return (
    <div className={introFinished ? "intro-finished" : undefined}>
      <LoadingScreen />
      <main id="top">
        <Hero />
        <SundayGatherings />
        <CityBand />
        <Pillars />
        <VerseBand />
        <NewVisitors />
        <Beliefs />
        <WeeklySchedule />
        <Anniversary />
        <CallToAction />
      </main>
    </div>
  );
}
