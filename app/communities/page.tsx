"use client";
import { useState } from "react";

const posts = [
  {
    id: 1,
    title: "Où sourcer du coton bio certifié GOTS en petite quantité ?",
    author: "Claire R.",
    group: "#TextilesInnovants",
    votes: 34,
    replies: 11,
    time: "Il y a 2h",
    tags: ["Matières", "Sourcing", "Durabilité"],
    preview: "Je cherche un fournisseur pour des quantités inférieures à 50m. J'ai essayé Première Vision mais les minimums sont trop élevés pour un créateur indépendant...",
  },
  {
    id: 2,
    title: "Retour d'expérience : constituer son dossier DA pour une Maison de luxe",
    author: "Hugo B.",
    group: "#Carrières",
    votes: 67,
    replies: 23,
    time: "Il y a 5h",
    tags: ["Carrière", "DA", "Portfolio"],
    preview: "Après 3 tentatives et enfin un entretien chez une Maison du LVMH Group, voici ce que j'ai appris sur la structure d'un book qui retient l'attention...",
  },
  {
    id: 3,
    title: "Recherche photographe studio pour shooting SS27 — Paris, fin juin",
    author: "Sarah M.",
    group: "#Collaborations",
    votes: 18,
    replies: 6,
    time: "Il y a 8h",
    tags: ["Collab", "Photographie", "Casting"],
    preview: "Je prépare une collection capsule 8 pièces et cherche un profil avec sensibilité éditoriale et expérience studio. Budget 300€/jour négociable...",
  },
  {
    id: 4,
    title: "CLO 3D vs Browzwear : lequel pour un studio mode indépendant ?",
    author: "Tom K.",
    group: "#OurilsCreatifs",
    votes: 29,
    replies: 14,
    time: "Hier",
    tags: ["Outils", "3D", "Technique"],
    preview: "J'hésite entre les deux logiciels de simulation 3D. J'ai une licence étudiante CLO mais je cherche à m'équiper professionnellement. Vos retours ?",
  },
  {
    id: 5,
    title: "Comment pitcher son projet auprès d'un incubateur mode ?",
    author: "Léa F.",
    group: "#Entrepreneuriat",
    votes: 45,
    replies: 18,
    time: "Hier",
    tags: ["Business", "Pitch", "Incubation"],
    preview: "Je prépare une candidature pour La Caserne (Paris). Quelqu'un a déjà été accompagné par eux ou un équivalent ? Qu'est-ce qu'ils regardent en priorité ?",
  },
];

const circles = [
  { name: "#TextilesInnovants",  members: "1.2k", posts: 234, color: "text-neutral-300" },
  { name: "#PortfoliosCuration", members: "890",  posts: 187, color: "text-neutral-300" },
  { name: "#Carrières",          members: "2.1k", posts: 412, color: "text-neutral-300" },
  { name: "#Collaborations",     members: "640",  posts: 98,  color: "text-neutral-300" },
  { name: "#OurilsCreatifs",     members: "450",  posts: 76,  color: "text-neutral-300" },
  { name: "#Entrepreneuriat",    members: "780",  posts: 143, color: "text-neutral-300" },
];

const sortOptions = ["Populaires", "Récents", "Sans réponse"];

