"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const founders = [
  { initials: "EZ", name: "Ezequias", role: "Full-Stack Developer", skills: ["TypeScript", "React", "Next.js", "Node.js"] },
  { initials: "CO", name: "Co-Founder", role: "Full-Stack Developer", skills: ["Python", "PostgreSQL", "React", "DevOps"] },
];

const stats = [
  { value: "2", label: "Co-founders" },
  { value: "+10", label: "Proyectos" },
  { value: "100%", label: "Compromiso" },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.12 } } };
const itemVariants = { hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } } };

export default function NosotrosPage() {
  return (
    <div className="min-h-screen pt-24 pb-20 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-20">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-foreground/25 uppercase mb-4">Quiénes somos</p>
          <h1 className="font-serif text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-foreground leading-tight mb-6">
            Dos devs. <em className="text-foreground/40">Una visión.</em>
          </h1>
          <p className="text-foreground/35 text-lg leading-relaxed max-w-2xl">
            Somos un estudio boutique fundado por dos estudiantes de Ingeniería en Sistemas en Argentina.
            Combinamos conocimiento técnico sólido con una obsesión por construir cosas que realmente funcionan.
          </p>
        </motion.div>

        {/* Founder cards */}
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-20">
          {founders.map((founder) => (
            <motion.div key={founder.initials} variants={itemVariants} className="bg-bg-card border border-foreground/5 rounded-2xl p-8 hover:border-foreground/10 transition-colors duration-250">
              <div className="w-14 h-14 rounded-xl bg-foreground/5 border border-foreground/[0.08] flex items-center justify-center mb-6">
                <span className="font-serif text-lg font-normal text-foreground">{founder.initials}</span>
              </div>
              <h3 className="font-serif text-xl font-normal text-foreground mb-1">{founder.name}</h3>
              <p className="text-sm text-foreground/30 mb-5">{founder.role}</p>
              <div className="flex flex-wrap gap-2">
                {founder.skills.map((skill) => (
                  <span key={skill} className="text-xs font-medium px-3 py-1 rounded-full border border-foreground/[0.08] text-foreground/30 bg-foreground/[0.03]">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="grid grid-cols-3 gap-4 mb-20">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-bg-card border border-foreground/5 rounded-2xl p-6 text-center">
              <p className="font-serif text-[clamp(1.8rem,4vw,2.8rem)] font-normal text-foreground leading-none mb-2">{stat.value}</p>
              <p className="text-[10px] font-semibold tracking-widest text-foreground/25 uppercase">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Quote */}
        <motion.blockquote initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="relative border-l border-foreground/15 pl-8 py-4 mb-20">
          <p className="font-serif text-xl md:text-2xl font-normal text-foreground/60 leading-relaxed italic">
            &ldquo;Construimos con la misma obsesión por el detalle que ponemos en nuestro propio código.&rdquo;
          </p>
          <footer className="mt-4 text-sm text-foreground/25">— NovX Studio</footer>
        </motion.blockquote>

        {/* About text */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="bg-bg-card border border-foreground/5 rounded-2xl p-8 md:p-10 mb-16">
          <h2 className="font-serif text-2xl font-normal text-foreground mb-5">Por qué NovX</h2>
          <div className="space-y-4 text-foreground/35 text-sm leading-relaxed">
            <p>No somos una agencia anónima de 50 personas. Somos dos personas que ponen su nombre en cada línea de código que escriben. Eso significa que si hay un problema, lo resolvemos.</p>
            <p>Estudiamos Ingeniería en Sistemas porque nos importa entender los fundamentos. No solo &quot;hacer funcionar&quot; el código, sino entender por qué funciona y cómo hacerlo escalable.</p>
            <p>La &quot;X&quot; en NovX no es decorativa: representa lo desconocido, lo que todavía no existe, lo que vamos a construir juntos.</p>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center">
          <Link href="/contacto">
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-8 py-3.5 rounded-full transition-all duration-200 hover:scale-105">
              Hablemos de tu proyecto
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
