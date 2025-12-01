import Link from "next/link";
import { ProjectMeta } from "@/lib/mdx";
import Reveal from "@/components/Reveal";

export default function CaseStudyLayout({
  meta,
  children,
}: {
  meta: ProjectMeta;
  children: React.ReactNode;
}) {
  const date =
    meta?.date ? new Date(meta.date).toLocaleDateString() : undefined;

  return (
    <main className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 px-6 py-10 lg:grid-cols-[1fr_320px]">
      {/* Content */}
      <Reveal>
        <article className="prose prose-neutral max-w-none dark:prose-invert">
          <h1 className="mb-2">{meta.title}</h1>
          {meta.summary && (
            <p className="mt-0 text-neutral-600 dark:text-neutral-300">
              {meta.summary}
            </p>
          )}
          {date && (
            <div className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              {date}
            </div>
          )}
          <hr className="my-6 border-neutral-200 dark:border-neutral-800" />
          <div className="[&_*]:max-w-full">{children}</div>
        </article>
      </Reveal>

      {/* Sidebar */}
      <aside className="lg:sticky lg:top-20 lg:h-fit">
        <Reveal delay={0.05}>
          <div className="glass rounded-2xl border border-neutral-200 p-5 shadow-sm dark:border-neutral-800">
            <h3 className="text-sm font-semibold tracking-tight">Project info</h3>

            {meta.tags?.length ? (
              <>
                <div className="mt-3 text-xs font-medium text-neutral-500">
                  Categories
                </div>
                <ul className="mt-2 flex flex-wrap gap-2">
                  {meta.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-neutral-200 px-2 py-0.5 text-xs dark:border-neutral-700"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </>
            ) : null}

            {meta.stack?.length ? (
              <>
                <div className="mt-4 text-xs font-medium text-neutral-500">
                  Tech stack
                </div>
                <div className="mt-2 text-sm text-neutral-700 dark:text-neutral-200">
                  {meta.stack.join(" • ")}
                </div>
              </>
            ) : null}

            {meta.metrics?.length ? (
              <>
                <div className="mt-4 text-xs font-medium text-neutral-500">
                  Highlights
                </div>
                <ul className="mt-2 list-disc pl-5 text-sm text-neutral-700 dark:text-neutral-200">
                  {meta.metrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              </>
            ) : null}

            <div className="mt-5 flex flex-wrap gap-2">
              {!!meta.repo && (
                <a
                  href={meta.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-xl border border-neutral-200 px-3 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700"
                >
                  Repo
                </a>
              )}
              {!!meta.demo && (
                <a
                  href={meta.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring rounded-xl border border-neutral-200 px-3 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700"
                >
                  Demo
                </a>
              )}
              <Link
                href="/projects"
                className="focus-ring rounded-xl border border-neutral-200 px-3 py-1.5 text-sm shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700"
              >
                ← All projects
              </Link>
            </div>
          </div>
        </Reveal>
      </aside>
    </main>
  );
}