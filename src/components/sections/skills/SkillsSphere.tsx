"use client";

// Referencia: https://www.carlosesilva.com.br/#stack

import { useEffect, useRef, useState } from "react";
import { GROUPS, type Skill } from "./data";

const RADIUS = 110; // raio da esfera em px
const NODE = 46; // tamanho da área de cada ícone em px

// Intercala as categorias e remove ícones repetidos (Neon usa o do Postgres)
const rounds = Math.max(...GROUPS.map((g) => g.skills.length));
const ITEMS: Skill[] = Array.from({ length: rounds }, (_, r) =>
  GROUPS.map((g) => g.skills[r]),
)
  .flat()
  .filter((s): s is Skill => Boolean(s))
  .filter((s, i, all) => all.findIndex((o) => o.icon === s.icon) === i);

// Pontos distribuídos de forma uniforme na esfera (espiral de Fibonacci)
const POINTS = ITEMS.map((_, i) => {
  const y = 1 - (2 * (i + 0.5)) / ITEMS.length;
  const r = Math.sqrt(1 - y * y);
  const a = i * Math.PI * (3 - Math.sqrt(5));
  return [Math.cos(a) * r, y, Math.sin(a) * r] as const;
});

// Matriz de rotação 3x3 (lista de 9 números, linha por linha)
type Mat = number[];

function mul(a: Mat, b: Mat): Mat {
  const out = new Array<number>(9).fill(0);
  for (let r = 0; r < 3; r++)
    for (let c = 0; c < 3; c++)
      for (let k = 0; k < 3; k++) out[r * 3 + c] += a[r * 3 + k] * b[k * 3 + c];
  return out;
}

// theta gira pra direita/esquerda, phi gira pra baixo/cima
function rotation(theta: number, phi: number): Mat {
  const ct = Math.cos(theta),
    st = Math.sin(theta);
  const cp = Math.cos(phi),
    sp = Math.sin(phi);
  const ry = [ct, 0, st, 0, 1, 0, -st, 0, ct];
  const rx = [1, 0, 0, 0, cp, sp, 0, -sp, cp];
  return mul(rx, ry);
}

