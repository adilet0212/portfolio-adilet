// src/components/ContactForm.tsx
"use client";

import { useState } from "react";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Enter a valid email."),
  subject: z.string().min(2, "Enter a subject."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] =
    useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      const issues = parsed.error.issues;
      setError(issues[0]?.message || "Please check your inputs.");
      return;
    }

    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        setStatus("error");
        setError(data?.error || "Failed to send message.");
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setError("Network error.");
    }
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="name">
            Name
          </label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700"
            placeholder="Your name"
            required
          />
        </div>

        <div>
          <label className="mb-1 block text-sm font-medium" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700"
            placeholder="you@example.com"
            required
          />
        </div>
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="subject">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          value={form.subject}
          onChange={onChange}
          className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700"
          placeholder="How can I help?"
          required
        />
      </div>

      <div>
        <label className="mb-1 block text-sm font-medium" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          value={form.message}
          onChange={onChange}
          className="w-full rounded-xl border border-neutral-200 bg-transparent px-3 py-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-neutral-300 dark:border-neutral-700"
          placeholder="Write your message…"
          required
        />
      </div>

      {error && (
        <div className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm text-rose-700 dark:border-rose-900/40 dark:bg-rose-900/20 dark:text-rose-200">
          {error}
        </div>
      )}

      {status === "success" && (
        <div className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm text-emerald-700 dark:border-emerald-900/40 dark:bg-emerald-900/20 dark:text-emerald-200">
          Message sent. Thanks! I’ll reply to your email.
        </div>
      )}

      <div className="flex items-center gap-3">
        <button
          type="submit"
          disabled={status === "loading"}
          className="btn btn-ghost btn-sm btn-border focus-visible:outline-none focus-visible:ring-0"
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>

        <a
          className="text-sm underline opacity-80"
          href="mailto:amasalbekov12@gmail.com?subject=Portfolio%20Contact"
        >
          or email me directly
        </a>
      </div>
    </form>
  );
}
