import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Info, PackageOpen, ShieldCheck, Trophy, Wrench } from "lucide-react";
import { getVehicleBuilds } from "@/lib/data";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Tier List - Best Build Archetypes 2026",
  description:
    "Create a Car tier list for build archetypes, cash farms, rare-part showcase slots, dealer flips, merge tests, and beginner upgrade priorities.",
  alternates: { canonical: "/tier-list" },
};

const faqs = [
  {
    question: "What is S-tier in Create a Car?",
    answer:
      "For most players, Conveyor Cash Farm and Rare Parts Showcase are the safest S-tier build archetypes because one protects income and the other protects rare pulls.",
  },
  {
    question: "Does this tier list rank exact car parts?",
    answer:
      "No. Public pages do not expose a complete reliable stat table, so this guide ranks build purposes and visible progression value.",
  },
  {
    question: "Should I chase rare parts before cash income?",
    answer:
      "Usually no. A steady cash engine helps recover from bad crate rolls and lets you buy better upgrades later.",
  },
  {
    question: "What should beginners keep first?",
    answer:
      "Keep one working income car, then upgrade parts one slot at a time instead of rebuilding the whole vehicle after every box.",
  },
];

const tierOrder = ["S", "A", "B", "C", "D"];

export default function TierListPage() {
  const builds = getVehicleBuilds();
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Tier List", item: absoluteUrl("/tier-list/") },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}

      <div className="page-shell py-10">
        <section className="mb-10 max-w-4xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-100">
            <Wrench className="h-4 w-4 text-cyan-300" />
            Build purpose framework
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
            Create a Car Tier List
          </h1>
          <p className="mt-4 text-base leading-7 text-slate-300">
            This page ranks car build archetypes based on public mechanics: roll parts, build cars, earn cash over time, upgrade crates, and grow garage space.
          </p>
        </section>

        <section className="mb-9 rounded-lg border border-amber-300/25 bg-amber-300/10 p-5">
          <div className="flex items-start gap-3">
            <Info className="mt-1 h-5 w-5 shrink-0 text-amber-200" />
            <p className="text-sm leading-7 text-amber-50">
              No reliable public source currently exposes a full hidden part-stat table. This tier list is intentionally framed as a build-purpose guide so it does not invent exact part values.
            </p>
          </div>
        </section>

        <section className="space-y-5">
          {tierOrder.map((tier) => {
            const tierBuilds = builds.filter((build) => build.tier === tier);
            if (tierBuilds.length === 0) return null;

            return (
              <div key={tier} className="surface p-5">
                <div className="mb-4 flex items-center gap-3">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-md text-lg font-black tier-${tier.toLowerCase()}`}>
                    {tier}
                  </span>
                  <div>
                    <h2 className="text-xl font-black text-white">{tier}-Tier Build Archetypes</h2>
                    <p className="text-xs text-slate-400">Sorted by practical garage priority.</p>
                  </div>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {tierBuilds.map((build) => (
                    <Link key={build.id} href={`/tier-list/${build.slug}`} className="rounded-md border border-white/10 bg-white/5 p-4 transition hover:border-cyan-300/50">
                      <div className="mb-2 flex items-center justify-between gap-3">
                        <h3 className="font-black text-white">{build.name}</h3>
                        <span className="font-mono text-xs font-black text-amber-200">{build.priority}/100</span>
                      </div>
                      <p className="mb-3 text-sm leading-6 text-slate-300">{build.description}</p>
                      <div className="mb-3 flex flex-wrap gap-2">
                        {build.bestFor.map((tag) => (
                          <span key={tag} className="rounded border border-white/10 bg-slate-950 px-2 py-1 text-[11px] font-bold text-slate-300">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <span className="inline-flex items-center gap-2 text-xs font-black text-cyan-200">
                        Full build notes
                        <ArrowRight className="h-3.5 w-3.5" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </section>

        <section className="mt-10 grid gap-5 md:grid-cols-3">
          <Link href="/calculator" className="surface p-5 hover:border-amber-300/40">
            <PackageOpen className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Calculate cash reserve</h2>
            <p className="text-sm leading-6 text-slate-400">Use the calculator before burning cash on expensive crate sessions.</p>
          </Link>
          <Link href="/best-build" className="surface p-5 hover:border-amber-300/40">
            <Trophy className="mb-3 h-7 w-7 text-amber-300" />
            <h2 className="mb-2 font-black text-white">Build the garage spine</h2>
            <p className="text-sm leading-6 text-slate-400">Turn archetypes into a practical cash, flex, and experiment split.</p>
          </Link>
          <Link href="/merge-guide" className="surface p-5 hover:border-amber-300/40">
            <ShieldCheck className="mb-3 h-7 w-7 text-cyan-300" />
            <h2 className="mb-2 font-black text-white">Avoid merge traps</h2>
            <p className="text-sm leading-6 text-slate-400">Know when to test duplicates instead of risking rare parts.</p>
          </Link>
        </section>
      </div>
    </>
  );
}
