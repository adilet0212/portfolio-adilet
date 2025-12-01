import HeroPhoto from "@/components/HeroPhoto";

export default function Home() {
  return (
    <main className="relative min-h-dvh text-neutral-50">
      <div className="mx-auto max-w-7xl px-6 mt-16 py-6">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
          <HeroPhoto
            imageSrc="/images/avatar/photo.jpg"
            title="Software Developer • AI Specialist • QA Engineer"
            subtitle={
              "Hey, my name is Adilet Masalbekov. Welcome to my portfolio!\nHere you’ll find a little about me, the projects I’ve worked on, and my experience in the tech industry."
            }
            ctas={[
              { label: "View Projects", href: "/projects" },
              { label: "Download Resume", href: "/resume" },
            ]}
          />
        </div>
      </div>
    </main>
  );
}