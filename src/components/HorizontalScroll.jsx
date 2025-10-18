import React, {
  useEffect,
  useState,
  useImperativeHandle,
  forwardRef,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const HorizontalScroll = forwardRef(({ children }, ref) => {
  const [index, setIndex] = useState(0);
  const total = React.Children.count(children);
  const [direction, setDirection] = useState(0);

  // Külső komponens (Header) vezérlés
  useImperativeHandle(ref, () => ({
    goToSection: (i) => {
      if (i >= 0 && i < total) {
        setDirection(i > index ? 1 : -1);
        setIndex(i);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    },
    getIndex: () => index,
  }));

  // ✅ Engedjük a függőleges scrollt (és soha ne tiltsuk le)
  useEffect(() => {
    document.body.style.overflowY = "auto";
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowX = "hidden";
    return () => {
      document.body.style.overflow = "auto";
      document.documentElement.style.overflow = "auto";
    };
  }, []);

  // 🚫 Görgetésre lapváltás — KIKAPCSOLVA!
  // (korábbi handleWheel esemény TÖRÖLVE)

  // Billentyűzet nyilak — maradhat
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "ArrowRight" && index < total - 1) {
        setDirection(1);
        setIndex((i) => i + 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (e.key === "ArrowLeft" && index > 0) {
        setDirection(-1);
        setIndex((i) => i - 1);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [index, total]);

  // Animációk (framer-motion)
  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 200 : -200,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
    center: {
      x: 0,
      opacity: 1,
      position: "relative",
      width: "100%",
    },
    exit: (dir) => ({
      x: dir < 0 ? 200 : -200,
      opacity: 0,
      position: "absolute",
      width: "100%",
    }),
  };

  const goTo = (i) => {
    if (i > index) setDirection(1);
    else setDirection(-1);
    setIndex(i);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="relative w-full min-h-screen overflow-x-hidden overflow-y-visible">
      <AnimatePresence custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 60, damping: 18 },
            opacity: { duration: 0.4 },
          }}
          className="relative w-full min-h-screen"
          style={{ overflow: "visible" }}
        >
          {React.Children.toArray(children)[index]}
        </motion.div>
      </AnimatePresence>

      {/* --- BALRA NYÍL --- */}
      {index > 0 && (
        <button
          onClick={() => goTo(index - 1)}
          className="fixed left-6 top-1/2 -translate-y-1/2 bg-[#8C6B5E] hover:bg-[#6E4E42] text-white p-3 rounded-full shadow-lg transition z-50"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {/* --- JOBBRA NYÍL --- */}
      {index < total - 1 && (
        <button
          onClick={() => goTo(index + 1)}
          className="fixed right-6 top-1/2 -translate-y-1/2 bg-[#8C6B5E] hover:bg-[#6E4E42] text-white p-3 rounded-full shadow-lg transition z-50"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* --- Lapozás jelölők --- */}
      <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-40">
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
