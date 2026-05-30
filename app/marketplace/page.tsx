"use client";
import { useState } from "react";
 
export default function MarketplacePage() {
 const [email, setEmail] = useState("");
 const [done, setDone]   = useState(false);
 
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white flex
     items-center justify-center p-6 relative overflow-hidden">
 
     {/* Fond flou */}
     <div className="absolute inset-0 opacity-10 bg-cover bg-center
       bg-[url('https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1200&q=80')]
       filter blur-md" />
 
     <div className="max-w-md w-full text-center space-y-8 p-8
       border border-white/10 bg-black/60 backdrop-blur-xl relative z-10">
 
       <div className="space-y-3">
         <span className="text-[10px] uppercase tracking-widest
           text-neutral-400 border border-white/20 px-3 py-1">
           PHASE 2
         </span>
         <h1 className="font-serif text-3xl font-light tracking-wide pt-2">
           LA MARKETPLACE
         </h1>
         <p className="text-neutral-400 text-xs leading-relaxed">
           Achat, vente et surcyclage de tissus, échantillons
           et prototypes de créateurs.
         </p>
       </div>
 
       {!done ? (
         <div className="space-y-4">
           <input type="email" placeholder="VOTRE EMAIL"
             value={email} onChange={(e) => setEmail(e.target.value)}
             className="w-full bg-neutral-900 border border-white/10
               px-4 py-3 text-xs text-white text-center uppercase
               tracking-widest focus:outline-none focus:border-white transition-all" />
           <button onClick={() => email && setDone(true)}
             className="w-full bg-white text-black text-xs uppercase
               tracking-widest font-medium py-3
               hover:bg-neutral-200 transition-colors">
             Rejoindre la liste d'attente
           </button>
         </div>
       ) : (
         <p className="text-xs text-neutral-300 font-mono tracking-wide
           bg-neutral-900/50 py-4 border border-white/5">
           ✓ Votre accès prioritaire a été enregistré.
         </p>
       )}
     </div>
   </div>
 );
}