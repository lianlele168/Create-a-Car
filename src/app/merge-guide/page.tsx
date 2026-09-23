import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Wrench, CheckCircle2, ShieldCheck } from "lucide-react";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Merge Guide - Safe Experiment Strategy",
  description: "Test Create a Car merge updates safely by using duplicate parts, keeping a backup car, and avoiding rare-part losses.",
  alternates: { canonical: "/merge-guide" },
};

const sections = [
  {
    "title": "Use duplicates first",
    "body": "The safest merge test starts with parts you can replace without hurting your main build."
  },
  {
    "title": "Keep a backup car",
    "body": "Never run merge tests on the only car that funds your cash flow."
  },
  {
    "title": "One experiment at a time",
    "body": "Change one variable so you can tell what affected the result."
  },
  {
    "title": "Separate rumor from result",
    "body": "Treat YouTube, Discord, and code pages as leads until your server confirms the behavior."
  },
  {
    "title": "Respect source conflicts",
    "body": "MERGER and NEWMERGER appear in current code sources, but both should be tested before budgeting around them."
  }
];

const faqs = [
  {
    "question": "When should I merge parts?",
    "answer": "Merge only after you have duplicates or a protected backup setup."
  },
  {
    "question": "Is MERGER active?",
    "answer": "Some sources list MERGER active, while SuperCheats marks it expired. Test in-game and treat it as needs-check."
  },
  {
    "question": "How do I avoid bad merge losses?",
    "answer": "Use replaceable parts, keep notes, and never risk the core part of your income car."
  }
];

export default function GuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Create a Car Merge", item: absoluteUrl("/merge-guide/") },
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
            <Wrench className="h-4 w-4 text-cyan-300" />
            Merge safety
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Merge Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Test Create a Car merge updates safely by using duplicate parts, keeping a backup car, and avoiding rare-part losses.</p>
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
          
          <Link href="/codes/" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Check Merge Codes</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/tier-list/" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Merge Test Slot</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/best-build/" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Best Build</h2>
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
