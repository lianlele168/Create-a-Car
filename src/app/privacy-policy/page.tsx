import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Lock, Eye, Mail, Scale, ExternalLink, CheckCircle2 } from "lucide-react";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: `Privacy Policy & Trust Center | ${config.game.name} Wiki`,
  description: `Privacy policy, COPPA child safety disclosures, and data protection guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/privacy-policy" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Breadcrumb & Badge */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Privacy Policy</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-300">
            <ShieldCheck className="h-3.5 w-3.5" />
            <span>ROBLOX FAN NETWORK TRUST CENTER</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Privacy Policy &amp; Trust Disclosures
          </h1>
          <p className="text-sm text-slate-300">
            Last updated: {config.game.lastUpdated}. Unofficial fan guide and strategy tools for {config.game.name}.
          </p>
        </div>

        {/* 4 Trust Highlights Grid */}
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <ShieldCheck className="h-5 w-5 shrink-0 text-emerald-400" />
            <div>
              <p className="font-bold text-white">COPPA Compliant</p>
              <p className="text-slate-400">Safe for under 13</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Lock className="h-5 w-5 shrink-0 text-amber-400" />
            <div>
              <p className="font-bold text-white">Zero Account Needed</p>
              <p className="text-slate-400">No passwords or Robux</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-400" />
            <div>
              <p className="font-bold text-white">100% Client-Side</p>
              <p className="text-slate-400">Calculators run in browser</p>
            </div>
          </div>
          <div className="surface flex items-center gap-3 p-3 text-xs">
            <Mail className="h-5 w-5 shrink-0 text-indigo-400" />
            <div>
              <p className="font-bold text-white">Verified Contact</p>
              <p className="text-slate-400">48h response SLA</p>
            </div>
          </div>
        </div>

        {/* Detailed Sections in Surface Container */}
        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Lock className="h-5 w-5 text-amber-400" />
              <span>1. Zero Personal Data &amp; No Roblox Credentials</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Create a Car Wiki is a static informational site. We do not require account registration, logins, or personal profile creation. We will <strong className="text-white">NEVER</strong> ask for your Roblox password, security cookies, 2FA codes, or Robux credentials. All conveyor calculators, build simulators, and code copy tools run entirely client-side in your local browser.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-emerald-400" />
              <span>2. COPPA &amp; Children&apos;s Online Privacy Compliance</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We recognize that many {config.game.name} players are minors. In compliance with the Children&apos;s Online Privacy Protection Act (COPPA), this website does not knowingly collect, harvest, or profile personal identifiable information from children under the age of 13.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Eye className="h-5 w-5 text-cyan-400" />
              <span>3. Telemetry, Cookies &amp; Ad Disclosures</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Standard anonymous web telemetry (such as page response time and browser engine) may be processed by hosting infrastructure to maintain uptime. Third-party advertising partners may use cookies to serve gaming ads according to their privacy policies. You can manage personalized cookies via your browser settings or <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="text-amber-400 underline hover:text-amber-300">Google Ads Settings</a>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ExternalLink className="h-5 w-5 text-blue-400" />
              <span>4. External Platform Hyperlinks</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Our site provides links to the official Roblox game page and community resources. We are not responsible for the privacy practices, account safety, or content of external third-party platforms.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use Disclaimer</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Roblox is a registered trademark of Roblox Corporation. {config.game.name}, crate items, and car models belong to {config.game.developer}. This fan site is an independent educational reference created under Fair Use.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-indigo-400" />
              <span>6. Editorial &amp; Privacy Contact</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              For privacy inquiries, DMCA notices, or correction requests, contact our editorial staff at:
            </p>
            <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 font-mono text-sm font-bold text-amber-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              Inquiries are answered within 48 business hours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

