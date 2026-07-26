import { features } from "@/lib/data";
import Reveal from "./Reveal";

export default function Features() {
  return (
    <section id="programs" className="border-b border-ink-900/10 bg-white/50">
      <div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
            The platform
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Everything an L&amp;D team needs to run learning like a product.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-ink-900/10 bg-ink-900/10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <Reveal key={feature.title} delayMs={(i % 3) * 90}>
              <div className="h-full bg-paper-50 p-7 transition-colors hover:bg-white">
                <h3 className="font-display text-lg text-ink-900">{feature.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate-600">
                  {feature.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
