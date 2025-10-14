import React, { useRef, useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import About from "./pages/About";
import Services from "./pages/Services";
import Cases from "./pages/Cases";
import Contact from "./pages/Contact";
import HorizontalScroll from "./components/HorizontalScroll";

export default function App() {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Figyeljük az aktív szekciót a HorizontalScroll-ből
  useEffect(() => {
    const interval = setInterval(() => {
      const idx = scrollRef.current?.getIndex?.();
      if (idx !== undefined && idx !== activeIndex) {
        setActiveIndex(idx);
      }
    }, 150); // frissítés 0.15 mp-enként (simán elég)
    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <Router>
      <div className="bg-[#F8F5F1] text-[#2F2A26] w-screen h-screen overflow-hidden relative">
        {/* === Sticky Header === */}
        <div className="fixed top-0 left-0 right-0 z-50">
          <Header
            onNavigate={(i) => scrollRef.current?.goToSection(i)}
            activeIndex={activeIndex}
          />
        </div>

        {/* === Horizontális váltás szekciók között === */}
        <HorizontalScroll ref={scrollRef}>
          <Hero />
          <About />
          <Services />
          <Cases />
          <Contact />
        </HorizontalScroll>

        {/* === Fix Footer === */}
        <div className="fixed bottom-0 left-0 right-0 z-40">
          <Footer />
        </div>
      </div>
    </Router>
  );
}
