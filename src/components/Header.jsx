import React, { useState } from "react";
import { Scale, Phone, Menu, X } from "lucide-react";

export default function Header({ onNavigate, activeIndex }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { index: 0, label: "Főoldal" },
    { index: 1, label: "Rólunk" },
    { index: 2, label: "Szolgáltatások" },
    { index: 3, label: "Esettanulmányok" },
    { index: 4, label: "Kapcsolat" },
  ];

  const handleNavigate = (index) => {
    onNavigate(index);
    setMenuOpen(false); // mobilon zárja be a menüt kattintás után
  };

  return (
    <header className="sticky top-0 z-50 border-b border-[#D8CFC8] backdrop-blur bg-[#F8F5F1]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* ===== LOGÓ ===== */}
<button
  onClick={() => handleNavigate(0)}
  className="flex items-center gap-3 group outline-none focus:outline-none active:outline-none"
>
  <img
    src="https://i.ibb.co/vCXDr4T1/Rajzt-bla-3-2.png"
    alt="Balogh & Partners logó"
    className="h-[150px] w-auto transition-transform duration-300 group-hover:scale-105"
  />
</button>

          {/* ===== HAMBURGER GOMB (mobilon) ===== */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-[#EADAD3]/50 transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menü megnyitása"
          >
            {menuOpen ? (
              <X className="h-6 w-6 text-[#2F2A26]" />
            ) : (
              <Menu className="h-6 w-6 text-[#2F2A26]" />
            )}
          </button>

          {/* ===== NAVIGÁCIÓ (DESKTOPON) ===== */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navLinks.map(({ index, label }) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(index)}
                  className={`
                    relative px-3 py-1 rounded-full transition-all duration-500 group
                    ${isActive ? "text-[#2F2A26]" : "text-[#2F2A26]"}
                  `}
                >
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

            <button
              onClick={() => handleNavigate(4)}
              className="inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-4 py-2 ml-3 hover:bg-[#F0D9CF] hover:border-[#E1C6BC] transition"
            >
              <Phone className="h-4 w-4" /> Időpontot kérek
            </button>
          </nav>
        </div>
      </div>

      {/* ===== MOBIL MENÜ LENYÍLÓ ===== */}
      {menuOpen && (
        <div className="md:hidden bg-[#F8F5F1] border-t border-[#E2D8D1] shadow-md animate-fadeIn">
          <nav className="flex flex-col items-start px-6 py-4 space-y-4 text-sm">
            {navLinks.map(({ index, label }) => {
              const isActive = activeIndex === index;
              return (
                <button
                  key={index}
                  onClick={() => handleNavigate(index)}
                  className={`w-full text-left py-2 px-2 rounded-md transition
                    ${isActive ? "bg-[#EADAD3]" : "hover:bg-[#F0D9CF]/50"}`}
                >
                  {label}
                </button>
              );
            })}

            <button
              onClick={() => handleNavigate(4)}
              className="mt-2 inline-flex items-center gap-2 rounded-full border border-[#CBBEB6] px-4 py-2 hover:bg-[#F0D9CF] transition"
            >
              <Phone className="h-4 w-4" /> Időpontot kérek
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
