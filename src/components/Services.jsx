import React from "react";
import { motion } from "framer-motion";
import { Gavel, Book, Scale, ChevronRight } from "lucide-react";
import BackgroundStatue from "../components/backgroundStatue";

export default function Services() {
  const services = [
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Cégalapítás & átalakulás",
      desc: "Alapító okiratok, társasági szerződések, M&A jogi támogatás.",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Szerződés-készítés",
      desc: "Testreszabott, érthető és védhető szerződések – magyar/angol.",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Peres képviselet",
      desc: "Stratégia, bizonyítás, képviselet – kompromisszum helyett eredmény.",
    },
    {
      icon: <Book className="h-6 w-6" />,
      title: "Munkajog",
      desc: "Munkaszerződések, belső szabályzatok, vitás ügyek rendezése.",
    },
    {
      icon: <Scale className="h-6 w-6" />,
      title: "Ingatlanjog",
      desc: "Adásvétel, bérlet, fejlesztési projektek jogi támogatása.",
    },
    {
      icon: <Gavel className="h-6 w-6" />,
      title: "Compliance",
      desc: "GDPR, belső folyamatok, kockázatkezelés – dokumentáltan.",
    },
  ];

  return (
    <>
      <BackgroundStatue />

      <section
        id="services"
        className="relative py-16 sm:py-24 overflow-hidden"
      >
        {/* === Tartalom === */}
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-semibold">
              Szolgáltatások
            </h2>
            <p className="mt-3 text-[#5C534E]">
              Kiszámítható árazás, átlátható lépések, üzleti fókusz.
            </p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 relative">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-2xl border border-[#E2D8D1] bg-white/70 backdrop-blur p-6 hover:shadow-lg transition z-10"
              >
                <div className="h-10 w-10 grid place-content-center rounded-full bg-[#D7E1DA] text-[#2F2A26]">
                  {s.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
                <p className="mt-2 text-sm text-[#5C534E]">{s.desc}</p>
                <a
                  href="#contact"
                  className="mt-4 inline-flex items-center gap-2 text-sm text-[#8C6B5E] hover:underline"
                >
                  Érdekel <ChevronRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
