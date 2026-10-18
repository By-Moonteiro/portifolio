"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { motion, easeOut } from "framer-motion";
import { useTranslations } from "next-intl";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut, delay },
});

const stack = [
  "NestJS",
  "TypeScript",
  "PostgreSQL",
  "Prisma",
  "Fastify",
  "Zod",
  "Argon2",
  "Docker Compose",
  "pnpm",
];

export default function EcommerceProjectPage() {
  const t = useTranslations("ecommerce");
  const featureItems = t.raw("featureItems") as string[];
  const endpointGroups = t.raw("endpointGroups") as {
    name: string;
    routes: string;
  }[];

  // Add the public URLs here after the repository and deployment are published.
  const repositoryUrl = "";
  const documentationUrl = "";

  return (
    <main className="relative z-10 min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">
        <motion.div {...fadeUp(0)} className="w-fit">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft size={13} /> {t("back")}
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="w-full rounded-sm overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src="/projetos/ecommerce-api-icon.svg"
            alt="E-commerce API"
            width={1200}
            height={420}
            className="w-full h-auto"
            priority
          />
        </motion.div>

        <div className="flex flex-col gap-6">
          <motion.div {...fadeUp(0.2)} className="flex items-center gap-3">
            <span
              className="font-mono text-xs flex items-center gap-1.5 px-2 py-1 rounded-sm"
              style={{
                color: "#86efac",
                border: "1px solid rgba(134,239,172,0.3)",
                backgroundColor: "rgba(134,239,172,0.06)",
              }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "#86efac" }}
              />
              ✓ {t("status")} — 2026
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
            E-commerce API
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("description")}
          </motion.p>

          {(repositoryUrl || documentationUrl) && (
            <motion.div {...fadeUp(0.5)} className="flex flex-wrap gap-5">
              {repositoryUrl && (
                <a
                  href={repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 font-mono text-xs"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  <FaGithub size={13} />
                  {t("repo")}
                </a>
              )}
              {documentationUrl && (
                <a
                  href={documentationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-xs"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {t("docs")}
                </a>
              )}
            </motion.div>
          )}

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2">
            {stack.map((tech) => (
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
        <Section title={t("problem")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("problemDesc")}
          </p>
        </Section>

        <Divider />
        <Section title={t("what")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("whatDesc")}
          </p>
        </Section>

        <Divider />
        <Section title={t("features")}>
          <ul className="flex flex-col gap-3">
            {featureItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-sm leading-relaxed"
                style={{ color: "var(--foreground-muted)" }}
              >
                <span style={{ color: "var(--accent)" }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />
        <Section title={t("endpoints")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("endpointsDesc")}
          </p>
          <div className="flex flex-col gap-3">
            {endpointGroups.map((group) => (
              <div
                key={group.name}
                className="p-4 rounded-sm flex flex-col gap-2"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "rgba(255,255,255,0.015)",
                }}
              >
                <h3
                  className="font-mono text-xs"
                  style={{ color: "var(--foreground)" }}
                >
                  {group.name}
                </h3>
                <p
                  className="font-mono text-xs leading-relaxed wrap-break-word"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {group.routes}
                </p>
              </div>
            ))}
          </div>
        </Section>

        <Divider />
        <Section title={t("rules")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("rulesDesc")}
          </p>
        </Section>

        <Divider />
        <Section title={t("architecture")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("architectureDesc")}
          </p>
          <div
            className="mt-4 p-4 rounded-sm font-mono text-xs leading-relaxed overflow-x-auto"
            style={{
              backgroundColor: "rgba(167,139,250,0.05)",
              border: "1px solid rgba(167,139,250,0.2)",
              color: "#c4b5fd",
            }}
          >
            {t("flow")}
          </div>
        </Section>

        <Divider />
        <Section title={t("limitations")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("limitationsDesc")}
          </p>
        </Section>

        <Divider />
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft size={13} />
            {t("back")}
          </Link>
          {repositoryUrl && (
            <a
              href={repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs"
              style={{ color: "var(--foreground-muted)" }}
            >
              <FaGithub size={13} />
              {t("repo")}
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

function Divider() {
  return (
    <div className="h-px w-full" style={{ backgroundColor: "var(--border)" }} />
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
    <section className="flex flex-col gap-4">
      <h2
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        ✦ {title}
      </h2>
      {children}
    </section>
  );
}
