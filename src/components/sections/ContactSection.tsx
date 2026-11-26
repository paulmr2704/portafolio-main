import { ExternalLink, Mail, MessageSquareLock, ShieldCheck } from "lucide-react";
import { SITE_CONFIG } from "@/config/site";
import CopyValueButton from "@/components/ui/CopyValueButton";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import ContactFormIsland from "@/components/sections/ContactFormIsland";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="py-20 bg-[#EAECEF] border-t-2 border-[#1E242B] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-5">
            <span className="font-sketch inline-flex items-center gap-2 text-sm font-bold text-[#1E242B] bg-[#F6CE3E] border-2 border-[#1E242B] shadow-[3px_3px_0px_#1E242B] px-4 py-1 rounded-full uppercase">
              <span className="w-2 h-2 rounded-full bg-[#E06A4E] border border-[#1E242B]" />
              SEO &amp; CONTACT · CONECTEMOS
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#1E242B] tracking-tight leading-tight uppercase">
              Hablemos de Ciberseguridad, IA o Diseño de Producto
            </h2>

            <p className="text-sm sm:text-base text-[#3A434E] font-medium leading-relaxed">
              Disponible para integrarme a equipos de{" "}
              <strong className="text-[#1E242B] font-extrabold">Operaciones SOC</strong>,{" "}
              <strong className="text-[#1E242B] font-extrabold">Desarrollo de IA</strong> o{" "}
              <strong className="text-[#1E242B] font-extrabold">UX/UI &amp; Factor Humano</strong> en
              Lima o modalidad remota internacional.
            </p>

            <div className="space-y-3.5 pt-1">
              {/* Email Card with 1-Click Copy */}
              <div className="sketch-card p-4 bg-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-[#FEF3C7] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B] shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5F6B7A] block">
                      Correo Electrónico
                    </span>
                    <a
                      href={`mailto:${SITE_CONFIG.email}`}
                      className="text-sm font-extrabold text-[#1E242B] hover:text-[#E06A4E] truncate block transition-colors"
                    >
                      {SITE_CONFIG.email}
                    </a>
                  </div>
                </div>

                <CopyValueButton
                  value={SITE_CONFIG.email}
                  label="Copiar"
                  copiedLabel="¡Copiado!"
                  ariaLabel="Copiar dirección de correo electrónico"
                />
              </div>

              {/* Direct WhatsApp Username Card (OPSEC: Zero Phone Number Exposure) */}
              <div className="sketch-card p-4 bg-white flex items-center justify-between gap-3">
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-[#E6F4E2] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B] shrink-0">
                    <MessageSquareLock className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5F6B7A] flex items-center gap-1">
                      <span>{SITE_CONFIG.directHandlePlatform}</span>
                      <ShieldCheck className="w-3.5 h-3.5 text-[#2E7D32] shrink-0" />
                    </span>
                    <strong className="text-sm font-extrabold text-[#1E242B] font-mono block truncate">
                      {SITE_CONFIG.directHandle}
                    </strong>
                    <span className="text-[11px] text-[#5F6B7A] font-medium block">
                      Alias directo OPSEC (sin exposición telefónica)
                    </span>
                  </div>
                </div>

                <CopyValueButton
                  value={SITE_CONFIG.directHandle}
                  label="Copiar alias"
                  copiedLabel="¡Copiado!"
                  ariaLabel="Copiar usuario de contacto directo @Kairos_05mr"
                />
              </div>

              {/* LinkedIn */}
              <a
                href={SITE_CONFIG.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-card sketch-card-hover p-4 bg-white flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-[#E0F4FC] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B] shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5F6B7A] block">
                      LinkedIn Profesional
                    </span>
                    <strong className="text-sm font-extrabold text-[#1E242B] truncate block">
                      linkedin.com/in/paulomezaupc
                    </strong>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#1E242B] shrink-0" />
              </a>

              {/* GitHub */}
              <a
                href={SITE_CONFIG.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="sketch-card sketch-card-hover p-4 bg-white flex items-center justify-between gap-3"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-11 h-11 rounded-xl bg-[#F4F5F7] border-2 border-[#1E242B] flex items-center justify-center text-[#1E242B] shrink-0">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div className="min-w-0">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#5F6B7A] block">
                      Repositorios &amp; Código
                    </span>
                    <strong className="text-sm font-extrabold text-[#1E242B] truncate block">
                      github.com/paulmr2704
                    </strong>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-[#1E242B] shrink-0" />
              </a>
            </div>
          </div>

          {/* Right Column: Hardened Contact Form */}
          <div className="lg:col-span-7">
            <ContactFormIsland />
          </div>
        </div>
      </div>
    </section>
  );
}
