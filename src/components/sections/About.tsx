"use client";

import { motion, easeOut } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

type Segment = { text: string; highlight: boolean };

function highlight(text: string, keywords: string[]): Segment[] {
  const escaped = keywords.map((k) => k.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"));
  const regex = new RegExp(`(${escaped.join("|")})`, "gi");
  const parts = text.split(regex);

  return parts.map((part) => ({
    text: part,
    highlight: keywords.some((k) => k.toLowerCase() === part.toLowerCase()),
  }));
}

function Highlighted({ text, keywords }: { text: string; keywords: string[] }) {
  const segments = highlight(text, keywords);
  return (
    <>
      {segments.map((seg, i) =>
        seg.highlight ? (
          <span key={i} style={{ color: "var(--accent)", fontWeight: 500 }}>
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        ),
      )}
    </>
  );
}

export default function About() {
  const paragraphs: { text: string; keywords: string[] }[] = [
    {
      text: `Comecei a programar em outubro de 2025 e desde então mantenho consistência diária construindo projetos reais..`,
      keywords: ["outubro de 2025", "projetos reais"],
    },
    {
      text: "Hoje meu foco está em backend com Node.js, NestJS, PostgreSQL e Prisma, construindo APIs e produtos com arquitetura escalável. Paralelamente, evoluo no frontend com React, Next.js e Tailwind.",
      keywords: [
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "React",
        "Next.js",
        "Tailwind",
      ],
    },
    {
      text: "Meu objetivo é crescer como desenvolvedor backend ou full stack, fortalecendo base, arquitetura, integrações, testes e boas práticas de software.",
      keywords: [
        "backend",
        "full stack",
        "arquitetura",
        "integrações",
        "testes",
        "boas práticas",
      ],
    },
  ];

  return (
    <section id="sobre" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-sm tracking-widest whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            ✦ SOBRE
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
          />
        </div>

        {/* Texto */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          {paragraphs.map(({ text, keywords }, i) => (
            <motion.p
              variants={itemVariants}
              key={i}
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              <Highlighted text={text} keywords={keywords} />
            </motion.p>
          ))}
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="flex justify-center"
        >
          <div
            className="flex items-center gap-2 font-mono text-xs px-4 py-2 rounded-full"
            style={{
              border: "1px solid rgba(167,139,250,0.3)",
              color: "var(--accent)",
              backgroundColor: "rgba(167,139,250,0.05)",
            }}
          >
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
            Em construção — rumo ao primeiro trabalho na área
          </div>
        </motion.div>
      </div>
    </section>
  );
}
