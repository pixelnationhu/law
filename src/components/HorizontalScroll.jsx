import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

// --- Fontos: forwardRef, hogy kívülről (Headerből) is vezérelhessük ---
const HorizontalScroll = forwardRef(({ children }, ref) => {
  const [index, setIndex] = useState(0);
  const total = React.Children.count(children);
  const [direction, setDirection] = useState(0);

  // --- Külső komponens (pl. Header) elérhesse az irányítást ---
  useImperativeHandle(ref, () => ({
    goToSection: (i) => {
      if (i >= 0 && i < total) {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
      }
    },
    getIndex: () => index,
  }));

  // --- Tiltjuk a függőleges görgetést az egész oldalon ---
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  // --- Görgetés jobbra/balra (egér) ---
  useEffect(() => {
    const handleWheel = (e) => {
      if (e.deltaY > 50 && index < total - 1) {
        setDirection(1);
        setIndex((prev) => prev + 1);
      } else if (e.deltaY < -50 && index > 0) {
        setDirection(-1);
        setIndex((prev) => prev - 1);
      }
    };
    window.addEventListener("wheel", handleWheel, { passive: true });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [index, total]);

  // --- Billentyűzet nyilak ---
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" && index < total - 1) {
        setDirection(1);
        setIndex((i) => i + 1);
      }
      if (e.key === "ArrowLeft" && index > 0) {
        setDirection(-1);
        setIndex((i) => i - 1);
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, total]);

  // --- Animációk ---
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
    },
    exit: (dir) => ({
      x: dir < 0 ? 300 : -300,
      opacity: 0,
      position: "absolute",
    }),
  };

  const goTo = (i) => {
    if (i > index) setDirection(1);
    else setDirection(-1);
    setIndex(i);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 70, damping: 20 },
            opacity: { duration: 0.4 },
          }}
          className="w-full h-full"
        >
          {React.Children.toArray(children)[index]}
        </motion.div>

        {/* --- Finom fade overlay az átmenetekhez --- */}
        <motion.div
          className="absolute inset-0 bg-black/10 pointer-events-none z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      </AnimatePresence>

      {/* --- BALRA NYÍL --- */}
      {index > 0 && (
        <button
          onClick={() => goTo(index - 1)}
          className="absolute left-8 bottom-1/2 translate-y-1/2 bg-[#8C6B5E] hover:bg-[#6E4E42] text-white p-3 rounded-full shadow-lg transition z-40"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* --- JOBBRA NYÍL --- */}
      {index < total - 1 && (
        <button
          onClick={() => goTo(index + 1)}
          className="absolute right-8 bottom-1/2 translate-y-1/2 bg-[#8C6B5E] hover:bg-[#6E4E42] text-white p-3 rounded-full shadow-lg transition z-40"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* --- Lapozás jelölők --- */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
        {Array.from({ length: total }).map((_, i) => (
          <div
            key={i}
            onClick={() => goTo(i)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              i === index ? "bg-[#8C6B5E]" : "bg-[#D0C3BA]"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
});

export default HorizontalScroll;
