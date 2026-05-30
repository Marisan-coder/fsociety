
"use client";
import { useState } from "react";
 
export default function AuthPage() {
 const [mode, setMode] = useState<"login"|"signup">("login");
 
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white
     flex items-center justify-center p-6">
     <div className="max-w-sm w-full p-8 border border-white/5
       bg-neutral-950 space-y-8">
 
       <div className="text-center space-y-2">
         <h1 className="font-serif text-3xl font-light tracking-widest">
           F SOCIETY
         </h1>
         <p className="text-neutral-500 text-[10px] uppercase tracking-widest">
           {mode === "signup" ? "Créer un profil" : "S'identifier"}
         </p>
       </div>
 
       <div className="space-y-4">
         {mode === "signup" && (
           <input type="text" placeholder="NOM COMPLET"
             className="w-full bg-neutral-900 border border-white/5 px-4 py-3
               text-xs uppercase tracking-widest text-white
               focus:outline-none focus:border-white/40" />
         )}
         <input type="email" placeholder="ADRESSE EMAIL"
           className="w-full bg-neutral-900 border border-white/5 px-4 py-3
             text-xs uppercase tracking-widest text-white
             focus:outline-none focus:border-white/40" />
         <input type="password" placeholder="MOT DE PASSE"
           className="w-full bg-neutral-900 border border-white/5 px-4 py-3
             text-xs uppercase tracking-widest text-white
             focus:outline-none focus:border-white/40" />
         <button className="w-full bg-white text-black text-xs
           uppercase tracking-widest font-medium py-3
           hover:bg-neutral-200 transition-all">
           {mode === "signup" ? "Créer mon compte" : "Se connecter"}
         </button>
       </div>
 
       <button onClick={() => setMode(mode === "login" ? "signup" : "login")}
         className="w-full text-center text-[11px] text-neutral-400
           hover:text-white uppercase tracking-widest
           underline underline-offset-4">
         {mode === "login" ? "Pas de compte ? S'inscrire" : "Déjà membre ? Se connecter"}
       </button>
     </div>
   </div>
 );
}