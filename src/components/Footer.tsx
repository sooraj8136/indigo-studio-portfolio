import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t hairline px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <p className="font-mono-label text-zinc-500">
          © {new Date().getFullYear()} Studio. All rights reserved.
        </p>
        <div className="flex items-center gap-5 text-zinc-500">
          <a href="#" aria-label="Twitter" className="transition-colors hover:text-indigo-400">
            <Twitter className="h-4 w-4" />
          </a>
          <a href="#" aria-label="GitHub" className="transition-colors hover:text-indigo-400">
            <Github className="h-4 w-4" />
          </a>
          <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-indigo-400">
            <Linkedin className="h-4 w-4" />
          </a>
          <a href="#" aria-label="Instagram" className="transition-colors hover:text-indigo-400">
            <Instagram className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
