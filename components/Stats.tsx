import { stats } from "@/lib/data";
import Reveal from "./Reveal";

export default function Stats() {
  return (
    <section id="outcomes" className="border-b border-ink-900/10 bg-ink-900">
      <div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-24">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-400">
            Outcomes, not activity
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-paper-50 sm:text-4xl">
            The numbers L&amp;D leaders bring to the board.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delayMs={i * 90}>
              <div className="hairline-gold pt-5">
                <span className="tabular font-mono text-4xl font-medium text-paper-50 sm:text-5xl">
                  {stat.value}
                </span>
                <p className="mt-2 font-body text-sm text-slate-400">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
