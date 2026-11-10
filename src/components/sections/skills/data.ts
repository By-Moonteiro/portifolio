import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiNestjs,
  SiPrisma,
  SiPostgresql,
  SiSwagger,
  SiJsonwebtokens,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiShadcnui,
  SiDocker,
  SiRender,
  SiVercel,
  SiGit,
  SiVitest,
  SiGithubcopilot,
  SiClaude,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export interface Skill {
  name: string;
  icon: IconType;
}

export interface SkillGroup {
  key: "backend" | "frontend" | "infra" | "tools";
  skills: Skill[];
}

export const GROUPS: SkillGroup[] = [
  {
    key: "backend",
    skills: [
      { name: "TypeScript", icon: SiTypescript },
      { name: "NestJS", icon: SiNestjs },
      { name: "Prisma", icon: SiPrisma },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Swagger", icon: SiSwagger },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    key: "frontend",
    skills: [
      { name: "React", icon: SiReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Tailwind", icon: SiTailwindcss },
      { name: "shadcn/ui", icon: SiShadcnui },
    ],
  },
  {
    key: "infra",
    skills: [
      { name: "Docker", icon: SiDocker },
      { name: "Render", icon: SiRender },
      { name: "Vercel", icon: SiVercel },
      { name: "Neon", icon: SiPostgresql },
    ],
  },
  {
    key: "tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "VS Code", icon: VscVscode },
      { name: "Vitest", icon: SiVitest },
      { name: "GitHub Copilot", icon: SiGithubcopilot },
      { name: "Claude", icon: SiClaude },
    ],
  },
];
