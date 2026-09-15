import type { Metadata } from "next";
import CodesClient from "./CodesClient";
import { getActiveCodes } from "@/lib/data";
import { getMonthYear } from "@/lib/date";
import { absoluteUrl, buildBreadcrumbSchema, buildFAQSchema } from "@/lib/seo";

const monthYear = getMonthYear();

export const metadata: Metadata = {
  title: `Create a Car Codes (${monthYear}) - Working Cash & Crate Rewards`,
  description:
    "Copy working Create a Car codes for Cash, crates, and parts boxes. Includes source confidence, conflict notes, and redeem steps for Roblox.",
  alternates: { canonical: "/codes/" },
};

const faqs = [
  {
    question: "What are the working Create a Car codes?",
    answer: `The high-confidence current codes are ${getActiveCodes().map((code) => code.code).join(", ")} (verified active for ${monthYear}).`,
  },
  {
    question: "How do I redeem codes in Create a Car?",
    answer:
      "Join Create a Car on Roblox, click the Shop button on the right, find the Enter Code box, paste the code exactly, and click Verify.",
  },
  {
    question: "Why are some Create a Car codes marked needs-check?",
    answer:
      "Current public code pages disagree on several older or newer codes. This wiki marks them needs-check so you can try them without mixing them with the safest active list.",
  },
  {
    question: "Do Create a Car codes give free cash?",
    answer:
      "Yes. GRIND and FIXES are widely listed as 50,000 Cash codes, while CONVEYOR is listed with crate and parts-box rewards.",
  },
  {
    question: "How often should I check for new Create a Car codes?",
    answer:
      "Check after Roblox description updates, milestones, new crate events, conveyor changes, dealer changes, and official AssemblerX announcements.",
  },
];

export default function CodesPage() {
  const schemas = [
    buildBreadcrumbSchema([
      { name: "Home", item: absoluteUrl("/") },
      { name: "Codes", item: absoluteUrl("/codes/") },
    ]),
    buildFAQSchema(faqs),
  ];

  return (
    <>
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      ))}
      <CodesClient />
    </>
  );
}
