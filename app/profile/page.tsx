
"use client";
 
export default function ProfilePage() {
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-16">
     <div className="max-w-4xl mx-auto space-y-16">
 
       <header className="flex flex-col md:flex-row md:items-center
         justify-between gap-6 border-b border-white/5 pb-10">
         <div className="space-y-3">
           <h1 className="font-serif text-5xl font-light tracking-wide">
             MARIE SANOGO
           </h1>
           <p className="text-xs uppercase tracking-widest text-neutral-400">
             Designer de Mode & Directrice Artistique
           </p>
           <p className="text-neutral-400 text-xs max-w-xl leading-relaxed">
             Spécialisée en structures contemporaines et textiles
             éco-responsables.
           </p>
         </div>
         <button className="border border-white/20 bg-white text-black
           text-xs uppercase tracking-widest px-6 py-3 font-medium
           hover:bg-transparent hover:text-white transition-all">
           Contacter
         </button>
       </header>
 
       <div className="space-y-6">
         <h3 className="font-serif text-xl font-light tracking-wide text-neutral-300">
           Portfolio
         </h3>
         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
           {[
             { url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&q=80",
               label: "Collection Capsule 'Ombres' (2026)" },
             { url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80",
               label: "Étude Textile 'Néo-Couture'" },
           ].map((item, i) => (
             <div key={i} className="bg-neutral-900 aspect-[4/5]
               overflow-hidden relative group">
               <img src={item.url} alt={item.label}
                 className="w-full h-full object-cover opacity-70
                   group-hover:opacity-100 group-hover:scale-105 transition-all duration-500" />
               <div className="absolute bottom-0 left-0 p-4 text-xs font-serif
                 bg-black/50 w-full backdrop-blur-sm">
                 {item.label}
               </div>
             </div>
           ))}
         </div>
       </div>
     </div>
   </div>
 );
}