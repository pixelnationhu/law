import React from "react";
import { Gavel, Book, Scale, ShieldCheck, Handshake, ChevronRight, Award } from "lucide-react";

export default function Hero({ onNavigateIndex, onNavigateMobile }) {
  // Egységes hívó: desktopon indexre vált, mobilon id-re görget
  const nav = (id, index) => {
    if (typeof onNavigateIndex === "function") {
      onNavigateIndex(index);
    } else if (typeof onNavigateMobile === "function") {
      onNavigateMobile(id);
    } else {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#F8F5F1] z-10 flex flex-col justify-center h-screen overflow-hidden"
    >
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          {/* Bal – szöveg + CTA */}
          <div className="flex flex-col justify-center text-left">
            <span className="inline-block w-fit bg-[#F0D9CF]/80 text-[#6E4E42] px-2.5 py-[2px] text-[11px] tracking-wider uppercase rounded-sm shadow-sm">
              Balogh & Partners Ügyvédi Iroda
            </span>

            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#2F2A26]">
              Bizalom, szakértelem, <span className="text-[#8C6B5E]">jogi stabilitás.</span>
            </h1>

            <p className="mt-6 text-[#7A6F69] text-sm sm:text-base italic max-w-md">
              Személyes figyelem, stratégiai gondolkodás és átlátható jogi megoldások az üzleti sikerért.
            </p>

            <p className="mt-5 text-base sm:text-lg text-[#5C534E] max-w-md leading-relaxed">
              Boutique irodánk személyre szabott jogi képviseletet kínál. Dr. <strong>Balogh Nóra</strong> több mint
              10 éve segíti ügyfeleit cégjogi, ingatlanjogi és polgári peres ügyekben.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => nav("contact", 4)} // Desktop: 4. szekció (Contact), Mobil: #contact
                className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
              >
                Konzultáció kérése <ChevronRight className="h-4 w-4" />
              </button>

              <button
                onClick={() => nav("services", 2)} // Desktop: 2. szekció (Services), Mobil: #services
                className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
              >
                Szolgáltatásaink
              </button>
            </div>
          </div>

          {/* Középső – kép */}
          <div className="relative flex justify-center items-center">
            <div className="w-[85%] max-w-sm aspect-[4/5] rounded-3xl overflow-hidden shadow-lg relative">
              <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/8111818/pexels-photo-8111818.jpeg')] bg-cover bg-center" />
            </div>

            <div className="absolute -bottom-6 -left-6 w-48 rounded-3xl bg-white/70 backdrop-blur border border-[#E2D8D1] p-4 shadow-md z-30">
              <p className="text-xs tracking-wide text-[#7A6F69] uppercase">Kiemelt területek</p>
              <ul className="mt-2 space-y-1 text-sm">
                <li>• Cégjog & szerződések</li>
                <li>• Ingatlanjog</li>
                <li>• Munkajog</li>
              </ul>
            </div>
          </div>

          {/* Jobb – értékdobozok */}
          <div className="flex flex-col justify-center gap-6">
            <div className="bg-[#F8F5F1]/70 backdrop-blur-sm border border-[#E2D8D1] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2F2A26] mb-2 flex items-center gap-2">
                <ShieldCheck className="h-5 w-5 text-[#8C6B5E]" /> Jogi biztonság minden lépésben
              </h3>
              <p className="text-sm text-[#5C534E] leading-relaxed">
                Érthető tájékoztatás és stabil jogi háttér minden döntéséhez.
              </p>
            </div>

            <div className="bg-[#F8F5F1]/70 backdrop-blur-sm border border-[#E2D8D1] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2F2A26] mb-2 flex items-center gap-2">
                <Handshake className="h-5 w-5 text-[#8C6B5E]" /> Hosszú távú együttműködés
              </h3>
              <p className="text-sm text-[#5C534E] leading-relaxed">
                Bizalomra és kommunikációra épülő kapcsolat.
              </p>
            </div>

            <div className="bg-[#F8F5F1]/70 backdrop-blur-sm border border-[#E2D8D1] rounded-2xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#2F2A26] mb-2 flex items-center gap-2">
                <Scale className="h-5 w-5 text-[#8C6B5E]" /> Üzleti szemléletű megoldások
              </h3>
              <p className="text-sm text-[#5C534E] leading-relaxed">
                Jogi és üzletileg is működő megoldások, átlátható díjazással.
              </p>
            </div>
          </div>
        </div>

        {/* Alsó bizalmi sáv */}
        <div className="mt-10 flex flex-wrap justify-center items-center gap-8 text-sm text-[#6B625D]">
          <div className="flex items-center gap-2">
            <Gavel className="h-5 w-5" /> 10+ év szakmai tapasztalat
          </div>
          <div className="flex items-center gap-2">
            <Book className="h-5 w-5" /> Átlátható, precíz tanácsadás
          </div>
          <div className="flex items-center gap-2">
            <Scale className="h-5 w-5" /> Stabil jogi háttér minden ügyfélnek
          </div>
          <div className="flex items-center gap-2">
            <Award className="h-5 w-5 text-[#8C6B5E]" />
            <span>200+ lezárt ügy, 98% elégedettség</span>
          </div>
        </div>
      </div>

      {/* Mobil magasság finomhangolás */}
      <style jsx>{`
        @media (max-width: 1024px) {
          section#home {
            height: auto;
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }
      `}</style>
    </section>
  );
}
