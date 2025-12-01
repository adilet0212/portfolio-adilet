"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Projects",   href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "About",      href: "/about" },
  { label: "Contact",    href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();

  // Dark-friendly frosted buttons (readable on space background)
  // - Base: translucent navy w/ subtle border, white text
  // - Hover: a touch brighter
  // - Active: keep your existing gradient treatment
  const base =
    "rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/85 " +
    "shadow-[0_1px_0_0_rgba(255,255,255,.06)_inset] backdrop-blur " +
    "transition hover:-translate-y-0.5 hover:bg-white/10 hover:text-white cursor-pointer";

  const active =
    "text-white bg-[linear-gradient(90deg,var(--accent-1),var(--accent-2))] border-transparent shadow-md";

  return (
    <header className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
      <Link href="/" prefetch={false} className="font-semibold text-white/90">
        Adilet <span className="opacity-60">Portfolio</span>
      </Link>

      <nav className="flex items-center gap-3">
        {links.map((l) => {
          const isActive = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              prefetch={false}
              className={`${base} ${isActive ? active : ""}`}
            >
              {l.label}
            </Link>
          );
        })}

        <Link
          href="/resume"
          prefetch={false}
          className={`${base} ${pathname.startsWith("/resume") ? active : ""}`}
        >
          Resume
        </Link>
      </nav>
    </header>
  );
}