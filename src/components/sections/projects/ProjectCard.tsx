"use client";

import { FaGithub } from "react-icons/fa";
import { ExternalLink } from "lucide-react";
import type { Project } from "./types";
import Link from "next/link";
import { motion } from "framer-motion";

interface Props {
  project: Project;
  onOpenModal: (project: Project) => void;
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", staggerChildren: 0.25 },
  },
};

export default function ProjectCard({ project, onOpenModal }: Props) {
  return (
    <motion.div
      variants={cardVariants}
      className="flex flex-col gap-4 p-6 rounded-sm transition-all duration-300 cursor-default"
      style={{
        border: "1px solid var(--border)",
        borderLeft: "2px solid var(--accent)",
        backgroundColor: "rgba(255,255,255,0.02)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.02)";
        e.currentTarget.style.backgroundColor = "rgba(167,139,250,0.04)";
        e.currentTarget.style.boxShadow = "0 0 30px rgba(167,139,250,0.06)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.02)";
        e.currentTarget.style.boxShadow = "none";
      }}
    >
      {/* Header: status esquerda, ano direita */}
      <div className="flex items-center justify-between">
        <span
          className="font-mono text-xs flex items-center gap-1.5"
          style={{
            color:
              project.status === "WIP"
                ? "var(--accent)"
                : "var(--foreground-muted)",
          }}
        >
          {project.status === "WIP" && (
            <span
              className="inline-block w-1.5 h-1.5 rounded-full"
              style={{
                backgroundColor: "var(--accent)",
                animation: "pulse 1.5s ease-in-out infinite",
              }}
            />
          )}
          {project.status === "WIP" ? "● WIP" : "✓ DONE"}
        </span>
        <span
          className="font-mono text-xs"
          style={{ color: "var(--foreground-muted)" }}
        >
          {project.year}
        </span>
      </div>

      {/* Nome */}
      <h3
        className="font-mono font-bold tracking-wide uppercase"
        style={{ color: "var(--foreground)", fontSize: "1rem" }}
      >
        {project.name}
      </h3>

      {/* Descrição */}
      <p
        className="text-sm leading-relaxed"
        style={{ color: "var(--foreground-muted)" }}
      >
        {project.description}
      </p>

      {/* Stack tags */}
      <div className="flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <span
            key={tech}
            className="font-mono text-xs px-2 py-0.5 rounded-sm transition-all duration-200"
            style={{
              color: "#c4b5fd",
              border: "1px solid rgba(167,139,250,0.4)",
              boxShadow: "0 0 6px rgba(167,139,250,0.15)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.8)";
              e.currentTarget.style.boxShadow =
                "0 0 12px rgba(167,139,250,0.35)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(167,139,250,0.4)";
              e.currentTarget.style.boxShadow =
                "0 0 6px rgba(167,139,250,0.15)";
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Footer */}
      <div
        className="flex items-center justify-between mt-auto pt-2"
        style={{ borderTop: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-4">
          <a
            href={project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--foreground)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = "var(--foreground-muted)")
            }
          >
            <FaGithub size={13} /> Repo
          </a>
          {project.deploy && (
            <a
              href={project.deploy}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--foreground-muted)")
              }
            >
              <ExternalLink size={13} /> Demo
            </a>
          )}
        </div>

        {project.slug ? (
          <Link
            href={`/projects/${project.slug}`}
            className="font-mono text-xs transition-all duration-200"
            style={{ color: "var(--accent)" }}
          >
            ▶ Ver detalhes
          </Link>
        ) : (
          <button
            onClick={() => onOpenModal(project)}
            className="font-mono text-xs transition-all duration-200"
            style={{
              color: "var(--accent)",
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            ▶ Ver detalhes
          </button>
        )}
      </div>
    </motion.div>
  );
}
