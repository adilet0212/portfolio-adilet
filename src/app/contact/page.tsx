import ContactForm from "@/components/ContactForm";

export const metadata = {
  title: "Contact – Adilet Masalbekov",
  description: "Get in touch with Adilet for roles, projects, and collaborations.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-3xl px-6 py-10">
      <h1 className="text-2xl font-bold tracking-tight text-neutral-50 md:text-3xl">
        Contact
      </h1>
      <p className="mt-2 text-neutral-300">
        Send me a message and I’ll get back to you.
      </p>

      <div className="mt-6 glass rounded-2xl border border-white/10 p-6">
        <ContactForm />
      </div>
    </main>
  );
}
