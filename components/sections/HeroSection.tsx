"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const MeshGradientBackground = dynamic(
  () => import("@/components/ui/mesh-gradient-background"),
  { ssr: false }
);

const stack = ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "NODE.JS", "PYTHON"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-6">
      {/* Shader mesh gradient background */}
      <div className="absolute inset-0 z-0" aria-hidden="true">
        <MeshGradientBackground className="absolute inset-0" speed={0.35} />
        <div className="noise-overlay" />
      </div>

      {/* Fade-out bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-40 z-[2] bg-gradient-to-t from-background to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">

        {/* Logo — DM Serif Display */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="mb-5"
        >
          <h1 className="font-serif leading-none tracking-tight select-none">
            <span id="hero-title" className="block text-[clamp(5rem,14vw,10.5rem)] text-foreground font-normal">
              Novx
            </span>
          </h1>
          <p className="font-display text-[clamp(0.55rem,1.5vw,0.85rem)] font-light tracking-[0.55em] text-foreground/60 uppercase mt-2">
            STUDIO
          </p>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.42 }}
          className="font-display text-[clamp(1rem,2.2vw,1.35rem)] text-foreground/40 font-light tracking-wide mb-12"
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
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              Empezar un proyecto
            </button>
          </Link>
          <Link href="/servicios">
            <button className="border border-foreground/30 hover:border-foreground/60 text-foreground/80 hover:text-foreground font-medium text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105 w-full sm:w-auto">
              Ver servicios
            </button>
          </Link>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 z-10"
      >
        <span className="text-[9px] tracking-[0.3em] text-foreground/40 uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-foreground/30 to-transparent animate-scroll-bounce" />
      </motion.div>
    </section>
  );
}
