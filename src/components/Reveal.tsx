"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PropsWithChildren } from "react";

export default function Reveal({
  children,
  delay = 0,
}: PropsWithChildren<{ delay?: number }>) {
  const prefersReduced = useReducedMotion();

  const variants: Variants = prefersReduced
    ? ({} as Variants)
    : {
        hidden: { opacity: 0, y: 16 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, ease: "easeOut", delay },
        },
      };

  return (
    <motion.div
      /** Render immediately instead of waiting for scroll-in-view */
      initial={prefersReduced ? undefined : "hidden"}
      animate={prefersReduced ? undefined : "show"}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
