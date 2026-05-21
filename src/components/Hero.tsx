import HeroScene from "./HeroScene";

export default function Hero() {
  return (
    <section id="top" className="relative h-screen min-h-[680px] w-full overflow-hidden">
      <HeroScene />
      {/* radial darken to focus center text */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <span className="font-mono-label text-indigo-400">— Freelance Web Design</span>
        <h1 className="mt-6 text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl md:text-7xl">
          We design experiences
          <br />
          <span className="text-zinc-400">people remember.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base text-zinc-400 md:text-lg">
          Premium digital interfaces for modern brands. Studios, startups, and founders who care
          about the details.
        </p>
        <a
          href="#work"
          className="group mt-10 inline-flex items-center gap-2 rounded-md border border-indigo-500 px-6 py-3 font-mono-label text-white transition-all hover:bg-indigo-500"
        >
          View our work
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </a>
      </div>
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 font-mono-label text-zinc-500">
        Scroll ↓
      </div>
    </section>
  );
}
