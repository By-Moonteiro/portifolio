"use client";

import { FaGithub } from "react-icons/fa";
import { GitFork, Users } from "lucide-react";

interface Contribution {
  date: string;
  count: number;
  level: 0 | 1 | 2 | 3 | 4;
}

interface Props {
  followers: number;
  public_repos: number;
  contributions: Contribution[];
  total: Record<string, number>;
}

const LEVEL_COLORS = [
  "rgba(167,139,250,0.08)",
  "rgba(167,139,250,0.25)",
  "rgba(167,139,250,0.45)",
  "rgba(167,139,250,0.70)",
  "rgba(167,139,250,0.95)",
];

function HeatMap({ contributions }: { contributions: Contribution[] }) {
   const today = new Date();
  const yearAgo = new Date();
  yearAgo.setFullYear(today.getFullYear() - 1);

  const last365 = contributions
    .filter(d => {
      const date = new Date(d.date);
      return date >= yearAgo && date <= today;
    })
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const firstDay = new Date(last365[0]?.date);
  const startPadding = firstDay.getDay();

  const paddedDays: (Contribution | null)[] = [
    ...Array(startPadding).fill(null),
    ...last365,
  ];

  const weeks: (Contribution | null)[][] = [];
  for (let i = 0; i < paddedDays.length; i += 7) {
    weeks.push(paddedDays.slice(i, i + 7));
  }


  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-1 w-full overflow-x-auto">
        {weeks.map((week, wi) => (
          <div key={wi} className="flex flex-col gap-1">
            {Array(7).fill(null).map((_, di) => {
              const day = week[di];
              return (
                <div
                  key={di}
                  title={day ? `${day.date}: ${day.count} contribuições` : ""}
                  className="rounded-sm transition-all duration-200"
                  style={{
                    width: "11px",
                    height: "11px",
                    flexShrink: 0,
                    backgroundColor: day
                      ? LEVEL_COLORS[day.level]
                      : "rgba(255,255,255,0.03)",
                    cursor: day ? "default" : "default",
                  }}
                  onMouseEnter={e => {
                    if (day) {
                      e.currentTarget.style.transform = "scale(1.4)";
                      e.currentTarget.style.boxShadow = `0 0 6px ${LEVEL_COLORS[day.level]}`;
                    }
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>

      {/* Legenda */}
      <div className="flex items-center gap-2 justify-end">
        <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>menos</span>
        {LEVEL_COLORS.map((color, i) => (
          <div key={i} className="rounded-sm" style={{ width: "11px", height: "11px", backgroundColor: color }} />
        ))}
        <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>mais</span>
      </div>
    </div>
  );
}

export default function GithubActivity({ followers, public_repos, contributions, total }: Props) {
  const totalContributions = Object.values(total).reduce((a, b) => a + b, 0);

  const stats = [
    { label: "Contribuições", value: totalContributions.toLocaleString("pt-BR"), icon: <FaGithub size={16} /> },
    { label: "Repositórios Públicos", value: public_repos, icon: <GitFork size={16} /> },
    { label: "Seguidores", value: followers, icon: <Users size={16} /> },
  ];

  return (
    <section id="github" className="relative z-10 py-20 px-6">
      <div className="max-w-5xl mx-auto flex flex-col gap-12">

        {/* Header */}
        <div className="flex items-center gap-4">
          <span className="font-mono text-sm tracking-widest whitespace-nowrap" style={{ color: "var(--accent)" }}>
            ✦ GITHUB
          </span>
          <div className="flex-1 h-px" style={{ backgroundColor: "var(--accent)", opacity: 0.4 }} />
        </div>

        {/* Cards de métricas */}
        <div className="grid grid-cols-3 gap-4">
        {stats.map(stat => (
          <div
            key={stat.label}
            className="flex flex-col gap-2 p-4 rounded-sm"
            style={{
              border: "1px solid var(--border)",
              backgroundColor: "rgba(255,255,255,0.02)",
            }}
          >
            <div style={{ color: "var(--accent)" }}>{stat.icon}</div>
            <span
              className="font-mono font-bold"
              style={{
                fontSize: "clamp(1.2rem, 3vw, 2rem)",
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1,
              }}
            >
              {stat.value}
            </span>
            <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
              {stat.label}
            </span>
          </div>
        ))}
      </div>

        {/* Heatmap */}
        <div
          className="flex flex-col gap-6 p-6 rounded-sm"
          style={{
            border: "1px solid var(--border)",
            backgroundColor: "rgba(255,255,255,0.02)",
          }}
        >
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
              Contribution Graph — últimos 365 dias
            </span>
            <a
              href="https://github.com/By-Moonteiro"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--foreground)")}
              onMouseLeave={e => (e.currentTarget.style.color = "var(--foreground-muted)")}
            >
              <FaGithub size={13} />
              Ver perfil
            </a>
          </div>

          {contributions.length > 0 ? (
            <HeatMap contributions={contributions} />
          ) : (
            <p className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
              Carregando...
            </p>
          )}
        </div>
      </div>
    </section>
  );
}