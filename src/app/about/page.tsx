import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, Mail, ExternalLink, ArrowLeft, Gamepad2 } from "lucide-react";

export const metadata: Metadata = {
  title: "About Create a Car Wiki & Network Standards",
  description: "Learn about the Create a Car fan wiki, our editorial testing process, and the Roblox Wiki Hub network.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-[75vh] py-12 px-4 sm:px-6 max-w-4xl mx-auto space-y-8">
      <div>
        <Link href="/" className="inline-flex items-center gap-2 text-xs font-bold text-slate-400 hover:text-white transition-colors mb-4">
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Home</span>
        </Link>
        <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-3 py-1 font-mono text-xs font-bold text-indigo-300 mb-2">
          <ShieldCheck className="w-3.5 h-3.5 text-indigo-400" />
          <span>ROBLOX WIKI HUB NETWORK</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
          About Create a Car Wiki
        </h1>
        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
          Independent player guide, probability calculators, and working redeem codes for Create a Car.
        </p>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-[#0c101c] p-6 sm:p-8 space-y-6">
        <div className="space-y-3">
          <h2 className="text-lg font-bold text-white flex items-center gap-2">
            <Gamepad2 className="w-5 h-5 text-indigo-400" />
            <span>Our Mission & Editorial Operation</span>
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            This wiki is an independent community project operated under the <strong>Roblox Wiki Hub</strong> network. We provide players with transparent drop odds, client-side tools, and manually tested redeem codes without requiring logins or account passwords.
          </p>
        </div>

        <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/30 p-5 space-y-3">
          <p className="text-xs font-bold uppercase tracking-wider text-indigo-300">Central Publisher & Editorial Standards</p>
          <p className="text-xs text-slate-300 leading-relaxed">
            All code testing protocols, simulator calibration, and COPPA child safety commitments for this wiki are managed centrally under our network publisher guidelines:
          </p>
          <a
            href="https://robloxwikihub.com/about"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-indigo-400 hover:text-indigo-300 underline"
          >
            <span>Review Full Editorial Testing Standards & COPPA Pledge</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="border-t border-slate-800/80 pt-5 space-y-2">
          <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Direct Editorial Contact</h3>
          <p className="text-xs text-slate-300 leading-relaxed">
            For fact corrections, ninja-patch updates, or data privacy requests, contact Lead Webmaster <strong>lianlele168</strong> directly:
          </p>
          <div className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-950/40 px-3 py-1.5 font-mono text-xs font-bold text-emerald-300">
            <Mail className="w-3.5 h-3.5" />
            <span>lianlele168@gmail.com</span>
          </div>
          <p className="text-[11px] text-slate-500">Inquiries are acknowledged within 48 business hours.</p>
        </div>
      </div>
    </main>
  );
}
