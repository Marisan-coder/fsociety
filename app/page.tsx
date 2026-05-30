"use client";"use client";

import React, { useState } from 'react';

// --- TYPES & MOCK DATA (Simulant Supabase / API) ---
const TRENDS = ["Sustainable Luxury", "Digital Wearables", "Neo-Couture", "Minimalism", "Archival Fashion"];

const PROJECTS = [
  { id: 1, title: "L'Éloge de l'Ombre", author: "Marie S.", category: "Direction Artistique", img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&w=800&q=80" },
  { id: 2, title: "Structure & Fluide", author: "Jean D.", category: "Design Textile", img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&w=800&q=80" },
  { id: 3, title: "Anachronisme Vol. 1", author: "Elen K.", category: "Photographie", img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80" },
  { id: 4, title: "Matière Première", author: "Lucas M.", category: "Eco-Design", img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&w=800&q=80" },
];

const COMMUNITIES = [
  { id: 1, name: "Design de Mode", members: "1.2k", posts: "+24 aujourd'hui", tag: "#Couture" },
  { id: 2, name: "Photographie & Édito", members: "840", posts: "+12 aujourd'hui", tag: "#Studio" },
  { id: 3, name: "Web3 & Digital Fashion", members: "410", posts: "+8 aujourd'hui", tag: "#Tech" },
];

const OPPORTUNITIES = [
  { id: 1, role: "Assistant Direction Artistique", company: "Maison de Luxe", type: "Stage (6 mois)", location: "Paris / Hybride" },
  { id: 2, role: "Junior Fashion Designer", company: "Studio Indépendant", type: "CDD / Freelance", location: "Paris 3e" },
  { id: 3, role: "Styliste Photo / Éditorial", company: "Magazine Premium", type: "Collaboration", location: "Milan / Remote" },
];

// --- MAIN HOMEPAGE COMPONENT ---
export default function HomePage() {
  const [activeTrend, setActiveTrend] = useState(0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white font-sans antialiased selection:bg-white selection:text-black">
      
      {/* 1. COMPOSANT : NAVIGATION NAVIGATION HEADER */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#0A0A0A]/70 border-b border-white/5 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="font-serif text-xl tracking-[0.2em] font-bold">
            F SOCIETY
          </div>
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-widest text-neutral-400">
            <a href="#explore" className="hover:text-white transition-colors">Explorer</a>
            <a href="#communities" className="hover:text-white transition-colors">Communautés</a>
            <a href="#opportunities" className="hover:text-white transition-colors">Opportunités</a>
            <span className="text-neutral-700">|</span>
            <span className="text-neutral-500 cursor-not-allowed group relative">
              Marketplace <span className="text-[9px] text-neutral-600 lowercase absolute -top-2 left-0 font-sans tracking-normal">(bientôt)</span>
            </span>
          </nav>
          <div>
            <button className="border border-white/20 bg-white text-black hover:bg-transparent hover:text-white px-5 py-2 text-xs uppercase tracking-widest font-medium transition-all duration-300">
              Rejoindre
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-40 py-12">
        
        {/* 2. COMPOSANT : HERO SECTION & SLOGAN */}
        <section className="relative pt-12 md:pt-20 pb-8 flex flex-col justify-center border-b border-white/5">
          <div className="space-y-6 max-w-4xl">
            <p className="text-xs uppercase tracking-[0.3em] text-neutral-400 font-medium animate-fade-in">
              Plateforme Digitale & Communautaire · Mode & Luxe
            </p>
            <h1 className="font-serif text-5xl md:text-8xl tracking-tight leading-[1.05] font-light">
              Connect. <br />
              <span className="italic font-normal text-neutral-300">Create.</span> Elevate.
            </h1>
            <p className="text-neutral-400 text-sm md:text-lg max-w-xl font-light leading-relaxed pt-4">
              L'espace brut où les talents émergents, les créatifs et les maisons de mode se rencontrent pour façonner l'industrie de demain.
            </p>
          </div>

          {/* Mini Dashboard interactif en Hero pour l'aspect "Startup Premium" */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 border border-white/10 divide-x divide-y md:divide-y-0 divide-white/10 bg-neutral-900/20 backdrop-blur-sm">
            <div className="p-6">
              <span className="block text-2xl font-serif">2.4k</span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500">Membres Actifs</span>
            </div>
            <div className="p-6">
              <span className="block text-2xl font-serif">140+</span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500">Projets Uploadés</span>
            </div>
            <div className="p-6">
              <span className="block text-2xl font-serif">42</span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500">Maisons & Recruteurs</span>
            </div>
            <div className="p-6">
              <span className="block text-2xl font-serif">0€</span>
              <span className="text-[11px] uppercase tracking-wider text-neutral-500">Frais de Curation</span>
            </div>
          </div>
        </section>

        {/* 3. COMPOSANT : TENDANCES MODE (TRENDS) */}
        <section id="trends" className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-light">01 / Signaux Faibles</h2>
            <span className="text-xs text-neutral-500 uppercase tracking-widest">Radar de Tendances</span>
          </div>
          <div className="flex flex-wrap gap-3">
            {TRENDS.map((trend, idx) => (
              <button
                key={idx}
                onClick={() => setActiveTrend(idx)}
                className={`px-4 py-2 text-xs uppercase tracking-widest transition-all duration-300 border ${
                  activeTrend === idx 
                    ? 'border-white bg-white text-black' 
                    : 'border-white/10 text-neutral-400 hover:border-white/30'
                }`}
              >
                {trend}
              </button>
            ))}
          </div>
          <div className="p-8 bg-neutral-900/30 border border-white/5 text-xs text-neutral-400 max-w-2xl leading-relaxed">
            <span className="text-white block mb-1 uppercase tracking-wider">Note d'analyse communautaire :</span>
            Le signal <span className="text-white font-medium">"{TRENDS[activeTrend]}"</span> connaît une hausse d'intérêt de +42% ce mois-ci au sein des portfolios étudiants et des moodboards partagés sur F SOCIETY.
          </div>
        </section>

        {/* 4. COMPOSANT : PROJETS CRÉATEURS (EXPLORE GRID) */}
        <section id="explore" className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-light">02 / Curation de Projets</h2>
            <a href="#explore-all" className="text-xs text-neutral-400 hover:text-white transition-colors uppercase tracking-widest underline underline-offset-4">Voir la galerie</a>
          </div>
          
          {/* Grille responsive style Are.na / COS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PROJECTS.map((project) => (
              <div key={project.id} className="group relative cursor-pointer space-y-3">
                <div className="overflow-hidden bg-neutral-900 aspect-[3/4] relative">
                  <img 
                    src={project.img} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 cubic-bezier(0.16, 1, 0.3, 1) group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[11px] uppercase tracking-widest border border-white/30 bg-black/50 px-3 py-1.5 backdrop-blur-sm">
                      Inspecter le projet
                    </span>
                  </div>
                </div>
                <div className="flex justify-between items-start pt-1">
                  <div>
                    <h3 className="font-serif text-base font-light tracking-wide">{project.title}</h3>
                    <p className="text-xs text-neutral-500 mt-0.5">{project.author}</p>
                  </div>
                  <span className="text-[10px] uppercase tracking-wider text-neutral-400 bg-neutral-900 px-2 py-0.5 border border-white/5">
                    {project.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 5. COMPOSANT : COMMUNAUTÉS POPULAIRES */}
        <section id="communities" className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-light">03 / Cercles d'Échanges</h2>
            <span className="text-xs text-neutral-500 uppercase tracking-widest">Groupes d'Entraide</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {COMMUNITIES.map((comm) => (
              <div 
                key={comm.id} 
                className="p-6 border border-white/5 bg-neutral-900/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-xs text-neutral-500 tracking-wider font-mono">{comm.tag}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <h3 className="text-lg font-light tracking-wide group-hover:text-neutral-200">{comm.name}</h3>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5 text-[11px] text-neutral-400 uppercase tracking-widest">
                  <span>{comm.members} membres</span>
                  <span className="text-neutral-500">{comm.posts}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6. COMPOSANT : OPPORTUNITÉS & JOB BOARD */}
        <section id="opportunities" className="space-y-8">
          <div className="flex justify-between items-end border-b border-white/5 pb-4">
            <h2 className="font-serif text-2xl uppercase tracking-wider font-light">04 / Passerelles</h2>
            <span className="text-xs text-neutral-500 uppercase tracking-widest">Curation Recrutement</span>
          </div>

          {/* Liste épurée style Board de Startup Premium */}
          <div className="border border-white/5 divide-y divide-white/5 bg-neutral-900/5">
            {OPPORTUNITIES.map((opp) => (
              <div 
                key={opp.id} 
                className="p-5 md:p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-neutral-950 transition-colors group"
              >
                <div className="space-y-1">
                  <h3 className="text-sm md:text-base font-medium tracking-wide text-white group-hover:text-neutral-200">
                    {opp.role}
                  </h3>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-neutral-400">
                    <span className="font-serif italic text-neutral-300">{opp.company}</span>
                    <span className="text-neutral-600">•</span>
                    <span>{opp.location}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between md:justify-end gap-4">
                  <span className="text-[11px] uppercase tracking-widest px-3 py-1 bg-neutral-900 border border-white/10 text-neutral-300">
                    {opp.type}
                  </span>
                  <button className="text-xs uppercase tracking-widest text-neutral-400 group-hover:text-white group-hover:underline transition-all">
                    Postuler →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 7. COMPOSANT : CALL TO ACTION (CTA) */}
        <section className="border border-white/10 p-8 md:p-16 text-center space-y-8 bg-gradient-to-b from-neutral-900/40 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-80 h-80 bg-neutral-500/5 rounded-full blur-3xl pointer-events-none" />
          <div className="max-w-xl mx-auto space-y-4 relative z-10">
            <h2 className="font-serif text-3xl md:text-5xl font-light tracking-wide leading-tight">
              Rejoignez l'avant-garde.
            </h2>
            <p className="text-neutral-400 text-xs md:text-sm tracking-wide leading-relaxed">
              Inscrivez-vous aujourd'hui pour publier vos travaux, intégrer les cercles thématiques et accéder aux opportunités exclusives du réseau.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 relative z-10">
            <button className="w-full sm:w-auto bg-white text-black hover:bg-neutral-200 px-8 py-3 text-xs uppercase tracking-widest font-medium transition-colors">
              Créer un profil créateur
            </button>
            <button className="w-full sm:w-auto border border-white/20 hover:border-white text-white px-8 py-3 text-xs uppercase tracking-widest font-medium transition-colors">
              Déposer une offre
            </button>
          </div>
        </section>
      </main>

      {/* 8. COMPOSANT : FOOTER MINIMALISTE */}
      <footer className="border-t border-white/5 bg-neutral-950 text-neutral-500 text-[11px] uppercase tracking-widest py-12 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center space-x-2">
            <span className="font-serif tracking-widest text-white font-bold">F SOCIETY</span>
            <span className="text-neutral-700">© 2026</span>
          </div>
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-neutral-400">
            <a href="#privacy" className="hover:text-white transition-colors">Confidentialité</a>
            <a href="#terms" className="hover:text-white transition-colors">CGU / CGV</a>
            <a href="#cnil" className="hover:text-white transition-colors">Mentions Légales</a>
          </div>
          <div className="text-neutral-600 font-mono text-[9px] tracking-normal lowercase">
            actuellement en pré-lancement v1.0-mvp
          </div>
        </div>
      </footer>
    </div>
  );
}
