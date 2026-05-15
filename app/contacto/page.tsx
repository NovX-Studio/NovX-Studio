"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const projectTypes = ["Desarrollo Web", "Software a Medida", "Landing Page", "Consultoría Tech", "Solución con IA", "Otro"];

export default function ContactoPage() {
  const [form, setForm] = useState({ name: "", email: "", projectType: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setSubmitted(true); };

  const inputClass = "w-full bg-bg-card border border-black/8 rounded-xl px-4 py-3 text-sm text-black placeholder:text-black/20 focus:outline-none focus:border-black/25 focus:ring-1 focus:ring-black/10 transition-all duration-200";

  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-16">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-black/25 uppercase mb-4">Contacto</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-black leading-tight mb-3">Tenés una idea?</h1>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal leading-tight mb-6">
            <em className="text-black/35">Hagámosla realidad.</em>
          </h2>
          <p className="text-black/30 text-lg max-w-lg">Contanos de qué se trata y te respondemos en menos de 24 horas.</p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-8">
          {/* Form */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-semibold text-black/25 uppercase tracking-wider mb-2">Nombre</label>
                    <input type="text" required placeholder="Tu nombre" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
                  </div>
                  <div>
                    <label className="block text-[10px] font-semibold text-black/25 uppercase tracking-wider mb-2">Email</label>
                    <input type="email" required placeholder="tu@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-black/25 uppercase tracking-wider mb-2">Tipo de proyecto</label>
                  <div className="flex flex-wrap gap-2">
                    {projectTypes.map((type) => (
                      <button type="button" key={type} onClick={() => setForm({ ...form, projectType: type })}
                        className={`text-xs font-medium px-4 py-2 rounded-full border transition-all duration-200 ${form.projectType === type ? "bg-black border-black text-white" : "border-black/10 text-black/35 hover:border-black/25 hover:text-black/60"}`}>
                        {type}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-black/25 uppercase tracking-wider mb-2">Mensaje</label>
                  <textarea required rows={5} placeholder="Contanos de tu proyecto, idea o consulta..." value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} />
                </div>

                <button type="submit" className="w-full bg-black hover:bg-black/90 text-white font-semibold text-sm py-4 rounded-full transition-all duration-200 hover:scale-[1.01]">
                  Enviar mensaje
                </button>
              </form>
            ) : (
              <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="bg-bg-card border border-black/5 rounded-2xl p-12 text-center">
                <div className="w-14 h-14 rounded-full bg-black/5 border border-black/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-black text-xl">✓</span>
                </div>
                <h3 className="font-serif text-2xl font-normal text-black mb-3">¡Mensaje enviado!</h3>
                <p className="text-black/30 text-sm leading-relaxed max-w-sm mx-auto">Te respondemos en menos de 24 horas.</p>
              </motion.div>
            )}
          </motion.div>

          {/* Sidebar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="space-y-4">
            <div className="bg-bg-card border border-black/5 rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest text-black/20 uppercase mb-4">Contacto directo</p>
              <div className="space-y-3">
                <a href="mailto:hola@novxstudio.dev" className="flex items-center gap-3 text-sm text-black/30 hover:text-black transition-colors duration-200">✉ hola@novxstudio.dev</a>
                <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-black/30 hover:text-black transition-colors duration-200">◈ WhatsApp</a>
              </div>
            </div>

            <div className="bg-bg-card border border-black/5 rounded-2xl p-6">
              <p className="text-[10px] font-semibold tracking-widest text-black/20 uppercase mb-4">Redes</p>
              <div className="space-y-3">
                <a href="https://github.com/novxstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-black/30 hover:text-black transition-colors duration-200">◎ GitHub</a>
                <a href="https://linkedin.com/company/novxstudio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm text-black/30 hover:text-black transition-colors duration-200">◎ LinkedIn</a>
              </div>
            </div>

            <div className="bg-black/5 border border-black/8 rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-1.5 h-1.5 rounded-full bg-black/60 animate-dot-pulse" />
                <p className="text-[10px] font-semibold text-black/40 uppercase tracking-wider">Disponibles</p>
              </div>
              <p className="text-sm text-black/25 leading-relaxed">Respondemos en <span className="text-black/50 font-medium">menos de 24 horas</span>.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
