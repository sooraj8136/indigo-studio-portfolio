import { FadeUp, SectionLabel } from "./Section";

const PROJECTS = [
  { title: "Lumen Capital", tag: "Branding · Web", year: "2025", hue: "from-zinc-900 to-zinc-800" },
  { title: "Northwave Studios", tag: "UI · Web", year: "2025", hue: "from-zinc-950 to-zinc-900" },
  { title: "Orbital Labs", tag: "Product UI", year: "2024", hue: "from-zinc-900 to-zinc-950" },
  { title: "Field & Form", tag: "Branding · UX", year: "2024", hue: "from-zinc-950 to-zinc-800" },
];

export default function Work() {
  return (
    <section id="work" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>01 — Selected Work</SectionLabel>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight md:text-5xl">
            Quiet design. Loud results.
          </h2>
        </FadeUp>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <FadeUp key={p.title} delay={i * 0.08}>
              <article className="group relative overflow-hidden rounded-lg border hairline bg-zinc-950 transition-all duration-500 hover:-translate-y-1">
                <div className="absolute inset-x-0 top-0 h-px scale-x-0 bg-indigo-500 transition-transform duration-500 group-hover:scale-x-100" />
                <div className={`aspect-[16/9] w-full bg-gradient-to-br ${p.hue}`}>
                  <div className="flex h-full w-full items-center justify-center">
                    <span className="font-mono-label text-zinc-700 group-hover:text-indigo-400">
                      {p.title}
                    </span>
                  </div>
                </div>
                <div className="flex items-end justify-between p-6">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-white">{p.title}</h3>
                    <p className="mt-1 font-mono-label text-zinc-500">{p.tag}</p>
                  </div>
                  <span className="font-mono-label text-zinc-500">{p.year}</span>
                </div>
              </article>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
