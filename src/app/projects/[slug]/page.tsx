import { getAllProjects, getProjectBySlug, getProjectSlugs } from "@/lib/mdx";
import CaseStudyLayout from "@/components/CaseStudyLayout";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { Figure, MediaGrid, Video } from "@/components/Media";
import type { Metadata } from "next";

// Build static paths from filenames (never undefined)
export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

// Page metadata from MDX frontmatter
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const hit = getProjectBySlug(slug);
  if (!hit) {
    return { title: "Project not found – Adilet Masalbekov" };
  }
  const { meta } = hit;
  return {
    title: `${meta.title} – Adilet Masalbekov`,
    description: meta.summary,
  };
}

// MDX components available inside .mdx
const components = { Figure, MediaGrid, Video };

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const hit = getProjectBySlug(slug);
  if (!hit) return notFound();

  const { meta, content } = hit;
  return (
    <CaseStudyLayout meta={meta}>
      <MDXRemote source={content} components={components} />
    </CaseStudyLayout>
  );
}