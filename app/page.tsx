import Link from "next/link";

const featuredProjects = [
  { title: "L'Éloge de l'Ombre", author: "Marie S.", role: "Haute-Couture",
    img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
  { title: "Lignes Urbaines", author: "Lucas M.", role: "Design Textile",
    img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" },
  { title: "Anachronisme Vol.2", author: "Elen K.", role: "Photographie",
    img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
  { title: "Brutalisme Minimal", author: "Jean D.", role: "Direction Artistique",
    img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" },
];

const radarItems = [
  { tag: "Quiet Luxury", title: "Le luxe discret comme manifeste de pouvoir", source: "Vogue Business" },
  { tag: "Digital Fashion", title: "Vêtements virtuels et nouvelles identités numériques", source: "Wired" },
  { tag: "Durabilité", title: "Upcycling en maison de luxe : entre art et responsabilité", source: "BoF" },
];

const communities = [
  { name: "#TextilesInnovants", members: "1.2k membres", posts: "234 posts", hot: true },
  { name: "#PortfoliosCuration", members: "890 membres", posts: "187 posts", hot: true },
  { name: "#StudioPhotoParis", members: "640 membres", posts: "98 posts", hot: false },
  { name: "#Carrières & Luxe", members: "2.1k membres", posts: "412 posts", hot: true },
];

const opportunities = [
  { role: "Assistant Direction Artistique", company: "Maison Haute Couture", type: "Stage 6 mois", location: "Paris" },
  { role: "Styliste Prêt-à-Porter Junior", company: "Studio Émergent", type: "Freelance", location: "Paris 3e" },
  { role: "Chef de Projet Image", company: "Groupe Luxe International", type: "Alternance", location: "Paris / Remote" },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans">

      {/* ── HERO ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-[#0A0A0A] to-[#0A0A0A]" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-white/[0.015] rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <p className="text-[9px] uppercase tracking-[0.5em] text-neutral-600 border border-white/8 px-4 py-2 inline-block">
            Plateforme Mode & Luxe · Paris · Depuis 2024
          </p>
          <h1 className="font-serif text-7xl md:text-9xl font-light tracking-wide leading-none">
            F SOCIETY
          </h1>
          <p className="font-serif text-xl md:text-2xl font-light text-neutral-300 tracking-wide italic">
            Comprendre. Se montrer. Créer des opportunités.
          </p>
          <p className="text-neutral-500 text-xs leading-relaxed max-w-lg mx-auto">
            La communauté des créatifs, étudiants et professionnels de la mode et du luxe. 
            Portfolios, veille, opportunités et réseau, au même endroit.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
            <Link href="/auth?mode=signup"
              className="bg-white text-black text-[11px] uppercase tracking-widest px-10 py-4 hover:bg-neutral-200 transition-colors">
              Rejoindre la communauté
            </Link>
            <Link href="/explore"
              className="border border-white/20 text-white text-[11px] uppercase tracking-widest px-8 py-4 hover:border-white/50 transition-colors">
              Explorer les créations
            </Link>
          </div>
        </div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-20">
          <span className="text-[9px] uppercase tracking-widest">Défiler</span>
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* ── VALEURS ── */}
      <section className="py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            { num: "01", title: "Explorer", text: "Découvrez les portfolios et créations des talents émergents de la mode. Une curation éditoriale renouvelée chaque semaine." },
            { num: "02", title: "Communauté", text: "Échangez avec des étudiants, stylistes, DA et recruteurs des grandes Maisons. Des cercles thématiques pour chaque discipline." },
            { num: "03", title: "Opportunités", text: "Accédez à des offres de stages, alternances et collaborations directement depuis les acteurs du luxe parisien." },
          ].map((v) => (
            <div key={v.num} className="space-y-4 group">
              <span className="font-serif text-5xl text-neutral-800 group-hover:text-neutral-600 transition-colors">{v.num}</span>
              <h3 className="font-serif text-xl font-light tracking-wide">{v.title}</h3>
              <p className="text-neutral-500 text-xs leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── RADAR VIVANT ── */}
      <section className="py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">Veille éditoriale</p>
              <h2 className="font-serif text-3xl font-light tracking-wide mt-1">RADAR</h2>
            </div>
            <Link href="/radar" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">
              Voir toute la veille →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {radarItems.map((item, i) => (
              <Link key={i} href="/radar"
                className="border border-white/5 bg-neutral-950/40 p-6 hover:border-white/15 hover:bg-neutral-900/30 transition-all group space-y-3">
                <span className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 text-neutral-500">
                  {item.tag}
                </span>
                <h3 className="font-serif text-lg font-light leading-snug group-hover:text-neutral-200 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[9px] uppercase tracking-widest text-neutral-600">{item.source}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJETS CRÉATEURS ── */}
      <section className="py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">Portfolios</p>
              <h2 className="font-serif text-3xl font-light tracking-wide mt-1">TALENTS EN LUMIÈRE</h2>
            </div>
            <Link href="/explore" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors hidden md:block">
              Explorer tout →
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {featuredProjects.map((p, i) => (
              <div key={i} className="group relative aspect-[3/4] overflow-hidden bg-neutral-900 cursor-pointer">
                <img src={p.img} alt={p.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-90 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="font-serif text-sm leading-tight">{p.title}</p>
                  <p className="text-[9px] uppercase tracking-widest text-neutral-400 mt-1">{p.author} · {p.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMMUNAUTÉS ── */}
      <section className="py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">Réseau</p>
              <h2 className="font-serif text-3xl font-light tracking-wide mt-1">COMMUNAUTÉS</h2>
            </div>
            <Link href="/communities" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors hidden md:block">
              Tous les cercles →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {communities.map((c, i) => (
              <Link key={i} href="/communities"
                className="border border-white/5 bg-neutral-950/40 p-5 hover:border-white/15 transition-all group space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-neutral-300 group-hover:text-white transition-colors">{c.name}</span>
                  {c.hot && <span className="text-[8px] uppercase tracking-widest border border-white/20 px-2 py-0.5 text-white/50">Actif</span>}
                </div>
                <div className="space-y-1 text-[10px] text-neutral-500 uppercase tracking-widest">
                  <p>{c.members}</p>
                  <p>{c.posts}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── OPPORTUNITÉS ── */}
      <section className="py-20 px-6 md:px-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto space-y-8">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-[9px] uppercase tracking-[0.4em] text-neutral-600">Carrières</p>
              <h2 className="font-serif text-3xl font-light tracking-wide mt-1">OPPORTUNITÉS</h2>
            </div>
            <Link href="/opportunities" className="text-[10px] uppercase tracking-widest text-neutral-500 hover:text-white transition-colors hidden md:block">
              Voir toutes les offres →
            </Link>
          </div>
          <div className="border border-white/5 divide-y divide-white/5">
            {opportunities.map((o, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 hover:bg-neutral-900/20 transition-colors">
                <div className="space-y-1">
                  <h3 className="text-sm font-medium">{o.role}</h3>
                  <p className="text-[10px] text-neutral-500 uppercase tracking-widest">
                    <span className="font-serif text-neutral-400 normal-case text-xs italic">{o.company}</span>
                    {" "}· {o.location}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-[9px] uppercase tracking-widest border border-white/10 px-3 py-1 text-neutral-400">{o.type}</span>
                  <Link href="/opportunities"
                    className="text-[10px] uppercase tracking-widest border border-white/20 px-5 py-2 hover:bg-white hover:text-black transition-all">
                    Postuler
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 px-6 border-t border-white/5 text-center">
        <div className="max-w-xl mx-auto space-y-6">
          <h2 className="font-serif text-5xl font-light tracking-wide">
            Votre place<br />est ici.
          </h2>
          <p className="text-neutral-500 text-xs leading-relaxed">
            Rejoignez la communauté F SOCIETY. Publiez vos créations, construisez votre réseau, 
            accédez aux opportunités du secteur mode et luxe.
          </p>
          <Link href="/auth?mode=signup"
            className="inline-block bg-white text-black text-[11px] uppercase tracking-widest px-12 py-4 hover:bg-neutral-200 transition-colors">
            Créer mon profil gratuitement
          </Link>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="border-t border-white/5 py-10 px-6 md:px-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <span className="font-serif tracking-[0.3em] text-sm">F SOCIETY</span>
          <p className="text-neutral-700 text-[9px] uppercase tracking-widest">© 2026 F Society · fashionsociety.fr</p>
          <div className="flex gap-6">
            {[["À propos", "/about"], ["Radar", "/radar"], ["Ressources", "/resources"], ["Mentions légales", "/legal"]].map(([label, href]) => (
              <Link key={href} href={href}
                className="text-[9px] uppercase tracking-widest text-neutral-600 hover:text-white transition-colors">
                {label}
              </Link>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
