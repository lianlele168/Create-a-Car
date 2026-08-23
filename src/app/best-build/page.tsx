import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Car, CheckCircle2, Factory, Trophy, Wrench } from "lucide-react";
import { getVehicleBuilds } from "@/lib/data";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Best Build Guide 2026",
  description:
    "Build the best Create a Car garage path with a cash farm, rare-part showcase, dealer flip slot, and merge-safe experiment slot.",
  alternates: { canonical: "/best-build/" },
};

const buildOrder = [
  {
    title: "1. Cash engine car",
    body: "Build one car whose job is simple: keep earning. This protects your next crate session and upgrade target.",
  },
  {
    title: "2. Part quality upgrades",
    body: "Upgrade one weak part slot at a time. Stop when the cash gain or rarity gain is clear.",
  },
  {
    title: "3. Rare-parts showcase",
    body: "Move your best rare pulls into a protected showcase slot so experiments do not break your valuable build.",
  },
  {
    title: "4. Dealer and merge tester",
    body: "Use duplicate parts and spare cash in a separate slot before risking core components.",
  },
];

const faqs = [
  {
    question: "What is the best build in Create a Car?",
    answer: "The safest path is a cash engine first, then a rare-parts showcase, then dealer and merge test slots once garage space allows it.",
  },
  {
    question: "Should I rebuild after every crate?",
    answer: "No. Upgrade one slot at a time so you can see whether the new part actually improves cash flow or collection value.",
  },
  {
    question: "When should I start merge testing?",
    answer: "Start with duplicate or replaceable parts only after your main cash car can recover from failed experiments.",
  },
];

export default function BestBuildPage() {
  const builds = getVehicleBuilds().slice(0, 4);
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Best Build", item: absoluteUrl("/best-build/") },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <main className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
            <Trophy className="h-4 w-4 text-amber-300" />
            Garage build framework
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Create a Car Best Build Guide
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            A strong garage is not one overloaded car. Split your progress into cash generation, rarity protection, and controlled experiments.
          </p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          {buildOrder.map((item) => (
            <div key={item.title} className="surface p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-black text-white">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {item.title}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{item.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-lg bg-white py-8 text-slate-950">
          <div className="px-5 sm:px-8">
            <div className="mb-6 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.2em] text-cyan-700">Priority slots</p>
                <h2 className="mt-2 text-3xl font-black">Best garage spine</h2>
              </div>
              <Link href="/tier-list" className="hidden items-center gap-2 text-sm font-black text-cyan-800 hover:text-cyan-600 sm:inline-flex">
                Full tier list
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {builds.map((build) => (
                <div key={build.id} className="rounded-md border border-slate-200 bg-slate-50 p-5">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-black">{build.name}</h3>
                    <span className={`rounded px-2 py-1 text-xs font-black tier-${build.tier.toLowerCase()}`}>{build.tier}</span>
                  </div>
                  <p className="text-sm leading-6 text-slate-700">{build.rerollAdvice}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-5 lg:grid-cols-3">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <Car className="mb-3 h-7 w-7 text-cyan-300" />
            <h2 className="mb-2 font-black text-white">Score your garage</h2>
            <p className="text-sm leading-6 text-slate-400">Use the calculator sliders to decide whether cash, parts, or garage space should be fixed first.</p>
          </Link>
          <Link href="/conveyor-guide" className="surface p-5 hover:border-amber-300/40">
            <Factory className="mb-3 h-7 w-7 text-cyan-300" />
            <h2 className="mb-2 font-black text-white">Protect income</h2>
            <p className="text-sm leading-6 text-slate-400">Keep the earning car stable before risky crate or merge sessions.</p>
          </Link>
          <Link href="/merge-guide" className="surface p-5 hover:border-amber-300/40">
            <Wrench className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Test safely</h2>
            <p className="text-sm leading-6 text-slate-400">Run merge tests with duplicates and notes before touching rare components.</p>
          </Link>
        </section>
      </main>
    </>
  );
}
