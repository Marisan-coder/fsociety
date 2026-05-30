export default function LegalPage() {
 return (
   <div className="min-h-screen bg-[#0A0A0A] text-white
     p-8 md:p-16 max-w-3xl mx-auto space-y-8">
     <h1 className="font-serif text-3xl text-white font-light tracking-wide pt-8">
       MENTIONS LÉGALES & RGPD
     </h1>
     <div className="space-y-4 text-xs text-neutral-400 leading-relaxed">
       <p>
         Conformément aux directives de la CNIL et au RGPD,
         les informations collectées sur ce site sont exclusivement
         destinées à F SOCIETY.
       </p>
       <p>
         Vous disposez d'un droit d'accès, de modification et de
         suppression de vos données. Pour exercer ce droit,
         contactez-nous via le formulaire du site.
       </p>
       <p>
         <strong className="text-white">Hébergement :</strong>
         Vercel Inc., 340 S Lemon Ave, Walnut, CA 91789, États-Unis.
       </p>
       <p>
         <strong className="text-white">Éditrice :</strong>
         Marie Sanogo — fashionsociety.fr
       </p>
     </div>
   </div>
 );
}
