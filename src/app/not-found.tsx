import Link from "next/link";
import { ArrowLeft, ShieldQuestion } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-[70vh] flex items-center justify-center px-4 py-20">
      <div className="sketch-card max-w-lg w-full p-8 sm:p-10 bg-white text-center space-y-5">
        <div className="w-14 h-14 rounded-2xl bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] flex items-center justify-center mx-auto text-[#1E242B]">
          <ShieldQuestion className="w-7 h-7" />
        </div>
        <span className="font-mono text-xs font-extrabold uppercase tracking-widest text-[#E06A4E] block">
          HTTP 404 · Ruta no registrada
        </span>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-[#1E242B]">
          Recurso fuera del perímetro
        </h1>
        <p className="text-sm text-[#3A434E] font-medium leading-relaxed">
          La dirección solicitada no existe o fue trasladada. Regresa al panel
          principal para explorar los casos de estudio y certificaciones.
        </p>
        <div className="pt-2">
          <Link
            href="/"
            className="sketch-btn-coral inline-flex items-center gap-2 px-5 py-3 rounded-xl text-xs font-extrabold"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al Inicio
          </Link>
        </div>
      </div>
    </main>
  );
}
