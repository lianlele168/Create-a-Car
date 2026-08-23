import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, PackageOpen, CheckCircle2, ShieldCheck } from "lucide-react";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Parts Guide - Crates, Boxes & Upgrades",
  description: "Use crates and parts boxes more carefully in Create a Car by separating cash upgrades, rarity collection, and experiment parts.",
  alternates: { canonical: "/parts-guide/" },
};

const sections = [
  {
    "title": "Separate part purpose",
    "body": "Label every useful part as income, rarity, experiment, or spare. This makes upgrade decisions easier."
  },
  {
    "title": "Open crates in sessions",
    "body": "Spend in planned sessions instead of one-click draining your entire cash reserve."
  },
  {
    "title": "Protect high-rarity pulls",
    "body": "Move rare parts into a showcase or protected slot before testing dealer or merge ideas."
  },
  {
    "title": "Use boxes to fix weak slots",
    "body": "A box reward is most valuable when it targets the weakest visible slot in your main car."
  },
  {
    "title": "Stop after a clear win",
    "body": "When a crate improves the target slot, pause and rebuild around that improvement before buying more."
  }
];

const faqs = [
  {
    "question": "Which parts should I upgrade first?",
    "answer": "Upgrade the part slot that improves cash generation or fixes the biggest weakness in your main car."
  },
  {
    "question": "Are rare parts always better?",
    "answer": "Not always for early progress. A rare flex part can be less useful than a cheaper part that boosts income."
  },
  {
    "question": "How many crates should I open?",
    "answer": "Use the calculator with your visible crate cost and keep a reserve before buying a batch."
  }
];

export default function GuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Create a Car Parts", item: absoluteUrl("/parts-guide/") },
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
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-100">
            <PackageOpen className="h-4 w-4 text-cyan-300" />
            Crates and parts
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Parts Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Use crates and parts boxes more carefully in Create a Car by separating cash upgrades, rarity collection, and experiment parts.</p>
        </section>

        <section className="mb-10 grid gap-5 md:grid-cols-2">
          {sections.map((section) => (
            <div key={section.title} className="surface p-6">
              <h2 className="mb-3 flex items-center gap-2 text-xl font-black text-white">
                <CheckCircle2 className="h-5 w-5 text-cyan-300" />
                {section.title}
              </h2>
              <p className="text-sm leading-7 text-slate-300">{section.body}</p>
            </div>
          ))}
        </section>

        <section className="mb-10 rounded-lg border border-amber-300/25 bg-amber-300/10 p-6">
          <h2 className="mb-3 flex items-center gap-2 text-2xl font-black text-white">
            <ShieldCheck className="h-6 w-6 text-amber-200" />
            Safe planning rule
          </h2>
          <p className="text-sm leading-7 text-slate-200">
            Create a Car can change after updates, so treat visible server numbers as your source of truth. Use this guide as a decision framework, then verify codes, costs, and rewards in-game.
          </p>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          
          <Link href="/calculator" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Plan Crates</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/tier-list" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Build Tier List</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/merge-guide" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Merge Guide</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
        </section>

        <section className="mt-10 surface p-6">
          <h2 className="mb-5 text-2xl font-black text-white">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-white/10 pb-4 last:border-b-0 last:pb-0">
                <h3 className="font-black text-white">{faq.question}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
