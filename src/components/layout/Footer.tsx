import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import { NAV_ITEMS } from "@/config/navigation";

export default function Footer() {
  return (
    <footer className="border-t-2 border-[#1E242B] bg-white text-xs text-[#5F6B7A] relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col gap-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-1.5">
            <p className="font-extrabold text-sm text-[#1E242B]">
              {SITE_CONFIG.name} ·{" "}
              <span className="text-[#E06A4E] font-bold">{SITE_CONFIG.role}</span>
            </p>
            <p className="text-[#3A434E] max-w-xl">
              Diseño Studio Wireframe & Arquitectura Next.js 16 Server-First protegida
              bajo principios Zero Trust, CSP, validación Zod y privacidad OPSEC.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-bold text-[#1E242B]">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.sectionId}
                href={item.href}
                className="hover:text-[#E06A4E] transition-colors"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/#contacto"
              className="hover:text-[#E06A4E] transition-colors"
            >
              Contacto
            </Link>
          </div>
        </div>

        <div className="pt-6 border-t-2 border-[#1E242B]/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-medium text-[#3A434E]">
            &copy; {new Date().getFullYear()} {SITE_CONFIG.name}. Lima, Perú. Todos los
            derechos reservados.
          </p>

          <div className="flex flex-wrap items-center gap-3 font-mono text-[11px] font-semibold">
            <a
              href="/.well-known/security.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-[#E6F4E2] border-2 border-[#1E242B] text-[#1E242B] hover:bg-[#F6CE3E] transition-colors"
            >
              <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32]" />
              security.txt
            </a>
            <a
              href="/llms.txt"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#E0F4FC] border-2 border-[#1E242B] text-[#1E242B] hover:bg-[#F6CE3E] transition-colors"
            >
              &lt;/llms.txt&gt;
            </a>
            <a
              href="/sitemap.xml"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 rounded-lg bg-[#FEF3C7] border-2 border-[#1E242B] text-[#1E242B] hover:bg-[#F6CE3E] transition-colors"
            >
              sitemap.xml
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
