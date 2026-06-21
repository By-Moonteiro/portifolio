"use client";

import { useEffect, useState } from "react";
import { Home, FolderGit2, Zap, Briefcase, Mail, User } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";

const navLinks = [
  { label: "home", href: "#", icon: <Home size={16} /> },
  { label: "projetos", href: "#projetos", icon: <FolderGit2 size={16} /> },
  { label: "skills", href: "#skills", icon: <Zap size={16} /> },
  { label: "sobre", href: "#sobre", icon: <User size={16} /> },
  { label: "github", href: "#github", icon: <FaGithub size={16} /> },
  { label: "experiência", href: "#experiencia", icon: <Briefcase size={16} /> },
  { label: "contato", href: "#contato", icon: <Mail size={16} /> },
];

export default function Header() {
  const [active, setActive] = useState("#");
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);

      const atBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight;
      if (atBottom) {
        setActive("#contato");
        return;
      }

      if (window.scrollY < 100) {
        setActive("#");
        return;
      }
      const sections = [
        "projetos",
        "skills",
        "sobre",
        "github",
        "experiencia",
        "contato",
      ];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(`#${id}`);
          return;
        }
      }
      setActive("#");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(href.replace("#", ""));
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="fixed top-0 left-0 z-50 px-8 h-16 flex items-center">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick("#");
          }}
          className="font-mono text-sm font-bold"
          style={{ color: "var(--accent)" }}
        >
          WM<span style={{ animation: "blink 1s step-end infinite" }}>_</span>
        </a>
      </div>

      <div className="fixed top-0 right-0 z-50 px-8 h-16 flex items-center">
        <div
          className="flex items-center gap-1 px-2 py-1.5 rounded-full"
          style={{
            backgroundColor: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(167,139,250,0.15)",
          }}
        >
          {(["pt", "en"] as const).map((l) => (
            <button
              key={l}
              onClick={() => {
                const newPath = pathname.replace(`/${locale}`, `/${l}`);
                router.push(newPath);
              }}
              className="font-mono text-xs px-3 py-1.5 rounded-full transition-all duration-200"
              style={{
                color:
                  locale === l ? "var(--accent)" : "var(--foreground-muted)",
                backgroundColor:
                  locale === l ? "rgba(167,139,250,0.12)" : "transparent",
                textShadow:
                  locale === l ? "0 0 10px rgba(167,139,250,0.5)" : "none",
                boxShadow:
                  locale === l
                    ? "inset 0 0 0 1px rgba(167,139,250,0.2)"
                    : "none",
              }}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* Nav pill desktop */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex">
        <nav
          className="flex items-center gap-1 px-2 py-1.5 rounded-full transition-all duration-300"
          style={{
            backgroundColor: "rgba(10,10,10,0.8)",
            backdropFilter: "blur(16px)",
            border: "1px solid rgba(167,139,250,0.15)",
            boxShadow:
              "0 4px 30px rgba(0,0,0,0.4), 0 0 0 1px rgba(167,139,250,0.05)",
            opacity: scrolled ? 0.7 : 1,
          }}
        >
          {navLinks.map((link) => {
            const isActive = active === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="font-mono text-xs px-4 py-2 rounded-full transition-all duration-200"
                style={{
                  color: isActive ? "var(--accent)" : "var(--foreground-muted)",
                  backgroundColor: isActive
                    ? "rgba(167,139,250,0.12)"
                    : "transparent",
                  textShadow: isActive
                    ? "0 0 10px rgba(167,139,250,0.5)"
                    : "none",
                  boxShadow: isActive
                    ? "inset 0 0 0 1px rgba(167,139,250,0.2)"
                    : "none",
                }}
                onMouseEnter={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--foreground)";
                }}
                onMouseLeave={(e) => {
                  if (!isActive)
                    e.currentTarget.style.color = "var(--foreground-muted)";
                }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>

      {/* Botão flutuante mobile */}
      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: "easeInOut", delay: 0.6 }}
        className="fixed bottom-6 right-6 z-50 md:hidden w-14 h-14 rounded-full flex items-center justify-center transition-all duration-300"
        style={{
          backgroundColor: menuOpen
            ? "rgba(167,139,250,0.2)"
            : "rgba(10,10,10,0.9)",
          backdropFilter: "blur(12px)",
          border: "1px solid rgba(167,139,250,0.3)",
          boxShadow: menuOpen
            ? "0 0 20px rgba(167,139,250,0.3)"
            : "0 4px 20px rgba(0,0,0,0.4)",
          color: "var(--accent)",
        }}
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label="Menu"
      >
        <div
          className="flex flex-col gap-1.5 items-center justify-center transition-all duration-300"
          style={{ transform: menuOpen ? "rotate(45deg)" : "rotate(0deg)" }}
        >
          {menuOpen ? (
            <span style={{ fontSize: "1.2rem", lineHeight: 1 }}>×</span>
          ) : (
            <>
              <span
                className="block w-5 h-px"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span
                className="block w-5 h-px"
                style={{ backgroundColor: "var(--accent)" }}
              />
              <span
                className="block w-5 h-px"
                style={{ backgroundColor: "var(--accent)" }}
              />
            </>
          )}
        </div>
      </motion.button>

      {/* Menu mobile flutuante */}
      <div
        className="fixed bottom-24 right-6 z-40 md:hidden flex flex-col gap-2 transition-all duration-300"
        style={{
          opacity: menuOpen ? 1 : 0,
          pointerEvents: menuOpen ? "all" : "none",
          transform: menuOpen ? "translateY(0)" : "translateY(10px)",
        }}
      >
        {[...navLinks].reverse().map((link) => {
          const isActive = active === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="flex items-center gap-3 px-4 py-3 rounded-full font-mono text-sm transition-all duration-200"
              style={{
                backgroundColor: "rgba(10,10,10,0.95)",
                backdropFilter: "blur(12px)",
                border: isActive
                  ? "1px solid rgba(167,139,250,0.4)"
                  : "1px solid var(--border)",
                color: isActive ? "var(--accent)" : "var(--foreground-muted)",
                boxShadow: isActive
                  ? "0 0 12px rgba(167,139,250,0.2)"
                  : "0 4px 12px rgba(0,0,0,0.3)",
              }}
            >
              <span
                style={{
                  color: isActive ? "var(--accent)" : "var(--foreground-muted)",
                }}
              >
                {link.icon}
              </span>
              {link.label}
            </a>
          );
        })}
      </div>

      {/* Overlay mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-30 md:hidden"
          style={{
            backgroundColor: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(4px)",
          }}
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
