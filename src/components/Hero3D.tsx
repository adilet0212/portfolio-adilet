'use client';

import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, Environment, Float, ContactShadows, Lightformer } from "@react-three/drei";
import { motion, useReducedMotion } from "framer-motion";

type Chip = { label: string };
type CTA = { label: string; href: string; external?: boolean };
type Hero3DProps = {
  title?: string; subtitle?: string; chips?: Chip[]; ctas?: CTA[];
};

function Icosahedron() {
  const ref = React.useRef<any>(null);
  const prefersReducedMotion = useReducedMotion();
  useFrame((_, d) => {
    if (!ref.current || prefersReducedMotion) return;
    ref.current.rotation.y += d * 0.3;
    ref.current.rotation.x += d * 0.15;
  });
  return (
    <mesh ref={ref} castShadow receiveShadow>
      <icosahedronGeometry args={[1.1, 0]} />
      <meshStandardMaterial color="#6366f1" metalness={0.15} roughness={0.35} />
    </mesh>
  );
}

export default function Hero3D({
  title = "Software Developer • AI Specialist • QA Engineer",
  subtitle = "I design, test, and ship reliable, intelligent, user-centered systems.",
  chips = [{ label: "95% bug-resolution" }, { label: "30% faster triage" }, { label: "40% faster DB retrieval" }],
  ctas = [{ label: "View Projects", href: "#projects" }, { label: "Download Resume", href: "/resume" }],
}: Hero3DProps) {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-6 py-20 md:flex-row md:gap-16">
      {/* LEFT */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: .6, ease: "easeOut" }}
        className="flex-1"
      >
        <h1 className="text-3xl font-bold tracking-tight md:text-5xl md:leading-[1.12]">
          <span className="gradient-text">{title}</span>
        </h1>
        <p className="mt-4 max-w-prose text-base text-neutral-600 dark:text-neutral-300 md:text-lg">
          {subtitle}
        </p>

        <ul className="mt-6 flex flex-wrap gap-2">
          {chips.map((c, i) => (
            <li
              key={i}
              className="rounded-full border px-3 py-1 text-sm text-neutral-700 dark:text-neutral-200 dark:border-neutral-700 border-neutral-200"
            >
              {c.label}
            </li>
          ))}
        </ul>

        <div className="mt-8 flex flex-wrap gap-3">
          {ctas.map((cta, i) => {
            // Both buttons use the white/ghost style as requested
            const className = "btn btn-ghost btn-lg";
            return (
              <a
                key={i}
                href={cta.href}
                {...(cta.external ? { target: "_blank", rel: "noreferrer" } : {})}
                className={className}
              >
                {cta.label}
              </a>
            );
          })}
        </div>
      </motion.div>

      {/* RIGHT: 3D */}
      <motion.div
        initial={{ opacity: 0, scale: .96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: .7, ease: "easeOut", delay: .05 }}
        className="relative panel-soft aspect-square w-full max-w-md overflow-hidden rounded-3xl border border-neutral-200 shadow-sm dark:border-neutral-800 md:max-w-lg gradient-edge"
        aria-hidden
      >
        {/* soft aurora on top of panel */}
        <div className="pointer-events-none absolute inset-0 rounded-3xl [background:radial-gradient(40%_40%_at_60%_40%,var(--glow),transparent_60%)]" />

        <Canvas
          shadows
          dpr={[1, 2]}
          camera={{ position: [2.6, 2.0, 3.0], fov: 45 }}
        >
          <ambientLight intensity={0.7} />
          <directionalLight
            position={[4, 5, 3]}
            intensity={1.05}
            castShadow
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
          />

          <React.Suspense fallback={null}>
            <group position={[0, 0.1, 0]}>
              <OrbitControls enableZoom={false} enablePan={false} autoRotate={!prefersReduced} autoRotateSpeed={0.4} />
              <Float floatIntensity={0.6} rotationIntensity={0.35} speed={1}>
                <Icosahedron />
              </Float>
            </group>
          </React.Suspense>

          <ContactShadows
            position={[0, -1.1, 0]}
            opacity={0.3}
            scale={10}
            blur={2.5}
            far={5}
          />

          <Environment preset="sunset">
            <Lightformer intensity={0.5} color="#b9a7ff" position={[0, 3, -2]} scale={[5, 5, 1]} />
          </Environment>
        </Canvas>
      </motion.div>
    </section>
  );
}