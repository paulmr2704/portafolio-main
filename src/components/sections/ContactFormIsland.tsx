"use client";

import { useState } from "react";
import { AlertTriangle, CheckCircle2, Lock, Send, ShieldCheck } from "lucide-react";
import { contactSubmissionSchema } from "@/lib/validations/contact.schema";
import TurnstileWidget from "@/components/ui/TurnstileWidget";

export default function ContactFormIsland() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    website: "",
  });
  const [turnstileToken, setTurnstileToken] = useState("");
  const [startedAt] = useState<number>(() => Date.now());
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle"
  );
  const [feedback, setFeedback] = useState("");

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setFeedback("");

    const validation = contactSubmissionSchema.safeParse({
      ...formData,
      startedAt,
      turnstileToken,
    });

    if (!validation.success) {
      setStatus("error");
      setFeedback(
        validation.error.issues[0]?.message ||
          "Revisa los datos ingresados antes de enviar."
      );
      return;
    }

    setStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(validation.data),
      });

      const data = (await response.json()) as {
        success?: boolean;
        message?: string;
        error?: string;
      };

      if (response.ok && data.success) {
        setStatus("success");
        setFeedback(
          data.message || "¡Mensaje enviado con éxito! Te responderé pronto."
        );
        setFormData({ name: "", email: "", message: "", website: "" });
        setTurnstileToken("");
      } else {
        setStatus("error");
        setFeedback(
          data.error || "No fue posible procesar el envío. Intenta nuevamente."
        );
      }
    } catch {
      setStatus("error");
      setFeedback(
        "Error de red al conectar con el servidor. Puedes escribirme directamente por correo."
      );
    }
  };

  return (
    <div className="sketch-card overflow-hidden">
      {/* Coral Window Header [o o o] */}
      <div className="bg-[#E06A4E] border-b-2 border-[#1E242B] px-5 py-3.5 flex flex-wrap items-center justify-between gap-2 text-white">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="w-3 h-3 rounded-full bg-[#F6CE3E] border-2 border-[#1E242B]" />
            <span className="w-3 h-3 rounded-full bg-[#84BA77] border-2 border-[#1E242B]" />
            <span className="w-3 h-3 rounded-full bg-white border-2 border-[#1E242B]" />
          </div>
          <h3 className="text-base sm:text-lg font-extrabold tracking-tight">
            Envíame un Mensaje Directo
          </h3>
        </div>

        <span className="inline-flex items-center gap-1 font-mono text-[11px] font-extrabold text-[#1E242B] bg-[#E6F4E2] border-2 border-[#1E242B] px-2.5 py-0.5 rounded-full">
          <Lock className="w-3 h-3 text-[#2E7D32]" />
          Endpoint Protegido
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate className="p-6 sm:p-8 bg-white space-y-5">
        <p className="text-xs font-medium text-[#5F6B7A] -mt-1">
          Respuesta habitual en menos de 24 horas hábiles.
        </p>

        {/* Invisible Anti-Bot Honeypot */}
        <div
          aria-hidden="true"
          className="absolute -left-[9999px] top-auto w-px h-px overflow-hidden"
        >
          <label htmlFor="contact-website-hp">Sitio web (no completar)</label>
          <input
            id="contact-website-hp"
            name="website"
            type="text"
            tabIndex={-1}
            autoComplete="off"
            value={formData.website}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, website: e.target.value }))
            }
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="contact-name"
              className="block text-xs font-extrabold text-[#1E242B] mb-1.5"
            >
              Nombre Completo <span className="text-[#E06A4E]">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              required
              minLength={2}
              maxLength={100}
              autoComplete="name"
              value={formData.name}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, name: e.target.value }))
              }
              placeholder="Ej. Andrea Salazar"
              className="w-full bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-4 py-3 text-sm font-medium text-[#1E242B] placeholder:text-[#5F6B7A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#F6CE3E] transition-all"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="block text-xs font-extrabold text-[#1E242B] mb-1.5"
            >
              Correo Corporativo o Personal <span className="text-[#E06A4E]">*</span>
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              required
              maxLength={150}
              autoComplete="email"
              value={formData.email}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, email: e.target.value }))
              }
              placeholder="nombre@empresa.com"
              className="w-full bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-4 py-3 text-sm font-medium text-[#1E242B] placeholder:text-[#5F6B7A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#F6CE3E] transition-all"
            />
          </div>
        </div>

        <div>
          <div className="flex items-center justify-between mb-1.5">
            <label
              htmlFor="contact-message"
              className="block text-xs font-extrabold text-[#1E242B]"
            >
              Mensaje, Vacante o Propuesta <span className="text-[#E06A4E]">*</span>
            </label>
            <span className="font-mono text-[11px] font-bold text-[#5F6B7A]">
              {formData.message.length}/2000
            </span>
          </div>
          <textarea
            id="contact-message"
            name="message"
            required
            minLength={10}
            maxLength={2000}
            rows={4}
            value={formData.message}
            onChange={(e) =>
              setFormData((prev) => ({ ...prev, message: e.target.value }))
            }
            placeholder="Cuéntame sobre el rol, proyecto de ciberseguridad/IA o colaboración..."
            className="w-full bg-[#F4F5F7] border-2 border-[#1E242B] rounded-xl px-4 py-3 text-sm font-medium text-[#1E242B] placeholder:text-[#5F6B7A] focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#F6CE3E] transition-all resize-y"
          />
        </div>

        {/* Verificación Cloudflare Turnstile */}
        <div className="pt-1">
          <div className="flex items-center gap-1.5 text-xs font-bold text-[#1E242B] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#84BA77]" />
            <span>Verificación de Seguridad Humana</span>
          </div>
          <TurnstileWidget
            onVerify={(token) => setTurnstileToken(token)}
            onExpire={() => setTurnstileToken("")}
            onError={() => setTurnstileToken("")}
          />
        </div>

        <button
          type="submit"
          disabled={status === "loading"}
          className="sketch-btn-coral w-full py-3.5 px-6 rounded-xl text-sm font-extrabold flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
        >
          <Send className="w-4 h-4" />
          <span>
            {status === "loading" ? "Validando y enviando..." : "Enviar Mensaje"}
          </span>
        </button>

        {feedback && (
          <div
            role="status"
            aria-live="polite"
            className={`p-4 rounded-xl text-xs sm:text-sm font-bold flex items-start gap-2.5 border-2 border-[#1E242B] ${
              status === "success"
                ? "bg-[#E6F4E2] text-[#1E242B]"
                : "bg-[#FEE2E2] text-[#991B1B]"
            }`}
          >
            {status === "success" ? (
              <CheckCircle2 className="w-4 h-4 text-[#2E7D32] shrink-0 mt-0.5" />
            ) : (
              <AlertTriangle className="w-4 h-4 text-[#991B1B] shrink-0 mt-0.5" />
            )}
            <span>{feedback}</span>
          </div>
        )}

        <p className="text-[11px] font-mono font-semibold text-[#5F6B7A] leading-relaxed">
          Seguridad activa: Validación Zod estricta · Rate Limiting en servidor
          (HTTP 429) · Almacenamiento parametrizado en Neon PostgreSQL.
        </p>
      </form>
    </div>
  );
}
