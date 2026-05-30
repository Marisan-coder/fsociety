
"use client";
 
const JOBS = [
 { id: 1, role: "Assistant Direction Artistique",
   company: "Maison Haute Couture", type: "Stage (6 mois)", location: "Paris" },
 { id: 2, role: "Styliste Prêt-à-Porter Junior",
   company: "Studio Émergent", type: "CDD / Freelance", location: "Paris 3e" },
 { id: 3, role: "Chef de Projet Image",
   company: "Groupe Luxe International", type: "Alternance", location: "Paris / Remote" },
];
 
export default function OpportunitiesPage() {
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-16">
     <div className="max-w-5xl mx-auto space-y-12">
 
       <header className="border-b border-white/5 pb-6">
         <h1 className="font-serif text-4xl md:text-5xl font-light tracking-wide">
           OPPORTUNITÉS
         </h1>
         <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
           Curation exclusive Mode & Luxe
         </p>
       </header>
 
       <div className="border border-white/5 divide-y divide-white/5">
         {JOBS.map((job) => (
           <div key={job.id}
             className="p-6 flex flex-col md:flex-row md:items-center
               justify-between gap-4 hover:bg-neutral-900/30 transition-colors">
             <div className="space-y-1">
               <h3 className="text-base font-medium tracking-wide">{job.role}</h3>
               <div className="flex items-center gap-3 text-xs text-neutral-400">
                 <span className="font-serif italic text-neutral-300">{job.company}</span>
                 <span>·</span>
                 <span>{job.location}</span>
               </div>
             </div>
             <div className="flex items-center gap-4">
               <span className="text-[10px] uppercase tracking-widest px-3 py-1
                 bg-neutral-900 border border-white/10 text-neutral-300">
                 {job.type}
               </span>
               <button className="text-xs uppercase tracking-widest border
                 border-white px-4 py-2 hover:bg-white hover:text-black transition-all">
                 Postuler
               </button>
             </div>
           </div>
         ))}
       </div>
     </div>
   </div>
 );
}