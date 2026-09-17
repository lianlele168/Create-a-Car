import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BadgeDollarSign, CheckCircle2, ShieldCheck } from "lucide-react";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Dealer Guide - Spare Parts & Cash Flips",
  description: "Use Create a Car dealer logic cautiously by flipping spare parts and cash without risking your core income or rare-part builds.",
  alternates: { canonical: "/dealer-guide" },
};

const sections = [
  {
    "title": "Make a sell pile",
    "body": "Only consider parts that are duplicate, low-impact, or already replaced by better components."
  },
  {
    "title": "Protect income parts",
    "body": "Never sell or risk the part that keeps your best earning car working."
  },
  {
    "title": "Convert clutter into attempts",
    "body": "Dealer-style cash conversion is best when it turns unused inventory into a planned crate session."
  },
  {
    "title": "Test conflicting codes",
    "body": "DEALER is currently source-conflicted, so test it in-game before counting the reward."
  },
  {
    "title": "Track results",
    "body": "Keep simple notes on what you sold or bought so repeatable choices emerge over time."
  }
];

const faqs = [
  {
    "question": "Is DEALER active?",
    "answer": "Several sources list DEALER active, while SuperCheats marks it expired. The codes page keeps it as needs-check."
  },
  {
    "question": "What should I sell first?",
    "answer": "Start with duplicate or low-purpose parts, not rare parts or your cash-engine components."
  },
  {
    "question": "When is dealer flipping worth it?",
    "answer": "When it turns clutter into a clear upgrade or crate session without damaging your main builds."
  }
];

export default function GuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Create a Car Dealer", item: absoluteUrl("/dealer-guide/") },
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
            <BadgeDollarSign className="h-4 w-4 text-cyan-300" />
            Dealer planning
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Dealer Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Use Create a Car dealer logic cautiously by flipping spare parts and cash without risking your core income or rare-part builds.</p>
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
          
          <Link href="/codes" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Check DEALER</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/calculator" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Plan Cash</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/parts-guide" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Parts Guide</h2>
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
