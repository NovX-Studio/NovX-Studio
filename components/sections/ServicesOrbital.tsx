"use client";

import { motion } from "framer-motion";
import { Globe, Code2, LayoutTemplate, Lightbulb, BrainCircuit } from "lucide-react";
import dynamic from "next/dynamic";

const RadialOrbitalTimeline = dynamic(
  () => import("@/components/ui/radial-orbital-timeline"),
  { ssr: false }
);

const servicesData = [
  { id: 1, title: "Desarrollo Web", date: "Full-Stack", content: "Apps y sitios modernos con Next.js, React y TypeScript. Velocidad, SEO y código limpio.", category: "Web", icon: Globe, relatedIds: [2, 3], status: "completed" as const, energy: 95 },
  { id: 2, title: "Software a Medida", date: "Custom Dev", content: "Sistemas de gestión, automatizaciones y soluciones 100% personalizadas para tu negocio.", category: "Software", icon: Code2, relatedIds: [1, 5], status: "completed" as const, energy: 90 },
  { id: 3, title: "Landing Pages", date: "Marketing", content: "Páginas de alto impacto. Conversión, Lighthouse 90+ y diseño que convierte visitantes en clientes.", category: "Landing", icon: LayoutTemplate, relatedIds: [1, 4], status: "completed" as const, energy: 88 },
  { id: 4, title: "Consultoría Tech", date: "Advisory", content: "Arquitectura, stack tecnológico y roadmap. Te acompañamos en las decisiones técnicas clave.", category: "Consulting", icon: Lightbulb, relatedIds: [2, 3, 5], status: "in-progress" as const, energy: 78 },
  { id: 5, title: "Soluciones con IA", date: "AI/ML", content: "Chatbots, RAG, automatización con LLMs y análisis de datos con las APIs de IA más potentes.", category: "AI", icon: BrainCircuit, relatedIds: [2, 4], status: "in-progress" as const, energy: 85 },
];

export default function ServicesOrbital() {
  return (
    <section className="relative py-2 px-6 bg-bg-base overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-2"
        >
          <p className="text-[10px] font-semibold tracking-[0.25em] text-foreground/25 uppercase mb-4">Servicios</p>
          <h2 className="font-serif text-[clamp(2rem,5vw,3.5rem)] font-normal text-foreground leading-tight mb-3">
            Creamos soluciones <em className="text-foreground/40">que importan.</em>
          </h2>
          <p className="text-foreground/30 text-sm max-w-sm mx-auto">
            Hacé click en cada nodo para explorar. Los nodos conectados están relacionados.
          </p>
        </motion.div>

        <RadialOrbitalTimeline timelineData={servicesData} />
      </div>
    </section>
  );
}
