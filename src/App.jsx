import { useIntroFinished } from "./hooks/useIntroFinished.js";
import LoadingScreen from "./components/LoadingScreen.jsx";
import SiteHeader from "./components/SiteHeader.jsx";
import Hero from "./components/Hero.jsx";
import SundayGatherings from "./components/SundayGatherings.jsx";
import CityBand from "./components/CityBand.jsx";
import Pillars from "./components/Pillars.jsx";
import VerseBand from "./components/VerseBand.jsx";
import NewVisitors from "./components/NewVisitors.jsx";
import Beliefs from "./components/Beliefs.jsx";
import WeeklySchedule from "./components/WeeklySchedule.jsx";
import Anniversary from "./components/Anniversary.jsx";
import CallToAction from "./components/CallToAction.jsx";
import SiteFooter from "./components/SiteFooter.jsx";

export default function App() {
  const introFinished = useIntroFinished();

  return (
    <div className={introFinished ? "app intro-finished" : "app"}>
      <LoadingScreen />
      <SiteHeader />
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
      <SiteFooter />
    </div>
  );
}
