// import { useState, type FormEvent } from "react";
// import { z } from "zod";
// import { FadeUp, SectionLabel } from "./Section";
// import { ArrowRight } from "lucide-react";

// const schema = z.object({
//   name: z.string().trim().min(1, "Required").max(100),
//   email: z.string().trim().email("Invalid email").max(255),
//   message: z.string().trim().min(1, "Required").max(1000),
// });

// export default function Contact() {
//   const [status, setStatus] = useState<"idle" | "sent" | "error">("idle");
//   const [errors, setErrors] = useState<Record<string, string>>({});

//   const onSubmit = (e: FormEvent<HTMLFormElement>) => {
//     e.preventDefault();
//     const data = Object.fromEntries(new FormData(e.currentTarget));
//     const r = schema.safeParse(data);
//     if (!r.success) {
//       const fe: Record<string, string> = {};
//       r.error.issues.forEach((i) => (fe[i.path[0] as string] = i.message));
//       setErrors(fe);
//       setStatus("error");
//       return;
//     }
//     setErrors({});
//     setStatus("sent");
//     (e.target as HTMLFormElement).reset();
//   };

//   return (
//     <section id="contact" className="border-t hairline px-6 py-32">
//       <div className="mx-auto max-w-7xl">
//         <FadeUp>
//           <SectionLabel>06 — Contact</SectionLabel>
//           <h2 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
//             Let's build something great.
//           </h2>
//           <p className="mt-6 max-w-xl text-zinc-400">
//             Tell us about your project. We reply within one business day.
//           </p>
//           <div className="mt-8 flex flex-wrap items-center gap-6">
//             <a
//               href="mailto:hello@studio.design"
//               className="font-mono-label text-zinc-300 transition-colors hover:text-indigo-400"
//             >
//               hello@studio.design
//             </a>
//             <a
//               href="#contact-form"
//               className="group relative inline-flex items-center gap-2 overflow-hidden border border-[color:var(--indigo)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white"
//             >
//               <span className="absolute inset-0 -translate-x-full bg-[color:var(--indigo)] transition-transform duration-500 ease-out group-hover:translate-x-0" />
//               <span className="relative z-10">Start a project</span>
//               <ArrowRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
//             </a>
//           </div>
//         </FadeUp>

//         <FadeUp delay={0.1}>
//           <form
//             id="contact-form"
//             onSubmit={onSubmit}
//             className="mt-16 grid grid-cols-1 gap-6 rounded-lg border hairline bg-zinc-950 p-8 md:p-10"
//           >
//             <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
//               <Field label="Name" name="name" error={errors.name}>
//                 <input
//                   name="name"
//                   maxLength={100}
//                   className="w-full border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
//                 />
//               </Field>
//               <Field label="Email" name="email" error={errors.email}>
//                 <input
//                   type="email"
//                   name="email"
//                   maxLength={255}
//                   className="w-full border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
//                 />
//               </Field>
//             </div>
//             <Field label="Message" name="message" error={errors.message}>
//               <textarea
//                 name="message"
//                 rows={5}
//                 maxLength={1000}
//                 className="w-full resize-none border-b hairline bg-transparent py-3 text-white outline-none transition-colors focus:border-indigo-500"
//               />
//             </Field>
//             <div className="flex items-center justify-between">
//               {/* <p className="font-mono-label text-zinc-500">
//                 {status === "sent" ? "✓ Message sent" : "We'll get back within 24h"}
//               </p> */}
//               <button
//                 type="submit"
//                 className="group relative inline-flex items-center gap-2 overflow-hidden border border-[color:var(--indigo)] px-4 py-2.5 font-mono text-[10px] uppercase tracking-[0.15em] text-white"
//               >
//                 <span className="absolute inset-0 -translate-x-full bg-[color:var(--indigo)] transition-transform duration-500 ease-out group-hover:translate-x-0" />
//                 <span className="relative z-10">Send message</span>
//                 <ArrowRight className="relative z-10 h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
//               </button>
//             </div>
//           </form>
//         </FadeUp>
//       </div>
//     </section>
//   );
// }

// function Field({
//   label,
//   name,
//   error,
//   children,
// }: {
//   label: string;
//   name: string;
//   error?: string;
//   children: React.ReactNode;
// }) {
//   return (
//     <label htmlFor={name} className="block">
//       <span className="font-mono-label text-zinc-500">{label}</span>
//       {children}
//       {error && <span className="mt-1 block text-xs text-red-400">{error}</span>}
//     </label>
//   );
// }







import React, { useState } from "react";
import { ArrowRight, Mail, MessageSquare, PhoneCall } from "lucide-react";
import { FadeUp, SectionLabel } from "./Section";

export default function Contact() {
  type FormData = {
    name: string;
    email: string;
    phone: string;
    message: string;
  };

  const initialFormData: FormData = {
    name: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const key = e.target.name as keyof FormData;

    setFormData((prev) => ({
      ...prev,
      [key]: e.target.value,
    }));
  };

  //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //     e.preventDefault();

  //     const whatsappNumber = "918921234567"; // നിങ്ങളുടെ WhatsApp Number

  //     const text = `
  // 🚀 New Project Inquiry

  // 👤 Name: ${formData.name}

  // 📧 Email: ${formData.email}

  // 📱 Phone: ${formData.phone}

  // 💬 Message:
  // ${formData.message}
  // `;

  //     const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  //       text,
  //     )}`;

  //     window.open(whatsappUrl, "_blank");

  //     setFormData({
  //       name: "",
  //       email: "",
  //       phone: "",
  //       message: "",
  //     });
  //   };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://formsubmit.co/ajax/connect@codewavetech.com",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            message: formData.message,
            _subject: "🚀 New Project Inquiry",
          }),
        },
      );

      const data = await response.json();

      if (data.success === "true" || data.success) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong!");
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
                    <p className="mt-1 text-sm text-white">
                      connect@codewavetech.com
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border hairline bg-zinc-950 p-4 transition-colors duration-300 hover:border-indigo-500/60">
                  <PhoneCall className="h-4 w-4 text-zinc-400" />

                  <div>
                    <p className="font-mono-label text-zinc-500">Phone</p>
                    <p className="mt-1 text-sm text-white">
                      +91 89212 34567
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-lg border hairline bg-zinc-950 p-4 transition-colors duration-300 hover:border-indigo-500/60">
                  <PhoneCall className="h-4 w-4 text-zinc-400" />

                  <div>
                    <p className="font-mono-label text-zinc-500">Phone</p>
                    <p className="mt-1 text-sm text-white">
                      +91 89212 34567
                    </p>
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
                    className="w-full rounded-xl border hairline bg-black px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-zinc-600 focus:border-indigo-500/70"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <p className="text-sm text-zinc-400">
                  We usually reply within one business day.
                </p>
                <button
                  type="submit"
                  className="group relative inline-flex items-center gap-3 overflow-hidden border border-[color:var(--indigo)] px-5 py-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white"
                >
                  <span className="absolute inset-0 -translate-x-full bg-[color:var(--indigo)] transition-transform duration-500 ease-out group-hover:translate-x-0" />
                  <span className="relative z-10">Send message</span>
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