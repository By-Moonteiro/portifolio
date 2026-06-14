"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
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

const paragraphs: { text: string; keywords: string[] }[] = [
  {
    text: "Comecei a programar de fato em outubro de 2025 — e desde então não parei. Em menos de um ano acumulei 644 contribuições, construí projetos reais com stack profissional e descobri que gosto do ato de programar em si, não só da perspectiva de emprego.",
    keywords: ["outubro de 2025", "644 contribuições", "stack profissional"],
  },
  {
    text: "Sou autodidata, ansioso, curioso e honesto ao ponto de me incomodar quando finjo saber algo que não sei. Prefiro deixar claro meu nível do que inflar um currículo. Ainda estou aprendendo e não tenho problema nenhum em dizer isso.",
    keywords: ["autodidata", "curioso", "honesto", "ainda estou aprendendo"],
  },
  {
    text: "Meu objetivo não é chegar a sênior ou ganhar bem. É ser útil pra um time, pra um projeto, pra quem precise de ajuda. E aprender com quem sabe mais do que eu enquanto isso.",
    keywords: ["útil pra um time", "aprender com quem sabe mais"],
  },
];

export default function About() {
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
