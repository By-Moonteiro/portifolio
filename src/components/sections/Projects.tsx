"use client";

import { useState } from "react";
import ProjectCard from "./projects/ProjectCard";
import ProjectModal from "./projects/ProjectModal";
import type { Project } from "./projects/types";
import { motion } from "framer-motion";

const projects: Project[] = [
  {
    name: "Astreon",
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

          {/* Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
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
