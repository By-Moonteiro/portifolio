import Link from "next/link";
import { FaGithub } from "react-icons/fa";
import { ExternalLink, ArrowLeft } from "lucide-react";
import Image from 'next/image'

export default function MoonFitPage() {
  return (
    <main className="relative z-10 min-h-screen px-6 py-24">
      <div className="max-w-3xl mx-auto flex flex-col gap-16">

        {/* Voltar */}
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-xs transition-colors duration-200 w-fit"
          style={{ color: "var(--foreground-muted)" }}
        >
          <ArrowLeft size={13} />
          voltar ao portfólio
        </Link>

        <div className="w-full rounded-sm overflow-hidden" style={{ border: "1px solid var(--border)" }}>
          <Image
            src="/projetos/moonfit-icon.svg"
            alt="MoonFit Banner"
            width={800}
            height={400}
            className="w-full h-auto rounded-sm"
            priority
          />
        </div>

        {/* Hero do projeto */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <span
              className="font-mono text-xs flex items-center gap-1.5"
              style={{ color: "var(--accent)" }}
            >
              <span
                className="inline-block w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: "var(--accent)", animation: "pulse 1.5s ease-in-out infinite" }}
              />
              WIP — 2025
            </span>
          </div>

          <h1
            style={{
              fontFamily: "var(--font-syne)",
              fontSize: "clamp(2.5rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "#ffffff",
              textShadow: "0 0 20px rgba(255,255,255,0.15)",
              lineHeight: 1,
            }}
          >
            MoonFit
          </h1>

          <p className="text-sm leading-relaxed max-w-xl" style={{ color: "var(--foreground-muted)" }}>
            Gerenciador de fichas de treino pensado como produto real — multi-tenant,
            com histórico de evolução e estrutura que cresce junto com o usuário.
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://github.com/By-Moonteiro/moon-fit"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
            >
              <FaGithub size={13} />
              Repositório
            </a>
            <a
              href="https://moon-fit.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
              style={{ color: "var(--foreground-muted)" }}
            >
              <ExternalLink size={13} />
              Demo
            </a>
          </div>

          {/* Stack */}
          <div className="flex flex-wrap gap-2">
            {["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "JWT", "Swagger", "React", "Vite", "Tailwind", "TanStack Query", "Zod", "RHF"].map(tech => (
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

        <Divider />

        {/* O Problema */}
        <Section title="O Problema">
          <p style={{ color: "var(--foreground-muted)" }} className="text-sm leading-relaxed">
            O MoonFit nasceu de uma dor real e diária — fichas de treino anotadas no WhatsApp
            que se perdiam no histórico, sem registro de cargas, repetições ou evolução semana a semana.
            Sem controle de descanso entre séries, sem histórico de tempo treinando, sem saber o que funcionou.
          </p>
          <ul className="flex flex-col gap-2 mt-4">
            {[
              "Fichas perdidas no meio do histórico do WhatsApp",
              "Sem registro de cargas ou evolução semana a semana",
              "Sem controle de tempo de descanso entre séries",
              "Fichas antigas inacessíveis — sem saber o que funcionou",
              "Dificuldade de adaptar treinos conforme a evolução",
            ].map(item => (
              <li key={item} className="flex items-start gap-2 font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
                <span style={{ color: "var(--accent)" }}>▸</span>
                {item}
              </li>
            ))}
          </ul>
        </Section>

        <Divider />

        {/* O que é */}
        <Section title="O que é">
          <p className="text-sm leading-relaxed" style={{ color: "var(--foreground-muted)" }}>
            MoonFit é um gerenciador de fichas de treino simples e completo. Organiza treinos,
            registra progresso e mantém o histórico — sem depender de WhatsApp, bloco de notas ou memória.
            Planejado desde o início como produto multi-tenant, pensando em atender tanto iniciantes
            quanto instrutores e professores de academia.
          </p>
        </Section>

        <Divider />

        {/* Core Flow */}
        <Section title="Como funciona">
          <div className="flex flex-col gap-8">
            {[
              {
                title: "Criando uma ficha de treino",
                steps: [
                  "Usuário cria uma nova ficha com nome e período de vida",
                  "Separa em dias/grupos (Treino A, B, C / Upper, Lower, etc.)",
                  "Para cada dia, adiciona exercícios com carga, repetições e tempo de descanso",
                  "Pode adicionar anotações específicas por exercício",
                ],
              },
              {
                title: "Modo Treino (na academia)",
                steps: [
                  "Abre a ficha ativa e seleciona o dia",
                  "Cronômetro geral inicia contando o tempo na academia",
                  "Para cada série concluída, cronômetro de descanso inicia automaticamente",
                  "Anotações durante o treino (ex: 'aumentei carga hoje')",
                  "Ao finalizar: tempo total registrado, anotações salvas no histórico",
                ],
              },
              {
                title: "Revisando o histórico",
                steps: [
                  "Acessa fichas anteriores filtrando por mês ou período",
                  "Visualiza cada dia de treino com suas anotações",
                  "Acompanha evolução de cargas, tempo e volume ao longo do tempo",
                ],
              },
              {
                title: "Ciclo de vida da ficha",
                steps: [
                  "App acompanha o período definido na criação",
                  "Aviso quando a ficha está próxima de vencer",
                  "Ao vencer, sugere criar nova ficha e arquiva a antiga automaticamente",
                ],
              },
            ].map(flow => (
              <div key={flow.title} className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                  {flow.title}
                </span>
                <ul className="flex flex-col gap-2">
                  {flow.steps.map((step, i) => (
                    <li key={i} className="flex items-start gap-2 font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
                      <span style={{ color: "var(--accent)", opacity: 0.5 }}>{String(i + 1).padStart(2, "0")}.</span>
                      {step}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Entidades */}
        <Section title="Arquitetura & Entidades">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--accent)" }}>
                MVP
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "User", desc: "Quem usa o app. Nome, email, senha." },
                  { name: "WorkoutPlan", desc: "Ficha de treino com período de vida e status." },
                  { name: "TrainingDay", desc: "Grupo de treino dentro de uma ficha (Treino A, B, C)." },
                  { name: "Exercise", desc: "Catálogo global de exercícios pré-cadastrados." },
                  { name: "WorkoutSet", desc: "Exercício na ficha com carga, reps e descanso configurados." },
                ].map(entity => (
                  <div
                    key={entity.name}
                    className="flex flex-col gap-1 p-4 rounded-sm"
                    style={{ border: "1px solid var(--border)", backgroundColor: "rgba(255,255,255,0.02)" }}
                  >
                    <span className="font-mono text-xs font-bold" style={{ color: "#c4b5fd" }}>
                      {entity.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
                      {entity.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--foreground-muted)" }}>
                Pós-MVP
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  { name: "TrainingSession", desc: "Registro real de uma vez que o usuário treinou." },
                  { name: "SetLog", desc: "Registro de cada série com carga e reps reais." },
                  { name: "Note", desc: "Anotação livre ligada a exercício, sessão ou dia." },
                ].map(entity => (
                  <div
                    key={entity.name}
                    className="flex flex-col gap-1 p-4 rounded-sm"
                    style={{ border: "1px solid var(--border)", backgroundColor: "rgba(255,255,255,0.01)", opacity: 0.7 }}
                  >
                    <span className="font-mono text-xs font-bold" style={{ color: "var(--foreground-muted)" }}>
                      {entity.name}
                    </span>
                    <span className="font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
                      {entity.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Divider />

        {/* Roadmap */}
        <Section title="Roadmap">
          <div className="flex flex-col gap-6">
            {[
              {
                phase: "Fase 1 — MVP",
                color: "var(--accent)",
                items: [
                  "Criar fichas de treino com exercícios pré-cadastrados",
                  "Modo Treino ativo (cronômetro de descanso, marcar série, tempo total)",
                  "Ciclo de vida da ficha (aviso de vencimento, sugestão de nova ficha)",
                  "Histórico de fichas com anotações",
                  "PWA para melhor integração mobile",
                ],
              },
              {
                phase: "Fase 2 — Para Profissionais",
                color: "#f0f0f0",
                items: [
                  "RBAC com níveis de acesso (Admin, Instrutor, Personal, Aluno)",
                  "Gestão de alunos e fichas de terceiros",
                  "Gerenciamento de mensalidades com notificações",
                  "Geração de PDF por dia de treino",
                ],
              },
              {
                phase: "Fase 3 — Inteligência / IA",
                color: "#67e8f9",
                items: [
                  "Geração de fichas personalizadas por IA baseada no perfil e histórico",
                  "IA com acesso ao histórico para sugestões embasadas",
                  "Comparativo visual de evolução (gráficos de carga, tempo, volume)",
                ],
              },
            ].map(phase => (
              <div key={phase.phase} className="flex flex-col gap-3">
                <span className="font-mono text-xs tracking-widest uppercase" style={{ color: phase.color }}>
                  {phase.phase}
                </span>
                <ul className="flex flex-col gap-2">
                  {phase.items.map(item => (
                    <li key={item} className="flex items-start gap-2 font-mono text-xs" style={{ color: "var(--foreground-muted)" }}>
                      <span style={{ color: phase.color, opacity: 0.6 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Divider />

        {/* Footer da página */}
        <div className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <ArrowLeft size={13} />
            voltar ao portfólio
          </Link>
          <a
            href="https://github.com/By-Moonteiro/moon-fit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-mono text-xs transition-colors duration-200"
            style={{ color: "var(--foreground-muted)" }}
          >
            <FaGithub size={13} />
            ver repositório
          </a>
        </div>

      </div>
    </main>
  );
}

function Divider() {
  return <div className="w-full h-px" style={{ backgroundColor: "var(--border)" }} />;
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-6">
      <h2
        className="font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--accent)" }}
      >
        ✦ {title}
      </h2>
      {children}
    </div>
  );
}