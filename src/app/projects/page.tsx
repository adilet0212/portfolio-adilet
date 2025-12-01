import ProjectFilter from "@/components/ProjectFilter";
import { getAllProjects, type ProjectMeta } from "@/lib/mdx";
import ProjectsGrid from "@/components/ProjectsGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Projects",
  description: "Selected AI, Dev, and QA projects with case studies.",
};

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

function matchCat(p: ProjectMeta, cat: string) {
  const c = cat.toLowerCase();
  if (c === "all") return true;

  const s = p.slug;

  if (c === "ai") {
    return s === "naive-bayes-spam-detector" || s === "ai-ticket-triage";
  }

  if (c === "dev") {
    return s === "hospital-system" || s === "car-rental-system-sre";
  }

  if (c === "web apps" || c === "web-apps") {
    return s === "bug-smasher-game" || s === "mini-web-apps";
  }

  // fallback: no match
  return false;
}

export default async function ProjectsPage({ searchParams }: { searchParams?: SearchParams }) {
  const sp = (await searchParams) ?? {};
  const rawCat = Array.isArray(sp.cat) ? sp.cat[0] : sp.cat;
  const cat = (rawCat ?? "All");

  const all = getAllProjects();
  const filtered = all.filter((p) => matchCat(p, cat));

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Projects</h1>
        <ProjectFilter />
      </header>

      {/* key by category so switching back/forth never leaves stale DOM */}
      <section id="projects" key={cat.toLowerCase()}>
        <ProjectsGrid projects={filtered} />
      </section>

      {filtered.length === 0 && (
        <p className="mt-8 text-sm text-neutral-600 dark:text-neutral-300">
          No projects found for this category.
        </p>
      )}
    </main>
  );
}