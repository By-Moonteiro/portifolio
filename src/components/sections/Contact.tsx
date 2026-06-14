"use client";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contato" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-sm tracking-widest whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            ✦ CONTATO
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
          />
        </div>

        <div className="flex flex-col gap-8 max-w-lg">
          <motion.div
            className="flex flex-col gap-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.h2
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
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
            </motion.h2>
            <motion.p
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, ease: "easeOut" },
                },
              }}
              className="font-mono text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              Aberto a oportunidades e colaborações.
            </motion.p>
          </motion.div>

          <motion.div
            className="flex flex-col gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.1 } },
            }}
          >
            {[
              {
                href: "mailto:moonteiro.dev@gmail.com",
                icon: <Mail size={15} style={{ color: "var(--accent)" }} />,
                label: "moonteiro.dev@gmail.com",
              },
              {
                href: "https://github.com/By-Moonteiro",
                icon: <FaGithub size={15} style={{ color: "var(--accent)" }} />,
                label: "github.com/By-Moonteiro",
                external: true,
              },
              {
                href: "https://www.linkedin.com/in/moonteiro/",
                icon: (
                  <FaLinkedin size={15} style={{ color: "var(--accent)" }} />
                ),
                label: "linkedin.com/in/moonteiro",
                external: true,
              },
            ].map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                className="flex items-center gap-3 font-mono text-sm transition-all duration-200 w-fit"
                style={{ color: "var(--foreground-muted)" }}
                variants={{
                  hidden: { opacity: 0, x: -12 },
                  visible: {
                    opacity: 1,
                    x: 0,
                    transition: { duration: 0.4, ease: "easeOut" },
                  },
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.color = "var(--foreground)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.color = "var(--foreground-muted)")
                }
              >
                {link.icon}
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
