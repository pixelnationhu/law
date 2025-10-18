import React from "react";
import { useNavigate } from "react-router-dom";
import { ChevronRight, Briefcase, Landmark, Scale, Building2, FileText, Users } from "lucide-react";


export default function Cases({ onNavigateIndex, onNavigateMobile }) {
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
  
  const cases = [
    {
      icon: <Scale className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Peres képviselet",
      title: "Gyors egyezség egy 80 milliós peres ügyben",
      desc: "Egy középvállalat számára három hónapon belül sikerült peren kívüli egyezséget elérni, minimalizálva a költségeket és megőrizve az üzleti kapcsolatot az ellenérdekű féllel.",
      result: "3 hónapon belüli egyezség, 0 további költség",
    },
    {
      icon: <FileText className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Szerződés-készítés",
      title: "Nemzetközi beszállítói szerződésrendszer",
      desc: "Egy exportorientált vállalat számára komplett angol nyelvű szerződéscsomag készült, beleértve a szállítási, titoktartási és garanciális feltételeket.",
      result: "Üzleti biztonság 3 kontinensen",
    },
    {
      icon: <Building2 className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Ingatlanjog",
      title: "Ingatlanfejlesztési projekt jogi kísérete",
      desc: "Teljeskörű DD, kockázatelemzés, szerződéskötések és tárgyalások jogi támogatása egy több milliárdos ingatlanfejlesztési beruházásnál.",
      result: "Beruházás biztonságos jogi struktúrában",
    },
    {
      icon: <Users className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Munkajog",
      title: "Munkaügyi vita peren kívüli lezárása",
      desc: "Egy vezető beosztású munkavállaló és a munkáltató között sikerült mediációval megállapodást létrehozni, megelőzve a hosszas pereskedést.",
      result: "Megőrzött reputáció, elkerült pereskedés",
    },
    {
      icon: <Landmark className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Cégjog",
      title: "Cégstruktúra-átalakítás adóoptimalizálással",
      desc: "Egy családi vállalkozás számára új holdingstruktúra kialakítása, mellyel 18%-os költségcsökkenést és teljes átláthatóságot értünk el.",
      result: "Stabil, fenntartható vállalati modell",
    },
    {
      icon: <Briefcase className="h-7 w-7 text-[#8C6B5E]" />,
      tag: "Compliance",
      title: "GDPR és belső szabályzat audit",
      desc: "Egy IT-szolgáltató cég belső folyamatait GDPR-megfelelésre alakítottuk, beleértve az adatkezelési nyilvántartásokat és az adatvédelmi tájékoztatókat.",
      result: "Teljes megfelelés audit után",
    },
  ];

  return (
    <section id="cases" className="bg-[#F0EAE4]/80 py-24 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-20">

        {/* === 1. RÉSZ – Bevezető === */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#2F2A26] leading-tight mb-6">
              Valós eredmények,{" "}
              <span className="text-[#8C6B5E]">diszkrét részletek</span>.
            </h2>
            <p className="text-[#5C534E] text-lg leading-relaxed mb-4">
              Esettanulmányaink betekintést adnak abba, hogyan dolgozunk: stratégiai gondolkodással, precizitással és
              az ügyfeleink üzleti érdekeit szem előtt tartva.
            </p>
            <p className="text-[#5C534E] text-base leading-relaxed">
              Minden ügy egyedi - de a cél mindig ugyanaz: jogilag biztonságos, üzletileg előnyös megoldás.
            </p>
            <div className="mt-8 flex gap-4 flex-wrap">
                          <button
                            onClick={() => nav("contact", 4)} // ✅ Contact gomb
                            className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
                          >
                            Vegye fel velünk a kapcsolatot <ChevronRight className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => nav("services", 2)} // ✅ Referenciák gomb
                            className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-5 py-3 hover:bg-white/70 transition"
                          >
                            Referenciák
                          </button>
                        </div>
          </div>

          {/* Jobb oldal – illusztráció */}
          <div className="relative">
            <div className="w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-lg border border-[#E2D8D1]">
              <img
                src="https://images.pexels.com/photos/8112182/pexels-photo-8112182.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ügyvédi iroda megbeszélés"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#F8F5F1]/80 border border-[#E2D8D1] rounded-2xl p-4 backdrop-blur shadow-sm w-52">
              <p className="text-xs uppercase tracking-wider text-[#6E4E42]">
                Ügyfélbizalom
              </p>
              <p className="text-sm text-[#5C534E]">
                Több mint 200 sikeresen lezárt ügy, 98% ügyfél-elégedettség - mert a bizalom nem csak szó.
              </p>
            </div>
          </div>
        </div>

        {/* === 2. RÉSZ – Esettanulmány kártyák === */}
        <div>
          <h3 className="text-3xl font-semibold text-[#2F2A26] text-center mb-12">
            Kiemelt ügyeink
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {cases.map((c, i) => (
              <article
                key={i}
                className="rounded-3xl border border-[#E2D8D1] bg-white/70 backdrop-blur-sm p-8 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-12 w-12 grid place-content-center rounded-full bg-[#D7E1DA]">
                    {c.icon}
                  </div>
                  <span className="text-xs font-medium uppercase tracking-wider text-[#6E4E42]">
                    {c.tag}
                  </span>
                </div>
                <h4 className="text-lg font-semibold text-[#2F2A26] mb-2">
                  {c.title}
                </h4>
                <p className="text-sm text-[#5C534E] leading-relaxed mb-3">
                  {c.desc}
                </p>
                <p className="text-sm text-[#8C6B5E] italic mb-4">{c.result}</p>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm text-[#8C6B5E] font-medium hover:underline"
                >
                  Hasonló ügyem van <ChevronRight className="h-4 w-4" />
                </a>
              </article>
            ))}
          </div>
        </div>

        {/* === 3. CTA zárás === */}
        <div className="bg-[#EDE4DE]/80 border border-[#E2D8D1] rounded-3xl p-10 text-center mt-16 shadow-sm">
          <h4 className="text-2xl font-semibold text-[#2F2A26] mb-4">
            Ön következő sikertörténetét is megírhatjuk.
          </h4>
          <p className="text-[#5C534E] mb-6 max-w-2xl mx-auto">
            Akár peres, akár üzleti ügyben van szüksége segítségre, mi stratégiai szemlélettel és tapasztalattal állunk Ön mellett.
          </p>
          <button
                            onClick={() => nav("contact", 4)} // ✅ Contact gomb
                            className="inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
                          >
                            Vegye fel velünk a kapcsolatot <ChevronRight className="h-4 w-4" />
                          </button>
        </div>
      </div>
    </section>
  );
}
