import { FadeUp, SectionLabel } from "./Section";

const TECH = [
  "React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion",
  "GSAP", "Three.js", "Figma", "Webflow", "Shopify", "Sanity", "Vercel",
];

export default function Tech() {
  return (
    <section id="tech" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>03 — Technologies</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            A focused stack. No fads.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            We ship on tooling that's fast today and maintainable in five years.
          </p>
        </FadeUp>
        <FadeUp delay={0.1}>
          <div className="mt-12 flex flex-wrap gap-3">
            {TECH.map((t) => (
              <span
                key={t}
                className="rounded-md border hairline px-4 py-2 font-mono-label text-zinc-300 transition-colors hover:border-indigo-500/60 hover:text-white"
              >
                {t}
              </span>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
