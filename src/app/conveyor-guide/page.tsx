import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Factory, CheckCircle2, ShieldCheck } from "lucide-react";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Conveyor Guide - Cash Farm Strategy",
  description: "Plan a Create a Car conveyor cash farm and use passive income before spending on expensive crates, dealer flips, or merge experiments.",
  alternates: { canonical: "/conveyor-guide" },
};

const sections = [
  {
    "title": "Treat conveyor as the bankroll",
    "body": "The earning car should fund experiments instead of becoming the experiment itself."
  },
  {
    "title": "Upgrade cash flow first",
    "body": "If an upgrade raises money over time, it can pay for the next round of boxes."
  },
  {
    "title": "Keep a visible reserve",
    "body": "Use a reserve rule before big crate sessions so one unlucky roll does not freeze progress."
  },
  {
    "title": "Do not dismantle income",
    "body": "Build dealer, merge, and showcase cars separately when garage space allows it."
  },
  {
    "title": "Check code timing",
    "body": "Cash codes are strongest when redeemed before a planned income or crate milestone."
  }
];

const faqs = [
  {
    "question": "Why focus on conveyor income first?",
    "answer": "Because steady cash flow lets you recover from bad crate rolls and afford later upgrades."
  },
  {
    "question": "When should I stop upgrading income?",
    "answer": "Pause when the next upgrade takes too long to recover and a crate or garage purchase gives better practical value."
  },
  {
    "question": "Can I use rare parts on the cash car?",
    "answer": "Yes, but only if they improve the earning goal or you can move them safely later."
  }
];

export default function GuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Create a Car Conveyor", item: absoluteUrl("/conveyor-guide/") },
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
            <Factory className="h-4 w-4 text-cyan-300" />
            Cash engine
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Conveyor Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Plan a Create a Car conveyor cash farm and use passive income before spending on expensive crates, dealer flips, or merge experiments.</p>
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
            <h2 className="mb-2 font-black text-white">Cash Calculator</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/codes" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Copy Cash Codes</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/best-build" className="surface p-5 hover:border-cyan-300/40">
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
