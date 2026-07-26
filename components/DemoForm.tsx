"use client";

import { useState, type FormEvent } from "react";
import Reveal from "./Reveal";

type Status = "idle" | "loading" | "success" | "error";

export default function DemoForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState<string>("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? ""),
      workEmail: String(data.get("workEmail") ?? ""),
      company: String(data.get("company") ?? ""),
      teamSize: String(data.get("teamSize") ?? ""),
    };

    try {
      const res = await fetch("/api/demo-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json();

      if (!res.ok || !result.ok) {
        setStatus("error");
        setMessage(result.error ?? "Something went wrong. Try again.");
        return;
      }

      setStatus("success");
      setMessage(result.message);
      form.reset();
    } catch {
      setStatus("error");
      setMessage("Couldn't reach the server. Check your connection and try again.");
    }
  }

  return (
    <section id="demo" className="border-b border-ink-900/10 bg-white/50">
      <div className="mx-auto max-w-8xl px-6 py-20 lg:px-10 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-gold-600">
              Talk to the enterprise team
            </p>
            <h2 className="mt-4 font-display text-3xl leading-tight tracking-tight text-ink-900 sm:text-4xl">
              Get a learning plan scoped to your organization.
            </h2>
            <p className="mt-5 max-w-md font-body text-[15px] leading-relaxed text-slate-600">
              Share a few details and a consultant will follow up with a
              proposed curriculum, timeline, and pricing for your team size.
            </p>
          </Reveal>

          <Reveal delayMs={120}>
            <form onSubmit={handleSubmit} className="rounded-sm border border-ink-900/10 bg-paper-50 p-7 sm:p-9" noValidate>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="sm:col-span-1">
                  <label htmlFor="name" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                    Full name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="mt-2 w-full rounded-sm border border-ink-900/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink-900 outline-none placeholder:text-slate-400"
                    placeholder="Jordan Lee"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="workEmail" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                    Work email
                  </label>
                  <input
                    id="workEmail"
                    name="workEmail"
                    type="email"
                    required
                    autoComplete="email"
                    className="mt-2 w-full rounded-sm border border-ink-900/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink-900 outline-none placeholder:text-slate-400"
                    placeholder="jordan@company.com"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="company" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                    Company
                  </label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    required
                    autoComplete="organization"
                    className="mt-2 w-full rounded-sm border border-ink-900/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink-900 outline-none placeholder:text-slate-400"
                    placeholder="Acme Corp"
                  />
                </div>
                <div className="sm:col-span-1">
                  <label htmlFor="teamSize" className="font-mono text-[11px] uppercase tracking-[0.1em] text-slate-500">
                    Team size
                  </label>
                  <select
                    id="teamSize"
                    name="teamSize"
                    className="mt-2 w-full rounded-sm border border-ink-900/15 bg-white px-3.5 py-2.5 font-body text-sm text-ink-900 outline-none"
                    defaultValue="10-50"
                  >
                    <option value="1-10">1–10</option>
                    <option value="10-50">10–50</option>
                    <option value="50-200">50–200</option>
                    <option value="200+">200+</option>
                  </select>
                </div>
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="mt-7 w-full rounded-sm bg-ink-900 px-6 py-3.5 font-body text-sm font-medium text-paper-50 transition-colors hover:bg-ink-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {status === "loading" ? "Sending…" : "Request a proposal"}
              </button>

              <div aria-live="polite" className="mt-4">
                {status === "success" && (
                  <p className="font-body text-sm text-teal-700">{message}</p>
                )}
                {status === "error" && (
                  <p className="font-body text-sm text-red-600">{message}</p>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
