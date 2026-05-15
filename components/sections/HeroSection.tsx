"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const stack = ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "PYTHON"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Mesh gradient — blobs oscuros muy sutiles */}
      <div className="hero-mesh" aria-hidden="true">
        <div className="mesh-blob mesh-blob-1" />
        <div className="mesh-blob mesh-blob-2" />
        <div className="mesh-blob mesh-blob-3" />
        <div className="noise-overlay" />
      </div>

      {/* Fade-out bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-bg-base to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2.5 border border-black/10 rounded-full px-4 py-1.5 mb-14"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-black animate-dot-pulse" />
          <span className="text-[11px] font-semibold tracking-[0.2em] text-black/40 uppercase">
            Estudio de Desarrollo de Software
          </span>
        </motion.div>

        {/* Logo — DM Serif Display */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <h1 className="font-serif leading-none tracking-tight select-none">
            <span className="block text-[clamp(5rem,14vw,10.5rem)] text-black font-normal">
              NovX
            </span>
          </h1>
          <p className="font-display text-[clamp(0.55rem,1.5vw,0.85rem)] font-light tracking-[0.55em] text-black/30 uppercase mt-2">
            STUDIO
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="font-display text-[clamp(1rem,2.2vw,1.35rem)] text-black/40 font-light tracking-wide mb-12"
        >
          Code that connects.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 mb-16"
        >
          <Link href="/contacto">
            <button className="bg-black hover:bg-black/90 text-white font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              Empezar un proyecto
            </button>
          </Link>
          <Link href="/servicios">
            <button className="border border-black/20 hover:border-black/50 text-black/70 hover:text-black font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              Ver servicios
            </button>
          </Link>
        </motion.div>

        {/* Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex flex-wrap justify-center gap-x-4 gap-y-1"
        >
          {stack.map((tech, i) => (
            <span key={tech} className="text-[10px] font-mono tracking-widest text-black/20 uppercase">
              {tech}
              {i < stack.length - 1 && <span className="ml-4 text-black/10">·</span>}
            </span>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[9px] tracking-[0.3em] text-black/20 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-black/30 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
