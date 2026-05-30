"use client";
import { useState } from "react";
import Link from "next/link";

const articles = [
  {
    title: "Quiet Luxury : pourquoi le luxe discret domine encore",
    source: "Vogue Business",
    category: "Luxe",
    tag: "Quiet Luxury",
    summary: "Une lecture des codes sobres, des matières nobles et du retour à une élégance moins ostentatoire dans les grandes maisons.",
    url: "https://www.voguebusiness.com/",
    readTime: "5 min",
  },
  {
    title: "Balletcore : la danse comme langage de la féminité contemporaine",
    source: "Vogue France",
    category: "Tendances",
    tag: "Balletcore",
    summary: "Du tutu revisité aux chaussons de ville, comment l'esthétique de la danse classique a infiltré le vestiaire quotidien.",
    url: "https://www.vogue.fr/",
    readTime: "4 min",
  },
  {
    title: "Histoire de la haute couture : origines et évolutions",
    source: "Encyclopédie Larousse",
    category: "Histoire",
    tag: "Haute Couture",
    summary: "Un point d'entrée pour comprendre l'origine, les règles et l'évolution de la haute couture française depuis Worth.",
    url: "https://fr.wikipedia.org/wiki/Haute_couture",
    readTime: "8 min",
  },
  {
    title: "Fashion Week : les nouvelles dynamiques du calendrier mode",
    source: "Fashion Network",
    category: "Défilés",
    tag: "Fashion Week",
    summary: "Les marques, acheteurs et créateurs réorganisent leur présence autour des semaines mode dans un monde post-pandémique.",
    url: "https://fr.fashionnetwork.com/",
    readTime: "6 min",
  },
  {
    title: "Mode durable : entre désirabilité et responsabilité",
    source: "Business of Fashion",
    category: "Durabilité",
    tag: "Sustainable Fashion",
    summary: "La durabilité devient un enjeu stratégique. Comment les maisons de luxe intègrent-elles la responsabilité sans perdre leur aura ?",
    url: "https://www.businessoffashion.com/",
    readTime: "7 min",
  },
  {
    title: "Digital fashion : vêtements virtuels et nouvelles identités",
    source: "Wired",
    category: "Digital Fashion",
    tag: "Digital Wearables",
    summary: "La mode numérique ouvre de nouveaux espaces d'expression, entre avatars, jeux vidéo et métavers. Un marché en pleine structuration.",
    url: "https://en.wikipedia.org/wiki/Digital_fashion",
    readTime: "5 min",
  },
  {
    title: "L'archivage de mode : quand le passé devient capital créatif",
    source: "Dazed",
    category: "Tendances",
    tag: "Archival Fashion",
    summary: "Les créateurs puisent dans les archives de maisons historiques pour créer un dialogue entre héritage et modernité.",
    url: "https://www.dazeddigital.com/",
    readTime: "6 min",
  },
  {
    title: "Le retour du tailoring : la veste comme manifeste",
    source: "System Magazine",
    category: "Business",
    tag: "Corporate Core",
    summary: "Dans un retour au vêtement structuré, le tailleur reprend sa place de pièce centrale du vestiaire de pouvoir.",
    url: "https://system-magazine.com/",
    readTime: "5 min",
  },
];

const trends = [
  { label: "Quiet Luxury", heat: "🔥🔥🔥" },
  { label: "Archival Fashion", heat: "🔥🔥🔥" },
  { label: "Balletcore", heat: "🔥🔥" },
  { label: "Digital Wearables", heat: "🔥🔥" },
  { label: "Upcycling", heat: "🔥🔥" },
  { label: "Corporate Core", heat: "🔥🔥" },
  { label: "Neo-Couture", heat: "🔥" },
  { label: "Minimalisme", heat: "🔥" },
];

