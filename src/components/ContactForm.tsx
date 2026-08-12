'use client';
import { motion } from 'framer-motion';

import { useState } from 'react';
import { Mail, Phone, ShieldCheck, Lock, Send, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

export default function ContactForm() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedback, setFeedback] = useState('');
  const [submitAttempts, setSubmitAttempts] = useState(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (submitAttempts >= 3) {
      setStatus('error');
      setFeedback('AMENAZA DE INUNDACIÓN DETECTADA (Anti-DDoS Triggered): Has superado el límite de 3 solicitudes por 30s.');
      return;
    }

    setSubmitAttempts(prev => prev + 1);
    setStatus('loading');
    setFeedback('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus('success');
        setFeedback(data.message);
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setFeedback(data.error || 'Ocurrió un error al enviar el mensaje.');
      }
    } catch {
      setStatus('error');
      setFeedback('Error de conexión con el servidor.');
    }
  };

  return (
    <section 
      id="contacto" 
      className="py-20 bg-[#060304] relative"
    >
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5 space-y-6">
            <span className="inline-flex items-center gap-1.5 font-mono text-xs text-[#FF1E42] bg-[#FF1E42]/10 border border-[#FF1E42]/30 px-3.5 py-1 rounded-full uppercase tracking-wider">
              CONECTEMOS
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-white">Hablemos de Proyectos e Innovación</h2>
            <p className="text-slate-400 text-sm leading-relaxed">
              Estoy abierto a oportunidades laborales, proyectos de Ciberseguridad/SOC, desarrollo de agentes de IA o consultorías UX centradas en el comportamiento humano.
            </p>

            <div className="space-y-4 pt-2">
              <a href="mailto:paulomeza2105@gmail.com" className="bento-glass p-4 flex items-center gap-4 hover:border-[#FF1E42] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF1E42]/10 flex items-center justify-center text-[#FF1E42] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">Correo Electrónico</span>
                  <strong className="text-white text-sm">paulomeza2105@gmail.com</strong>
                </div>
              </a>

              <a href="https://wa.me/51967393210" target="_blank" rel="noopener noreferrer" className="bento-glass p-4 flex items-center gap-4 hover:border-[#FF1E42] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF1E42]/10 flex items-center justify-center text-[#FF1E42] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">WhatsApp</span>
                  <strong className="text-white text-sm">@Kairos_yz</strong>
                </div>
              </a>

              <a href="https://www.linkedin.com/in/paulomezaupc/" target="_blank" rel="noopener noreferrer" className="bento-glass p-4 flex items-center gap-4 hover:border-[#FF1E42] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF1E42]/10 flex items-center justify-center text-[#FF1E42] shrink-0">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">LinkedIn</span>
                  <strong className="text-white text-sm">linkedin.com/in/paulomezaupc</strong>
                </div>
              </a>

              <a href="https://github.com/paulmr2704" target="_blank" rel="noopener noreferrer" className="bento-glass p-4 flex items-center gap-4 hover:border-[#FF1E42] transition-colors">
                <div className="w-12 h-12 rounded-full bg-[#FF1E42]/10 flex items-center justify-center text-[#FF1E42] shrink-0">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 block">GitHub</span>
                  <strong className="text-white text-sm">github.com/paulmr2704</strong>
                </div>
              </a>
            </div>
          </div>

          {/* Right Column: Protected Form connected to Neon Postgres */}
          <div className="lg:col-span-7">
            <div className="bento-glass p-8">
              
              <div className="flex items-center justify-between pb-4 mb-6 border-b border-white/10">
                <h3 className="text-xl font-bold text-white flex items-center gap-2">
                  <Mail className="w-5 h-5 text-[#FF1E42]" /> Contáctame
                </h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Tu Nombre Completo</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={e => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ej. Carlos Mendoza"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF1E42] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Tu Correo Electrónico</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="ejemplo@empresa.com"
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF1E42] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">Mensaje o Propuesta</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Escribe tu mensaje o propuesta aquí..."
                    className="w-full bg-white/[0.03] border border-white/10 rounded-lg px-4 py-2.5 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:border-[#FF1E42] transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-[#FF1E42] text-white py-3 rounded-lg font-semibold hover:bg-[#E6002E] transition-all flex items-center justify-center gap-2 shadow-none disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  {status === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                </button>

                {feedback && (
                  <div className={`p-4 rounded-lg text-sm flex items-start gap-2 ${
                    status === 'success' ? 'bg-emerald-500/10 border border-emerald-500/30 text-emerald-400' : 'bg-red-500/10 border border-red-500/30 text-red-400'
                  }`}>
                    {status === 'success' ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertTriangle className="w-5 h-5 shrink-0" />}
                    <span>{feedback}</span>
                  </div>
                )}
              </form>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
