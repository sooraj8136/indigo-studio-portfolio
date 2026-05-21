import { useState, type FormEvent } from "react";
import { z } from "zod";
import { FadeUp, SectionLabel } from "./Section";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  message: z.string().trim().min(1, "Required").max(1000),
});

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const r = schema.safeParse(data);
    if (!r.success) {
      const fe: Record<string, string> = {};
      r.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
      setErrors(fe);
      setStatus("error");
      return;
    }
    setErrors({});
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>06 — Contact</SectionLabel>
          <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Let's build something great.
          </h2>
          <p className="mt-6 max-w-xl text-zinc-400">
            Tell us about your project. We reply within one business day.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-6">
            <a
              href="mailto:hello@studio.design"
              className="font-mono-label text-zinc-300 transition-colors hover:text-indigo-400"
            >
              hello@studio.design
            </a>
            <a
              href="#contact-form"
              className="group inline-flex items-center gap-2 rounded-md border border-indigo-500 px-5 py-3 font-mono-label text-white transition-colors hover:bg-indigo-500"
            >
              Start a project
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <form
            id="contact-form"
            onSubmit={onSubmit}
            className="mt-16 grid grid-cols-1 gap-6 rounded-lg border hairline bg-zinc-950 p-8 md:p-10"
          >
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Field label="Name" name="name" error={errors.name}>
                <input
                  name="name"
                  maxLength={100}
                  className="w-full border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
                />
              </Field>
              <Field label="Email" name="email" error={errors.email}>
                <input
                  type="email"
                  name="email"
                  maxLength={255}
                  className="w-full border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
                />
              </Field>
            </div>
            <Field label="Message" name="message" error={errors.message}>
              <textarea
                name="message"
                rows={5}
                maxLength={1000}
                className="w-full resize-none border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
              />
            </Field>
            <div className="flex items-center justify-between">
              <p className="font-mono-label text-zinc-500">
                {status === "sent" ? "✓ Message sent" : "We'll get back within 24h"}
              </p>
              <button
                type="submit"
                className="group inline-flex items-center gap-2 rounded-md border border-indigo-500 px-6 py-3 font-mono-label text-white transition-colors hover:bg-indigo-500"
              >
                Send message
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </div>
          </form>
        </FadeUp>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  error,
  children,
}: {
  label: string;
  name: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label htmlFor={name} className="block">
      <span className="font-mono-label text-zinc-500">{label}</span>
      {children}
      {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
    </label>
  );
}
