import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const profiles = {
  "balogh-nora": {
    name: "Dr. Balogh Nóra",
    title: "Alapító, Cégjog és Polgári jog szakértő",
    img: "https://images.pexels.com/photos/8111818/pexels-photo-8111818.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Dr. Balogh Nóra több mint 10 éves tapasztalattal rendelkezik a cégjog és a polgári jog területén. Szakterületei közé tartozik a vállalati szerződéskészítés, M&A tanácsadás és peres képviselet.",
    expertise: [
      "Cégalapítás és átalakulás",
      "Peres és peren kívüli jogvita-rendezés",
      "Szerződéses struktúrák kialakítása",
    ],
  },
  "szabo-daniel": {
    name: "Dr. Szabó Dániel",
    title: "Ügyvéd, Ingatlanjog és Peres eljárások szakértője",
    img: "https://images.pexels.com/photos/5668776/pexels-photo-5668776.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Dr. Szabó Dániel az ingatlanjog és a peres képviselet területén kiemelkedő tapasztalattal bír, ahol ügyfelei számára mindig az üzleti érdeket szem előtt tartva alakítja ki a jogi stratégiát.",
    expertise: [
      "Ingatlanjogi szerződések",
      "Peres eljárások",
      "Beruházói jogi tanácsadás",
    ],
  },
  "kiss-anna": {
    name: "Dr. Kiss Anna",
    title: "Ügyvédjelölt, Munkajog és Adatvédelem szakértő",
    img: "https://images.pexels.com/photos/5668765/pexels-photo-5668765.jpeg?auto=compress&cs=tinysrgb&w=1200",
    bio: "Dr. Kiss Anna a munkajog és adatvédelem fiatal szakértője, aki precíz, empatikus megközelítéssel támogatja ügyfeleit a napi HR és GDPR kérdésekben.",
    expertise: [
      "Munkajogi tanácsadás",
      "GDPR megfelelőség",
      "Belső szabályzatok és dokumentáció",
    ],
  },
};

export default function TeamMemberPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const profile = profiles[slug];

  if (!profile) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center text-[#2F2A26]">
        <h1 className="text-3xl font-semibold mb-4">Nincs ilyen profil</h1>
        <button
          onClick={() => navigate(-1)}
          className="text-[#8C6B5E] underline"
        >
          Vissza
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#F8F5F1] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 mb-10 text-[#8C6B5E] hover:underline"
        >
          <ArrowLeft className="h-4 w-4" /> Vissza a csapathoz
        </button>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-3xl overflow-hidden shadow-md border border-[#E2D8D1]">
            <img src={profile.img} alt={profile.name} className="w-full h-full object-cover" />
          </div>

          <div>
            <h1 className="text-4xl font-semibold text-[#2F2A26] mb-2">{profile.name}</h1>
            <p className="text-[#7A6F69] mb-4 italic">{profile.title}</p>
            <p className="text-[#5C534E] mb-6 leading-relaxed">{profile.bio}</p>

            <h3 className="text-lg font-semibold text-[#2F2A26] mb-3">Szakterületek</h3>
            <ul className="list-disc list-inside text-[#5C534E] space-y-1">
              {profile.expertise.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
