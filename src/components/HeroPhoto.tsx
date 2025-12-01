"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type Chip = { label: string };
type CTA = { label: string; href: string; external?: boolean };

type Props = {
  title?: string;
  subtitle?: string;
  chips?: Chip[];
  ctas?: CTA[];
  imageSrc: string;
  imageAlt?: string;
};

export default function HeroPhoto({
  title = "Software Developer • AI Specialist • QA Engineer",
  subtitle = "Hey, my name is Adilet Masalbekov. Welcome to my portfolio! Here you’ll find a little about me, the projects I’ve worked on, and my experience in software development, AI, and QA. I like learning new things, solving real problems, and building software that’s reliable and easy to use.",
  ctas = [{ label: "View Projects", href: "/projects" }, { label: "Download Resume", href: "/resume" }],
  imageSrc,
  imageAlt = "Portrait of Adilet",
}: Props) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative mx-auto flex w-full max-w-6xl flex-col items-center gap-10 px-6 py-10 md:flex-row md:gap-8">
      {/* LEFT: copy */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex-1"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-4 max-w-prose text-base text-neutral-300 md:text-lg whitespace-pre-line">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          {ctas.map((cta, i) => {
            const cls = "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 shadow-[0_1px_0_0_rgba(255,255,255,.06)_inset] backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white cursor-pointer";
            return (
              <a
                key={i}
                href={cta.href}
                {...(cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={cls}
              >
                {cta.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* RIGHT: photo card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.05 }}
        className="relative aspect-[3/4] w-full max-w-xs md:max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] shadow-[inset_0_1px_0_rgba(255,255,255,.08)] backdrop-blur"
        aria-hidden
      >
        <motion.div
          animate={prefersReduced ? {} : { y: [0, -6, 0] }}
          transition={prefersReduced ? {} : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="pointer-events-none absolute inset-0 rounded-3xl ring-1 ring-white/10" />

      </motion.div>

    </section>
  );
}