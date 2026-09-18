import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ShieldAlert, CheckCircle2, Scale, Mail, Gamepad2 } from "lucide-react";
import config from "@/data/game.config.json";

export const metadata: Metadata = {
  title: `Terms of Use & Community Guidelines | ${config.game.name} Wiki`,
  description: `Terms of use, gameplay accuracy disclaimers, and fair use guidelines for ${config.game.name} fans.`,
  robots: {
    index: false,
    follow: true,
  },
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="page-shell py-10">
      <div className="mx-auto max-w-4xl space-y-8">
        {/* Header Breadcrumb & Badge */}
        <div className="space-y-3">
          <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
            <Link href="/" className="hover:text-amber-400">Home</Link>
            <span>/</span>
            <span className="text-slate-200">Terms of Use</span>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3 py-1 font-mono text-xs font-bold text-amber-300">
            <FileText className="h-3.5 w-3.5" />
            <span>COMMUNITY &amp; LEGAL TERMS</span>
          </div>
          <h1 className="text-3xl font-black tracking-tight text-white sm:text-4xl">
            Terms of Use &amp; Service Guidelines
          </h1>
          <p className="text-sm text-slate-300">
            Unofficial strategy and utility companion for {config.game.name}.
          </p>
        </div>

        {/* Detailed Sections in Surface Container */}
        <div className="surface space-y-8 p-6 sm:p-8">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Gamepad2 className="h-5 w-5 text-emerald-400" />
              <span>1. Unofficial Fan Companion</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Create a Car Wiki is an unofficial fan-made informational website. It is not affiliated with, sponsored by, or endorsed by Roblox Corporation or {config.game.developer}. Use our calculators and tier lists as planning aids, not as guarantees of in-game drops.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <CheckCircle2 className="h-5 w-5 text-cyan-400" />
              <span>2. Live Patch Volatility &amp; Accuracy Disclaimer</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Codes, crate rewards, part prices, conveyor speeds, and merging balance update frequently in {config.game.name}. While we test and cross-verify code redemptions and upgrade math, all content is provided &quot;as is&quot;. Always confirm critical values inside the Roblox experience before spending in-game currency or time.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <ShieldAlert className="h-5 w-5 text-amber-400" />
              <span>3. Anti-Phishing &amp; Account Security Pledge</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              We will <strong className="text-white">never</strong> ask for your Roblox account password, private cookies, or payment info. Never enter sensitive Roblox credentials on fan sites. Redeem official codes exclusively inside the official Roblox game.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <FileText className="h-5 w-5 text-blue-400" />
              <span>4. Acceptable Community Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Visitors are welcome to freely browse, bookmark, and share our guides and calculators. You agree not to engage in malicious scraping, denial-of-service attempts, code injection, or misrepresenting this fan site as official game documentation.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Scale className="h-5 w-5 text-purple-400" />
              <span>5. Intellectual Property &amp; Fair Use</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              Roblox is a registered trademark of Roblox Corporation. {config.game.name}, car assets, and dealer items belong to {config.game.developer}. All media and text on this site are used under Fair Use principles for educational commentary.
            </p>
          </section>

          <section className="space-y-2 border-t border-white/10 pt-6">
            <h2 className="flex items-center gap-2 text-lg font-bold text-white">
              <Mail className="h-5 w-5 text-indigo-400" />
              <span>6. DMCA &amp; Contact Inquiries</span>
            </h2>
            <p className="text-sm leading-relaxed text-slate-300">
              For rights holders, content attribution, or takedown inquiries, contact our editorial staff at:
            </p>
            <div className="inline-block rounded-xl border border-amber-500/30 bg-amber-950/40 p-3 font-mono text-sm font-bold text-amber-300">
              lianlele168@gmail.com
            </div>
            <p className="text-xs text-slate-400">
              We respond promptly within 48 business hours.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}

