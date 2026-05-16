"use client"

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contato" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex items-center gap-4">
          {<span className="font-mono text-sm tracking-widest whitespace-nowrap" style={{ color: "var(--accent)" }}>
            ✦ CONTATO 
          </span>}
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--accent)", opacity: 0.4 }} />
        </div>

        <div className="flex flex-col gap-8 max-w-lg">
          <div className="flex flex-col gap-2">
            <h2
              style={{
                fontFamily: "var(--font-syne)",
                fontSize: "clamp(1.8rem, 4vw, 2.5rem)",
                fontWeight: 800,
                color: "#ffffff",
                textShadow: "0 0 20px rgba(255,255,255,0.15)",
                lineHeight: 1.1,
              }}
            >
              Vamos conversar?
            </h2>
            <p className="font-mono text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
              Aberto a oportunidades e colaborações.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href="mailto:moonteiro.dev@gmail.com"
              className="flex items-center gap-3 font-mono text-sm transition-all duration-200 w-fit"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
            >
              <Mail size={15} style={{ color: "var(--accent)" }} />
              moonteiro.dev@gmail.com
            </a>

            <a
              href="https://github.com/By-Moonteiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm transition-all duration-200 w-fit"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
            >
              <FaGithub size={15} style={{ color: "var(--accent)" }} />
              github.com/By-Moonteiro
            </a>

            <a
              href="https://www.linkedin.com/in/moonteiro/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-sm transition-all duration-200 w-fit"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
            >
              <FaLinkedin size={15} style={{ color: "var(--accent)" }} />
              linkedin.com/in/moonteiro
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}