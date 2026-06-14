"use client";

import {
  SiTypescript,
  SiNestjs,
  SiNodedotjs,
  SiFastify,
  SiPrisma,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGithubcopilot,
  SiGit,
  SiSwagger,
  SiRender,
  SiVercel,
  SiShadcnui,
  SiIntellijidea,
  SiSpring,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaStar, FaRegStar, FaJava } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { motion } from "framer-motion";

interface Skill {
  name: string;
  icon: React.ReactNode;
  stars: number;
}

interface SkillGroup {
  category: string;
  skills: Skill[];
}

const ACCENT = "#a78bfa";
const STAR_COLOR = "#a78bfa";
const LEARNING_COLOR = "#67e8f9";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const skills: SkillGroup[] = [
  {
    category: "Linguagens de Programação",
    skills: [{ name: "TypeScript", icon: <SiTypescript />, stars: 4 }],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS", icon: <SiNestjs />, stars: 4 },
      { name: "Node.js", icon: <SiNodedotjs />, stars: 4 },
      { name: "Fastify", icon: <SiFastify />, stars: 3 },
      { name: "Prisma", icon: <SiPrisma />, stars: 4 },
      { name: "Swagger", icon: <SiSwagger />, stars: 3 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, stars: 3 },
      { name: "Next.js", icon: <SiNextdotjs />, stars: 3 },
      { name: "Tailwind", icon: <SiTailwindcss />, stars: 3 },
      { name: "Shadcn/ui", icon: <SiShadcnui />, stars: 3 },
    ],
  },
  {
    category: "Banco de Dados",
    skills: [{ name: "PostgreSQL", icon: <SiPostgresql />, stars: 4 }],
  },
  {
    category: "Infra & Deploy",
    skills: [
      { name: "Docker", icon: <SiDocker />, stars: 3 },
      { name: "Git", icon: <SiGit />, stars: 4 },
      { name: "Render", icon: <SiRender />, stars: 3 },
      { name: "Vercel", icon: <SiVercel />, stars: 3 },
      { name: "Neon", icon: <SiPostgresql />, stars: 3 },
    ],
  },
  {
    category: "Ferramentas",
    skills: [
      { name: "GitHub Copilot", icon: <SiGithubcopilot />, stars: 3 },
      { name: "Claude", icon: <RiOpenaiFill />, stars: 4 },
      { name: "Visual Studio Code", icon: <VscVscode />, stars: 4 },
      { name: "IntelliJ IDEA", icon: <SiIntellijidea />, stars: 3 },
    ],
  },
  {
    category: "Aprendendo",
    skills: [
      { name: "Java", icon: <FaJava />, stars: 2 },
      { name: "Spring Boot", icon: <SiSpring />, stars: 1 },
    ],
  },
];

function Stars({
  count,
  learning = false,
}: {
  count: number;
  learning?: boolean;
}) {
  const color = learning ? LEARNING_COLOR : STAR_COLOR;
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        i < count ? (
          <FaStar key={i} size={10} style={{ color }} />
        ) : (
          <FaRegStar
            key={i}
            size={10}
            style={{ color: "var(--foreground-muted)", opacity: 0.3 }}
          />
        ),
      )}
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="flex items-center gap-4">
          <span
            className="font-mono text-sm tracking-widest whitespace-nowrap"
            style={{ color: "var(--accent)" }}
          >
            ✦ SKILLS
          </span>
          <div
            className="flex-1 h-px"
            style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
          />
        </div>

        {/* Grid de cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {skills.map((group) => {
            const isLearning = group.category === "Aprendendo";
            return (
              <motion.div
                variants={cardVariants}
                key={group.category}
                className="flex flex-col gap-4 p-6 rounded-sm"
                style={{
                  border: `1px solid ${isLearning ? "rgba(103,232,249,0.2)" : "var(--border)"}`,
                  backgroundColor: isLearning
                    ? "rgba(103,232,249,0.03)"
                    : "rgba(255,255,255,0.02)",
                }}
              >
                {/* Nome da categoria */}
                <div className="flex flex-col gap-2">
                  <span
                    className="font-mono text-xs tracking-widest uppercase"
                    style={{ color: isLearning ? LEARNING_COLOR : ACCENT }}
                  >
                    {group.category}
                  </span>
                  {isLearning && (
                    <span
                      className="font-mono text-xs"
                      style={{ color: "var(--foreground-muted)", opacity: 0.6 }}
                    >
                      em progresso ativo
                    </span>
                  )}
                  <div
                    className="w-full h-px"
                    style={{ backgroundColor: "var(--border)" }}
                  />
                </div>

                {/* Skills */}
                <div className="flex flex-col gap-3">
                  {group.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center justify-between gap-2"
                    >
                      <div className="flex items-center gap-2">
                        <span
                          style={{
                            color: isLearning ? LEARNING_COLOR : ACCENT,
                            fontSize: "0.9rem",
                          }}
                        >
                          {skill.icon}
                        </span>
                        <span
                          className="font-mono text-xs"
                          style={{ color: "var(--foreground-muted)" }}
                        >
                          {skill.name}
                        </span>
                      </div>
                      <Stars count={skill.stars} learning={isLearning} />
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
