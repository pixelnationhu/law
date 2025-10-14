import React from "react";
import { ChevronRight } from "lucide-react";
import BackgroundStatue from "../components/backgroundStatue";

export default function About() {
  return (
    <>
          <BackgroundStatue />
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="aspect-[4/5] w-full rounded-3xl overflow-hidden border border-[#E2D8D1] shadow-sm">
            <div className="absolute inset-0 bg-[url('https://plus.unsplash.com/premium_photo-1760018690381-a8a38d50b55a?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1171')] bg-cover bg-center" />
          </div>
          <div className="absolute -bottom-6 -right-6 w-40 h-40 rounded-3xl bg-[#F0D9CF]/80 border border-[#E2D8D1] p-4 backdrop-blur">
            <p className="text-xs uppercase tracking-wider text-[#6E4E42]">Arculat</p>
            <p className="text-sm">
              Természetes anyagok, földszínek, finom részletek – nyugodt, bizalmi légkör.
            </p>
          </div>
        </div>
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold">Rólunk</h2>
          <p className="mt-4 text-[#5C534E]">
            Irodánk boutique szemlélettel dolgozik: kevés ügyet vállalunk, azokra viszont mélyen ráfókuszálunk.
            Célunk, hogy Ön érthető tájékoztatást és üzletileg is működő megoldást kapjon – felesleges körök nélkül.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8C6B5E]" /> Ügyfélközpontú kommunikáció és gyors válaszidő.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8C6B5E]" /> Projektalapú díjazás – előre egyeztetett keretek között.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 h-2 w-2 rounded-full bg-[#8C6B5E]" /> Kétnyelvű dokumentáció (HU/EN) kérésre.
            </li>
          </ul>
          <div className="mt-8 flex items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
            >
              Időpontfoglalás <ChevronRight className="h-4 w-4" />
            </a>
            <a
              href="#cases"
              className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
            >
              Esettanulmányok
            </a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
