"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const steps = [
  { number: "01", title: "Escuchamos", description: "Entendemos tu problema, tus objetivos y el contexto del negocio antes de escribir una sola línea de código. La claridad al inicio ahorra semanas al final.", tags: ["Discovery", "Brief", "Objetivos", "Scope"], icon: "○" },
  { number: "02", title: "Diseñamos", description: "Creamos prototipos, definimos la arquitectura técnica y planificamos el proyecto. Iteramos contigo hasta que el plan tenga exactamente lo que necesitás.", tags: ["Wireframes", "Arquitectura", "Stack", "Planning"], icon: "◎" },
  { number: "03", title: "Desarrollamos", description: "Construimos con tecnologías modernas, código limpio y feedback constante. Mostramos avances reales en cada etapa, no solo al final.", tags: ["Sprint", "Code review", "Testing", "Feedback"], icon: "◈", accent: true },
  { number: "04", title: "Entregamos", description: "Deploy, documentación, soporte y acompañamiento post-entrega. No desaparecemos cuando subimos el código.", tags: ["Deploy", "Docs", "Soporte", "Seguimiento"], icon: "◇" },
];

const techStack = ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "MongoDB", "Vercel", "Git", "Docker", "REST APIs", "Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Python", "PostgreSQL", "MongoDB", "Vercel", "Git", "Docker", "REST APIs"];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

export default function ProcesoPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6 overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-foreground/25 uppercase mb-4">Cómo trabajamos</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-foreground leading-tight mb-5">Nuestro proceso</h1>
          <p className="text-foreground/35 text-lg leading-relaxed max-w-xl">Sin sorpresas. Sin metodologías inventadas. Un proceso claro y honesto de principio a fin.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4 mb-24">
          {steps.map((step) => (
            <motion.div key={step.number} variants={itemVariants}
              className="relative p-7 md:p-9 rounded-2xl border bg-bg-card border-foreground/5 hover:border-foreground/10 transition-colors flex gap-6 md:gap-9 items-start">
              <div className="flex-shrink-0 w-11 h-11 rounded-full border border-foreground/10 bg-foreground/[0.03] flex items-center justify-center">
                <span className="font-mono text-xs font-semibold text-foreground/30">{step.number}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xl text-foreground/15">{step.icon}</span>
                  <h2 className="font-serif text-xl font-normal text-foreground">{step.title}</h2>
                </div>
                <p className="text-sm leading-relaxed mb-5 text-foreground/35">{step.description}</p>
                <div className="flex flex-wrap gap-2">
                  {step.tags.map((tag) => (
                    <span key={tag} className="text-xs font-medium px-3 py-1 rounded-full border border-foreground/[0.08] text-foreground/25 bg-foreground/[0.03]">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Tech stack marquee */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-[10px] font-semibold tracking-widest text-foreground/15 uppercase mb-8 text-center">Stack tecnológico</p>
          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-bg-base to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-bg-base to-transparent z-10" />
            <div className="flex gap-8 animate-marquee">
              {techStack.map((tech, i) => (
                <span key={`${tech}-${i}`} className="flex-shrink-0 text-sm font-medium text-foreground/20 hover:text-foreground/50 transition-colors duration-200 cursor-default">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center bg-bg-card border border-foreground/5 rounded-2xl p-10">
          <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-3">¿Arrancamos?</h2>
          <p className="text-foreground/30 text-sm mb-7 max-w-sm mx-auto">El primer paso es una conversación. Sin presión, sin compromiso.</p>
          <Link href="/contacto">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105">
              Hablar con el equipo
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
