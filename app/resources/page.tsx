"use client";
import { useState } from "react";

const resources = [
  {
    category: "Médias",
    items: [
      { name: "Business of Fashion", desc: "L'analyse économique et stratégique de la mode mondiale.", url: "https://www.businessoffashion.com", tag: "Premium" },
      { name: "Vogue Business", desc: "Tendances, innovations et business model des grandes maisons.", url: "https://www.voguebusiness.com", tag: "Gratuit" },
      { name: "Dazed Digital", desc: "Culture, mode et avant-garde. Le pouls créatif de la génération.", url: "https://www.dazeddigital.com", tag: "Gratuit" },
      { name: "System Magazine", desc: "Interviews longues formes des figures du luxe et de la création.", url: "https://system-magazine.com", tag: "Print / Digital" },
      { name: "Fashion Network", desc: "Actualités B2B de l'industrie mode, textile et luxe.", url: "https://fr.fashionnetwork.com", tag: "Gratuit" },
    ],
  },
  {
    category: "Veille & Tendances",
    items: [
      { name: "WGSN", desc: "La référence mondiale en forecasting tendance, utilisée par toutes les maisons.", url: "https://www.wgsn.com", tag: "Payant" },
      { name: "Trendalytics", desc: "Data science appliquée aux tendances mode et retail.", url: "https://www.trendalytics.co", tag: "Payant" },
      { name: "The Trend Spotter", desc: "Décryptage tendances accessibles aux créateurs indépendants.", url: "https://www.thetrendspotter.net", tag: "Gratuit" },
      { name: "Tagwalk", desc: "Moteur de recherche des défilés et looks. L'outil des stylistes.", url: "https://tag.walk", tag: "Freemium" },
    ],
  },
  {
    category: "Outils Créatifs",
    items: [
      { name: "Adobe Illustrator", desc: "La suite incontournable pour le dessin de mode et le stylisme technique.", url: "https://www.adobe.com/fr/products/illustrator.html", tag: "Payant" },
      { name: "CLO 3D", desc: "Simulation 3D de vêtements. Révolutionne le prototypage en mode.", url: "https://www.clo3d.com", tag: "Payant" },
      { name: "Procreate", desc: "Illustration digitale sur iPad. Plébiscité par les illustrateurs de mode.", url: "https://procreate.art", tag: "Payant" },
      { name: "Canva", desc: "Création de présentations et moodboards pour les créatifs débutants.", url: "https://www.canva.com", tag: "Freemium" },
      { name: "Milanote", desc: "Organisation visuelle pour projets créatifs et moodboards avancés.", url: "https://www.milanote.com", tag: "Freemium" },
    ],
  },
  {
    category: "Écoles & Formations",
    items: [
      { name: "Institut Français de la Mode", desc: "La grande école parisienne du management mode et luxe.", url: "https://www.ifmparis.fr", tag: "Paris" },
      { name: "ESMOD Paris", desc: "Formation créateur de mode reconnue internationalement.", url: "https://www.esmod.com", tag: "Paris" },
      { name: "Parsons School of Design", desc: "New York. Formation design mode d'excellence internationale.", url: "https://www.newschool.edu/parsons", tag: "New York" },
      { name: "Central Saint Martins", desc: "Londres. Berceau de McQueen, Galliano et Stella McCartney.", url: "https://www.arts.ac.uk/colleges/central-saint-martins", tag: "Londres" },
      { name: "Coursera — Fashion & Luxury", desc: "Cours en ligne certifiés par Parsons, FIT et autres grandes écoles.", url: "https://www.coursera.org", tag: "En ligne" },
    ],
  },
  {
    category: "Fournisseurs & Matières",
    items: [
      { name: "Première Vision", desc: "Le salon international des matières premières pour la mode.", url: "https://www.premierevision.com", tag: "Salon / En ligne" },
      { name: "Texworld Paris", desc: "Sourcing de tissus et matières pour créateurs et marques.", url: "https://texworld.fr.messefrankfurt.com", tag: "Salon" },
      { name: "The Fabric Store", desc: "Tissus premium accessibles pour les créateurs indépendants.", url: "https://thefabricstore.com", tag: "E-commerce" },
    ],
  },
  {
    category: "Événements Clés",
    items: [
      { name: "Paris Fashion Week", desc: "Janvier/Mars/Juin/Octobre. Le centre de gravité de la mode mondiale.", url: "https://fhcm.paris", tag: "Paris" },
      { name: "Hyères Festival", desc: "Tremplin international pour les jeunes créateurs de mode et bijoux.", url: "https://www.villanoailles-hyeres.com", tag: "Hyères" },
      { name: "Who's Next", desc: "Salon mode parisien dédié aux marques émergentes et acheteurs.", url: "https://www.whosnext.com", tag: "Paris" },
    ],
  },
];

