import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import AuthorCard from "@/components/AuthorCard";
import {
  ArrowRight,
  Calculator,
  Car,
  CheckCircle2,
  Factory,
  Key,
  PackageOpen,
  ShieldCheck,
  Sparkles,
  Trophy,
  Wrench,
} from "lucide-react";
import config from "@/data/game.config.json";
import { getActiveCodes, getCodeRewardTotals, getNeedsCheckCodes, getProgressionPlans, getVehicleBuilds } from "@/lib/data";
import { buildFAQSchema, buildVideoGameSchema, buildWebsiteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Wiki - Codes, Calculator & Best Builds 2026",
  description:
    "Build a stronger Roblox garage with current Create a Car codes, a cash and upgrade calculator, build tier list, parts guide, conveyor strategy, and beginner guide.",
  alternates: { canonical: "/" },
};

const faqs = [
  {
    question: "What is Create a Car on Roblox?",
    answer:
      "Create a Car is a Roblox simulation tycoon by AssemblerX where players roll for car parts, combine parts into unique vehicles, earn cash over time, upgrade crates, and expand their garage.",
  },
  {
    question: "What are the safest Create a Car codes to try first?",
    answer:
      "CONVEYOR, GRIND, and FIXES are listed as current by multiple code sources. Other codes are included on the codes page with conflict notes.",
  },
  {
    question: "What should beginners upgrade first?",
    answer:
      "Build one reliable cash car before chasing rare showcase parts. Cash flow makes crate upgrades, garage expansion, and merge experiments safer.",
  },
  {
    question: "Is this an official Create a Car wiki?",
    answer:
      "No. This is an unofficial fan-made companion site that tracks public Roblox data, public code sources, and practical strategy notes.",
  },
  {
    question: "Does the tier list use hidden part stats?",
    answer:
      "No. The tier list avoids claiming hidden values and ranks build archetypes by visible purpose: cash farming, rare-part collection, dealer flips, and merge testing.",
  },
];

