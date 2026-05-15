"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  {
    number: "01",
    icon: "⬡",
    title: "Desarrollo Web",
    description: "Apps y sitios modernos, rápidos y responsivos con las mejores tecnologías del mercado.",
    accent: false,
  },
  {
    number: "02",
    icon: "◈",
    title: "Software a Medida",
    description: "Sistemas de gestión, automatizaciones y soluciones personalizadas para tu negocio.",
    accent: true,
  },
  {
    number: "03",
    icon: "◎",
    title: "Landing Pages",
    description: "Páginas de alto impacto optimizadas para SEO, velocidad y conversión.",
    accent: false,
  },
  {
    number: "04",
    icon: "◇",
    title: "Consultoría Tech",
    description: "Arquitectura, stack tecnológico, decisiones técnicas y roadmap de producto.",
    accent: false,
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ServicesPreview() {
  return (
    <section className="py-28 px-6 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <p className="text-xs font-semibold tracking-widest text-accent uppercase mb-4">
            Servicios
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-text-primary leading-tight">
            Creamos soluciones{" "}
            <em className="not-italic text-gradient">que importan.</em>
          </h2>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={cardVariants}
              className="relative p-7 rounded-2xl border bg-bg-card border-border-subtle card-hover cursor-default"
            >
              <div className="flex items-start justify-between mb-6">
                <span className="text-sm font-mono font-semibold text-text-secondary/50">
                  {service.number}
                </span>
                <span className="text-2xl leading-none text-accent/60">
                  {service.icon}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Link to all services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex justify-start"
        >
          <Link
            href="/servicios"
            className="group flex items-center gap-2 text-sm font-semibold text-text-secondary hover:text-accent transition-colors duration-200"
          >
            Ver todos los servicios
            <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