const allCategories = ["Toutes", ...resources.map((r) => r.category)];

export default function ResourcesPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("Toutes");

  const filtered = resources
    .filter((r) => activeCategory === "Toutes" || r.category === activeCategory)
    .map((r) => ({
      ...r,
      items: r.items.filter(
        (item) =>
          !search ||
          item.name.toLowerCase().includes(search.toLowerCase()) ||
          item.desc.toLowerCase().includes(search.toLowerCase())
      ),
    }))
    .filter((r) => r.items.length > 0);

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Hero */}
      <section className="border-b border-white/5 px-6 pt-20 pb-14 md:px-16">
        <div className="max-w-7xl mx-auto space-y-5">
          <p className="text-[10px] uppercase tracking-[0.4em] text-neutral-500">
            F SOCIETY · Bibliothèque de ressources
          </p>
          <h1 className="font-serif text-6xl md:text-8xl font-light tracking-wide">
            RESSOURCES
          </h1>
          <p className="max-w-xl text-neutral-400 text-sm leading-relaxed">
            Médias, outils, écoles, fournisseurs. Tout ce dont un créatif de mode a besoin pour apprendre, créer et se professionnaliser.
          </p>
          <div className="flex items-center gap-3 max-w-xl border border-white/10 bg-neutral-950/60 px-5 py-3 focus-within:border-white/30 transition-all">
            <span className="text-neutral-500 text-sm">⌕</span>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Adobe, ESMOD, Première Vision..."
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-600 outline-none"
            />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6 md:px-16 py-12 space-y-10">
        {/* Filtres */}
        <div className="flex flex-wrap gap-2">
          {allCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-1.5 text-[10px] uppercase tracking-widest border transition-all ${
                activeCategory === cat
                  ? "bg-white text-black border-white"
                  : "border-white/10 text-neutral-400 hover:border-white/30 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-14">
          {filtered.map((section) => (
            <div key={section.category} className="space-y-5">
              <div className="flex items-center gap-4">
                <h2 className="font-serif text-2xl font-light tracking-wide">
                  {section.category}
                </h2>
                <div className="flex-1 h-px bg-white/5" />
                <span className="text-[9px] text-neutral-600 uppercase tracking-widest">
                  {section.items.length} ressource{section.items.length > 1 ? "s" : ""}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {section.items.map((item) => (
                  <a
                    key={item.name}
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="group border border-white/5 bg-neutral-950/40 p-5 hover:border-white/20 hover:bg-neutral-900/30 transition-all flex flex-col justify-between gap-4"
                  >
                    <div className="space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium text-sm tracking-wide group-hover:text-neutral-200 transition-colors">
                          {item.name}
                        </h3>
                        <span className="text-[9px] uppercase tracking-widest border border-white/10 px-2 py-0.5 text-neutral-500 whitespace-nowrap ml-2">
                          {item.tag}
                        </span>
                      </div>
                      <p className="text-xs text-neutral-500 leading-relaxed">{item.desc}</p>
                    </div>
                    <p className="text-[10px] uppercase tracking-widest text-neutral-600 group-hover:text-white transition-colors">
                      Accéder →
                    </p>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
