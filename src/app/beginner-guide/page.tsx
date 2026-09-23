import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, CheckCircle2, ShieldCheck } from "lucide-react";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Beginner Guide 2026",
  description: "Learn the early Create a Car loop: redeem codes, roll parts, build a cash car, upgrade crates, and expand garage space without wasting your first rewards.",
  alternates: { canonical: "/beginner-guide" },
};

const sections = [
  {
    "title": "Redeem safe codes first",
    "body": "Start with CONVEYOR, GRIND, and FIXES, then test needs-check codes only after the high-confidence rewards are redeemed."
  },
  {
    "title": "Build one earning car",
    "body": "Your first goal is not the rarest-looking vehicle. It is a working car that generates cash over time."
  },
  {
    "title": "Record visible costs",
    "body": "Write down crate price, upgrade price, and cash-per-minute values from your server. Those numbers make the calculator useful."
  },
  {
    "title": "Upgrade one weak slot",
    "body": "Swap parts gradually so you can tell which upgrade actually improved your build."
  },
  {
    "title": "Save rare parts",
    "body": "Do not feed rare or high-value parts into experiments until you have a backup cash car."
  }
];

const faqs = [
  {
    "question": "What should I do first in Create a Car?",
    "answer": "Redeem safe codes, build one car that earns cash, then use that income to fund better crates and garage space."
  },
  {
    "question": "Should beginners use every code immediately?",
    "answer": "Use high-confidence codes immediately. Test needs-check codes separately because sources currently disagree on some of them."
  },
  {
    "question": "What is the biggest beginner mistake?",
    "answer": "Spending all cash on random crate rolls before building a reliable income car."
  }
];

export default function GuidePage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Create a Car Beginner", item: absoluteUrl("/beginner-guide/") },
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
            <BookOpen className="h-4 w-4 text-cyan-300" />
            First-hour route
          </div>
          <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">Create a Car Beginner Guide</h1>
          <p className="mt-4 text-base leading-7 text-slate-300">Learn the early Create a Car loop: redeem codes, roll parts, build a cash car, upgrade crates, and expand garage space without wasting your first rewards.</p>
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
            <h2 className="mb-2 font-black text-white">Copy Codes</h2>
            <p className="flex items-center gap-2 text-sm font-bold text-cyan-200">
              Open page
              <ArrowRight className="h-4 w-4" />
            </p>
          </Link>
          
          <Link href="/calculator/" className="surface p-5 hover:border-cyan-300/40">
            <h2 className="mb-2 font-black text-white">Open Calculator</h2>
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
