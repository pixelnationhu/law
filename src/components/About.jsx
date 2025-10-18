import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Scale, Gavel, Landmark, Users } from "lucide-react";

export default function About({ onNavigateIndex, onNavigateMobile }) {
  const navigate = useNavigate();

  // Egységes navigációs hívó – ugyanaz, mint Hero-ban
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

  const openProfile = (slug) => {
    navigate(`/team/${slug}`);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const team = [
    {
      name: "Dr. Balogh Nóra",
      slug: "balogh-nora",
      role: "Alapító | Cégjog, polgári jog",
      img: "https://images.pexels.com/photos/8111818/pexels-photo-8111818.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "10+ év tapasztalattal, stratégiai gondolkodással és empátiával segíti ügyfeleit komplex döntésekben.",
    },
    {
      name: "Dr. Szabó Dániel",
      slug: "szabo-daniel",
      role: "Ügyvéd | Ingatlanjog, peres eljárások",
      img: "https://images.pexels.com/photos/5668776/pexels-photo-5668776.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Precizitás és taktikai gondolkodás jellemzi, amikor ingatlanügyletek és jogviták során képviseli ügyfeleinket.",
    },
    {
      name: "Dr. Kiss Anna",
      slug: "kiss-anna",
      role: "Ügyvédjelölt | Munkajog, adatvédelem",
      img: "https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=600",
      desc: "Fiatalos energiával és precizitással támogatja irodánkat, különösen munkajogi és GDPR-területeken.",
    },
  ];

  const values = [
    {
      icon: <Scale className="mx-auto h-8 w-8 text-[#8C6B5E] mb-3" />,
      title: "Etikus, átlátható működés",
      text: "Őszinte, érthető kommunikáció és jogilag megalapozott tanácsadás minden ügyfélnek.",
    },
    {
      icon: <Users className="mx-auto h-8 w-8 text-[#8C6B5E] mb-3" />,
      title: "Ügyfélközpontú szemlélet",
      text: "Minden ügyet úgy kezelünk, mintha a sajátunk lenne – mert az ügyfél sikere a mi sikerünk.",
    },
    {
      icon: <Gavel className="mx-auto h-8 w-8 text-[#8C6B5E] mb-3" />,
      title: "Magas szakmai színvonal",
      text: "Folyamatos képzés és modern szemlélet biztosítja, hogy ügyfeleink naprakész tanácsokat kapjanak.",
    },
    {
      icon: <Landmark className="mx-auto h-8 w-8 text-[#8C6B5E] mb-3" />,
      title: "Erős szakmai háttér",
      text: "Egyedi ügyek, egyedi megoldások – boutique jelleg, személyes figyelemmel.",
    },
  ];

  return (
    <section id="about" className="bg-[#F0EAE4] py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-24">
        {/* 1. Bemutatkozás */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#2F2A26] mb-6 leading-tight">
              Egy ügyvédi iroda, ahol <span className="text-[#8C6B5E]">szakértelem</span> és{" "}
              <span className="text-[#8C6B5E]">emberi hozzáállás</span> találkozik.
            </h2>
            <p className="text-[#5C534E] text-lg leading-relaxed mb-4">
              A <strong>Balogh & Partners Ügyvédi Iroda</strong> személyre szabott, precíz tanácsadást nyújt modern
              szemlélettel – érthetően és üzletileg is működő megoldásokkal.
            </p>
            <p className="text-[#5C534E] text-base leading-relaxed">
              Cégjogi, ingatlanjogi, munkajogi és polgári ügyekben képviseljük ügyfeleinket stratégiai szemlélettel.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <button
                onClick={() => nav("contact", 4)} // ✅ Contact gomb
                className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
              >
                Vegye fel velünk a kapcsolatot <ChevronRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => nav("cases", 3)} // ✅ Referenciák gomb
                className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
              >
                Referenciák
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E2D8D1]">
              <img
                src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Balogh & Partners csapat"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* 2. Csapat */}
        <div>
          <h3 className="text-3xl font-semibold text-[#2F2A26] text-center mb-12">Csapatunk – az Ön jogi partnerei</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {team.map((member) => (
              <div
                key={member.slug}
                className="flex flex-col items-center text-center bg-[#F8F5F1]/70 backdrop-blur-sm border border-[#E2D8D1] rounded-3xl p-8 shadow-sm hover:shadow-md transition"
              >
                <div className="w-40 h-40 rounded-2xl overflow-hidden mb-6">
                  <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <h4 className="text-xl font-semibold text-[#2F2A26]">{member.name}</h4>
                <p className="text-sm uppercase text-[#7A6F69] mb-3">{member.role}</p>
                <p className="text-sm text-[#5C534E] leading-relaxed mb-4">{member.desc}</p>
                <button
                  onClick={() => openProfile(member.slug)}
                  className="inline-flex items-center gap-2 rounded-full border border-[#8C6B5E] text-[#8C6B5E] px-4 py-2 text-sm hover:bg-[#8C6B5E] hover:text-white transition"
                >
                  Részletes profil <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Értékek */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, i) => (
            <div
              key={i}
              className="bg-[#F8F5F1]/80 border border-[#E2D8D1] rounded-2xl p-8 text-center hover:shadow-lg transition"
            >
              {value.icon}
              <h4 className="text-lg font-semibold text-[#2F2A26] mb-2">{value.title}</h4>
              <p className="text-sm text-[#5C534E]">{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