export default function CommunitiesPage() {
  const [votes, setVotes]       = useState<Record<number, number>>({});
  const [voted, setVoted]       = useState<Record<number, boolean>>({});
  const [sort, setSort]         = useState("Populaires");
  const [searchPost, setSearch] = useState("");
  const [expanded, setExpanded] = useState<number | null>(null);

  function handleVote(id: number, base: number) {
    if (voted[id]) return;
    setVotes((v) => ({ ...v, [id]: (v[id] ?? base) + 1 }));
    setVoted((v) => ({ ...v, [id]: true }));
  }

  const filtered = posts
    .filter((p) =>
      !searchPost || p.title.toLowerCase().includes(searchPost.toLowerCase()) ||
      p.group.toLowerCase().includes(searchPost.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchPost.toLowerCase()))
    )
    .sort((a, b) =>
      sort === "Récents" ? b.id - a.id :
      sort === "Sans réponse" ? a.replies - b.replies :
      (votes[b.id] ?? b.votes) - (votes[a.id] ?? a.votes)
    );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 px-6 pt-20 pb-12 md:px-16">
        <div className="max-w-7xl mx-auto space-y-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">F SOCIETY · Réseau</p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">COMMUNAUTÉS</h1>
          <p className="max-w-xl text-neutral-400 text-sm leading-relaxed">
            Questions, retours d'expérience, collaborations et entraide sectorielle. 
            Les cercles F SOCIETY, par et pour les professionnels de la mode.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-10 grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Posts */}
        <div className="lg:col-span-2 space-y-6">
          {/* Toolbar */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
            <div className="flex gap-1">
              {sortOptions.map((s) => (
                <button key={s} onClick={() => setSort(s)}
                  className={`px-3 py-1.5 text-[9px] uppercase tracking-widest border transition-all ${
                    sort === s ? "bg-white text-black border-white" : "border-white/10 text-neutral-400 hover:text-white"
                  }`}>
                  {s}
                </button>
              ))}
            </div>
            <input
              value={searchPost}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Rechercher une discussion..."
              className="bg-transparent border border-white/10 px-4 py-2 text-xs text-white placeholder:text-neutral-600 outline-none focus:border-white/30 transition-all w-full sm:w-56"
            />
          </div>

          {/* Liste posts */}
          <div className="space-y-3">
            {filtered.map((post) => (
              <div key={post.id}
                className="border border-white/5 bg-neutral-950/40 hover:border-white/10 hover:bg-neutral-900/20 transition-all">
                <div className="p-5 space-y-4">
                  {/* Meta */}
                  <div className="flex items-center gap-3 text-[9px] uppercase tracking-widest text-neutral-500">
                    <span className="font-mono text-white/50">{post.group}</span>
                    <span>·</span>
                    <span>{post.author}</span>
                    <span>·</span>
                    <span>{post.time}</span>
                  </div>

                  {/* Titre */}
                  <button
                    onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                    className="text-left w-full font-serif text-lg font-light leading-snug hover:text-neutral-200 transition-colors"
                  >
                    {post.title}
                  </button>

                  {/* Preview / Expanded */}
                  <p className={`text-xs text-neutral-400 leading-relaxed transition-all ${
                    expanded === post.id ? "" : "line-clamp-2"
                  }`}>
                    {post.preview}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span key={t} className="text-[9px] uppercase tracking-widest border border-white/5 px-2 py-0.5 text-neutral-500">
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-6 pt-2 border-t border-white/5">
                    <button
                      onClick={() => handleVote(post.id, post.votes)}
                      className={`flex items-center gap-2 text-[10px] uppercase tracking-widest transition-colors ${
                        voted[post.id] ? "text-white" : "text-neutral-500 hover:text-white"
                      }`}
                    >
                      <span className={`text-sm transition-transform ${voted[post.id] ? "scale-125" : ""}`}>▲</span>
                      <span>{votes[post.id] ?? post.votes} Soutiens</span>
                    </button>
                    <button
                      onClick={() => setExpanded(expanded === post.id ? null : post.id)}
                      className="flex items-center gap-2 text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                    >
                      <span>💬</span>
                      <span>{post.replies} Réponse{post.replies > 1 ? "s" : ""}</span>
                    </button>
                    <button className="text-[10px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors ml-auto">
                      Partager
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Bouton poster */}
          <div className="border border-dashed border-white/10 p-6 text-center space-y-3 hover:border-white/20 transition-all cursor-pointer group">
            <p className="font-serif text-lg font-light text-neutral-400 group-hover:text-white transition-colors">
              + Démarrer une discussion
            </p>
            <p className="text-[9px] uppercase tracking-widest text-neutral-600">
              Partagez une question, une recherche de collab ou une ressource
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="space-y-8">
          {/* Cercles */}
          <div className="border border-white/5 p-6 bg-neutral-950/40">
            <h2 className="font-serif text-lg tracking-wide mb-5">Cercles actifs</h2>
            <div className="space-y-1">
              {circles.map((c) => (
                <div key={c.name}
                  className="flex items-center justify-between p-3 border border-white/0 hover:border-white/5 hover:bg-neutral-900/30 transition-all cursor-pointer group">
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">{c.name}</span>
                  <div className="text-right">
                    <p className="text-[9px] text-neutral-600">{c.members} membres</p>
                    <p className="text-[9px] text-neutral-600">{c.posts} posts</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Règles */}
          <div className="border border-white/5 p-6 bg-neutral-950/40 space-y-4">
            <h2 className="font-serif text-lg tracking-wide">Charte F SOCIETY</h2>
            <ul className="space-y-3">
              {[
                "Bienveillance et respect entre membres",
                "Contenu professionnel et pertinent uniquement",
                "Pas de démarchage commercial direct",
                "Sourcez vos informations quand possible",
                "Les collaborations sont encouragées",
              ].map((rule, i) => (
                <li key={i} className="flex gap-3 text-xs text-neutral-400 leading-relaxed">
                  <span className="text-neutral-700 font-mono text-[9px] mt-0.5 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
