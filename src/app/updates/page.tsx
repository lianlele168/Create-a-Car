import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, CheckCircle2, ExternalLink, Key, RefreshCw } from "lucide-react";
import config from "@/data/game.config.json";
import codes from "@/data/codes.json";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Updates & Sources",
  description:
    "Track Create a Car Roblox stats, code-source conflicts, public data sources, and update notes for this unofficial wiki.",
  alternates: { canonical: "/updates" },
};

const faqs = [
  {
    question: "Why do Create a Car code sources disagree?",
    answer:
      "Roblox code pages update on different schedules. This page records conflicts instead of hiding them.",
  },
  {
    question: "Which data is from Roblox directly?",
    answer:
      "Game name, developer, description, visits, favorites, max players, genre, and update timestamps were pulled from Roblox public pages and APIs.",
  },
  {
    question: "When was this Create a Car wiki checked?",
    answer:
      "This wiki is re-checked regularly against the in-game shop and the official Roblox description.",
  },
];

export default function UpdatesPage() {
  const active = codes.filter((code) => code.status === "active");
  const needsCheck = codes.filter((code) => code.status === "needs-check");
  const expired = codes.filter((code) => code.status === "expired");
  const schema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Updates", item: absoluteUrl("/updates/") },
  ]);
  const faqSchema = buildFAQSchema(faqs);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <main className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
            <RefreshCw className="h-4 w-4 text-amber-300" />
            Source log
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Updates & Sources</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page records what was checked, where the code conflicts are, and which public Roblox data powers this unofficial wiki.
          </p>
        </section>

        <section className="mb-10 grid gap-4 md:grid-cols-4">
          <div className="metric-tile">
            <span className="text-xs text-slate-400">Visits</span>
            <strong className="block font-mono text-2xl text-white">{config.stats.visits}</strong>
          </div>
          <div className="metric-tile">
            <span className="text-xs text-slate-400">Playing</span>
            <strong className="block font-mono text-2xl text-cyan-200">{config.stats.onlineNow}</strong>
          </div>
          <div className="metric-tile">
            <span className="text-xs text-slate-400">Favorites</span>
            <strong className="block font-mono text-2xl text-white">{config.stats.favorites}</strong>
          </div>
          <div className="metric-tile">
            <span className="text-xs text-slate-400">Max Players</span>
            <strong className="block font-mono text-2xl text-white">{config.stats.maxPlayers}</strong>
          </div>
        </section>

        <section className="mb-10 grid gap-5 lg:grid-cols-3">
          <div className="surface p-5">
            <CheckCircle2 className="mb-3 h-7 w-7 text-cyan-300" />
            <h2 className="mb-2 text-xl font-black text-white">{active.length} active codes</h2>
            <p className="text-sm leading-6 text-slate-300">CONVEYOR, GRIND, and FIXES appear current across multiple checked sources.</p>
          </div>
          <div className="surface p-5">
            <AlertTriangle className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 text-xl font-black text-white">{needsCheck.length} needs-check codes</h2>
            <p className="text-sm leading-6 text-slate-300">These codes are useful search terms but have source conflicts or single-source status.</p>
          </div>
          <div className="surface p-5">
            <Key className="mb-3 h-7 w-7 text-slate-400" />
            <h2 className="mb-2 text-xl font-black text-white">{expired.length} expired codes</h2>
            <p className="text-sm leading-6 text-slate-300">Expired entries are preserved for players checking old YouTube or social posts.</p>
          </div>
        </section>

        <section className="mb-10 surface p-6">
          <h2 className="mb-5 text-2xl font-black text-white">Checked sources</h2>
          <div className="grid gap-3 md:grid-cols-2">
            {config.sources.map((source) => (
              <a key={source.url} href={source.url} target="_blank" rel="noopener noreferrer" className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-4 hover:border-cyan-300/40">
                <span>
                  <span className="block font-black text-white">{source.name}</span>
                  <span className="block truncate text-xs text-slate-500">{source.url}</span>
                </span>
                <ExternalLink className="h-4 w-4 text-amber-300" />
              </a>
            ))}
          </div>
        </section>

        <section className="surface p-6">
          <h2 className="mb-4 text-2xl font-black text-white">Code conflict notes</h2>
          <div className="space-y-3">
            {needsCheck.map((code) => (
              <div key={code.code} className="rounded-md border border-amber-300/20 bg-amber-300/10 p-4">
                <h3 className="font-mono font-black text-amber-100">{code.code}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{code.source}</p>
                {"specialNote" in code && code.specialNote ? <p className="mt-2 text-xs text-amber-100">{code.specialNote}</p> : null}
              </div>
            ))}
          </div>
          <Link href="/codes" className="btn-primary mt-6">
            Review Codes
          </Link>
        </section>
      </main>
    </>
  );
}
