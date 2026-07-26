import { processSteps } from "@/lib/data";
import Reveal from "./Reveal";

export default function Process() {
  return (
    <section id="process" className="border-b border-ink-900/10">
      <div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
            How it works
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
            Four steps from skills audit to measurable outcomes.
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-0 lg:grid-cols-4">
          {processSteps.map((step, i) => (
            <Reveal key={step.index} delayMs={i * 100}>
              <div
                className={`hairline pt-6 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 ${
                  i === 0 ? "lg:border-l-0" : ""
                }`}
              >
                <span className="font-mono text-sm text-gold-600">{step.index}</span>
                <h3 className="mt-3 font-display text-xl text-ink-900">{step.title}</h3>
                <p className="mt-3 font-body text-[15px] leading-relaxed text-slate-600">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
