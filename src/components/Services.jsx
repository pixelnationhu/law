import React from "react";
import { ChevronRight, Gavel, Book, Scale, Building2, FileCheck, ShieldCheck } from "lucide-react";

export default function Services({ onNavigateIndex, onNavigateMobile }) {
  // ✅ Egységes nav függvény – működik mobilon és desktopon is
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

  const services = [
    {
      icon: <Gavel className="h-7 w-7" />,
      title: "Cégalapítás és átalakulás",
      desc: "Társasági jogi tanácsadás a vállalkozás életének minden szakaszában, az indulástól az átalakulásig. Alapító okiratok, M&A ügyek, jogi átvilágítás.",
      highlight: "Üzleti biztonság, jogi precizitás.",
    },
    {
      icon: <Book className="h-7 w-7" />,
      title: "Szerződéskészítés és -felülvizsgálat",
      desc: "Testreszabott, átlátható és védhető szerződések magyar és angol nyelven, nem sablonok, hanem üzleti stratégiához igazított dokumentumok.",
      highlight: "Minden szerződés az Ön érdekeit védi.",
    },
    {
      icon: <Scale className="h-7 w-7" />,
      title: "Peres képviselet",
      desc: "Határozott, stratégiai fellépés peres és választottbírósági eljárásokban. Célunk a gyors, költséghatékony és eredményes lezárás.",
      highlight: "Érthető stratégia, kiszámítható eredmény.",
    },
    {
      icon: <FileCheck className="h-7 w-7" />,
      title: "Munkajog és HR támogatás",
      desc: "Munkaszerződések, belső szabályzatok, munkáltatói döntések előkészítése, vitás helyzetek rendezése. Üzleti fókuszú, emberközpontú megoldások.",
      highlight: "Jog és emberség egyensúlyban.",
    },
    {
      icon: <Building2 className="h-7 w-7" />,
      title: "Ingatlanjog",
      desc: "Lakó- és üzleti ingatlan adásvétel, bérleti szerződések, fejlesztési projektek jogi kísérete. Biztonságos döntések, tiszta dokumentáció.",
      highlight: "Az Ön beruházása, jogilag is biztos alapokon.",
    },
    {
      icon: <ShieldCheck className="h-7 w-7" />,
      title: "Compliance és adatvédelem (GDPR)",
      desc: "Teljeskörű megfelelési audit, adatvédelmi szabályzatok, belső eljárásrendek. Segítünk kockázatmentesen működni.",
      highlight: "Megfelelés = bizalom.",
    },
  ];

  return (
    <section id="services" className="bg-[#F8F5F1] py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* === 1. RÉSZ – Bevezető === */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bal oldal – szöveg */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#2F2A26] leading-tight">
              Professzionális{" "}
              <span className="text-[#8C6B5E]">jogi szolgáltatások</span>{" "}
              vállalkozásoknak és magánszemélyeknek.
            </h2>
            <p className="mt-5 text-[#5C534E] text-lg leading-relaxed">
              A <strong>Balogh & Partners Ügyvédi Iroda</strong> célja, hogy Ön mindig jogilag megalapozott, 
              ugyanakkor üzletileg is működő megoldást kapjon. 
              Szolgáltatásaink lefedik a modern gazdasági élet minden fontos területét.
            </p>
            <p className="mt-3 text-[#5C534E] text-base leading-relaxed">
              Ügyfeleink között megtalálhatók startupok, családi vállalkozások és nemzetközi cégek is 
              minden esetben személyre szabott figyelemmel.
            </p>

            <div className="mt-8 flex gap-4">
              <button
                onClick={() => nav("contact", 4)} // ✅ görget a Contact szekcióhoz
                className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
              >
                Konzultáció kérése <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => nav("cases", 3)} // ✅ görget az Esettanulmányokhoz
                className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
              >
                Esettanulmányok
              </button>
            </div>
          </div>

          {/* Jobb oldal – fotó */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E2D8D1]">
              <img
                src="https://images.pexels.com/photos/5668778/pexels-photo-5668778.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Jogi konzultáció"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-[#F0D9CF]/80 border border-[#E2D8D1] rounded-2xl p-4 backdrop-blur shadow-sm w-48">
              <p className="text-xs uppercase tracking-wider text-[#6E4E42]">Tapasztalat</p>
              <p className="text-sm text-[#5C534E]">
                Több mint 10 évnyi szakmai múlt és több száz sikeresen lezárt ügy, a biztonság garanciája.
              </p>
            </div>
          </div>
        </div>

        {/* === 2. RÉSZ – Szolgáltatási kártyák === */}
        <div>
          <h3 className="text-3xl font-semibold text-[#2F2A26] text-center mb-12">
            Szakterületeink
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative rounded-3xl border border-[#E2D8D1] bg-white/70 backdrop-blur-sm p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="h-12 w-12 grid place-content-center rounded-full bg-[#D7E1DA] text-[#2F2A26] mb-4 group-hover:scale-110 transition-transform">
                  {s.icon}
                </div>
                <h4 className="text-xl font-semibold text-[#2F2A26] mb-2">
                  {s.title}
                </h4>
                <p className="text-sm text-[#5C534E] leading-relaxed mb-3">
                  {s.desc}
                </p>
                <p className="text-sm text-[#8C6B5E] italic">{s.highlight}</p>
                <button
                  onClick={() => nav("contact", 4)}
                  className="mt-5 inline-flex items-center gap-2 text-sm text-[#8C6B5E] font-medium hover:underline"
                >
                  Érdekel <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* === 3. CTA sáv === */}
        <div className="bg-[#EDE4DE]/80 border border-[#E2D8D1] rounded-3xl p-10 text-center mt-16 shadow-sm">
          <h4 className="text-2xl font-semibold text-[#2F2A26] mb-4">
            Biztosítsa vállalkozása jogi stabilitását még ma.
          </h4>
          <p className="text-[#5C534E] mb-6 max-w-2xl mx-auto">
            Egy rövid konzultáció során közösen felmérjük az Ön helyzetét, és javaslatot adunk a legjobb jogi megoldásra, kötelezettség nélkül.
          </p>
          <button
            onClick={() => nav("contact", 4)}
            className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
          >
            Vegye fel velünk a kapcsolatot <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