const visuals = [
  { url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=900&q=80", caption: "Silhouette contemporaine — Paris FW" },
  { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=900&q=80", caption: "Détail broderie — Atelier Haute Couture" },
  { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=900&q=80", caption: "Editorial — Studio Parisien" },
  { url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=900&q=80", caption: "Prêt-à-porter — Collection SS26" },
];

const keywords = ["#craftsmanship", "#archive", "#slowfashion", "#fashiontech", "#runwayanalysis", "#neo-couture", "#demi-couture"];

const categories = ["Tous", "Tendances", "Luxe", "Défilés", "Business", "Durabilité", "Histoire", "Digital Fashion"];

export default function RadarPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("Tous");

  const filtered = articles.filter((a) => {
    const matchCat = category === "Tous" || a.category === category;
    const q = search.toLowerCase();
    const matchSearch = !q || [a.title, a.source, a.tag, a.summary, a.category]
      .some((f) => f.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero Radar */}
      <section className="relative border-b border-white/5 px-6 pt-20 pb-14 md:px-16 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(255,255,255,0.03),transparent_60%)]" />
        <div className="max-w-7xl mx-auto relative z-10 space-y-6">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            F SOCIETY · Veille éditoriale · Mode · Luxe · Culture
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            RADAR
          </h1>
          <p className="max-w-2xl text-neutral-400 text-sm leading-relaxed">
            Signaux faibles, tendances émergentes, analyses sectorielles. 
            Tout ce qui bouge dans la mode mondiale, filtré pour les créatifs et professionnels du luxe.
          </p>
          <div className="flex items-center gap-3 max-w-2xl border border-white/10 bg-neutral-950/60 px-5 py-3 focus-within:border-white/30 transition-all">
            <span className="text-neutral-500 text-sm">⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Chanel, quiet luxury, Fashion Week, upcycling..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-600 outline-none"
            />
            {search && (
              <button onClick={() => setSearch("")} className="text-neutral-500 hover:text-white text-xs">✕</button>
            )}
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 space-y-10">
        {/* Filtres */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-widest border transition-all ${
                category === cat
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Articles */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="font-serif text-xl tracking-wide">
                Articles & analyses
              </h2>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500">
                {filtered.length} résultat{filtered.length > 1 ? "s" : ""}
              </span>
            </div>

            {filtered.length === 0 && (
              <div className="border border-white/5 p-10 text-center text-neutral-500 text-sm">
                Aucun article ne correspond à votre recherche.
              </div>
            )}

            {filtered.map((article) => (
              <a
                key={article.title}
                href={article.url}
                target="_blank"
                rel="noreferrer"
                className="block border border-white/5 bg-neutral-950/40 p-6 hover:border-white/20 hover:bg-neutral-900/30 transition-all group"
              >
                <div className="flex justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <p className="text-[9px] uppercase tracking-widest text-neutral-500">
                        {article.source}
                      </p>
                      <span className="text-neutral-700">·</span>
                      <p className="text-[9px] uppercase tracking-widest text-neutral-500">
                        {article.category}
                      </p>
                      <span className="text-neutral-700">·</span>
                      <p className="text-[9px] uppercase tracking-widest text-neutral-600">
                        {article.readTime}
                      </p>
                    </div>
                    <h3 className="font-serif text-xl font-light leading-snug group-hover:text-neutral-200 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                  <span className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 h-fit text-neutral-400 whitespace-nowrap">
                    {article.tag}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 leading-relaxed mb-4">
                  {article.summary}
                </p>
                <p className="text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors">
                  Lire la source →
                </p>
              </a>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Tendances */}
            <div className="border border-white/5 p-6 bg-neutral-950/40">
              <h2 className="font-serif text-lg mb-4 tracking-wide">Tendances du moment</h2>
              <div className="space-y-2">
                {trends.map((t, i) => (
                  <button
                    key={t.label}
                    onClick={() => setSearch(t.label)}
                    className="w-full flex items-center justify-between px-3 py-2 border border-white/5 text-left hover:border-white/20 hover:bg-neutral-900/30 transition-all group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-[9px] text-neutral-600 font-mono">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-[11px] uppercase tracking-widest text-neutral-300 group-hover:text-white transition-colors">
                        {t.label}
                      </span>
                    </div>
                    <span className="text-[10px]">{t.heat}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Mots-clés */}
            <div className="border border-white/5 p-6 bg-neutral-950/40">
              <h2 className="font-serif text-lg mb-4 tracking-wide">Mots-clés émergents</h2>
              <div className="flex flex-wrap gap-2">
                {keywords.map((k) => (
                  <button
                    key={k}
                    onClick={() => setSearch(k.replace("#", ""))}
                    className="text-[10px] uppercase tracking-widest border border-white/10 px-3 py-1.5 text-neutral-400 hover:text-white hover:border-white/30 transition-all font-mono"
                  >
                    {k}
                  </button>
                ))}
              </div>
            </div>

            {/* Mood visuel */}
            <div className="space-y-3">
              <h2 className="font-serif text-lg tracking-wide">Mood visuel</h2>
              <p className="text-[10px] uppercase tracking-widest text-neutral-500">Curation éditoriale de la semaine</p>
              {visuals.map((v, i) => (
                <div key={i} className="overflow-hidden bg-neutral-900 border border-white/5 group">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={v.url}
                      alt={v.caption}
                      className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <p className="px-3 py-2 text-[9px] uppercase tracking-widest text-neutral-500">{v.caption}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
