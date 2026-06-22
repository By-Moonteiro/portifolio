"use client";

import { motion, easeOut } from "framer-motion";

interface Courses {
  name: string;
  institution: string;
  period: string;
  done: boolean;
}

const certificationsList: Courses[] = [];

interface ExperienceProps {
  title: string;
  history: string;
  soon: string;
  firstJob: string;
  historyPlaceholder: string;
  education: string;
  inProgress: string;
  certifications: string;
  degree: string;
  period: string;
}

export default function Experience({
  title,
  history,
  soon,
  firstJob,
  historyPlaceholder,
  education,
  inProgress,
  certifications,
  degree,
  period,
}: ExperienceProps) {
  const CoursesInProgress: Courses[] = [
    {
      name: "HTML e CSS para Iniciantes",
      institution: "Origamid",
      period: "Em andamento",
      done: false,
    },
    {
      name: "React Completo",
      institution: "Origamid",
      period: "Em andamento",
      done: false,
    },
    {
      name: "Tailwind CSS",
      institution: "Origamid",
      period: "Em andamento",
      done: false,
    },
  ];

  const educationList = [
    {
      degree: degree,
      institution: "UNINTER",
      period: period,
      current: true,
    },
  ];
  return (
    <section id="experiencia" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">
        {/* Header */}
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

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.2 } },
          }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          {/* Esquerda — Histórico */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="flex flex-col gap-6"
          >
            <span
              className="font-mono text-xs tracking-widest uppercase font-bold"
              style={{
                color: "var(--accent)",
                textShadow: "0 0 10px rgba(167,139,250,0.5)",
              }}
            >
              {history}
            </span>

            <div className="flex gap-4">
              {/* Timeline */}
              <div className="flex flex-col items-center gap-1 pt-1">
                <div
                  className="w-3 h-3 rounded-sm shrink-0"
                  style={{
                    backgroundColor: "var(--foreground-muted)",
                    opacity: 0.3,
                  }}
                />
                <div
                  className="w-px flex-1"
                  style={{ backgroundColor: "var(--border)" }}
                />
              </div>

              {/* Card placeholder */}
              <div
                className="flex-1 flex flex-col gap-2 p-5 rounded-sm"
                style={{
                  border: "1px solid var(--border)",
                  borderLeft: "2px solid var(--accent)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  opacity: 0.5,
                }}
              >
                <div className="flex items-start justify-between gap-2">
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {soon}
                  </span>
                </div>
                <span
                  className="font-mono text-xs"
                  style={{ color: "var(--accent)" }}
                >
                  {firstJob}
                </span>
                <p
                  className="text-xs leading-relaxed"
                  style={{ color: "var(--foreground-muted)" }}
                >
                  {historyPlaceholder}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Direita — Formação + Certificações */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: {
                opacity: 1,
                y: 0,
                transition: { duration: 0.5, ease: easeOut },
              },
            }}
            className="flex flex-col gap-8"
          >
            {/* Formação */}
            <div className="flex flex-col gap-4">
              <span
                className="font-mono text-xs tracking-widest uppercase font-bold"
                style={{
                  color: "#f0f0f0",
                  textShadow: "0 0 10px rgba(255,255,255,0.5)",
                }}
              >
                {education}
              </span>

              {educationList.map((edu) => (
                <div
                  key={edu.degree}
                  className="flex flex-col gap-1 p-5 rounded-sm transition-all duration-200"
                  style={{
                    border: "1px solid var(--border)",
                    borderLeft: "2px solid #f0f0f0",
                    backgroundColor: "rgba(255,255,255,0.02)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.04)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "var(--border)";
                    e.currentTarget.style.backgroundColor =
                      "rgba(255,255,255,0.02)";
                  }}
                >
                  <span
                    className="font-mono text-sm font-bold"
                    style={{ color: "var(--foreground)" }}
                  >
                    {edu.degree}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "#f0f0f0", opacity: 0.7 }}
                  >
                    {edu.institution}
                  </span>
                  <span
                    className="font-mono text-xs"
                    style={{ color: "var(--foreground-muted)" }}
                  >
                    {edu.period}
                  </span>
                </div>
              ))}
            </div>

            {/* Cursos em Andamento */}
            {CoursesInProgress.length > 0 && (
              <div className="flex flex-col gap-4">
                <span
                  className="font-mono text-xs tracking-widest uppercase font-bold"
                  style={{
                    color: "#67e8f9",
                    textShadow: "0 0 10px rgba(103,232,249,0.5)",
                  }}
                >
                  {inProgress}
                </span>

                <div className="flex flex-col gap-2">
                  {CoursesInProgress.map((curso) => (
                    <span
                      key={curso.name}
                      className="font-mono text-xs transition-colors duration-200 cursor-default"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ffffff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--foreground-muted)")
                      }
                    >
                      ▸ {curso.name} - {curso.institution}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Certificações */}
            {certificationsList.length > 0 && (
              <div className="flex flex-col gap-4">
                <span
                  className="font-mono text-xs tracking-widest uppercase font-bold"
                  style={{
                    color: "#67e8f9",
                    textShadow: "0 0 10px rgba(103,232,249,0.5)",
                  }}
                >
                  {certifications}
                </span>

                <div className="flex flex-col gap-2">
                  {certificationsList.map((cert) => (
                    <span
                      key={cert.name}
                      className="font-mono text-xs transition-colors duration-200 cursor-default"
                      style={{ color: "var(--foreground-muted)" }}
                      onMouseEnter={(e) =>
                        (e.currentTarget.style.color = "#ffffff")
                      }
                      onMouseLeave={(e) =>
                        (e.currentTarget.style.color =
                          "var(--foreground-muted)")
                      }
                    >
                      ▸ {cert.name} - {cert.institution} - {cert.period}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
