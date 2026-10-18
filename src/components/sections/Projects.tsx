"use client";

import ProjectCard from "./projects/ProjectCard";
import type { Project } from "./projects/types";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

interface Props {
  title: string;
  viewDetails: string;
  repo: string;
  demo: string;
  doneLabel: string;
  description: string;
}

export default function Projects({
  title,
  viewDetails,
  repo,
  demo,
  doneLabel,
  description,
}: Props) {
  const projects: Project[] = [
    {
      name: "E-commerce API",
      slug: "ecommerce",
      description,
      status: "DONE",
      year: 2026,
      stack: [
        "NestJS",
        "TypeScript",
        "PostgreSQL",
        "Prisma",
        "Fastify",
        "Zod",
        "Docker",
      ],
      repo: "",
    },
  ];

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
              ✦ {title}
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
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
            viewport={{ once: true }}
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.name}
                project={project}
                viewDetails={viewDetails}
                repo={repo}
                demo={demo}
                doneLabel={doneLabel}
              />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}
