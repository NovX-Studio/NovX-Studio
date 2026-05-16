"use client";

import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import Link from "next/link";
import dynamic from "next/dynamic";

const SplineScene = dynamic(
  () => import("@/components/ui/splite").then((m) => ({ default: m.SplineScene })),
  { ssr: false }
);

export default function SplineSection() {
  return (
    <section className="py-10 px-6 bg-bg-base">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
        >
          <Card className="w-full h-[520px] md:h-[620px] bg-bg-card border-foreground/5 relative overflow-hidden rounded-2xl">

            <div className="flex h-full">
              {/* Left */}
              <div className="w-[45%] p-10 md:p-14 relative z-10 flex flex-col justify-center gap-5">
                <p className="text-[10px] font-semibold tracking-[0.25em] text-foreground/30 uppercase">
                  Tecnología 3D
                </p>
                <h2 className="font-serif text-4xl md:text-5xl font-normal text-foreground leading-tight">
                  Interfaces que <em className="text-foreground/40">sorprenden.</em>
                </h2>
                <p className="text-foreground/35 text-sm leading-relaxed max-w-xs">
                  Combinamos diseño de vanguardia con tecnología interactiva para crear
                  experiencias digitales que quedan en la memoria.
                </p>
                <div className="pt-2">
                  <Link href="/contacto">
                    <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-sm px-7 py-3 rounded-full transition-all duration-200 hover:scale-105">
                      Empezar un proyecto
                    </button>
                  </Link>
                </div>
              </div>

              {/* Right — Spline */}
              <div className="flex-1 relative">
                <SplineScene
                  scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
                  className="w-full h-full"
                />
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
