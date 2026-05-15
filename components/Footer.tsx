import Link from "next/link";

const navLinks = [
  { href: "/servicios", label: "Servicios" },
  { href: "/nosotros", label: "Nosotros" },
  { href: "/proceso", label: "Proceso" },
  { href: "/contacto", label: "Contacto" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-baseline gap-1.5 mb-4">
              <span className="font-serif text-xl font-normal text-white tracking-tight">NovX</span>
              <span className="font-display text-[9px] font-light tracking-[0.3em] text-white/25 uppercase">STUDIO</span>
            </Link>
            <p className="text-white/30 text-sm leading-relaxed max-w-xs">
              Estudio boutique de desarrollo de software. Construimos soluciones que importan.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-white/20 text-[10px] font-semibold tracking-widest uppercase mb-4">Navegación</p>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/35 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-white/20 text-[10px] font-semibold tracking-widest uppercase mb-4">Contacto</p>
            <ul className="space-y-2.5">
              <li>
                <a href="mailto:hola@novxstudio.dev" className="text-sm text-white/35 hover:text-white transition-colors duration-200">
                  hola@novxstudio.dev
                </a>
              </li>
              <li>
                <a href="https://github.com/novxstudio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-white transition-colors duration-200">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/company/novxstudio" target="_blank" rel="noopener noreferrer" className="text-sm text-white/35 hover:text-white transition-colors duration-200">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/20 text-xs">© 2026 NovX Studio. Hecho en Argentina.</p>
          <p className="text-white/15 text-xs font-display tracking-widest">CODE THAT CONNECTS.</p>
        </div>
      </div>
    </footer>
  );
}
