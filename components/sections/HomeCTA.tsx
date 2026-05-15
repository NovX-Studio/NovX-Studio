"use client";

import { motion } from "framer-motion";

export default function HomeCTA() {
  return (
    <section className="relative py-32 px-6 overflow-hidden">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span className="font-serif font-normal text-[clamp(8rem,25vw,20rem)] text-black/[0.02] leading-none tracking-tighter">
          NovX
        </span>
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="text-[10px] font-semibold tracking-[0.3em] text-black/25 uppercase mb-8">
            ¿Listo para empezar?
          </p>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-normal text-black leading-tight mb-3">
            Tenés una idea?
          </h2>
          <h2 className="font-serif text-[clamp(2.8rem,7vw,5.5rem)] font-normal leading-tight mb-12">
            <em className="text-black/40">Hagámosla realidad.</em>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <a href="mailto:hola@novxstudio.dev">
            <button className="bg-black hover:bg-black/90 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              Escribinos
            </button>
          </a>
          <a href="https://wa.me/5491100000000" target="_blank" rel="noopener noreferrer">
            <button className="border border-black/20 hover:border-black/50 text-black/60 hover:text-black font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              WhatsApp
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
