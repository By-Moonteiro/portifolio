"use client";

import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TYPING_TEXT = "Software Developer";
const TYPING_SPEED = 80;


function useTypingEffect(text: string, speed: number) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(text.slice(0, i));
      if (i >= text.length) {
        clearInterval(interval);
        setDone(true);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return { displayed, done };
}

export default function Hero() {
  const { displayed, done } = useTypingEffect(TYPING_TEXT, TYPING_SPEED);

  return (
    <section className="relative z-10 min-h-screen flex items-center justify-center px-6">
      <div className="flex flex-col items-center text-center gap-5">

        {/* Nome */}
        <h1
          style={{
            fontFamily: "var(--font-syne)",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: 800,
            lineHeight: 1,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            textShadow: "0 0 20px rgba(255,255,255,0.15)",
          }}
        >
          Wagner Monteiro
        </h1>

        {/* Cargo */}
        <div
          className="flex flex-col gap-1 items-center"
          style={{ borderLeft: "2px solid var(--accent)", paddingLeft: "1rem" }}
        >
          <span
            className="font-mono text-sm tracking-wide flex items-center"
            style={{ color: "var(--accent)" }}
          >
            {displayed}
            <span
              style={{
                display: "inline-block",
                width: "2px",
                height: "1em",
                backgroundColor: "var(--accent)",
                marginLeft: "2px",
                verticalAlign: "middle",
                animation: done ? "blink 1s step-end infinite" : "none",
              }}
            />
          </span>
        </div>

        {/* Descrição curta */}
        <p
          className="font-mono text-sm max-w-md leading-relaxed"
          style={{ color: "var(--foreground-muted)" }}
        >
          Construindo soluções com Node no back, React no front e TypeScript em tudo.
        </p>

        {/* Botões */}
        <div className="flex items-center gap-4 mt-2">
          <button
            disabled
            className="font-mono text-sm px-6 py-3 rounded-sm cursor-not-allowed"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground-muted)",
              opacity: 0.4,
            }}
          >
            Baixar CV
          </button>

          <a
            href="#projetos"
            className="font-mono text-sm px-6 py-3 rounded-sm transition-all duration-200"
            style={{
              border: "1px solid var(--accent)",
              color: "var(--accent)",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = "var(--accent-glow)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(167,139,250,0.2)";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            Ver Projetos
          </a>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center items-center gap-6 mt-1">
          <a
            href="https://github.com/By-Moonteiro"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
          >
            <FaGithub size={14} />
            github.com/By-Moonteiro
          </a>
          <a
            href="https://www.linkedin.com/in/moonteiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
            onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
          >
            <FaLinkedin size={14} />
            linkedin.com/in/moonteiro
          </a>

        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ color: "var(--foreground-muted)" }}
      >
        <span className="font-mono text-xs tracking-widest uppercase">scroll</span>
        <div
          className="w-px h-10"
          style={{ background: "linear-gradient(to bottom, var(--foreground-muted), transparent)" }}
        />
      </div>
    </section>
  );
}