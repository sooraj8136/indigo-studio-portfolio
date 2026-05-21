import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Tech", href: "#tech" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b hairline bg-black/60 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="text-base font-bold tracking-tight text-white">
          CODE<span className="text-[color:var(--indigo)]">.</span>WAVE
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono-label text-zinc-400 transition-colors hover:text-white"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="md:hidden text-white"
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 flex flex-col bg-black md:hidden">
          <div className="flex h-16 items-center justify-between border-b hairline px-6">
            <span className="text-base font-bold text-white">
              STUDIO<span className="text-indigo-500">.</span>
            </span>
            <button aria-label="Close menu" onClick={() => setOpen(false)} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-6 py-8">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b hairline py-4 text-2xl font-semibold tracking-tight text-white"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-6 rounded-md border border-indigo-500 px-4 py-3 text-center font-mono-label text-white"
            >
              Start a project →
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
