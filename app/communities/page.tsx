
"use client";
 
const POSTS = [
 { id: 1, title: "Où sourcer du coton bio certifié GOTS ?",
   author: "Claire R.", group: "#Textiles", votes: 24, replies: 8 },
 { id: 2, title: "Retour d'expérience : dossier DA en Maison de Luxe",
   author: "Hugo B.", group: "#Carrières", votes: 42, replies: 15 },
 { id: 3, title: "Recherche photographe studio Paris fin juin",
   author: "Sarah M.", group: "#Collaborations", votes: 11, replies: 4 },
];
 
export default function CommunitiesPage() {
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white p-8 md:p-16">
     <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
 
       <div className="lg:col-span-2 space-y-8">
         <header className="border-b border-white/5 pb-6">
           <h1 className="font-serif text-4xl font-light tracking-wide">
             COMMUNAUTÉS
           </h1>
           <p className="text-neutral-500 text-xs uppercase tracking-widest mt-2">
             Partage de connaissances et entraide sectorielle
           </p>
         </header>
 
         <div className="space-y-4">
           {POSTS.map((post) => (
             <div key={post.id}
               className="p-6 border border-white/5 bg-neutral-900/20
                 hover:border-white/10 transition-colors space-y-4">
               <div className="flex justify-between items-center
                 text-xs text-neutral-500">
                 <span className="font-mono text-white/60">{post.group}</span>
                 <span>Par {post.author}</span>
               </div>
               <h3 className="text-base font-light tracking-wide
                 hover:text-neutral-300 cursor-pointer">
                 {post.title}
               </h3>
               <div className="flex space-x-6 text-xs text-neutral-400
                 pt-2 border-t border-white/5">
                 <button className="hover:text-white">▲ {post.votes} Soutiens</button>
                 <span>💬 {post.replies} Réponses</span>
               </div>
             </div>
           ))}
         </div>
       </div>
 
       <div className="space-y-6">
         <div className="p-6 border border-white/5 space-y-4">
           <h3 className="font-serif text-lg font-light tracking-wide">
             Cercles actifs
           </h3>
           <ul className="space-y-3 text-xs uppercase tracking-wider text-neutral-400">
             {["#TextilesInnovants","#PortfoliosCuration","#StudioPhotoParis"]
               .map((c) => (
                 <li key={c}
                   className="hover:text-white cursor-pointer py-1
                     border-b border-white/5">
                   {c}
                 </li>
             ))}
           </ul>
         </div>
       </div>
     </div>
   </div>
 );
}