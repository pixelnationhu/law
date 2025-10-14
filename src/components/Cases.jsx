import React from "react";
import { ChevronRight } from "lucide-react";
import BackgroundStatue from "../components/backgroundStatue";

export default function Cases() {
  const cases = [
    {
      title: "Sikeres peres egyezség",
      desc: "Középvállalat követeléskezelési ügyének lezárása 3 hónapon belül.",
      tag: "Peres képviselet",
    },
    {
      title: "Nemzetközi kereskedelmi szerződés",
      desc: "Átfogó szerződéscsomag kidolgozása angol nyelven.",
      tag: "Szerződés-készítés",
    },
    {
      title: "Ingatlanfejlesztési projekt",
      desc: "DD, kockázatelemzés, szerződéskötés – beruházói oldal támogatása.",
      tag: "Ingatlanjog",
    },
  ];

  return (
    <>
          <BackgroundStatue />
    
    <section id="cases" className="py-16 sm:py-24 ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold">Esettanulmányok</h2>
          <p className="mt-3 text-[#5C534E]">Konkrét eredmények, diszkrét részletek.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {cases.map((c, i) => (
            <article
              key={i}
              className="rounded-2xl border border-[#E2D8D1] bg-white/70 p-6 backdrop-blur hover:shadow-lg transition"
            >
              <span className="inline-block rounded-full bg-[#D7E1DA] text-[#2F2A26] px-3 py-1 text-xs tracking-wider uppercase">
                {c.tag}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{c.title}</h3>
              <p className="mt-2 text-sm text-[#5C534E]">{c.desc}</p>
              <a href="#contact" className="mt-4 inline-flex items-center gap-2 text-sm text-[#8C6B5E] hover:underline">
                Hasonló ügyem van <ChevronRight className="h-4 w-4" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
     </>
  );
}
