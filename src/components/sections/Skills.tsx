"use client";

import { motion, easeOut } from "framer-motion";
import { GROUPS, type SkillGroup } from "@/components/sections/skills/data";
import SkillsSphere from "@/components/sections/skills/SkillsSphere";

interface SkillsProps {
  title: string;
  hint: string;
  categories: Record<SkillGroup["key"], string>;
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

export default function Skills({ title, hint, categories }: SkillsProps) {
  return (
    <section id="skills" className="relative z-10 py-20 px-6">
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

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_340px] gap-8 items-center">
          {/* Cards */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-4"
          >
            {GROUPS.map((group) => (
              <motion.div
                variants={cardVariants}
                key={group.key}
                className="flex flex-col gap-3 p-4 rounded-sm"
                style={{
                  border: "1px solid var(--border)",
                  backgroundColor: "rgba(255,255,255,0.02)",
                }}
              >
                <span
                  className="font-mono text-xs tracking-widest uppercase"
                  style={{ color: "var(--accent)" }}
                >
                  {categories[group.key]}
                </span>
                <div
                  className="w-full h-px"
                  style={{ backgroundColor: "var(--border)" }}
                />

                <div className="grid grid-cols-2 gap-2">
                  {group.skills.map(({ name, icon: Icon }) => (
                    <div
                      key={name}
                      className="group flex items-center gap-2 p-1.5 rounded-sm border border-border transition-all duration-200 hover:-translate-y-0.5 hover:border-accent"
                    >
                      <span
                        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-sm border border-border text-accent"
                        style={{ backgroundColor: "rgba(167,139,250,0.06)" }}
                      >
                        <Icon size={18} />
                      </span>
                      <span className="font-mono text-xs leading-tight text-foreground transition-colors duration-200 group-hover:text-accent">
                        {name}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <SkillsSphere hint={hint} />
        </div>
      </div>
    </section>
  );
}
