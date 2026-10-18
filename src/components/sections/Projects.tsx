"use client";

import { useState } from "react";
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
  filters: {
    all: string;
    fullstack: string;
    backend: string;
  };
  viewDetails: string;
  repo: string;
  demo: string;
  doneLabel: string;
  description: string;
}

export default function Projects({
  title,
  filters,
  viewDetails,
  repo,
  demo,
  doneLabel,
  description,
}: Props) {
  const [filter, setFilter] = useState<Filter>("all");

  const projects: Project[] = [
    {
      name: "E-commerce API",
      type: "backend",
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

  const FILTERS = [
    { label: filters.all, value: "all" },
    { label: filters.fullstack, value: "fullstack" },
    { label: filters.backend, value: "backend" },
  ] as const;

  type Filter = (typeof FILTERS)[number]["value"];

  const filtered =
    filter === "all" ? projects : projects.filter((project) => project.type === filter);

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

          {/* Filters */}
          <div className="flex items-center gap-2 justify-center">
            {FILTERS.map((item) => (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className="font-mono text-xs px-4 py-1.5 rounded-full transition-all duration-200"
                style={{
                  border:
                    item.value === filter
                      ? "1px solid var(--accent)"
                      : "1px solid var(--border)",
                  color:
                    item.value === filter
                      ? "var(--accent)"
                      : "var(--foreground-muted)",
                  backgroundColor:
                    item.value === filter
                      ? "rgba(167,139,250,0.08)"
                      : "transparent",
                }}
              >
                {item.label}
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
