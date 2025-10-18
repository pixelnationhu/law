import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-[#E2D8D1] bg-[#F8F5F1]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[#6B625D]">
          © {new Date().getFullYear()} Balogh & Partners - Minden jog fenntartva.
        </p>
        <nav className="flex items-center gap-6 text-sm">
          <a href="#" className="hover:underline">Impresszum</a>
          <a href="#" className="hover:underline">Adatkezelés</a>
          <a href="#" className="hover:underline">Sütik</a>
        </nav>
      </div>
    </footer>
  );
}
