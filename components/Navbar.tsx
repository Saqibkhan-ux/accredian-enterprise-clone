"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-900/10 bg-paper-50/85 backdrop-blur-md">
      <nav className="mx-auto flex max-w-8xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#top" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-ink-900 font-mono text-sm text-gold-400">
            A
          </span>
          <span className="font-display text-lg font-medium tracking-tight text-ink-900">
            Accredian <span className="italic text-slate-500">Enterprise</span>
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-[15px] text-slate-600 transition-colors hover:text-ink-900"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:block">
          <a
            href="#demo"
            className="rounded-sm bg-ink-900 px-5 py-2.5 font-body text-sm font-medium text-paper-50 transition-colors hover:bg-ink-700"
          >
            Book a demo
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          className="flex h-9 w-9 items-center justify-center rounded-sm border border-ink-900/15 lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-px w-5 bg-ink-900 transition-transform ${open ? "translate-y-1.5 rotate-45" : ""}`}
            />
            <span className={`h-px w-5 bg-ink-900 transition-opacity ${open ? "opacity-0" : ""}`} />
            <span
              className={`h-px w-5 bg-ink-900 transition-transform ${open ? "-translate-y-1.5 -rotate-45" : ""}`}
            />
          </div>
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-ink-900/10 bg-paper-50 px-6 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-body text-[15px] text-slate-600"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#demo"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-sm bg-ink-900 px-5 py-2.5 text-center font-body text-sm font-medium text-paper-50"
            >
              Book a demo
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
