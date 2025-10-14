import { motion } from "framer-motion";
import React from "react";

export default function backgroundStatue() {
  return (
    <motion.img
      src="/statue.png"
      alt="Justitia statue"
      className="fixed left-0 bottom-0 w-[500px] opacity-15 pointer-events-none select-none object-contain z-0"
      initial={{ y: 0 }}
      animate={{ y: [-6, 6, -6] }}
      transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
    />
  );
}
