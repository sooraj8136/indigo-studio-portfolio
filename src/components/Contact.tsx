import React, { useState } from "react";
import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { FadeUp, SectionLabel } from "./Section";

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type SubmitState = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const key = e.target.name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSubmitState("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      let payload: { success?: boolean; error?: string } = {};
      try {
        payload = (await response.json()) as { success?: boolean; error?: string };
      } catch {
        payload = {};
      }

      if (!response.ok) {
        throw new Error(payload.error ?? "Unable to send your message right now.");
      }

      setSubmitState("success");
      setStatusMessage("Thanks! Your message has been saved to the MERN backend.");
      setFormData(initialFormData);
    } catch (error) {
      setSubmitState("error");
      setStatusMessage(
        error instanceof Error
          ? error.message
          : "Something went wrong while sending your message.",
      );
    }
  };

  return (
    <section id="contact" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>06 — Contact</SectionLabel>
          <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_1.4fr] lg:items-end">
            <div>
              <h2 className="max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
                Let’s build something memorable.
              </h2>
              <p className="mt-5 max-w-xl text-zinc-400">
                Tell us about your project, your timeline, or the problems you want solved.
                We’ll reply within one business day.
              </p>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-14 grid gap-6 lg:grid-cols-[0.9fr_1.3fr]">
            <div className="space-y-4">
              <div className="rounded-lg border hairline bg-zinc-950 p-6">
                <p className="font-mono-label text-zinc-500">How we work</p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-300">
                  Strategy, design, and development in one focused partnership. We keep the process
                  tight, the communication clear, and the outputs polished.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-lg border hairline bg-zinc-950 p-4 transition-colors duration-300 hover:border-indigo-500/60">
                  <Mail className="h-4 w-4 text-zinc-400" />

                  <div>
                    <p className="font-mono-label text-zinc-500">Email</p>
                    <p className="mt-1 text-sm text-white">connect@codewavetech.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border hairline bg-zinc-950 p-4 transition-colors duration-300 hover:border-indigo-500/60">
                  <PhoneCall className="h-4 w-4 text-zinc-400" />

                  <div>
                    <p className="font-mono-label text-zinc-500">Phone</p>
                    <p className="mt-1 text-sm text-white">+91 89212 34567</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border hairline bg-zinc-950 p-4 transition-colors duration-300 hover:border-indigo-500/60">
                  <PhoneCall className="h-4 w-4 text-zinc-400" />

                  <div>
                    <p className="font-mono-label text-zinc-500">Phone</p>
                    <p className="mt-1 text-sm text-white">+91 89212 34567</p>
                  </div>
                </div>
              </div>
            </div>

            <form
              id="contact-form"
              onSubmit={handleSubmit}
              className="rounded-lg border hairline bg-zinc-950 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm text-zinc-300 sm:col-span-1">
                  <span className="mb-2 block font-mono-label">Full Name</span>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-xl border hairline bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-500/70"
                  />
                </label>

                <label className="block text-sm text-zinc-300 sm:col-span-1">
                  <span className="mb-2 block font-mono-label">Email Address</span>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-xl border hairline bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-500/70"
                  />
                </label>

                <label className="block text-sm text-zinc-300 sm:col-span-2">
                  <span className="mb-2 block font-mono-label">Phone Number</span>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 89212 34567"
                    disabled={submitState === "submitting"}
                    className="w-full rounded-xl border hairline bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-500/70"
                  />
                </label>

                <label className="block text-sm text-zinc-300 sm:col-span-2">
                  <span className="mb-2 block font-mono-label">Project Brief</span>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project, timeline, and goals."
                    disabled={submitState === "submitting"}
                    className="w-full rounded-xl border hairline bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-500/70"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-zinc-400">
                    We usually reply within one business day.
                  </p>
                  {statusMessage ? (
                    <p
                      aria-live="polite"
                      className={`mt-2 text-sm ${
                        submitState === "success" ? "text-emerald-400" : "text-rose-400"
                      }`}
                    >
                      {statusMessage}
                    </p>
                  ) : null}
                </div>
                <button
                  type="submit"
                  disabled={submitState === "submitting"}
                  className="group relative inline-flex items-center gap-3 overflow-hidden border border-[color:var(--indigo)] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[color:var(--indigo)] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10">
                    {submitState === "submitting" ? "Sending..." : "Send message"}
                  </span>
                  <ArrowRight className="relative z-10 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
