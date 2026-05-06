"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "home", href: "#" },
  { label: "projetos", href: "#projetos" },
  { label: "skills", href: "#skills" },
  { label: "experiência", href: "#experiencia" },
  { label: "contato", href: "#contato" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      if (window.scrollY < 100) { setActive("#"); return; }
      const sections = ["projetos", "skills", "experiencia", "contato"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`); return;
        }
      }
      setActive("#");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#") { window.scrollTo({ top: 0, behavior: "smooth" }); return; }
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
        style={{
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          backgroundColor: scrolled ? "rgba(10, 10, 10, 0.85)" : "transparent",
        }}
      >
        <div className="w-full px-8 h-16 flex items-center justify-between">

          {/* Logo esquerda */}
          <a
            href="#"
            onClick={e => { e.preventDefault(); handleNavClick("#"); }}
            className="font-mono text-sm font-bold shrink-0"
            style={{ color: "var(--accent)",  textShadow: "0 0 10px rgba(167,139,250,0.8), 0 0 20px rgba(167,139,250,0.4)", }}
          >
            WM<span style={{ animation: "blink 1s step-end infinite" }}>_</span>
          </a>

          {/* Nav centralizado no desktop */}
          <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                  className="font-mono text-xs px-3 py-1.5 rounded-sm transition-all duration-200"
                  style={{
                    color: isActive ? "#ffffff" : "var(--foreground-muted)",
                    textShadow: isActive ? "0 0 10px rgba(255,255,255,0.8), 0 0 20px rgba(255,255,255,0.4)" : "none",
                  }}
                  onMouseEnter={e => { if (!isActive) e.currentTarget.style.color = "var(--foreground)"; }}
                  onMouseLeave={e => { if (!isActive) e.currentTarget.style.color = "var(--foreground-muted)"; }}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Hamburger direita */}
          <button
            className="md:hidden transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
            onClick={() => setMenuOpen(prev => !prev)}
            aria-label="Menu"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>

          {/* Espaço invisível direita no desktop pra balancear */}
          <div className="hidden md:block w-16" />
        </div>
      </header>

      {/* Menu mobile — dropdown do topo */}
      <div
        className="fixed top-16 left-0 right-0 z-40 md:hidden transition-all duration-300 overflow-hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0px",
          borderBottom: menuOpen ? "1px solid var(--border)" : "none",
          backgroundColor: "rgba(10,10,10,0.97)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="flex flex-col px-8 py-6 gap-5">
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={e => { e.preventDefault(); handleNavClick(link.href); }}
                className="font-mono text-sm tracking-widest uppercase transition-all duration-200 w-fit"
                style={{
                  color: isActive ? "#ffffff" : "var(--foreground-muted)",
                  textShadow: isActive ? "0 0 10px rgba(255,255,255,0.6)" : "none",
                }}
              >
                {link.label}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
}