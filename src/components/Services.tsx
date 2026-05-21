import { Layout, MousePointer2, Sparkles } from "lucide-react";
import { FadeUp, SectionLabel } from "./Section";

const SERVICES = [
  {
    icon: Layout,
    title: "Web Design",
    body: "Marketing sites, landing pages, and editorial systems built to convert and last.",
  },
  {
    icon: MousePointer2,
    title: "UI / UX Design",
    body: "Interface systems for SaaS and product teams — clear hierarchy, real flows.",
  },
  {
    icon: Sparkles,
    title: "Brand Identity",
    body: "Wordmarks, type systems, and digital brand guidelines that scale beyond launch.",
  },
];

export default function Services() {
  return (
    <section id="services" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>02 — Services</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            What we do, end to end.
          </h2>
        </FadeUp>
        <div className="mt-16 grid grid-cols-1 gap-px overflow-hidden rounded-lg border hairline bg-white/[0.04] md:grid-cols-3">
          {SERVICES.map((s, i) => (
            <FadeUp key={s.title} delay={i * 0.08} className="bg-black">
              <div className="group h-full border-transparent p-8 transition-colors hover:bg-zinc-950">
                <s.icon className="h-7 w-7 text-zinc-400 transition-colors group-hover:text-indigo-400" strokeWidth={1.5} />
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{s.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
