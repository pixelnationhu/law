import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import HorizontalScroll from "./components/HorizontalScroll";
import TeamMemberPage from "./pages/team/TeamMemberPage";

export default function App() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Mobil ellenőrzés
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Aktív szekció figyelése (desktop)
  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      const idx = scrollRef.current?.getIndex?.();
      if (idx !== undefined && idx !== activeIndex) setActiveIndex(idx);
    }, 150);
    return () => clearInterval(interval);
  }, [activeIndex, isMobile]);

  // Navigációs segédfüggvények
  const goToIndex = (i) => scrollRef.current?.goToSection?.(i);
  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <Router>
      <div className="bg-[#F8F5F1] text-[#2F2A26] w-screen min-h-screen overflow-x-hidden relative flex flex-col">
        {/* Header */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header onNavigate={(i) => scrollRef.current?.goToSection(i)} activeIndex={activeIndex} />
        </div>
       

        {/* Útvonalak */}
        <Routes>
          <Route
            path="/"
            element={
              <main className="flex-1 overflow-y-auto">
                {isMobile ? (
                  <>
                    {/* Mobil: függőleges layout; a gyermekek scrollToId-t kapnak */}
                    <Hero onNavigateMobile={scrollToId} />
                    <About onNavigateMobile={scrollToId} />
                    <Services onNavigateMobile={scrollToId}/>
                    <Cases onNavigateMobile={scrollToId}/>
                    <Contact onNavigateIndex={goToIndex}/>
                  </>
                ) : (
                  /* Desktop: horizontális váltás; a gyermekek index-alapú onNavigateIndex-et kapnak */
                  <HorizontalScroll ref={scrollRef}>
                    <Hero onNavigateIndex={goToIndex} />
                    <About onNavigateIndex={goToIndex} />
                    <Services onNavigateIndex={goToIndex}/>
                    <Cases onNavigateIndex={goToIndex}/>
                    <Contact onNavigateIndex={goToIndex}/>
                  </HorizontalScroll>
                )}
              </main>
            }
          />

          {/* Csapattag profiloldal */}
          <Route path="/team/:slug" element={<TeamMemberPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}
