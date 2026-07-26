import { stats } from "@/lib/data";

// The page's signature element: a card styled like a hybrid of an academic
// transcript and a live analytics readout — hairline rules, tabular
// mono figures, a gold "seal" corner. It reappears (in different sizes)
// in the hero and the outcomes section to tie credentialing + dashboards
// into one visual idea.
export default function Ledger() {
  return (
    <div className="ledger-corner w-full max-w-sm rounded-sm border border-ink-900/10 bg-white/70 p-6 shadow-[0_1px_0_0_rgba(11,18,32,0.06)] backdrop-blur-sm">
      <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-slate-500">
        Cohort readout — Live
      </p>
      <div className="mt-4 divide-y divide-ink-900/10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex items-baseline justify-between py-3 first:pt-0 last:pb-0">
            <span className="font-body text-sm text-slate-600">{stat.label}</span>
            <span className="tabular font-mono text-lg font-medium text-ink-900">
              {stat.value}
            </span>
          </div>
        ))}
      </div>
      <div className="hairline-gold mt-4 pt-3">
        <p className="font-mono text-[11px] text-slate-500">
          Updated monthly · verified by Accredian Enterprise
        </p>
      </div>
    </div>
  );
}
