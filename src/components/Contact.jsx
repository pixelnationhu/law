import React, { useState } from "react";
import { Phone, Mail, MapPin, Linkedin, ChevronRight } from "lucide-react";
import BackgroundStatue from "../components/backgroundStatue";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <>
      <BackgroundStatue />

      <section id="contact" className="py-16 sm:py-24 relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10">
            {/* --- Bal oldal: szöveg --- */}
            <div>
              <h2 className="text-3xl sm:text-4xl font-semibold">
                Kapcsolatfelvétel
              </h2>
              <p className="mt-3 text-[#5C534E] max-w-xl">
                Írjon röviden az ügyéről – 1 munkanapon belül visszajelzünk, és
                javaslatot teszünk a következő lépésekre.
              </p>
              <div className="mt-6 space-y-3 text-sm">
                <p className="flex items-center gap-2">
                  <Phone className="h-4 w-4" /> +36 30 123 4567
                </p>
                <p className="flex items-center gap-2">
                  <Mail className="h-4 w-4" /> iroda@baloghpartners.hu
                </p>
                <p className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> 1055 Budapest, Bajcsy-Zsilinszky út 1.
                </p>
                <p className="flex items-center gap-2">
                  <Linkedin className="h-4 w-4" /> linkedin.com/company/baloghpartners
                </p>
              </div>
            </div>

            {/* --- Jobb oldal: űrlap --- */}
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-[#E2D8D1] bg-white/70 p-6 backdrop-blur"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm">Név</label>
                  <input
                    required
                    className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                  />
                </div>
                <div>
                  <label className="text-sm">Email</label>
                  <input
                    type="email"
                    required
                    className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Tárgy</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm">Üzenet</label>
                  <textarea
                    rows={5}
                    required
                    className="mt-1 w-full rounded-xl border border-[#D8CFC8] bg-white/80 px-3 py-2 outline-none focus:ring-2 focus:ring-[#8C6B5E]/30"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#8C6B5E] px-5 py-3 text-white hover:opacity-90 transition"
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
        </div>
      </section>
    </>
  );
}