export default function SkillsSphere({ hint }: { hint: string }) {
  const stageRef = useRef<HTMLDivElement>(null);
  const hoveredRef = useRef(-1);
  const labelRef = useRef<HTMLSpanElement>(null);
  const nodeRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    // giro automático: horizontal + vertical = diagonal (rad por frame a 60fps)
    const auto = reduceMotion ? { x: 0, y: 0 } : { x: 0.004, y: 0.002 };
    const vel = { ...auto };
    let m: Mat = rotation(0.6, -0.4);
    let dragging = false;
    let last = { x: 0, y: 0 };
    let prev = performance.now();
    let raf = 0;

    const amt = ITEMS.map(() => 0); // 0 a 1: quanto cada ícone está ampliado

    const draw = (dt = 1) => {
      const cx = stage.clientWidth / 2;
      const cy = stage.clientHeight / 2;
      POINTS.forEach((p, i) => {
        const el = nodeRefs.current[i];
        if (!el) return;
        const x = m[0] * p[0] + m[1] * p[1] + m[2] * p[2];
        const y = m[3] * p[0] + m[4] * p[1] + m[5] * p[2];
        const z = m[6] * p[0] + m[7] * p[1] + m[8] * p[2];
        const depth = (z + 1) / 2;

        const target = hoveredRef.current === i ? 1 : 0;
        amt[i] += (target - amt[i]) * Math.min(1, 0.2 * dt);

        const base = 0.25 + 0.75 * depth;
        const scale = (0.7 + 0.3 * depth) * (1 + 0.4 * amt[i]);
        el.style.transform = `translate(${cx + x * RADIUS - NODE / 2}px, ${
          cy + y * RADIUS - NODE / 2
        }px) scale(${scale})`;
        el.style.opacity = String(base + (1 - base) * amt[i]);
        el.style.zIndex = String(
          Math.round(depth * 100) + (amt[i] > 0.05 ? 200 : 0),
        );

        // etiqueta: centralizada, logo abaixo do ícone ampliado
        if (hoveredRef.current === i && labelRef.current) {
          labelRef.current.style.transform = `translate(${cx + x * RADIUS}px, ${
            cy + y * RADIUS + (NODE * scale) / 2 + 6
          }px) translateX(-50%)`;
        }
      });
    };

    const frame = (now: number) => {
      const dt = Math.min((now - prev) / 16.67, 3);
      prev = now;
      if (!dragging) {
        m = mul(rotation(vel.x * dt, vel.y * dt), m);
        // inércia: a velocidade volta aos poucos pro giro automático
        const k = Math.pow(0.95, dt);
        vel.x = auto.x + (vel.x - auto.x) * k;
        vel.y = auto.y + (vel.y - auto.y) * k;
      }
      draw(dt);
      raf = requestAnimationFrame(frame);
    };

    const onDown = (e: PointerEvent) => {
      dragging = true;
      last = { x: e.clientX, y: e.clientY };
      stage.setPointerCapture(e.pointerId);
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      // distância do mouse / raio = ângulo: a superfície acompanha o cursor
      const theta = (e.clientX - last.x) / RADIUS;
      const phi = (e.clientY - last.y) / RADIUS;
      last = { x: e.clientX, y: e.clientY };
      m = mul(rotation(theta, phi), m);
      vel.x = theta;
      vel.y = phi;
    };
    const onUp = () => {
      dragging = false;
    };

    stage.addEventListener("pointerdown", onDown);
    stage.addEventListener("pointermove", onMove);
    stage.addEventListener("pointerup", onUp);
    stage.addEventListener("pointercancel", onUp);

    draw();
    // só anima quando a esfera está visível na tela
    const observer = new IntersectionObserver(([entry]) => {
      cancelAnimationFrame(raf);
      if (entry.isIntersecting) {
        prev = performance.now();
        raf = requestAnimationFrame(frame);
      }
    });
    observer.observe(stage);

    return () => {
      cancelAnimationFrame(raf);
      observer.disconnect();
      stage.removeEventListener("pointerdown", onDown);
      stage.removeEventListener("pointermove", onMove);
      stage.removeEventListener("pointerup", onUp);
      stage.removeEventListener("pointercancel", onUp);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        ref={stageRef}
        aria-hidden="true"
        className="relative w-full h-80 cursor-grab active:cursor-grabbing select-none touch-pan-y"
      >
        {ITEMS.map(({ name, icon: Icon }, i) => (
          <div
            key={name}
            ref={(el) => {
              nodeRefs.current[i] = el;
            }}
            onPointerEnter={() => {
              hoveredRef.current = i;
              setActive(name);
            }}
            onPointerLeave={() => {
              hoveredRef.current = -1;
              setActive(null);
            }}
            className="absolute left-0 top-0 flex items-center justify-center"
            style={{ width: NODE, height: NODE, color: "var(--foreground)" }}
          >
            <Icon size={36} />
          </div>
        ))}
        {/* etiqueta: um elemento só, posicionado pelo draw() */}
        <span
          ref={labelRef}
          className="pointer-events-none absolute left-0 top-0 whitespace-nowrap font-mono text-xs font-medium"
          style={{
            zIndex: 400,
            opacity: active ? 1 : 0,
            transition: "opacity 0.15s",
            height: 22,
            lineHeight: "20px",
            padding: "0 8px",
            borderRadius: 11,
            color: "#fff",
            backgroundColor: "rgba(0,0,0,0.85)",
            border: "1px solid rgba(255,255,255,0.35)",
          }}
        >
          {active}
        </span>
      </div>

      <span
        className="h-4 font-mono text-xs tracking-widest uppercase"
        style={{ color: "var(--foreground-muted)" }}
      >
        {hint}
      </span>
    </div>
  );
}
