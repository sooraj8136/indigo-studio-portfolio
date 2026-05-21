import { Check } from "lucide-react";
import { FadeUp, SectionLabel } from "./Section";

const TIERS = [
  {
    name: "Landing",
    price: "$3,500",
    note: "starting at",
    desc: "A single, high-conversion page. Perfect for launches.",
    features: ["1 page, fully designed", "Custom illustrations", "2-week delivery", "1 round of revisions"],
  },
  {
    name: "Marketing Site",
    price: "$8,500",
    note: "starting at",
    desc: "A full site, designed and built. Our most popular engagement.",
    features: ["Up to 6 pages", "Design + development", "CMS integration", "4–6 week delivery"],
    featured: true,
  },
  {
    name: "Product / UX",
    price: "$14,000",
    note: "starting at",
    desc: "End-to-end product UI for SaaS and complex flows.",
    features: ["Design system", "Component library", "Engineering handoff", "Ongoing partnership"],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>04 — Pricing</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Clear pricing. Honest scope.
          </h2>
        </FadeUp>
        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
          {TIERS.map((t, i) => (
            <FadeUp key={t.name} delay={i * 0.08}>
              <div
                className={`relative h-full rounded-lg border p-8 transition-all hover:-translate-y-1 ${
                  t.featured
                    ? "border-indigo-500/60 bg-indigo-500/[0.04]"
                    : "hairline bg-zinc-950"
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 rounded bg-indigo-500 px-2 py-1 font-mono-label text-white">
                    Most popular
                  </span>
                )}
                <h3 className="text-xl font-semibold tracking-tight text-white">{t.name}</h3>
                <p className="mt-2 text-sm text-zinc-400">{t.desc}</p>
                <div className="mt-6 flex items-baseline gap-2">
                  <span className="text-4xl font-bold tracking-tight text-white">{t.price}</span>
                  <span className="font-mono-label text-zinc-500">{t.note}</span>
                </div>
                <ul className="mt-8 space-y-3">
                  {t.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-zinc-300">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-indigo-400" strokeWidth={2} />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
