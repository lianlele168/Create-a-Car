import type { Metadata } from "next";
import { Car, Database, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "About Create a Car Wiki",
  description: "About this unofficial Create a Car Roblox wiki, its sources, and its update policy.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <main className="page-shell py-10">
      <section className="mb-10 max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-100">
          <Car className="h-4 w-4 text-cyan-300" />
          About this wiki
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">About Create a Car Wiki</h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          This is an unofficial fan-made companion site for Create a Car on Roblox. It helps players copy codes, plan cash upgrades, compare build archetypes, and avoid risky progression traps.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <div className="surface p-6">
          <Database className="mb-4 h-8 w-8 text-cyan-300" />
          <h2 className="mb-2 text-xl font-black text-white">Public sources</h2>
          <p className="text-sm leading-7 text-slate-300">Game stats come from Roblox public data. Codes are cross-checked against public code pages and labeled by confidence.</p>
        </div>
        <div className="surface p-6">
          <ShieldCheck className="mb-4 h-8 w-8 text-amber-300" />
          <h2 className="mb-2 text-xl font-black text-white">No hidden stat claims</h2>
          <p className="text-sm leading-7 text-slate-300">The tier list ranks build purposes instead of inventing exact hidden part values.</p>
        </div>
        <div className="surface p-6">
          <Car className="mb-4 h-8 w-8 text-cyan-300" />
          <h2 className="mb-2 text-xl font-black text-white">Unofficial</h2>
          <p className="text-sm leading-7 text-slate-300">This site is not affiliated with Roblox Corporation, AssemblerX, or any official Create a Car channel.</p>
        </div>
      </section>
    </main>
  );
}
