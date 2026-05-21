import { FadeUp, SectionLabel } from "./Section";

const STATS = [
  { v: "12+", l: "Projects" },
  { v: "8", l: "Clients" },
  { v: "3", l: "Years" },
];

const TEAM = [
  { name: "Mara Voss", role: "Founder · Design Lead", initials: "MV" },
  { name: "Eliot Tanaka", role: "Senior UI Designer", initials: "ET" },
  { name: "Iris Holm", role: "Brand & Identity", initials: "IH" },
  { name: "Kai Mendez", role: "Engineer · Webflow", initials: "KM" },
];

export default function About() {
  return (
    <section id="about" className="border-t hairline px-6 py-32">
      <div className="mx-auto max-w-7xl">
        <FadeUp>
          <SectionLabel>05 — Studio</SectionLabel>
        </FadeUp>
        <div className="mt-10 grid grid-cols-1 gap-16 md:grid-cols-2">
          <FadeUp>
            <h2 className="text-3xl font-bold leading-[1.1] tracking-tight md:text-5xl">
              A small studio. <br />
              <span className="text-zinc-500">Built for focus, not scale.</span>
            </h2>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg leading-relaxed text-zinc-400">
              We're a four-person studio working with founders and product teams who care about how
              their software feels. No account managers, no slide decks — just designers and
              engineers shipping work we'd put our own name on.
            </p>
          </FadeUp>
        </div>

        <FadeUp delay={0.1}>
          <div className="mt-20 grid grid-cols-3 gap-8 border-y hairline py-10">
            {STATS.map((s) => (
              <div key={s.l}>
                <div className="text-3xl font-bold tracking-tight text-white md:text-5xl">{s.v}</div>
                <div className="mt-2 font-mono-label text-zinc-500">{s.l}</div>
              </div>
            ))}
          </div>
        </FadeUp>

        <div className="mt-20">
          <FadeUp>
            <SectionLabel>Team</SectionLabel>
            <h3 className="mt-4 text-2xl font-bold tracking-tight md:text-3xl">The people behind the work.</h3>
          </FadeUp>
          <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
            {TEAM.map((m, i) => (
              <FadeUp key={m.name} delay={i * 0.06}>
                <div className="group rounded-lg border hairline bg-zinc-950 p-6 transition-colors hover:border-indigo-500/60">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border hairline bg-black font-mono-label text-lg text-zinc-300 transition-colors group-hover:border-indigo-500/60 group-hover:text-indigo-400">
                    {m.initials}
                  </div>
                  <div className="mt-5 text-base font-semibold text-white">{m.name}</div>
                  <div className="mt-1 font-mono-label text-zinc-500">{m.role}</div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
