import Reveal from "./Reveal";

export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <Reveal>
      <div className="mb-4 flex items-center gap-3">
        <span className="h-6 w-1 rounded-full bg-gradient-to-b from-indigo-500 via-violet-500 to-cyan-400" />
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">{children}</h2>
      </div>
    </Reveal>
  );
}