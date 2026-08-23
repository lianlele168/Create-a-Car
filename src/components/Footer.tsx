import Link from "next/link";
import { Calculator, Car, ExternalLink, Key, Shield, Trophy } from "lucide-react";
import config from "@/data/game.config.json";
import { getActiveCodes } from "@/lib/data";

const activeCodes = getActiveCodes();

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10 bg-slate-950 text-slate-400">
      <div className="border-b border-white/10 bg-slate-900/80 py-5">
        <div className="page-shell flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <div className="flex items-center gap-3">
            <span className="h-3 w-3 rounded-full bg-cyan-300 shadow-lg shadow-cyan-400/50" />
            <span className="text-sm font-bold text-slate-200">
              Roblox status: <span className="font-mono text-cyan-200">{config.stats.onlineNow} playing</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Link href="/codes" className="btn-quiet">
              <Key className="h-3.5 w-3.5 text-amber-300" />
              {activeCodes.length} Active Codes
            </Link>
            <a href={config.game.robloxUrl} target="_blank" rel="noopener noreferrer" className="btn-quiet">
              Play on Roblox
              <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
            </a>
          </div>
        </div>
      </div>

      <div className="page-shell py-11">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 flex items-center gap-2">
              <Car className="h-6 w-6 text-cyan-300" />
              <span className="text-lg font-black text-white">Create a Car Wiki</span>
            </div>
            <p className="text-xs leading-relaxed">
              Fan-made strategy hub for {config.game.name} on Roblox. Built around public Roblox data, code-source tracking, and practical garage planning tools.
            </p>
            <div className="mt-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] font-mono text-cyan-200">
              Updated {config.game.lastUpdated}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-amber-200">Core Tools</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/calculator" className="flex items-center gap-2 hover:text-white">
                  <Calculator className="h-4 w-4 text-cyan-300" />
                  Cash & Upgrade Calculator
                </Link>
              </li>
              <li>
                <Link href="/codes" className="flex items-center gap-2 hover:text-white">
                  <Key className="h-4 w-4 text-cyan-300" />
                  Working Codes
                </Link>
              </li>
              <li>
                <Link href="/tier-list" className="flex items-center gap-2 hover:text-white">
                  <Trophy className="h-4 w-4 text-cyan-300" />
                  Build Tier List
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-amber-200">Guides</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/best-build" className="hover:text-white">Best Build</Link></li>
              <li><Link href="/parts-guide" className="hover:text-white">Parts Guide</Link></li>
              <li><Link href="/conveyor-guide" className="hover:text-white">Conveyor Guide</Link></li>
              <li><Link href="/dealer-guide" className="hover:text-white">Dealer Guide</Link></li>
              <li><Link href="/merge-guide" className="hover:text-white">Merge Guide</Link></li>
              <li><Link href="/beginner-guide" className="hover:text-white">Beginner Guide</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-black uppercase tracking-[0.18em] text-amber-200">Info</h3>
            <ul className="mb-4 space-y-2 text-sm">
              <li><Link href="/updates" className="hover:text-white">Updates & Sources</Link></li>
              <li><Link href="/about" className="hover:text-white">About</Link></li>
              <li><Link href="/terms" className="hover:text-white">Terms</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
            <p className="rounded-md border border-white/10 bg-white/5 p-3 text-[11px] leading-relaxed">
              <Shield className="mr-1 inline h-3.5 w-3.5 text-cyan-300" />
              Not affiliated with Roblox Corporation or {config.game.developer}. Game names, assets, and trademarks belong to their owners.
            </p>
          </div>
        </div>

        <div className="mt-9 border-t border-white/10 pt-6 text-xs">
          (c) {new Date().getFullYear()} {config.game.name} Wiki. Unofficial Roblox companion site.
        </div>
      </div>
    </footer>
  );
}
