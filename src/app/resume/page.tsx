import Link from "next/link";

export const metadata = {
  title: "Resume – Adilet Masalbekov",
  description: "Download and view the resume of Adilet Masalbekov.",
};

export default function ResumePage() {
  const pdfPath = "/resume/Adilet-Masalbekov-Resume.pdf";

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-10">
      <header className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">Resume</h1>
        <div className="flex gap-3">
          <Link
            href={pdfPath}
            target="_blank"
            rel="noreferrer"
            className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
          >
            Open in new tab
          </Link>

          <a
            href={pdfPath}
            download="Adilet-Masalbekov-Resume.pdf"
            className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
          >
            Download PDF
          </a>
        </div>
      </header>

      <section className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm dark:border-neutral-800 gradient-edge">
        <iframe
          src={`${pdfPath}#view=FitH`}
          title="Adilet Masalbekov Resume PDF"
          className="h-[calc(100vh-220px)] w-full"
        />
        <div className="p-4 text-sm text-neutral-600 dark:text-neutral-300">
          If the PDF doesn’t display,{" "}
          <a href={pdfPath} target="_blank" rel="noreferrer" className="underline">
            open it in a new tab
          </a>{" "}
          or use the Download button above.
        </div>
      </section>
    </main>
  );
}