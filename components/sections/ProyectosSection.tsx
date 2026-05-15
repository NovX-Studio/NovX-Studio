"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const proyectos = [
  { title: "PanelPro", tag: "Software a Medida", desc: "Sistema de gestión integral para pyme industrial. Panel de control en tiempo real con roles y permisos.", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1400&q=80", tech: ["Next.js", "PostgreSQL", "TypeScript"] },
  { title: "LaunchKit", tag: "Landing Page", desc: "Landing de lanzamiento para SaaS de productividad. Lighthouse 98. Conversión +34%.", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1400&q=80", tech: ["Next.js", "Tailwind", "Framer Motion"] },
  { title: "CodeBot", tag: "Solución con IA", desc: "Asistente con IA entrenado en la documentación del cliente. Responde queries técnicas 24/7.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1400&q=80", tech: ["Python", "LangChain", "Claude API"] },
];

export default function ProyectosSection() {
  return (
    <section className="bg-bg-base overflow-hidden">
      <ContainerScroll
        titleComponent={
          <div className="text-center px-6">
            <p className="text-[10px] font-semibold tracking-[0.25em] text-black/25 uppercase mb-4">Proyectos</p>
            <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-black leading-tight mb-4">
              Lo que <em className="text-black/40">construimos.</em>
            </h2>
            <p className="text-black/30 text-sm max-w-md mx-auto mb-6">
              Proyectos reales, código limpio, resultados medibles.
            </p>
            <Link href="/contacto">
              <button className="bg-black hover:bg-black/90 text-white font-semibold text-sm px-6 py-2.5 rounded-full transition-all duration-200 hover:scale-105">
                Empezar el tuyo
              </button>
            </Link>
          </div>
        }
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full p-4 overflow-auto">
          {proyectos.map((p, i) => (
            <motion.div
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="relative rounded-xl overflow-hidden border border-black/5 group cursor-default bg-bg-base"
            >
              <div className="relative h-36 overflow-hidden">
                <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-bg-base to-transparent" />
                <span className="absolute top-3 left-3 text-[10px] font-semibold tracking-widest text-black/60 uppercase bg-white/80 px-2 py-1 rounded-full border border-black/10">
                  {p.tag}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-serif text-base font-normal text-black mb-1">{p.title}</h3>
                <p className="text-black/35 text-xs leading-relaxed mb-3">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="text-[10px] font-mono text-black/25 bg-black/5 px-2 py-0.5 rounded-full border border-black/5">{t}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </ContainerScroll>
    </section>
  );
}
