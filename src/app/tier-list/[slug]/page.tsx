import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calculator, CheckCircle2, Gauge, ShieldCheck, Wrench } from "lucide-react";
import { getVehicleBuilds } from "@/lib/data";
import { absoluteUrl, buildBreadcrumbSchema } from "@/lib/seo";

type Props = {
  params: { slug: string };
};

export function generateStaticParams() {
  return getVehicleBuilds().map((build) => ({ slug: build.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const build = getVehicleBuilds().find((item) => item.slug === params.slug);
  if (!build) return {};

  return {
    title: `${build.name} - Create a Car Build Tier Notes`,
    description: `${build.name} is a ${build.tier}-tier Create a Car build archetype for ${build.role.toLowerCase()}. Learn when to keep, upgrade, or rebuild it.`,
    alternates: { canonical: `/tier-list/${build.slug}` },
  };
}

export default function BuildDetailPage({ params }: Props) {
  const build = getVehicleBuilds().find((item) => item.slug === params.slug);
  if (!build) notFound();

  const schema = buildBreadcrumbSchema([
    { name: "Home", item: absoluteUrl("/") },
    { name: "Tier List", item: absoluteUrl("/tier-list/") },
    { name: build.name, item: absoluteUrl(`/tier-list/${build.slug}/`) },
  ]);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      <main className="page-shell py-10">
        <Link href="/tier-list/" className="mb-8 inline-flex items-center gap-2 text-sm font-black text-cyan-200 hover:text-cyan-100">
          <ArrowLeft className="h-4 w-4" />
          Back to tier list
        </Link>

        <section className="grid gap-7 lg:grid-cols-[1fr_360px]">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-100">
              <Wrench className="h-4 w-4 text-cyan-300" />
              {build.role}
            </div>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">{build.name}</h1>
            <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">{build.description}</p>

            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {build.bestFor.map((item) => (
                <div key={item} className="surface p-4">
                  <CheckCircle2 className="mb-3 h-5 w-5 text-cyan-300" />
                  <p className="text-sm font-bold text-white">{item}</p>
                </div>
              ))}
            </div>

            <section className="mt-8 surface p-6">
              <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
                <Gauge className="h-6 w-6 text-amber-300" />
                Build signals
              </h2>
              <div className="grid gap-3 md:grid-cols-3">
                {build.signals.map((signal) => (
                  <div key={signal} className="rounded-md border border-white/10 bg-white/5 p-4 text-sm font-semibold leading-6 text-slate-300">
                    {signal}
                  </div>
                ))}
              </div>
            </section>

            <section className="mt-8 surface p-6">
              <h2 className="mb-3 flex items-center gap-2 text-2xl font-black text-white">
                <ShieldCheck className="h-6 w-6 text-cyan-300" />
                Upgrade advice
              </h2>
              <p className="text-sm leading-7 text-slate-300">{build.rerollAdvice}</p>
            </section>
          </div>

          <aside className="surface h-fit p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <span className={`rounded px-3 py-2 text-sm font-black tier-${build.tier.toLowerCase()}`}>{build.tier} Tier</span>
              <span className="font-mono text-sm font-black text-amber-200">{build.priority}/100</span>
            </div>
            <p className="mb-5 text-sm leading-6 text-slate-300">
              This score is a practical priority score, not an official hidden stat. Use it to decide what to protect before risky crate, dealer, or merge moves.
            </p>
            <div className="grid gap-2">
              <Link href="/calculator/" className="btn-primary">
                <Calculator className="h-5 w-5" />
                Run Calculator
              </Link>
              <Link href="/best-build/" className="btn-secondary">
                <Wrench className="h-5 w-5 text-cyan-300" />
                Best Build Path
              </Link>
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
