"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/ThemeToggle";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
];

export default function Navbar() {
  const [navOpacity, setNavOpacity] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const [heroVisible, setHeroVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setNavOpacity(Math.min(window.scrollY / 80, 1));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = document.getElementById("hero-title");
    if (!el) { setHeroVisible(false); return; }
    const observer = new IntersectionObserver(
      ([entry]) => setHeroVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          background: `hsl(var(--background) / ${navOpacity * 0.95})`,
          backdropFilter: `blur(${navOpacity * 24}px) saturate(180%)`,
          WebkitBackdropFilter: `blur(${navOpacity * 24}px) saturate(180%)`,
          borderBottom: `1px solid hsl(var(--border) / ${navOpacity * 0.5})`,
          transition: "background 120ms linear, border-color 120ms linear",
        }}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative">

          {/* Logo — DM Serif Display */}
          <Link href="/" className="group">
            <motion.span
              animate={{ opacity: heroVisible ? 0 : 1, y: heroVisible ? -4 : 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="font-serif text-2xl font-normal text-foreground tracking-tight leading-none inline-block"
            >
              N
            </motion.span>
          </Link>

          {/* Desktop links — centered absolutely */}
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 relative ${
                  pathname === link.href ? "text-foreground" : "text-foreground/40 hover:text-foreground"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute -bottom-1 left-0 right-0 h-px bg-foreground/60"
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Theme toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ThemeToggle />
            <Link href="/contacto">
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold px-5 py-2 rounded-full transition-all duration-200 hover:scale-105">
                Hablemos
              </button>
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            aria-label="Menu"
          >
            <motion.span animate={menuOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block w-5 h-px bg-foreground origin-center" />
            <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.15 }} className="block w-5 h-px bg-foreground" />
            <motion.span animate={menuOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }} transition={{ duration: 0.2 }} className="block w-5 h-px bg-foreground origin-center" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 pt-16 bg-background/95 backdrop-blur-md md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navLinks.map((link, i) => (
                <motion.div key={link.href} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link href={link.href} className={`text-2xl font-serif font-normal transition-colors ${pathname === link.href ? "text-foreground" : "text-foreground/40 hover:text-foreground"}`}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: navLinks.length * 0.07 }}>
                <ThemeToggle />
              </motion.div>
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: (navLinks.length + 1) * 0.07 }}>
                <Link href="/contacto">
                  <button className="bg-primary text-primary-foreground text-base font-semibold px-8 py-3 rounded-full mt-4">
                    Hablemos
                  </button>
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
