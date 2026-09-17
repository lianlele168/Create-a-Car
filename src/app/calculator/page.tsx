import type { Metadata } from "next";
import CalculatorClient from "./CalculatorClient";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Create a Car Calculator - Cash, Crates & Upgrade Time",
  description:
    "Estimate Create a Car cash gaps, upgrade time, crate sessions, and safe reserves using the numbers visible in your Roblox server.",
  alternates: { canonical: "/calculator" },
};

const faqs = [
  {
    question: "What does the Create a Car calculator estimate?",
    answer:
      "It estimates cash after code rewards, time to reach an upgrade target, affordable crate sessions, and the safest next upgrade focus.",
  },
  {
    question: "Does it use hidden Create a Car formulas?",
    answer:
      "No. Use the visible cash, income, crate cost, and upgrade prices from your server. The tool avoids invented hidden values.",
  },
  {
    question: "Should I include needs-check codes in the calculator?",
    answer:
      "Only after testing them in-game. The default calculator includes high-confidence codes and lets you add extra manual cash or crates.",
  },
];

export default function CalculatorPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Calculator", item: absoluteUrl("/calculator/") },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <CalculatorClient />
    </>
  );
}
