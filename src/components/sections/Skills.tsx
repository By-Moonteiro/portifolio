"use client";

import {
  SiTypescript, SiJavascript, SiNestjs, SiNodedotjs,
  SiFastify, SiPrisma, SiReact, SiNextdotjs, SiTailwindcss,
  SiPostgresql, SiDocker, SiGithubcopilot, SiOpenai,
} from "react-icons/si";
import { RiOpenaiFill } from "react-icons/ri";
import { FaStar, FaRegStar } from "react-icons/fa";

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

const skills: SkillGroup[] = [
  {
    category: "Linguagens de Programação",
    skills: [
      { name: "TypeScript", icon: <SiTypescript />, stars: 4 },
      { name: "JavaScript", icon: <SiJavascript />, stars: 4 },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "NestJS", icon: <SiNestjs />, stars: 4 },
      { name: "Node.js", icon: <SiNodedotjs />, stars: 4 },
      { name: "Fastify", icon: <SiFastify />, stars: 3 },
      { name: "Prisma", icon: <SiPrisma />, stars: 4 },
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React", icon: <SiReact />, stars: 3 },
      { name: "Next.js", icon: <SiNextdotjs />, stars: 3 },
      { name: "Tailwind", icon: <SiTailwindcss />, stars: 3 },
    ],
  },
  {
    category: "Banco de Dados",
    skills: [
      { name: "PostgreSQL", icon: <SiPostgresql />, stars: 4 },
    ],
  },
  {
    category: "Infra",
    skills: [
      { name: "Docker", icon: <SiDocker />, stars: 3 },
    ],
  },
  {
  category: "AI / Ferramentas",
  skills: [
    { name: "GitHub Copilot", icon: <SiGithubcopilot />, stars: 3 },
    { name: "Claude", icon: <RiOpenaiFill />, stars: 4 },
    { name: "ChatGPT", icon: <SiOpenai />, stars: 3 },
  ],
},
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) =>
        i < count
          ? <FaStar key={i} size={10} style={{ color: STAR_COLOR }} />
          : <FaRegStar key={i} size={10} style={{ color: "var(--foreground-muted)", opacity: 0.3 }} />
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
          <span className="font-mono text-sm tracking-widest whitespace-nowrap" style={{ color: "var(--accent)" }}>
            ✦ SKILLS
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--accent)", opacity: 0.4 }} />
        </div>

        {/* Grid de cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {skills.map((group) => (
            <div
              key={group.category}
              className="flex flex-col gap-4 p-6 rounded-sm"
              style={{
                border: "1px solid var(--border)",
                backgroundColor: "rgba(255,255,255,0.02)",
              }}
            >
              {/* Nome da categoria */}
              <div className="flex flex-col gap-2">
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: ACCENT }}
                >
                  {group.category}
                </span>
                <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />
              </div>

              {/* Skills */}
              <div className="flex flex-col gap-3">
                {group.skills.map((skill) => (
                  <div key={skill.name} className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span style={{ color: ACCENT, fontSize: "0.9rem" }}>
                        {skill.icon}
                      </span>
                      <span
                        className="font-mono text-xs"
                        style={{ color: "var(--foreground-muted)" }}
                      >
                        {skill.name}
                      </span>
                    </div>
                    <Stars count={skill.stars} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}