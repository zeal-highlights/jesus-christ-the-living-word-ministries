import { Route, Routes } from "react-router-dom";
import SiteLayout from "./components/SiteLayout.jsx";
import HomePage from "./pages/HomePage.jsx";
import AboutPage from "./pages/AboutPage.jsx";
import GatheringsPage from "./pages/GatheringsPage.jsx";
import NextStepsPage from "./pages/NextStepsPage.jsx";
import BeliefsPage from "./pages/BeliefsPage.jsx";
import StoryPage from "./pages/StoryPage.jsx";
import VisitPage from "./pages/VisitPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="gatherings" element={<GatheringsPage />} />
        <Route path="next-steps" element={<NextStepsPage />} />
        <Route path="beliefs" element={<BeliefsPage />} />
        <Route path="story" element={<StoryPage />} />
        <Route path="visit" element={<VisitPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
}
