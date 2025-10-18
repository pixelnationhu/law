import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ChevronRight,
  MessageSquare,
  Clock,
  Users,
} from "lucide-react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section
      id="contact"
      className="relative bg-[#F8F5F1] py-24 overflow-hidden"
    >
      {/* === Háttér dekoráció === */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#E8DDD7] rounded-full blur-[120px] opacity-50"></div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">
        {/* === Cím + bevezetés === */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl sm:text-5xl font-semibold text-[#2F2A26]">
            Vegye fel velünk a{" "}
            <span className="text-[#8C6B5E]">kapcsolatot</span>.
          </h2>
          <p className="mt-4 text-lg text-[#5C534E] leading-relaxed">
            Minden nagy döntés az első lépéssel kezdődik; írjon nekünk, és mi
            segítünk megtalálni a jogilag és üzletileg is biztonságos irányt.
          </p>
        </div>

        {/* === Tartalomrács === */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* --- Bal oldal: elérhetőségek és bizalomépítő blokk --- */}
          <div className="space-y-8">
            <div className="bg-[#F0EAE4]/60 rounded-3xl p-8 border border-[#E2D8D1] backdrop-blur-sm shadow-sm">
              <h3 className="text-2xl font-semibold text-[#2F2A26] mb-6">
                Kapcsolati adatok
              </h3>
              <ul className="space-y-4 text-[#5C534E] text-base">
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#8C6B5E]" />
                  +36 30 123 4567
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#8C6B5E]" />
                  iroda@baloghpartners.hu
                </li>
                <li className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-[#8C6B5E]" />
                  1055 Budapest, Bajcsy-Zsilinszky út 1.
                </li>
                <li className="flex items-center gap-3">
                  <Linkedin className="h-5 w-5 text-[#8C6B5E]" />
                  linkedin.com/company/baloghpartners
                </li>
              </ul>

              <div className="mt-8 border-t border-[#E2D8D1] pt-6 text-sm text-[#5C534E] flex items-center gap-3">
                <Clock className="h-4 w-4 text-[#8C6B5E]" />
                Hétfő–Péntek: 9:00 – 17:00
              </div>
            </div>

            {/* --- Mini bizalom blokk --- */}
            <div className="bg-[#EDE4DE]/70 rounded-3xl p-8 border border-[#E2D8D1] shadow-sm">
              <h4 className="text-lg font-semibold text-[#2F2A26] mb-2 flex items-center gap-2">
                <Users className="h-5 w-5 text-[#8C6B5E]" /> Miért minket válasszon?
              </h4>
              <ul className="text-[#5C534E] text-sm space-y-2">
                <li>✅ 200+ sikeresen lezárt ügy</li>
                <li>✅ 98% ügyfél-elégedettség</li>
                <li>✅ Személyes figyelem minden ügyfélnek</li>
                <li>✅ 1 munkanapos visszajelzés</li>
              </ul>
            </div>
          </div>

          {/* --- Jobb oldal: kapcsolatfelvételi űrlap --- */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-[#E2D8D1] bg-white/80 backdrop-blur-lg shadow-md p-8 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#F8F5F1]/0 via-[#F0EAE4]/20 to-[#F8F5F1]/0 pointer-events-none"></div>
            <h3 className="text-2xl font-semibold text-[#2F2A26] mb-6 flex items-center gap-2">
              <MessageSquare className="h-6 w-6 text-[#8C6B5E]" />
              Küldjön üzenetet
            </h3>

            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="text-sm text-[#5C534E]">Név</label>
                <input
                  required
                  className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                />
              </div>
              <div>
                <label className="text-sm text-[#5C534E]">Email</label>
                <input
                  type="email"
                  required
                  className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-[#5C534E]">Tárgy</label>
                <input
                  className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="text-sm text-[#5C534E]">Üzenet</label>
                <textarea
                  rows={5}
                  required
                  className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/70 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30 resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-6 py-3 text-white font-medium hover:opacity-90 transition"
            >
              Üzenet küldése <ChevronRight className="h-4 w-4" />
            </button>

            {sent && (
              <p className="mt-3 text-sm text-[#2F2A26]">
                Köszönjük! Hamarosan jelentkezünk.
              </p>
            )}
          </form>
        </div>

        {/* === CTA zárás === */}
        <div className="bg-[#EDE4DE]/80 border border-[#E2D8D1] rounded-3xl p-10 text-center mt-16 shadow-sm">
          <h4 className="text-2xl font-semibold text-[#2F2A26] mb-4">
            Ne halogassa a megoldást.
          </h4>
          <p className="text-[#5C534E] mb-6 max-w-2xl mx-auto">
            Egy rövid beszélgetés sokszor elég ahhoz, hogy tisztán lássa a
            lehetőségeket. Vegye fel velünk a kapcsolatot, és kezdjük el együtt
            a megoldást!</p>
        </div>
      </div>
    </section>
  );
}


