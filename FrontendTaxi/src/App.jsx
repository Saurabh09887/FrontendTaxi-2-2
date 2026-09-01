

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Careers from "./pages/Careers";
import Contact from "./pages/Contact";
import Driver from "./pages/Driver";
import Home from "./pages/Home";
import Packages from "./pages/Packages";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Services from "./pages/Services";
import TermsOfService from "./pages/TermsOfService";
import Vehicles from "./pages/Vehicles";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#FFFBF7] flex flex-col">
        <Navbar />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/driver" element={<Driver />} />
            <Route path="/vehicles" element={<Vehicles />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
          </Routes>
        </div>
        <Footer />

        {/* Floating WhatsApp + Call buttons */}
        <div className="fixed bottom-5 right-4 sm:bottom-7 sm:right-6 z-50 flex flex-col items-center gap-3">
          {/* WhatsApp */}
          <a
            href="https://wa.me/918800130490"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all active:scale-95"
            style={{ background: "#25D366" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="WhatsApp"
              className="w-7 h-7 sm:w-8 sm:h-8"
            />
          </a>

          {/* Call */}
          <a
            href="tel:+919540980478"
            aria-label="Call us"
            className="w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all active:scale-95"
            style={{ background: "#3B82F6" }}
          >
            <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </a>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
