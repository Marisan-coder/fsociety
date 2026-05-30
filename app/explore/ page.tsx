"use client";
import { useState } from "react";
import Link from "next/link";

 
const PROJECTS = [
 { id: 1, title: "L'Éloge de l'Ombre", author: "Marie S.",
   category: "Haute-Couture",
   img: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80" },
 { id: 2, title: "Lignes Urbaines", author: "Lucas M.",
   category: "Design Textile",
   img: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80" },
 { id: 3, title: "Anachronisme Vol. 2", author: "Elen K.",
   category: "Photographie",
   img: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80" },
 { id: 4, title: "Brutalisme Minimal", author: "Jean D.",
   category: "Creative Direction",
   img: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80" },
];
 
const CATS = ["Tous","Haute-Couture","Design Textile","Photographie","Creative Direction"];
 
export default function ExplorePage() {
 const [filter, setFilter] = useState("Tous");
 const list = filter === "Tous"
   ? PROJECTS : PROJECTS.filter(p => p.category === filter);
 
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-16">
     <div className="max-w-7xl mx-auto space-y-12">
 
       <header className="border-b border-white/5 pb-6">
         <h1 className="font-serif text-4xl md:text-6xl font-light tracking-wide">
           EXPLORER
         </h1>
         <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
           La curation des nouveaux talents de la mode
         </p>
       </header>
 <Link
  href="/explore/resources"
  className="inline-block mb-8 bg-white text-black px-5 py-3 text-[11px] uppercase tracking-widest hover:bg-neutral-200"
>
  Voir les ressources →
</Link>
       <div className="flex flex-wrap gap-2">
         {CATS.map((cat) => (
           <button key={cat} onClick={() => setFilter(cat)}
             className={`px-4 py-1.5 text-[11px] uppercase tracking-widest
               transition-all border ${filter === cat
                 ? "bg-white text-black border-white"
                 : "border-white/10 text-neutral-400 hover:border-white/30"
               }`}>
             {cat}
           </button>
         ))}
       </div>
 
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
         {list.map((p) => (
           <div key={p.id} className="group space-y-3 cursor-pointer">
             <div className="overflow-hidden bg-neutral-900 aspect-[3/4]">
               <img src={p.img} alt={p.title}
                 className="w-full h-full object-cover opacity-75
                   group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
             </div>
             <div className="flex justify-between items-start">
               <div>
                 <h3 className="font-serif text-base font-light">{p.title}</h3>
                 <p className="text-xs text-neutral-500">{p.author}</p>
               </div>
               <span className="text-[9px] uppercase tracking-widest
                 text-neutral-400 border border-white/5 px-2 py-0.5">
                 {p.category}
               </span>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}