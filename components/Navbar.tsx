"use client";
import Link from "next/link";
import { useState } from "react";

const links = [
 { href: "/explore",       label: "Explorer" },
 { href: "/communities",   label: "Communautés" },
 { href: "/opportunities", label: "Opportunités" },
 { href: "/marketplace",   label: "Marketplace" },
];

export default function Navbar() {
 const [open, setOpen] = useState(false);

 return (
   <header className="fixed top-0 left-0 right-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/5">
     <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

       <Link href="/" className="font-serif text-xl tracking-[0.3em] text-white hover:text-neutral-300 transition-colors">
         F SOCIETY
       </Link>

       <nav className="hidden md:flex items-center gap-8">
         {links.map((l) => (
           <Link key={l.href} href={l.href}
             className="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
             {l.label}
           </Link>
         ))}
       </nav>

       <div className="hidden md:flex items-center gap-4">
         <Link href="/auth"
           className="text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white transition-colors">
           Connexion
         </Link>
         <Link href="/auth?mode=signup"
           className="text-[11px] uppercase tracking-widest bg-white text-black px-5 py-2 hover:bg-neutral-200 transition-colors">
           Rejoindre
         </Link>
       </div>

       <button className="md:hidden flex flex-col gap-1.5 p-2"
         onClick={() => setOpen(!open)} aria-label="Menu">
         <span className={`block w-5 h-px bg-white transition-all ${open ? "rotate-45 translate-y-2" : ""}`} />
         <span className={`block w-5 h-px bg-white transition-all ${open ? "opacity-0" : ""}`} />
         <span className={`block w-5 h-px bg-white transition-all ${open ? "-rotate-45 -translate-y-2" : ""}`} />
       </button>
     </div>

     {open && (
       <div className="md:hidden border-t border-white/5 bg-[#0A0A0A] px-6 py-6 space-y-4">
         {links.map((l) => (
           <Link key={l.href} href={l.href}
             onClick={() => setOpen(false)}
             className="block text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white py-2">
             {l.label}
           </Link>
         ))}
         <div className="pt-4 border-t border-white/5 space-y-3">
           <Link href="/auth"
             className="block text-[11px] uppercase tracking-widest text-neutral-400 hover:text-white py-2">
             Connexion
           </Link>
           <Link href="/auth?mode=signup"
             className="block text-center text-[11px] uppercase tracking-widest bg-white text-black px-4 py-3 hover:bg-neutral-200">
             Rejoindre F SOCIETY
           </Link>
         </div>
       </div>
     )}
   </header>
 );
}
