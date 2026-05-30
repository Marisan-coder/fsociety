"use client";
import { useState } from "react";

const stats = [
  { label: "Vues totales",     value: "2 841", delta: "+12% ce mois" },
  { label: "Likes reçus",      value: "348",   delta: "+8% ce mois" },
  { label: "Abonnés profil",   value: "127",   delta: "+23 nouveaux" },
  { label: "Projets publiés",  value: "6",     delta: "2 en cours" },
];

const initialProjects = [
  {
    id: 1,
    title: "Collection Capsule 'Ombres'",
    category: "Haute-Couture",
    description: "6 pièces autour de la dualité lumière/ombre. Soie et organza.",
    imageUrl: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
    views: 1240, likes: 87, comments: 14, status: "Publié",
  },
  {
    id: 2,
    title: "Étude textile 'Néo-Couture'",
    category: "Design Textile",
    description: "Exploration des structures tridimensionnelles en tissu recyclé.",
    imageUrl: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
    views: 890, likes: 134, comments: 22, status: "Publié",
  },
  {
    id: 3,
    title: "Moodboard Printemps 2027",
    category: "Creative Direction",
    description: "Direction artistique pour une collection printemps non encore dévoilée.",
    imageUrl: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80",
    views: 310, likes: 48, comments: 7, status: "Brouillon",
  },
];

const activity = [
  { action: "Nouveau like", detail: "sur 'Collection Capsule Ombres'",   time: "Il y a 12 min" },
  { action: "Nouveau follower", detail: "Lucas M. vous suit désormais",  time: "Il y a 1h" },
  { action: "Commentaire",  detail: "sur 'Étude textile Néo-Couture'",   time: "Il y a 3h" },
  { action: "Votre profil", detail: "a été consulté 14 fois aujourd'hui", time: "Aujourd'hui" },
  { action: "Opportunité",  detail: "Stage DA — Maison Haute Couture",   time: "Hier" },
];

const CATEGORIES = ["Haute-Couture", "Design Textile", "Photographie", "Creative Direction", "Stylisme", "Accessoires"];

export default function DashboardPage() {
  const [projects, setProjects]   = useState(initialProjects);
  const [showForm, setShowForm]   = useState(false);
  const [form, setForm]           = useState({ title: "", category: CATEGORIES[0], description: "", imageUrl: "" });
  const [activeTab, setActiveTab] = useState<"all" | "published" | "draft">("all");

  const filtered = projects.filter((p) =>
    activeTab === "all" ? true : activeTab === "published" ? p.status === "Publié" : p.status === "Brouillon"
  );

  function handleSubmit() {
    if (!form.title.trim()) return;
    setProjects([
      {
        id: Date.now(),
        ...form,
        imageUrl: form.imageUrl || "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80",
        views: 0, likes: 0, comments: 0,
        status: "Brouillon",
      },
      ...projects,
    ]);
    setForm({ title: "", category: CATEGORIES[0], description: "", imageUrl: "" });
    setShowForm(false);
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <section className="border-b border-white/5 px-6 pt-20 pb-10 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
              Espace créateur · F SOCIETY
            </p>
            <h1 className="font-serif text-5xl font-light tracking-wide">DASHBOARD</h1>
            <p className="text-neutral-400 text-sm">Bonjour, Marie. Voici l'état de votre présence F SOCIETY.</p>
          </div>
          <button
            onClick={() => setShowForm(!showForm)}
            className="border border-white/20 bg-white text-black text-[11px] uppercase tracking-widest px-6 py-3 hover:bg-neutral-200 transition-all whitespace-nowrap"
          >
            {showForm ? "✕ Annuler" : "+ Nouveau projet"}
          </button>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 space-y-12">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s) => (
            <div key={s.label} className="border border-white/5 bg-neutral-950/40 p-5 space-y-2">
              <p className="text-[9px] uppercase tracking-widest text-neutral-500">{s.label}</p>
              <p className="font-serif text-3xl font-light">{s.value}</p>
              <p className="text-[10px] text-neutral-500">{s.delta}</p>
            </div>
          ))}
        </div>

        {/* Formulaire nouveau projet */}
        {showForm && (
          <div className="border border-white/10 bg-neutral-950/60 p-8 space-y-6">
            <h2 className="font-serif text-xl tracking-wide">Nouveau projet</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">Titre *</label>
                <input
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                  placeholder="Nom de votre projet"
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/30 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">Catégorie</label>
                <select
                  value={form.category}
                  onChange={(e) => setForm({ ...form, category: e.target.value })}
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white outline-none focus:border-white/30 transition-all"
                >
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">Description</label>
                <textarea
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                  placeholder="Décrivez votre démarche créative..."
                  rows={3}
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/30 transition-all resize-none"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] uppercase tracking-widest text-neutral-400">URL image (Unsplash, etc.)</label>
                <input
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="https://images.unsplash.com/..."
                  className="w-full bg-neutral-900 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-neutral-600 outline-none focus:border-white/30 transition-all"
                />
              </div>
            </div>
            <div className="flex gap-4 pt-2">
              <button
                onClick={handleSubmit}
                className="bg-white text-black text-[11px] uppercase tracking-widest px-8 py-3 hover:bg-neutral-200 transition-all"
              >
                Publier le projet
              </button>
              <button
                onClick={() => setShowForm(false)}
                className="border border-white/10 text-[11px] uppercase tracking-widest px-6 py-3 text-neutral-400 hover:text-white hover:border-white/30 transition-all"
              >
                Annuler
              </button>
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Projets */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl tracking-wide">Mes projets</h2>
              <div className="flex gap-1">
                {(["all", "published", "draft"] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-3 py-1 text-[9px] uppercase tracking-widest border transition-all ${
                      activeTab === tab ? "bg-white text-black border-white" : "border-white/10 text-neutral-400 hover:text-white"
                    }`}
                  >
                    {tab === "all" ? "Tous" : tab === "published" ? "Publiés" : "Brouillons"}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              {filtered.map((p) => (
                <div key={p.id} className="border border-white/5 bg-neutral-950/40 p-5 flex gap-5 hover:border-white/10 transition-all group">
                  <div className="w-20 h-20 flex-shrink-0 overflow-hidden bg-neutral-800">
                    <img src={p.imageUrl} alt={p.title} className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="flex-1 min-w-0 space-y-1.5">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-serif text-base font-light leading-tight">{p.title}</h3>
                      <span className={`text-[9px] uppercase tracking-widest px-2 py-0.5 border whitespace-nowrap ${
                        p.status === "Publié" ? "border-white/20 text-white/60" : "border-white/5 text-neutral-600"
                      }`}>
                        {p.status}
                      </span>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-500">{p.category}</p>
                    <div className="flex gap-5 text-[10px] text-neutral-500 pt-1">
                      <span>👁 {p.views}</span>
                      <span>♡ {p.likes}</span>
                      <span>💬 {p.comments}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Activité */}
          <div className="space-y-5">
            <h2 className="font-serif text-xl tracking-wide">Activité récente</h2>
            <div className="border border-white/5 bg-neutral-950/40 divide-y divide-white/5">
              {activity.map((a, i) => (
                <div key={i} className="p-4 space-y-0.5 hover:bg-neutral-900/20 transition-colors">
                  <p className="text-xs font-medium">{a.action}</p>
                  <p className="text-[11px] text-neutral-400">{a.detail}</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-600">{a.time}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
