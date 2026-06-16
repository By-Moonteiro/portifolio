"use client";

import { useState } from "react";
import ProjectCard from "./projects/ProjectCard";
import ProjectModal from "./projects/ProjectModal";
import type { Project } from "./projects/types";
import { motion } from "framer-motion";

const FILTERS = [
  {
    label: "Todos",
    value: "all",
  },
  {
    label: "Fullstack",
    value: "fullstack",
  },
  {
    label: "Backend",
    value: "backend",
  },
] as const;

type Filter = (typeof FILTERS)[number]["value"];

const projects: Project[] = [
  {
    name: "Astreon",
    type: "fullstack",
    slug: "astreon",
    description:
      "Gerenciador de fichas de treino pensado como produto real — multi-tenant, com histórico de evolução e estrutura que cresce junto com o usuário.",
    status: "WIP",
    year: 2026,
    stack: [
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "Docker",
      "React",
      "Tailwind",
    ],
    repo: "https://github.com/By-Moonteiro/astreon",
    deploy: "https://astreon.app/",
    details: {
      description:
        "Gerenciador de fichas de treino pensado como produto real — multi-tenant, com histórico de evolução e estrutura que cresce junto com o usuário.",
      problem: "Em breve.",
      solution: "Em breve.",
      impact: "Em breve.",
    },
  },
  {
    name: "Nebula",
    slug: "nebula",
    type: "other",
    description:
      "CLI para scaffold de projetos com templates opinados — pule o boilerplate, comece pelo que importa.",
    status: "WIP",
    year: 2026,
    stack: ["NestJS", "TypeScript", "Node", "Prisma", "JWT", "Fastify"],
    repo: "https://github.com/By-Moonteiro/nebula",
    details: {
      description:
        "CLI para scaffold de projetos com templates opinados — pule o boilerplate, comece pelo que importa.",
      problem: "Em breve.",
      solution: "Em breve.",
      impact: "Em breve.",
    },
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [filter, setFilter] = useState<Filter>("all");

  const filtered =
    filter === "all" ? projects : projects.filter((p) => p.type === filter);

  return (
    <>
      <section id="projetos" className="relative z-10 py-20 px-6">
        <div className="max-w-5xl mx-auto flex flex-col gap-12">
          {/* Header da seção */}
          <div className="flex items-center gap-4">
            <span
              className="font-mono text-sm tracking-widest whitespace-nowrap"
              style={{ color: "var(--accent)" }}
            >
              ✦ PROJETOS
            </span>
            <div
              className="flex-1 h-px"
              style={{ backgroundColor: "var(--accent)", opacity: 0.4 }}
            />
          </div>

          {/* Filters */}
          <div className="flex items-center gap-2 justify-center">
            {FILTERS.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className="font-mono text-xs px-4 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border:
                    f.value === filter
                      ? "1px solid var(--accent)"
                      : " 1px solid var(--border)",
                  color:
                    f.value === filter
                      ? "var(--accent)"
                      : "var(--foreground-muted)",
                  backgroundColor:
                    f.value === filter
                      ? "rgba(167,139,250,0.08)"
                      : "transparent",
                }}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            viewport={{ once: true }}
          >
            {filtered.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                onOpenModal={setSelectedProject}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </>
  );
}
