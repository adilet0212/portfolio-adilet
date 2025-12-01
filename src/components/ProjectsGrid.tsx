"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectMeta } from "@/lib/mdx";

export default function ProjectsGrid({ projects }: { projects: ProjectMeta[] }) {
  const prefersReduced = useReducedMotion();

  const container: Variants = prefersReduced
    ? ({} as Variants)
    : { hidden: {}, show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } } };

  const item: Variants = prefersReduced
    ? ({} as Variants)
    : { hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0, transition: { duration: 0.35 } } };

  return (
    <motion.div
      /** render now (no viewport gating) */
      initial={prefersReduced ? undefined : "hidden"}
      animate={prefersReduced ? undefined : "show"}
      variants={container}
      className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
    >
      {projects.map((p) => (
        <motion.div key={p.slug} variants={item}>
          <ProjectCard p={p} />
        </motion.div>
      ))}
    </motion.div>
  );
}