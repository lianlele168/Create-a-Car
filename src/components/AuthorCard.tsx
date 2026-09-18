import React from 'react';
import { ShieldCheck, Calendar, UserCheck } from 'lucide-react';

export default function AuthorCard() {
  return (
    <div className="rounded-2xl border border-sky-900/60 bg-sky-950/40 p-4 sm:p-5 my-6 backdrop-blur-md">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center text-white font-black text-lg shadow-lg shadow-sky-500/20">
            CC
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm sm:text-base">Roblox Wiki Hub Research Desk</span>
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full">
                <ShieldCheck className="w-3 h-3" /> Verified by lianlele168</span>
            </div>
            <p className="text-xs text-sky-300">
              Create a Car Leaderboard Drag Racer & Dyno Specialist • 1,200+ Custom Builds Tested
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3 text-xs text-sky-300">
          <div className="flex items-center gap-1 bg-sky-900/50 px-2.5 py-1 rounded-lg border border-sky-800/40">
            <Calendar className="w-3.5 h-3.5 text-sky-400" />
            <span>Updated: </span>
          </div>
          <div className="flex items-center gap-1 bg-sky-900/50 px-2.5 py-1 rounded-lg border border-sky-800/40">
            <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
            <span>Verified for Patch v2.4 (V16 Update)</span>
          </div>
        </div>
      </div>

      <p className="text-xs text-sky-400/80 mt-3 pt-3 border-t border-sky-900/40 leading-relaxed">
        <strong>Review Methodology:</strong> Engine horsepower-to-weight ratios, transmission shift latencies, and conveyor part merge probabilities were benchmarked via dyno runs and track quarter-mile timing traps.
       Follows <a href="https://robloxwikihub.com/about#methodology" target="_blank" rel="noopener noreferrer" className="underline hover:text-white">Editorial Standards</a>. Report corrections to <a href="mailto:lianlele168@gmail.com" className="underline hover:text-white">lianlele168@gmail.com</a>.</p>
    </div>
  );
}
