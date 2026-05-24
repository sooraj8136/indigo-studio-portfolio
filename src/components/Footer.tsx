// import { Github, Twitter, Linkedin, Instagram } from "lucide-react";

// export default function Footer() {
//   return (
//     <footer className="border-t hairline px-6 py-10">
//       <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
//         <p className="font-mono-label text-zinc-500">
//           © {new Date().getFullYear()} Studio. All rights reserved.
//         </p>
//         <div className="flex items-center gap-5 text-zinc-500">
//           <a href="#" aria-label="Twitter" className="transition-colors hover:text-indigo-400">
//             <Twitter className="h-4 w-4" />
//           </a>
//           <a href="#" aria-label="GitHub" className="transition-colors hover:text-indigo-400">
//             <Github className="h-4 w-4" />
//           </a>
//           <a href="#" aria-label="LinkedIn" className="transition-colors hover:text-indigo-400">
//             <Linkedin className="h-4 w-4" />
//           </a>
//           <a href="#" aria-label="Instagram" className="transition-colors hover:text-indigo-400">
//             <Instagram className="h-4 w-4" />
//           </a>
//         </div>
//       </div>
//     </footer>
//   );
// }


import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 relative overflow-hidden border-t border-zinc-800">
      {/* Background Subtle Glow Effect */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-zinc-800">

          {/* Brand Column (Takes 5 slots in medium screen) */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-indigo-400 to-purple-500">
              Code Wave Tech
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed max-w-sm">
              Riding the wave of innovation. We build high-performance web applications and digital experiences that scale.
            </p>
          </div>

          {/* Links Column (Takes 3 slots) */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Navigation</h3>
            <ul className="space-y-2.5 text-sm">
              {['Home', 'Services', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-indigo-400 transition-colors flex items-center"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Socials Column (Takes 4 slots) */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-sm font-semibold text-zinc-200 uppercase tracking-wider">Connect With Us</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:hello@codewavetech.com" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span>hello@codewavetech.com</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.79 11.79 0 0012.06 0C5.52 0 .2 5.32.2 11.86c0 2.1.55 4.15 1.6 5.96L0 24l6.37-1.67a11.82 11.82 0 005.69 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.41-8.44zM12.07 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.78 9.78 0 01-1.5-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 012.89 6.97c0 5.43-4.42 9.84-9.85 9.84zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.61.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>

                <span>+91 98765 43210</span>
              </a>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 hover:text-white transition-colors group"
              >
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg
                    className="w-4 h-4 text-zinc-400 group-hover:text-green-400"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.79 11.79 0 0012.06 0C5.52 0 .2 5.32.2 11.86c0 2.1.55 4.15 1.6 5.96L0 24l6.37-1.67a11.82 11.82 0 005.69 1.45h.01c6.54 0 11.86-5.32 11.86-11.86 0-3.17-1.24-6.15-3.41-8.44zM12.07 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.78.99 1.01-3.68-.23-.38a9.78 9.78 0 01-1.5-5.19c0-5.43 4.42-9.85 9.86-9.85 2.63 0 5.1 1.02 6.96 2.88a9.78 9.78 0 012.89 6.97c0 5.43-4.42 9.84-9.85 9.84zm5.4-7.37c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.46-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5s1.07 2.9 1.22 3.1c.15.2 2.1 3.2 5.08 4.48.71.3 1.27.48 1.7.61.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
                  </svg>
                </div>

                <span>+91 98765 43210</span>
              </a>

              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:text-white transition-colors group">
                <div className="p-2 bg-zinc-900 rounded-lg group-hover:bg-zinc-800 transition-colors">
                  <svg className="w-4 h-4 text-zinc-400 group-hover:text-pink-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" strokeWidth="2"></rect>
                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" strokeWidth="2"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2"></line>
                  </svg>
                </div>
                <span>@codewavetech</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 space-y-4 sm:space-y-0">
          <p>&copy; {new Date().getFullYear()} Code Wave Tech. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#privacy" className="hover:text-zinc-300 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-zinc-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}