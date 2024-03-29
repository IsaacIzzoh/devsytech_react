import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Services from "./components/Services";
import Clients from "./components/Clients";
import AppDev from "./components/AppDev";
import WebDev from "./components/WebDev";
import Whyus from "./components/Whyus";
import Team from "./components/Team";
import Mission from "./components/Mission";
import Devprocess from "./components/Devprocess";
import Error from "./components/404";
import Careers from "./components/Careers";
import Partnership from "./components/Partnership";

// Create a new component that uses useNavigate
const ScrollToTop = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [navigate]);

  return null;
};

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data) here
    // In a real application, you might replace this with your actual data loading logic
    const fetchData = async () => {
      // Simulate a delay for demonstration purposes
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Set loading to false after the delay
      setLoading(false);
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <Router>
      {/* Show the preloader if loading is true */}
      {loading && (
        <div className="onloadpage" id="page_loader">
          <div className="pre-content">
            <div className="logo-pre">
              <img src="images/logo.png" alt="Logo" className="img-fluid" />
            </div>
            <div className="pre-text- text-radius text-light text-animation bg-b">
              DevsyTech Technologies - Web & Mobile App Development Company
            </div>
          </div>
        </div>
      )}

      {/* Render the content when loading is false */}
      {!loading && (
        <>
          {/* Include the ScrollToTop component to handle scrolling */}
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="about" element={<About />} />
            <Route path="contact-us" element={<Contact />} />
            <Route path="services" element={<Services />} />
            <Route path="clients" element={<Clients />} />
            <Route path="app-development" element={<AppDev />} />
            <Route path="web-development" element={<WebDev />} />
            <Route path="why-us" element={<Whyus />} />
            <Route path="team" element={<Team />} />
            <Route path="mission-vision" element={<Mission />} />
            <Route path="development-process" element={<Devprocess />} />
            <Route path="careers" element={<Careers />} />
            <Route path="partnership" element={<Partnership />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}
