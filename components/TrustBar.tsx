import { partnerInstitutes } from "@/lib/data";

export default function TrustBar() {
  return (
    <section id="platform" className="border-b border-ink-900/10 bg-white/50">
      <div className="mx-auto max-w-8xl px-6 py-8 lg:px-10">
        <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-slate-400">
          Curriculum co-designed with
        </p>
        <div className="flex flex-wrap items-center gap-x-10 gap-y-3">
          {partnerInstitutes.map((name) => (
            <span
              key={name}
              className="font-display text-lg italic text-slate-500"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
