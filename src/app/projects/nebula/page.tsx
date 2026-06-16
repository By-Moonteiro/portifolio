"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut, delay },
});

export default function NebulaPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        <motion.div {...fadeUp(0)} className="w-fit">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft size={13} />
            voltar ao portfólio
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="w-full rounded-sm overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src="/projetos/nebula-icon.png"
            alt="Nebula Banner"
            width={800}
            height={400}
            className="w-full h-auto rounded-sm"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
            <span
              className="font-mono text-xs flex items-center gap-1.5"
              style={{ color: "var(--accent)" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{
                  backgroundColor: "var(--accent)",
                  animation: "pulse 1.5s ease-in-out infinite",
                }}
              />
              WIP — 2026
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.3)}
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255,255,255,0.15)",
              lineHeight: 1,
            }}
          >
            Nebula
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--foreground-muted)" }}
          >
            CLI para scaffold de projetos com templates opinados — pule o
            boilerplate, comece pelo que importa.
          </motion.p>

          <motion.a
            {...fadeUp(0.5)}
            href="https://github.com/By-Moonteiro/nebula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200 w-fit"
            style={{ color: "var(--foreground-muted)" }}
          >
            <FaGithub size={13} />
            Repositório
          </motion.a>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2">
            {[
              "NestJS",
              "TypeScript",
              "Node.js",
              "Prisma",
              "JWT",
              "Fastify",
            ].map((tech) => (
              <span
                key={tech}
                className="font-mono text-xs px-2 py-0.5 rounded-sm"
                style={{
                  color: "#c4b5fd",
                  border: "1px solid rgba(167,139,250,0.4)",
                  boxShadow: "0 0 6px rgba(167,139,250,0.15)",
                }}
              >
                {tech}
              </span>
            ))}
          </motion.div>
        </div>

        <Divider />
        <Section title="O Problema">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            Todo projeto novo começa igual: configurar TypeScript, adicionar
            auth, conectar ORM, criar error handler global, organizar a
            estrutura de pastas. Horas de setup antes de escrever uma linha de
            código que realmente importa — e sempre do mesmo jeito.
          </p>
        </Section>

        <Divider />
        <Section title="O que é">
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            Nebula nasceu como ferramenta pessoal: um CLI interativo que gera
            projetos completos com um único comando, do jeito certo desde o
            início. Opinado por design — porque as melhores ferramentas têm
            ponto de vista.
          </p>
          <div
            className="mt-4 p-4 rounded-sm font-mono text-xs"
            style={{
              backgroundColor: "rgba(167,139,250,0.05)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#c4b5fd",
            }}
          >
            <span style={{ color: "var(--foreground-muted)" }}>$</span> nebula
            create my-project
          </div>
        </Section>

        <Divider />
        <Section title="O que gera">
          <div className="flex flex-col gap-6">
            {[
              {
                title: "Estrutura base",
                items: [
                  "Projeto NestJS com TypeScript configurado",
                  "Detecção automática de package manager (pnpm, npm ou yarn)",
                  "Error handler global já integrado",
                  "Organização de pastas opinada e escalável",
                ],
              },
              {
                title: "Autenticação completa",
                items: [
                  "Access Token + Refresh Token com refresh rotation",
                  "HttpOnly Cookies para segurança",
                  "Strategies, Guards, Interceptors e Decorators prontos",
                  "Sem precisar configurar nada — funciona no primeiro run",
                ],
              },
              {
                title: "Banco de dados",
                items: [
                  "Prisma ORM integrado e configurado",
                  "Schema base pronto para extensão",
                ],
              },
            ].map((group) => (
              <div key={group.title} className="flex flex-col gap-3">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {group.title}
                </span>
                <ul className="flex flex-col gap-2">
                  {group.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      <span style={{ color: "var(--accent)", opacity: 0.5 }}>
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />
        <Section title="Roadmap">
          <div className="flex flex-col gap-6">
            {[
              {
                phase: "v1 — Em desenvolvimento",
                color: "var(--accent)",
                items: [
                  "Publicação no npm",
                  "Swagger integrado automaticamente",
                  "Changelog automático via Conventional Commits",
                ],
              },
              {
                phase: "v2 — Planejado",
                color: "#f0f0f0",
                items: [
                  "Flags de linha de comando (--typescript, etc.)",
                  "nebula add — adicionar módulos em projetos existentes",
                  "Suporte a Fastify puro como alternativa ao NestJS",
                  "Templates de frontend (React + Vite, Next.js)",
                ],
              },
            ].map((phase) => (
              <div key={phase.phase} className="flex flex-col gap-3">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: phase.color }}
                >
                  {phase.phase}
                </span>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      <span style={{ color: phase.color, opacity: 0.6 }}>
                        ▸
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft size={13} />
            voltar ao portfólio
          </Link>
          <a
            href="https://github.com/By-Moonteiro/nebula"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <FaGithub size={13} />
            ver repositório
          </a>
        </div>
      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="flex flex-col gap-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <h2
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        ✦ {title}
      </h2>
      {children}
    </motion.div>
  );
}
