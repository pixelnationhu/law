import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Gavel, Book, ChevronRight } from "lucide-react";

export default function Hero() {
  // === Parallax hatás a háttérszoborhoz ===
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 800], [0, -100]); // minél nagyobb a 800, annál lassabb a mozgás

  return (
    <section
      id="home"
      className="relative z-10 bg-transparent flex items-center justify-center h-screen overflow-hidden"
    >
      

      {/* === Tartalom konténer === */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-10 items-center h-[80vh]">
          {/* BAL OLDAL – szöveg */}
          <div className="flex flex-col justify-center text-left">
            <span className="inline-block w-fit bg-[#F0D9CF]/80 text-[#6E4E42] px-2.5 py-[2px] text-[11px] tracking-wider uppercase rounded-sm shadow-sm">
              Professzionális jogi szolgáltatás
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#2F2A26]">
              Nyugalom, rend,{" "}
              <span className="text-[#8C6B5E]">jogi</span> megoldások.
            </h1>

            <p className="mt-5 text-base sm:text-lg text-[#5C534E] max-w-xl leading-relaxed">
              Ügyfeleinknek határozott, mégis empatikus képviseletet nyújtunk.
              Cégjog, ingatlan, polgári perek – stabil szakmai háttérrel és
              letisztult folyamatokkal.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
              >
                Konzultáció kérése <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#services"
                className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
              >
                Szolgáltatásaink
              </a>
            </div>

            <div className="mt-6 flex items-center gap-6 text-sm text-[#6B625D]">
              <div className="flex items-center gap-2">
                <Gavel className="h-5 w-5" /> 10+ év tapasztalat
              </div>
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5" /> Pontos, érthető kommunikáció
              </div>
            </div>
          </div>

          {/* JOBB OLDAL – kép + Kiemelt területek box */}
          <div className="relative flex justify-center items-center">
            <div className="w-[90%] max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1974')] bg-cover bg-center" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 rounded-3xl bg-white/70 backdrop-blur border border-[#E2D8D1] p-4 shadow-md z-30">
              <p className="text-xs tracking-wide text-[#7A6F69] uppercase">
                Kiemelt területek
              </p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Cégjog & szerződések</li>
                <li>• Ingatlanjog</li>
                <li>• Munkajog</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
