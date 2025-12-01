import Image from "next/image";
import Link from "next/link";
import { ProjectMeta } from "@/lib/mdx";
import { cn } from "@/lib/utils";

export default function ProjectCard({ p }: { p: ProjectMeta }) {
  const href = `/projects/${p.slug}`;
  return (
    <article
      className={cn(
        "group relative overflow-hidden rounded-2xl border bg-white p-3 shadow-sm dark:bg-neutral-900",
        "dark:border-neutral-800 border-neutral-200 card-hover gradient-edge"
      )}
    >
      <Link href={href} className="block overflow-hidden rounded-xl">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-xl">
          {p.image ? (
            <Image
              src={p.image}
              alt={p.title}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 90vw"
              priority={p.featured}
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-neutral-100 to-neutral-200 dark:from-neutral-800 dark:to-neutral-700" />
          )}
          <div
            className="pointer-events-none absolute inset-0 rounded-xl ring-0 transition group-hover:ring-2"
            style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,.04)" }}
          />
        </div>
      </Link>

      <div className="space-y-2 p-3">
        <Link href={href} className="block">
          <h3 className="line-clamp-2 text-lg font-semibold leading-snug">{p.title}</h3>
        </Link>
        <p className="line-clamp-2 text-sm text-neutral-600 dark:text-neutral-300">{p.summary}</p>

        {p.tags?.length ? (
          <div className="flex flex-wrap gap-2 pt-1">
            {p.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border px-2.5 py-0.5 text-xs text-neutral-700 dark:text-neutral-300 dark:border-neutral-700 border-neutral-200"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}

        {p.stack?.length ? (
          <p className="pt-1 text-xs text-neutral-500 dark:text-neutral-400">{p.stack.join(" • ")}</p>
        ) : null}

        <div className="flex items-center gap-2 pt-2">
          <Link href={href} className="btn btn-ghost btn-sm">View details</Link>
          {p.repo ? (
            <a href={p.repo} target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-sm">Repo</a>
          ) : null}
        </div>
      </div>
    </article>
  );
}