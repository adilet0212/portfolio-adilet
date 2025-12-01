import fs from "fs";
import path from "path";
import matter from "gray-matter";

export type ProjectMeta = {
  title: string;
  slug: string;
  summary: string;
  date: string;
  tags: string[];
  stack: string[];
  featured?: boolean;
  metrics?: string[];
  repo?: string;
  demo?: string;
  image?: string;
  images?: string[];
  video?: string;
  gif?: string;
  _file?: string;
};

const PROJECTS_DIR = path.join(process.cwd(), "src", "content", "projects");

function readMdxFile(file: string) {
  const filePath = path.join(PROJECTS_DIR, file);
  const raw = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(raw);

  // derive a safe slug from filename if missing
  const derivedSlug = file.replace(/\.mdx$/i, "");
  const meta = {
    ...(data as Partial<ProjectMeta>),
    slug: typeof (data as any)?.slug === "string" && (data as any).slug.length
      ? (data as any).slug
      : derivedSlug,
    _file: file,
  } as ProjectMeta;

  // normalize image extensions if the file exists
  return { meta, content };
}

export function getAllProjects(): ProjectMeta[] {
  const files = fs.readdirSync(PROJECTS_DIR).filter((f) => f.endsWith(".mdx"));
  const all = files.map((file) => readMdxFile(file).meta);

  // keep only valid slugs
  const cleaned = all.filter((p) => typeof p.slug === "string" && p.slug.length > 0);

  // featured first, then date desc (fallback to filename order if date invalid)
  return cleaned.sort((a, b) => {
    const fd = (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    if (fd !== 0) return fd;
    const na = Number.isFinite(new Date(a.date).getTime()) ? new Date(a.date).getTime() : 0;
    const nb = Number.isFinite(new Date(b.date).getTime()) ? new Date(b.date).getTime() : 0;
    return nb - na;
  });
}

export function getProjectSlugs(): string[] {
  return fs
    .readdirSync(PROJECTS_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getProjectBySlug(
  slug: string
): { meta: ProjectMeta; content: string } {
  const file = `${slug}.mdx`;
  const filePath = path.join(PROJECTS_DIR, file);
  if (!fs.existsSync(filePath)) {
    throw new Error(`Project MDX not found for slug: ${slug}`);
  }
  const { meta, content } = readMdxFile(file);
  return { meta, content };
}