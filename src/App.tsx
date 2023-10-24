import React, { useEffect } from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs/AboutUs";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./components/Footer";
import Bookshelf from "./pages/Bookshelf";
import Story from "./pages/Story";
import Timeline from "./pages/Timeline/Timeline";
import Work from "./pages/Work/Work";
import InteractiveFloorPlans from "./pages/CaseStudy/InteractiveFloorPlans";
import EmergencyPlans from "./pages/CaseStudy/EmergencyPlans";
import SucessProfileSurvey from "./pages/CaseStudy/SuccessProfileSurvey";
import DeTrack from "./pages/CaseStudy/DeTrack";

function App() {
  useEffect(() => {
    window.scroll(0, 0);
    console.log(window.scroll(0, 0));
  }, []);

  return (
    <BrowserRouter>
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/bookshelf" element={<Bookshelf />} />
          <Route path="/story" element={<Story />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/work" element={<Work />} />
          <Route
            path="/interactive-floor-plans"
            element={<InteractiveFloorPlans />}
          />
          <Route path="/emergency-plans" element={<EmergencyPlans />} />
          <Route
            path="/success-profile-survey"
            element={<SucessProfileSurvey />}
          />
          <Route path="/onboarding-experience" element={<DeTrack />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
