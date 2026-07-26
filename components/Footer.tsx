import { footerLinks } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink-900">
      <div className="mx-auto max-w-8xl px-6 py-16 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-sm bg-gold-500 font-mono text-sm text-ink-900">
                A
              </span>
              <span className="font-display text-lg font-medium text-paper-50">
                Accredian <span className="italic text-slate-400">Enterprise</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs font-body text-sm leading-relaxed text-slate-400">
              Custom upskilling for enterprise teams, built with IITs, IIMs,
              and global academic partners.
            </p>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-500">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#top"
                      className="font-body text-sm text-slate-400 transition-colors hover:text-paper-50"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="hairline-gold mt-14 flex flex-col gap-3 pt-6 text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-mono text-[11px]">
            © {year} Accredian Enterprise. Built as a portfolio clone for
            educational purposes.
          </p>
          <p className="font-mono text-[11px]">Gurugram, India</p>
        </div>
      </div>
    </footer>
  );
}
