"use client";

import { useEffect } from "react";
import { X } from "lucide-react";
import type { Project } from "./types";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = project ? "hidden" : "";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{
            backgroundColor: "rgba(0,0,0,0.75)",
            backdropFilter: "blur(6px)",
          }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-sm p-8 flex flex-col gap-6"
            style={{
              backgroundColor: "var(--background)",
              border: "1px solid rgba(167,139,250,0.2)",
              borderLeft: "3px solid var(--accent)",
              boxShadow: "0 0 40px rgba(167,139,250,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
          >
            {/* Fechar */}
            <button
              onClick={onClose}
              className="absolute top-5 right-5 transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.color = "var(--foreground)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.color = "var(--foreground-muted)")
              }
            >
              <X size={18} />
            </button>

            {/* Status + ano + nome */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-3">
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
              <h2
                className="font-mono text-lg font-bold tracking-wide uppercase"
                style={{ color: "var(--foreground)" }}
              >
                {project.name}
              </h2>
            </div>

            {/* Descrição */}
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground-muted)" }}
            >
              {project.details.description}
            </p>

            {/* Problema */}
            {project.details.problem && (
              <div className="flex flex-col gap-2">
                <h3
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Problema
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {project.details.problem}
                </p>
              </div>
            )}

            {/* Solução */}
            {project.details.solution && (
              <div className="flex flex-col gap-2">
                <h3
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Solução
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {project.details.solution}
                </p>
              </div>
            )}

            {/* Impacto */}
            {project.details.impact && (
              <div className="flex flex-col gap-2">
                <h3
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  Impacto
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {project.details.impact}
                </p>
              </div>
            )}

            {/* Stack */}
            <div
              className="flex flex-col gap-3 pt-4"
              style={{ borderTop: "1px solid var(--border)" }}
            >
              <h3
                className="font-mono text-xs tracking-widest uppercase"
                style={{ color: "var(--foreground-muted)" }}
              >
                Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-xs px-2 py-0.5 rounded-sm"
                    style={{
                      color: "#c4b5fd",
                      border: "1px solid rgba(167,139,250,0.4)",
                      boxShadow: "0 0 6px rgba(167,139,250,0.15)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
