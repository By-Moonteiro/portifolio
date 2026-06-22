"use client";

import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Image from "next/image";
import { motion, easeOut } from "framer-motion";
import { useTranslations } from "next-intl";

const PHASE_COLORS: Record<string, string> = {
  accent: "var(--accent)",
  white: "#f0f0f0",
  cyan: "#67e8f9",
};

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: easeOut, delay },
});

const PREVIEW_SRCS = [
  "/projects/moonfit/preview-1.png",
  "/projects/moonfit/preview-2.png",
  "/projects/moonfit/preview-3.png",
  "/projects/moonfit/preview-4.png",
];

export default function AstreonPage() {
  const t = useTranslations("astreon");

  const previewImages = (t.raw("previewImages") as { alt: string }[]).map(
    (img, i) => ({ src: PREVIEW_SRCS[i], alt: img.alt }),
  );
  const problemItems = t.raw("problemItems") as string[];
  const howFlows = t.raw("howFlows") as { title: string; steps: string[] }[];
  const mvpEntities = t.raw("mvpEntities") as { name: string; desc: string }[];
  const postMvpEntities = t.raw("postMvpEntities") as {
    name: string;
    desc: string;
  }[];
  const roadmapPhases = t.raw("roadmapPhases") as {
    phase: string;
    color: string;
    items: string[];
  }[];

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
            {t("back")}
          </Link>
        </motion.div>

        <motion.div
          {...fadeUp(0.1)}
          className="w-full rounded-sm overflow-hidden"
          style={{ border: "1px solid var(--border)" }}
        >
          <Image
            src="/projetos/moonfit-icon.svg"
            alt="Astreon Banner"
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
              {t("status")} — 2026
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
            Astreon
          </motion.h1>

          <motion.p
            {...fadeUp(0.4)}
            className="text-sm leading-relaxed max-w-xl"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("description")}
          </motion.p>

          <motion.div {...fadeUp(0.5)} className="flex items-center gap-6">
            <a
              href="https://github.com/By-Moonteiro/astreon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
            >
              <FaGithub size={13} /> {t("repo")}
            </a>
            <a
              href="https://astreon.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
            >
              <ExternalLink size={13} /> {t("demo")}
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-2">
            {[
              "NestJS",
              "TypeScript",
              "PostgreSQL",
              "Prisma",
              "Docker",
              "JWT",
              "Swagger",
              "React",
              "Vite",
              "Tailwind",
              "TanStack Query",
              "Zod",
              "RHF",
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
        <Section title={t("preview")}>
          <p
            className="text-sm leading-relaxed"
            style={{ color: "var(--foreground-muted)" }}
          >
            {t("previewDesc")}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
            {previewImages.map((img) => (
              <div
                key={img.src}
                className="relative rounded-sm overflow-hidden"
                style={{
                  border: "1px solid var(--border)",
                  aspectRatio: "16/9",
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-all duration-500"
                  style={{ filter: "brightness(0.9)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.filter = "brightness(1)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.filter = "brightness(0.9)")
                  }
                />
                <div
                  className="absolute bottom-0 left-0 right-0 px-3 py-2"
                  style={{
                    backgroundColor: "rgba(10,10,10,0.7)",
                    backdropFilter: "blur(4px)",
                  }}
                >
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {img.alt}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Divider />
        <Section title={t("problem")}>
          <p
            style={{ color: "var(--foreground-muted)" }}
            className="text-sm leading-relaxed"
          >
            {t("problemDesc")}
          </p>
          <ul className="flex flex-col gap-2 mt-4">
            {problemItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 font-mono text-xs"
                style={{ color: "var(--foreground-muted)" }}
              >
                <span style={{ color: "var(--accent)" }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
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
        <Section title={t("how")}>
          <div className="flex flex-col gap-8">
            {howFlows.map((flow) => (
              <div key={flow.title} className="flex flex-col gap-3">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {flow.title}
                </span>
                <ul className="flex flex-col gap-2">
                  {flow.steps.map((step, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      <span style={{ color: "var(--accent)", opacity: 0.5 }}>
                        {String(i + 1).padStart(2, "0")}.
                      </span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />
        <Section title={t("arch")}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--accent)" }}
              >
                {t("mvp")}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {mvpEntities.map((entity) => (
                  <div
                    key={entity.name}
                    className="flex flex-col gap-1 p-4 rounded-sm"
                    style={{
                      border: "1px solid var(--border)",
                      backgroundColor: "rgba(255,255,255,0.02)",
                    }}
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: "#c4b5fd" }}
                    >
                      {entity.name}
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {entity.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <span
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--foreground-muted)" }}
              >
                {t("postMvp")}
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {postMvpEntities.map((entity) => (
                  <div
                    key={entity.name}
                    className="flex flex-col gap-1 p-4 rounded-sm"
                    style={{
                      border: "1px solid var(--border)",
                      backgroundColor: "rgba(255,255,255,0.01)",
                      opacity: 0.7,
                    }}
                  >
                    <span
                      className="font-mono text-xs font-bold"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {entity.name}
                    </span>
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      {entity.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Divider />
        <Section title={t("roadmap")}>
          <div className="flex flex-col gap-6">
            {roadmapPhases.map((phase) => (
              <div key={phase.phase} className="flex flex-col gap-3">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: PHASE_COLORS[phase.color] }}
                >
                  {phase.phase}
                </span>
                <ul className="flex flex-col gap-2">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 font-mono text-xs"
                      style={{ color: "var(--foreground-muted)" }}
                    >
                      <span
                        style={{
                          color: PHASE_COLORS[phase.color],
                          opacity: 0.6,
                        }}
                      >
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
            {t("back")}
          </Link>
          <a
            href="https://github.com/By-Moonteiro/astreon"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <FaGithub size={13} />
            {t("viewRepo")}
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
