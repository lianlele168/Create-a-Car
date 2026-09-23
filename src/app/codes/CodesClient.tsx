"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  AlertCircle,
  Calculator,
  Check,
  CheckCircle2,
  Copy,
  Gift,
  Key,
  Search,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import codesData from "@/data/codes.json";

type Filter = "active" | "needs-check" | "expired" | "all";

const filterLabels: Record<Filter, string> = {
  active: "Active",
  "needs-check": "Needs Check",
  expired: "Expired",
  all: "All",
};

function statusBadge(status: string) {
  if (status === "active") return "badge-active";
  if (status === "needs-check") return "badge-check";
  return "badge-expired";
}

export default function CodesClient() {
  const [filter, setFilter] = useState<Filter>("active");
  const [searchQuery, setSearchQuery] = useState("");
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  const counts = useMemo(
    () => ({
      active: codesData.filter((code) => code.status === "active").length,
      "needs-check": codesData.filter((code) => code.status === "needs-check").length,
      expired: codesData.filter((code) => code.status === "expired").length,
      all: codesData.length,
    }),
    [],
  );

  const totals = useMemo(() => {
    return codesData
      .filter((code) => code.status === "active")
      .reduce(
        (sum, code) => ({
          cash: sum.cash + code.cash,
          crates: sum.crates + code.crates,
          partsBoxes: sum.partsBoxes + code.partsBoxes,
        }),
        { cash: 0, crates: 0, partsBoxes: 0 },
      );
  }, []);

  const filteredCodes = codesData.filter((code) => {
    const matchesFilter = filter === "all" || code.status === filter;
    const q = searchQuery.trim().toLowerCase();
    const matchesSearch = !q || `${code.code} ${code.reward} ${code.source} ${code.status}`.toLowerCase().includes(q);
    return matchesFilter && matchesSearch;
  });

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const input = document.createElement("textarea");
      input.value = code;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    setCopiedCode(code);
    window.setTimeout(() => setCopiedCode(null), 2200);
  };

  return (
    <div className="page-shell py-10">
      {copiedCode ? (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-md border border-cyan-200 bg-cyan-700 px-5 py-3 text-white shadow-2xl">
          <CheckCircle2 className="h-5 w-5" />
          <div>
            <p className="text-sm font-black">Code copied</p>
            <p className="font-mono text-xs text-cyan-50">{copiedCode}</p>
          </div>
        </div>
      ) : null}

      <section className="mb-9 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-300/40 bg-cyan-500/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-cyan-100">
            <Key className="h-4 w-4 text-cyan-300" />
            Codes re-verified regularly
          </div>
          <h1 className="max-w-3xl text-4xl font-black tracking-tight text-white sm:text-5xl">
            Create a Car Codes
          </h1>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-300">
            Copy current Create a Car codes for Cash, crates, and parts boxes. High-confidence codes are separated from source-conflict codes so you can test safely.
          </p>
        </div>

        <div className="surface p-5">
          <div className="mb-4 flex items-center gap-3">
            <Gift className="h-7 w-7 text-amber-300" />
            <div>
              <h2 className="font-black text-white">Active reward total</h2>
              <p className="text-xs text-slate-400">High-confidence codes only</p>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="field-tile p-3">
              <span className="block text-[11px] text-slate-300">Cash</span>
              <strong className="font-mono text-lg text-white">{totals.cash.toLocaleString()}</strong>
            </div>
            <div className="field-tile p-3">
              <span className="block text-[11px] text-slate-300">Crates</span>
              <strong className="font-mono text-lg text-white">{totals.crates}</strong>
            </div>
            <div className="field-tile p-3">
              <span className="block text-[11px] text-slate-300">Boxes</span>
              <strong className="font-mono text-lg text-white">{totals.partsBoxes}</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="grid grid-cols-2 gap-2 sm:flex">
          {(["active", "needs-check", "expired", "all"] as Filter[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setFilter(tab)}
              className={`min-h-10 rounded-md px-4 text-xs font-black transition ${
                filter === tab
                  ? "bg-amber-300 text-slate-950"
                  : "border border-white/10 bg-slate-900 text-slate-300 hover:text-white"
              }`}
            >
              {filterLabels[tab]} ({counts[tab]})
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-80">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          <input
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search code, reward, or source..."
            className="h-10 w-full rounded-md border border-white/10 bg-slate-900 pl-9 pr-3 text-sm font-semibold text-white placeholder:text-slate-500 focus:border-cyan-300 focus:outline-none"
          />
        </div>
      </section>

      <section className="mb-12 overflow-hidden rounded-lg border border-white/10 bg-slate-950/75">
        <div className="hidden table-grid border-b border-white/10 bg-white/5 px-4 py-3 text-[11px] font-black uppercase tracking-wide text-slate-400 md:grid">
          <span>Code</span>
          <span>Reward</span>
          <span>Status</span>
          <span>Action</span>
        </div>

        {filteredCodes.map((code) => {
          const canCopy = code.status !== "expired";
          const isCopied = copiedCode === code.code;

          return (
            <div key={code.code} className="table-grid grid gap-3 border-b border-white/10 px-4 py-4 last:border-b-0 md:items-center">
              <div>
                <span className="block font-mono text-lg font-black tracking-wide text-white">{code.code}</span>
                <span className="mt-1 block text-[11px] font-semibold text-slate-500">Added {code.addedDate}</span>
              </div>
              <div>
                <p className="text-sm font-semibold leading-6 text-slate-200">{code.reward}</p>
                <p className="mt-1 text-xs leading-5 text-slate-500">Source: {code.source}</p>
                {"specialNote" in code && code.specialNote ? (
                  <p className="mt-2 rounded-md border border-amber-300/25 bg-amber-300/10 px-3 py-2 text-xs font-semibold text-amber-100">
                    {code.specialNote}
                  </p>
                ) : null}
              </div>
              <div>
                <span className={statusBadge(code.status)}>
                  {code.status === "active" ? "Active" : code.status === "needs-check" ? "Needs check" : "Expired"}
                </span>
                <span className="mt-2 block text-[11px] font-semibold text-slate-500">{code.confidence}</span>
              </div>
              <div>
                {canCopy ? (
                  <button
                    onClick={() => handleCopy(code.code)}
                    className={`inline-flex min-h-10 w-full items-center justify-center gap-2 rounded-md px-3 text-xs font-black transition md:w-auto ${
                      isCopied ? "bg-cyan-600 text-white" : "bg-amber-300 text-slate-950 hover:bg-amber-200"
                    }`}
                  >
                    {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    {isCopied ? "Copied" : "Copy"}
                  </button>
                ) : (
                  <span className="text-xs font-bold text-slate-500">History only</span>
                )}
              </div>
            </div>
          );
        })}

        {filteredCodes.length === 0 ? (
          <div className="p-10 text-center">
            <AlertCircle className="mx-auto mb-3 h-8 w-8 text-amber-300" />
            <p className="font-bold text-white">No codes match this filter.</p>
          </div>
        ) : null}
      </section>

      <section className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
        <div className="surface p-6">
          <h2 className="mb-5 flex items-center gap-2 text-2xl font-black text-white">
            <ShieldCheck className="h-6 w-6 text-cyan-300" />
            How to redeem
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["1", "Open the game", "Launch Create a Car from Roblox and join a server."],
              ["2", "Open Shop", "Click the Shop button on the right side of the screen."],
              ["3", "Paste and verify", "Find the Enter Code box, paste one code exactly, then click Verify."],
            ].map(([step, title, body]) => (
              <div key={step} className="rounded-md border border-white/10 bg-white/5 p-4">
                <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-amber-300 text-sm font-black text-slate-950">{step}</span>
                <h3 className="mb-2 font-black text-white">{title}</h3>
                <p className="text-sm leading-6 text-slate-400">{body}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="surface p-6">
          <h2 className="mb-4 flex items-center gap-2 text-2xl font-black text-white">
            <Sparkles className="h-6 w-6 text-amber-300" />
            Next move after codes
          </h2>
          <p className="mb-5 text-sm leading-7 text-slate-300">
            Use cash codes to protect your early economy. Build one car that earns over time, then spend crates and boxes on clear part-slot upgrades.
          </p>
          <Link href="/calculator/" className="btn-primary w-full">
            <Calculator className="h-5 w-5" />
            Plan Rewards
          </Link>
        </div>
      </section>
    </div>
  );
}
