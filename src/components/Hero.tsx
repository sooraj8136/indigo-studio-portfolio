import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6"
    >

      {/* Dark overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="font-mono text-xs uppercase tracking-[0.3em] text-zinc-400"
        >
          — Freelance Web Design
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 2.8,
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mt-8 text-5xl font-bold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
        >
          We design experiences
          <br />
          <span className="text-zinc-400">people remember.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.1, duration: 0.8 }}
          className="mx-auto mt-8 max-w-lg text-base text-zinc-400 md:text-lg"
        >
          Premium digital interfaces for modern brands. Studios, startups, and
          founders who care about the details.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.3, duration: 0.7 }}
          className="mt-12 flex items-center justify-center"
        >
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 overflow-hidden border border-[color:var(--indigo)] px-7 py-4 font-mono text-xs uppercase tracking-[0.2em] text-white"
          >
            {/* Sliding background */}
            <span className="absolute inset-0 -translate-x-full bg-[color:var(--indigo)] transition-transform duration-500 ease-out group-hover:translate-x-0" />

            {/* Text */}
            <span className="relative z-10">View our work</span>

            {/* Icon */}
            <ArrowRight className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>

      {/* Scroll text */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 font-mono text-[10px] uppercase tracking-[0.3em] text-zinc-500"
      >
        Scroll to explore ↓
      </motion.div>
    </section>
  );
}