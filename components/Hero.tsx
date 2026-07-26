import Ledger from "./Ledger";
import Reveal from "./Reveal";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-ink-900/10">
      <div className="mx-auto grid max-w-8xl gap-12 px-6 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-10 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
            Enterprise learning &amp; development
          </p>
          <h1 className="mt-5 font-display text-4xl leading-[1.08] tracking-tight text-ink-900 sm:text-5xl lg:text-6xl">
            Upskill your workforce like it's{" "}
            <span className="italic text-teal-700">infrastructure</span>, not a perk.
          </h1>
          <p className="mt-6 max-w-xl font-body text-lg leading-relaxed text-slate-600">
            Custom learning paths, practitioner mentorship, and a live ROI
            dashboard — co-designed with IITs, IIMs, and global universities,
            and built around your organization's actual skill gaps.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#demo"
              className="rounded-sm bg-ink-900 px-6 py-3.5 font-body text-sm font-medium text-paper-50 transition-colors hover:bg-ink-700"
            >
              Book a demo
            </a>
            <a
              href="#process"
              className="rounded-sm border border-ink-900/20 px-6 py-3.5 font-body text-sm font-medium text-ink-900 transition-colors hover:border-ink-900/40"
            >
              See how it works
            </a>
          </div>

          <p className="mt-8 font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400">
            Trusted by L&amp;D teams at 500+ organizations
          </p>
        </Reveal>

        <Reveal delayMs={150} className="lg:justify-self-end">
          <Ledger />
        </Reveal>
      </div>
    </section>
  );
}
