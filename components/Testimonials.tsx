import { testimonials } from "@/lib/data";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="stories" className="border-b border-ink-900/10">
      <div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
            From L&amp;D leaders
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            What changes after the first cohort.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delayMs={i * 100}>
              <figure className="flex h-full flex-col justify-between rounded-sm border border-ink-900/10 bg-white/60 p-7">
                <blockquote className="font-display text-lg italic leading-relaxed text-ink-900">
                  "{t.quote}"
                </blockquote>
                <figcaption className="hairline mt-6 pt-4">
                  <p className="font-body text-sm font-semibold text-ink-900">{t.name}</p>
                  <p className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                    {t.role}, {t.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
