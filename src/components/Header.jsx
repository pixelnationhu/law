import React from "react";
import { Scale, Phone } from "lucide-react";

/**
 * A Header most nem a React Router "Link"-et használja,
 * hanem a HorizontalScroll komponenssel való lapozást hívja meg.
 * A hover, háttér animáció és CTA gomb ugyanaz marad.
 */

export default function Header({ onNavigate, activeIndex }) {
  const navLinks = [
    { index: 0, label: "Főoldal" },
    { index: 2, label: "Szolgáltatások" },
    { index: 1, label: "Rólunk" },
    { index: 3, label: "Esettanulmányok" },
    { index: 4, label: "Kapcsolat" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8CFC8] backdrop-blur bg-[#F8F5F1]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ===== LOGÓ ===== */}
          <button
            onClick={() => onNavigate(0)}
            className="flex items-center gap-3 group"
          >
            <div className="h-9 w-9 grid place-content-center rounded-full bg-[#D7E1DA] text-[#2F2A26] transition-transform group-hover:rotate-6">
              <Scale className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm tracking-[0.18em] uppercase text-[#7A6F69]">
                Balogh & Partners
              </p>
              <p className="-mt-1 text-lg font-semibold">Ügyvédi Iroda</p>
            </div>
          </button>

          {/* ===== NAVIGÁCIÓ ===== */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ index, label }) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => onNavigate(index)}
                  className={`
                    relative px-3 py-1 rounded-full transition-all duration-500 group
                    ${isActive ? "text-[#2F2A26]" : "text-[#2F2A26]"}
                  `}
                >
                  {/* háttér animáció */}
                  <span
                    className={`
                      absolute inset-0 rounded-full bg-[#EADAD3]
                      origin-left transition-transform duration-500 ease-out -z-10
                      ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"}
                    `}
                  />
                  {label}
                </button>
              );
            })}

            {/* ===== CTA gomb ===== */}
            <button
              onClick={() => onNavigate(4)}
              className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-4 py-2 ml-3 hover:bg-[#F0D9CF] hover:border-[#E1C6BC] transition"
            >
              <Phone className="h-4 w-4" /> Időpontot kérek
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}
