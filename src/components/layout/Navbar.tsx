"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, Menu, Shield, X } from "lucide-react";
import { NAV_ITEMS } from "@/config/navigation";
import { SITE_CONFIG } from "@/config/site";

const TRACKED_SECTIONS = [
  ...NAV_ITEMS.map((item) => item.sectionId),
  "contacto",
];

export default function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("perfil");

  useEffect(() => {
    if (pathname.startsWith("/proyectos")) {
      return;
    }

    let rafId = 0;

    const computeActiveSection = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const docHeight = document.documentElement.scrollHeight;

      // Si el usuario llegó al tramo final de la página, marca "contacto" con certeza
      if (scrollY + viewportHeight >= docHeight - 80) {
        setActiveSection("contacto");
        return;
      }

      // Línea de lectura a ~32% desde el borde superior del viewport
      const triggerLine = scrollY + viewportHeight * 0.32;
      let current = TRACKED_SECTIONS[0] ?? "perfil";

      for (const id of TRACKED_SECTIONS) {
        const element = document.getElementById(id);
        if (!element) continue;

        const elementTop = element.getBoundingClientRect().top + scrollY;
        if (elementTop <= triggerLine) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    const handleScrollOrResize = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        computeActiveSection();
        rafId = 0;
      });
    };

    handleScrollOrResize();
    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize, { passive: true });

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, [pathname]);

  const resolvedSection = pathname.startsWith("/proyectos")
    ? "proyectos"
    : activeSection;
  const isContactActive = resolvedSection === "contacto";

  return (
    <header className="sticky top-0 z-40 px-3 sm:px-6 pt-3">
      <nav
        aria-label="Navegación principal"
        className="max-w-7xl mx-auto h-16 px-4 sm:px-5 rounded-2xl bg-white/95 backdrop-blur-md border-2 border-[#1E242B] shadow-[4px_4px_0px_#1E242B] flex items-center justify-between"
      >
        {/* Brand + Window Dots Accent */}
        <div className="flex items-center gap-3.5">
          <Link
            href="/#perfil"
            onClick={() => setActiveSection("perfil")}
            className="flex items-center gap-2.5 font-extrabold text-lg tracking-tight text-[#1E242B]"
          >
            <span className="w-9 h-9 rounded-xl bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B] flex items-center justify-center">
              <Shield className="w-4 h-4 text-[#1E242B]" />
            </span>
            <span className="uppercase tracking-tight">
              {SITE_CONFIG.brandPrefix}
              <span className="text-[#E06A4E]">{SITE_CONFIG.brandSuffix}</span>
            </span>
          </Link>

          <span className="hidden xl:inline-flex items-center gap-1.5 text-[11px] font-mono font-semibold text-[#1E242B] bg-[#E6F4E2] border-2 border-[#1E242B] px-2.5 py-0.5 rounded-full">
            <span className="w-2 h-2 rounded-full bg-[#4E9F3D] animate-pulse" />
            Lima · Remoto / Híbrido
          </span>
        </div>

        {/* Desktop Section Links */}
        <div className="hidden lg:flex items-center gap-1.5 text-sm font-bold">
          {NAV_ITEMS.map((item) => {
            const isActive = resolvedSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={() => setActiveSection(item.sectionId)}
                aria-current={isActive ? "location" : undefined}
                className={`px-3.5 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-[#F6CE3E] text-[#1E242B] border-2 border-[#1E242B] shadow-[2px_2px_0px_#1E242B]"
                    : "text-[#3A434E] border-2 border-transparent hover:text-[#1E242B] hover:bg-[#F4F5F7]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href={SITE_CONFIG.cvPath}
            target="_blank"
            rel="noopener noreferrer"
            className="sketch-btn-white inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold"
          >
            <FileText className="w-3.5 h-3.5 text-[#E06A4E]" />
            <span>CV.pdf</span>
          </a>

          <Link
            href="/#contacto"
            onClick={() => setActiveSection("contacto")}
            aria-current={isContactActive ? "location" : undefined}
            className={`inline-flex items-center gap-1.5 px-4 py-1.5 rounded-xl text-xs font-extrabold transition-all border-2 border-[#1E242B] ${
              isContactActive
                ? "bg-[#F6CE3E] text-[#1E242B] shadow-[3px_3px_0px_#1E242B] ring-2 ring-[#E06A4E]"
                : "sketch-btn-coral"
            }`}
          >
            {isContactActive && (
              <span className="w-2 h-2 rounded-full bg-[#1E242B]" />
            )}
            <span>Contactar</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
          className="lg:hidden p-2 rounded-xl border-2 border-[#1E242B] bg-[#F4F5F7] text-[#1E242B] cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Dropdown */}
      {mobileOpen && (
        <div className="lg:hidden max-w-7xl mx-auto mt-2 rounded-2xl bg-white border-2 border-[#1E242B] shadow-[4px_4px_0px_#1E242B] p-4 flex flex-col gap-2">
          {NAV_ITEMS.map((item) => {
            const isActive = resolvedSection === item.sectionId;
            return (
              <Link
                key={item.sectionId}
                href={item.href}
                onClick={() => {
                  setActiveSection(item.sectionId);
                  setMobileOpen(false);
                }}
                className={`px-3.5 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  isActive
                    ? "bg-[#F6CE3E] text-[#1E242B] border-2 border-[#1E242B]"
                    : "text-[#3A434E] hover:bg-[#F4F5F7] hover:text-[#1E242B]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
          <div className="grid grid-cols-2 gap-2.5 pt-3 mt-1 border-t-2 border-[#1E242B]/15">
            <a
              href={SITE_CONFIG.cvPath}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="sketch-btn-white inline-flex items-center justify-center gap-1.5 py-2.5 rounded-xl text-xs font-bold"
            >
              <FileText className="w-3.5 h-3.5 text-[#E06A4E]" />
              Descargar CV
            </a>
            <Link
              href="/#contacto"
              onClick={() => {
                setActiveSection("contacto");
                setMobileOpen(false);
              }}
              className={`inline-flex items-center justify-center py-2.5 rounded-xl text-xs font-extrabold border-2 border-[#1E242B] ${
                isContactActive
                  ? "bg-[#F6CE3E] text-[#1E242B]"
                  : "sketch-btn-coral"
              }`}
            >
              Contactar
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