export default function HomePage() {
  const activeCodes = getActiveCodes();
  const needsCheckCodes = getNeedsCheckCodes();
  const totals = getCodeRewardTotals();
  const builds = getVehicleBuilds();
  const sTierBuilds = builds.filter((build) => build.tier === "S");
  const plans = getProgressionPlans();
  const schemas = [buildWebsiteSchema(), buildVideoGameSchema(), buildFAQSchema(faqs)];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <section className="hero-bg border-b border-white/10">
        <div className="page-shell grid min-h-[680px] items-center gap-10 py-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-3xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-slate-950/70 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
              <Car className="h-4 w-4 text-amber-300" />
              {config.game.currentVersion}
            </div>

            <h1 className="mb-5 text-4xl font-black tracking-tight text-white sm:text-6xl lg:text-7xl">
              Create a Car Wiki
            </h1>
            <p className="max-w-2xl text-base font-medium leading-8 text-slate-200 sm:text-lg">
              Copy current Roblox codes, estimate cash targets, compare build archetypes, and plan a garage that earns before it flexes.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/codes/" className="btn-primary">
                <Key className="h-5 w-5" />
                Copy Codes
              </Link>
              <Link href="/calculator/" className="btn-secondary">
                <Calculator className="h-5 w-5 text-cyan-300" />
                Open Calculator
              </Link>
              <Link href="/best-build/" className="btn-secondary">
                <Trophy className="h-5 w-5 text-amber-300" />
                Best Build
              </Link>
            </div>

            <div className="mt-10 grid max-w-4xl grid-cols-2 gap-3 sm:grid-cols-4">
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Visits</span>
                <span className="mt-1 block font-mono text-2xl font-black text-white">{config.stats.visits}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Playing</span>
                <span className="mt-1 block font-mono text-2xl font-black text-cyan-200">{config.stats.onlineNow}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Active Codes</span>
                <span className="mt-1 block font-mono text-2xl font-black text-amber-200">{activeCodes.length}</span>
              </div>
              <div className="metric-tile">
                <span className="block text-[11px] font-bold uppercase tracking-wide text-slate-400">Favorites</span>
                <span className="mt-1 block font-mono text-2xl font-black text-white">{config.stats.favorites}</span>
              </div>
            </div>
          </div>

          <div className="surface p-5 sm:p-6">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <h2 className="text-xl font-black text-white">Code Reward Bank</h2>
                <p className="text-xs font-semibold text-slate-400">High-confidence codes only</p>
              </div>
              <span className="badge-active">
                <CheckCircle2 className="h-3.5 w-3.5" />
                Source tracked
              </span>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-cyan-100">Cash</span>
                <strong className="mt-1 block font-mono text-2xl text-white">{totals.cash.toLocaleString()}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-cyan-100">Crates</span>
                <strong className="mt-1 block font-mono text-2xl text-white">{totals.crates}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs font-bold text-cyan-100">Boxes</span>
                <strong className="mt-1 block font-mono text-2xl text-white">{totals.partsBoxes}</strong>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {activeCodes.map((code) => (
                <Link key={code.code} href="/codes/" className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3 transition hover:border-amber-300/50">
                  <span>
                    <span className="block font-mono text-sm font-black text-amber-200">{code.code}</span>
                    <span className="block text-xs text-slate-400">{code.reward}</span>
                  </span>
                  <ArrowRight className="h-4 w-4 text-cyan-300" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* E-E-A-T AUTHOR VERIFICATION */}
      <div className="page-shell pt-8">
        <AuthorCard />

        {/* VISUAL GAMEPLAY SHOWCASE */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
          <div className="rounded-2xl overflow-hidden border border-sky-900/60 bg-sky-950/40 p-4">
            <Image
              src="/images/car-header.webp"
              alt="Create a Car Official Roblox Icon"
              width={512}
              height={512}
              className="rounded-xl object-cover w-full h-56 border border-sky-800/40"
              priority
            />
            <p className="text-xs text-sky-300 mt-2.5 text-center font-medium">
              Figure 1: Official Create a Car Icon by AssemblerX.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-sky-900/60 bg-sky-950/40 p-4">
            <Image
              src="/images/car-gameplay.webp"
              alt="Create a Car Active Garage Assembly"
              width={768}
              height={432}
              className="rounded-xl object-cover w-full h-56 border border-sky-800/40"
            />
            <p className="text-xs text-sky-300 mt-2.5 text-center font-medium">
              Figure 2: Active Conveyor Merging and Dyno Testing Arena.
            </p>
          </div>
        </div>
      </div>

      <section className="page-shell py-14">
        <div className="grid gap-5 lg:grid-cols-3">
          <Link href="/calculator/" className="surface p-6 transition hover:border-amber-300/40">
            <Calculator className="mb-4 h-9 w-9 text-amber-300" />
            <h2 className="mb-2 text-xl font-black text-white">Cash & Upgrade Calculator</h2>
            <p className="text-sm leading-6 text-slate-300">
              Enter the cash and income numbers visible in your server to estimate upgrade time, crate sessions, and safe reserves.
            </p>
          </Link>
          <Link href="/tier-list/" className="surface p-6 transition hover:border-amber-300/40">
            <Wrench className="mb-4 h-9 w-9 text-cyan-300" />
            <h2 className="mb-2 text-xl font-black text-white">Build Archetype Tier List</h2>
            <p className="text-sm leading-6 text-slate-300">
              Rank car builds by purpose instead of invented hidden stats: cash farm, showcase, dealer flip, or merge test.
            </p>
          </Link>
          <Link href="/best-build/" className="surface p-6 transition hover:border-amber-300/40">
            <Trophy className="mb-4 h-9 w-9 text-amber-300" />
            <h2 className="mb-2 text-xl font-black text-white">Best Build Path</h2>
            <p className="text-sm leading-6 text-slate-300">
              Build a cash engine first, then split rare parts and experiments into separate garage slots.
            </p>
          </Link>
        </div>
      </section>

      <section className="bg-white py-14 text-slate-950">
        <div className="page-shell">
          <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Priority builds</p>
              <h2 className="mt-2 text-3xl font-black tracking-tight">S-tier garage foundations</h2>
            </div>
            <Link href="/tier-list/" className="inline-flex items-center gap-2 text-sm font-black text-cyan-800 hover:text-cyan-600">
              Full tier list
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {sTierBuilds.map((build) => (
              <div key={build.id} className="surface-light p-6">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <h3 className="text-xl font-black">{build.name}</h3>
                  <span className={`rounded px-2 py-1 text-xs font-black tier-${build.tier.toLowerCase()}`}>{build.tier} Tier</span>
                </div>
                <p className="mb-4 text-sm leading-6 text-slate-700">{build.description}</p>
                <div className="grid gap-2 sm:grid-cols-3">
                  {build.bestFor.map((item) => (
                    <span key={item} className="rounded-md border border-cyan-900/10 bg-cyan-50 px-3 py-2 text-xs font-bold text-cyan-900">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-shell py-14">
        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-200">Fresh code logic</p>
            <h2 className="mt-2 text-3xl font-black tracking-tight text-white">Why this site splits code confidence</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Current Create a Car code pages disagree on MERGER, INDEX, DEALER, PRESTIGE, and NEWMERGER. This wiki keeps the search terms covered while labeling the risk clearly.
            </p>
            <Link href="/updates/" className="mt-6 inline-flex items-center gap-2 text-sm font-black text-amber-200 hover:text-amber-100">
              Review sources and conflicts
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="surface p-5">
            <div className="grid gap-3 sm:grid-cols-2">
              <div className="field-tile p-4">
                <Key className="mb-3 h-6 w-6 text-amber-300" />
                <strong className="block text-2xl text-white">{activeCodes.length} high-confidence</strong>
                <span className="text-sm text-slate-300">Listed current across multiple sources.</span>
              </div>
              <div className="rounded-md border border-amber-300/25 bg-amber-300/10 p-4">
                <Factory className="mb-3 h-6 w-6 text-amber-200" />
                <strong className="block text-2xl text-white">{needsCheckCodes.length} needs-check</strong>
                <span className="text-sm text-slate-300">Useful long-tail codes, marked cautiously.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="page-shell pb-16">
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-5">
          {plans.map((plan) => (
            <Link key={plan.id} href="/parts-guide/" className="surface p-5 transition hover:border-cyan-300/40">
              <PackageOpen className="mb-3 h-6 w-6 text-cyan-300" />
              <span className="mb-2 block text-[11px] font-black uppercase tracking-wide text-amber-200">{plan.stage}</span>
              <h3 className="mb-2 text-lg font-black text-white">{plan.name}</h3>
              <p className="text-sm leading-6 text-slate-300">{plan.goal}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-slate-900 py-14">
        <div className="page-shell max-w-4xl">
          <div className="mb-7 flex items-center gap-3">
            <ShieldCheck className="h-7 w-7 text-cyan-300" />
            <h2 className="text-2xl font-black text-white">Quick FAQ</h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <div key={faq.question} className="surface p-5">
                <h3 className="mb-2 flex items-start gap-2 text-sm font-black text-white">
                  <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" />
                  {faq.question}
                </h3>
                <p className="pl-6 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
