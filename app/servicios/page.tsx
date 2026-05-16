"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const services = [
  { number: "01", icon: "⬡", title: "Desarrollo Web", description: "Construimos sitios y aplicaciones web modernas, rápidas y responsivas. Desde portafolios hasta plataformas complejas con autenticación, bases de datos y APIs.", features: ["Next.js & React", "TypeScript strict", "Responsive & mobile-first", "SEO optimizado", "Deploy en Vercel"], cta: "Empezar un proyecto web" },
  { number: "02", icon: "◈", title: "Software a Medida", description: "Desarrollamos sistemas de gestión, automatizaciones de procesos y soluciones personalizadas que se adaptan exactamente a las necesidades de tu negocio.", features: ["Sistemas de gestión (CRM, ERP)", "Automatización de procesos", "APIs REST / GraphQL", "Bases de datos relacionales y NoSQL", "Integraciones con servicios externos"], cta: "Contarnos tu necesidad", accent: true },
  { number: "03", icon: "◎", title: "Landing Pages", description: "Páginas de alto impacto diseñadas para convertir. Velocidad, SEO y diseño cuidado para que tu producto o servicio tenga la vitrina que merece.", features: ["Lighthouse 90+", "Optimización de conversión (CRO)", "Animaciones y micro-interacciones", "A/B testing ready", "Analytics integrado"], cta: "Ver opciones de landing" },
  { number: "04", icon: "◇", title: "Consultoría Tech", description: "¿No sabés qué tecnología usar? ¿Querés revisar la arquitectura de tu proyecto? Te acompañamos en decisiones técnicas importantes con criterio y experiencia.", features: ["Elección de stack tecnológico", "Revisión de arquitectura", "Roadmap de producto", "Code review y auditoría", "Mentoring técnico"], cta: "Agendar una consulta" },
  { number: "05", icon: "✦", title: "Soluciones con IA", description: "Integramos inteligencia artificial en tu producto: chatbots, automatización con LLMs, análisis de datos y más usando las últimas APIs del mercado.", features: ["Chatbots con LLMs (GPT, Claude)", "RAG y bases de conocimiento", "Automatización con IA", "Análisis de datos con ML", "Integraciones con APIs de IA"], cta: "Explorar con IA" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const itemVariants = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

export default function ServiciosPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-foreground/25 uppercase mb-4">Lo que hacemos</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-foreground leading-tight mb-5">Servicios</h1>
          <p className="text-foreground/35 text-lg leading-relaxed max-w-xl">Construimos con las tecnologías correctas, sin sobre-ingenierizar. Cada proyecto tratado con la misma obsesión por el detalle.</p>
        </motion.div>

        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="space-y-4">
          {services.map((service) => (
            <motion.div
              key={service.number}
              variants={itemVariants}
              className="relative p-8 md:p-10 rounded-2xl border bg-bg-card border-foreground/5 hover:border-foreground/10 transition-all duration-250"
            >
              <div className="grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-10 items-start">
                <div className="flex md:flex-col items-center md:items-start gap-3">
                  <span className="text-sm font-mono text-foreground/20">{service.number}</span>
                  <span className="text-3xl text-foreground/20">{service.icon}</span>
                </div>
                <div>
                  <h2 className="font-serif text-2xl font-normal mb-3 text-foreground">{service.title}</h2>
                  <p className="text-sm leading-relaxed mb-5 text-foreground/35">{service.description}</p>
                  <ul className="flex flex-wrap gap-2">
                    {service.features.map((f) => (
                      <li key={f} className="text-xs font-medium px-3 py-1 rounded-full border border-foreground/[0.08] text-foreground/30 bg-foreground/[0.03]">{f}</li>
                    ))}
                  </ul>
                </div>
                <div className="md:self-center">
                  <Link href="/contacto">
                    <button className="text-xs font-semibold px-5 py-2.5 rounded-full border border-foreground/15 text-foreground/50 hover:border-foreground/40 hover:text-foreground transition-all duration-200 whitespace-nowrap hover:scale-105">
                      {service.cta}
                    </button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-20 text-center">
          <p className="text-foreground/25 mb-5 text-base">¿No encontrás lo que buscás? <span className="text-foreground/50">Hablemos igual.</span></p>
          <Link href="/contacto">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105">
              Contactanos
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
