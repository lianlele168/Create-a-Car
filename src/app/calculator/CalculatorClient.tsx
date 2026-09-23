"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Calculator,
  Car,
  Coins,
  Factory,
  Gauge,
  PackageOpen,
  RotateCcw,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import codesData from "@/data/codes.json";

const focusAdvice = {
  income: {
    title: "Upgrade income first",
    body: "Your cash flow is the bottleneck. Improve the car that earns over time before buying riskier crates.",
    route: "/conveyor-guide",
  },
  crates: {
    title: "Run a crate session",
    body: "You have enough reserve for a measured crate session. Stop when the target slot improves or reserve gets thin.",
    route: "/parts-guide",
  },
  garage: {
    title: "Buy or protect garage space",
    body: "A new slot can separate cash farming, rare-part showcase, and merge testing so you do not dismantle your best car.",
    route: "/best-build",
  },
  reserve: {
    title: "Save for the next milestone",
    body: "The current target is too far away for a blind spend. Keep earning and redeem codes before opening more boxes.",
    route: "/codes",
  },
};

type Focus = keyof typeof focusAdvice;

function NumberInput({
  label,
  value,
  min,
  max,
  step = 1,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step?: number;
  onChange: (value: number) => void;
}) {
  return (
    <label className="block rounded-md border border-white/10 bg-white/5 p-4">
      <span className="mb-2 block text-xs font-black uppercase tracking-wide text-slate-400">{label}</span>
      <input
        type="number"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-11 w-full rounded-md border border-white/10 bg-slate-950 px-3 font-mono text-sm font-bold text-white focus:border-amber-300 focus:outline-none"
      />
    </label>
  );
}

function RatingSlider({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (value: number) => void;
}) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-sm font-bold">
        <span className="text-white">{label}</span>
        <span className="font-mono text-amber-200">{value}/100</span>
      </div>
      <input
        type="range"
        min="0"
        max="100"
        step="5"
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="h-2 w-full cursor-pointer accent-amber-300"
      />
    </div>
  );
}

export default function CalculatorClient() {
  const [includeCodes, setIncludeCodes] = useState(true);
  const [currentCash, setCurrentCash] = useState(0);
  const [cashPerMinute, setCashPerMinute] = useState(1500);
  const [targetUpgradeCost, setTargetUpgradeCost] = useState(100000);
  const [crateCost, setCrateCost] = useState(25000);
  const [manualBonusCash, setManualBonusCash] = useState(0);
  const [sessionMinutes, setSessionMinutes] = useState(30);
  const [incomeRating, setIncomeRating] = useState(45);
  const [partsRating, setPartsRating] = useState(50);
  const [garageRating, setGarageRating] = useState(45);
  const [riskMode, setRiskMode] = useState<"conserve" | "balanced" | "push">("balanced");

  const codeTotals = useMemo(() => {
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

  const results = useMemo(() => {
    const codeCash = includeCodes ? codeTotals.cash : 0;
    const codeCrates = includeCodes ? codeTotals.crates : 0;
    const codeBoxes = includeCodes ? codeTotals.partsBoxes : 0;
    const safeIncome = Math.max(0, cashPerMinute);
    const projectedCash = Math.max(0, currentCash) + Math.max(0, manualBonusCash) + codeCash + safeIncome * Math.max(0, sessionMinutes);
    const safeTarget = Math.max(1, targetUpgradeCost);
    const safeCrateCost = Math.max(1, crateCost);
    const cashGap = Math.max(0, safeTarget - projectedCash);
    const minutesToTarget = cashGap === 0 ? 0 : Math.ceil(cashGap / Math.max(1, safeIncome));
    const reserveRatio = riskMode === "conserve" ? 0.55 : riskMode === "balanced" ? 0.35 : 0.18;
    const reserveCash = Math.ceil(projectedCash * reserveRatio);
    const spendableCash = Math.max(0, projectedCash - reserveCash);
    const crateSessions = Math.floor(spendableCash / safeCrateCost) + codeCrates;
    const lowest = Math.min(incomeRating, partsRating, garageRating);
    const focus: Focus =
      cashGap > projectedCash * 0.6
        ? "reserve"
        : lowest === incomeRating
          ? "income"
          : lowest === garageRating
            ? "garage"
            : "crates";
    const readiness = Math.min(
      100,
      Math.round((incomeRating + partsRating + garageRating) / 3 * 0.55 + Math.min(25, crateSessions * 4) + Math.min(20, projectedCash / safeTarget * 20)),
    );

    return {
      projectedCash,
      cashGap,
      minutesToTarget,
      reserveCash,
      spendableCash,
      crateSessions,
      codeCrates,
      codeBoxes,
      focus,
      readiness,
      advice: focusAdvice[focus],
    };
  }, [
    cashPerMinute,
    codeTotals,
    crateCost,
    currentCash,
    garageRating,
    includeCodes,
    incomeRating,
    manualBonusCash,
    partsRating,
    riskMode,
    sessionMinutes,
    targetUpgradeCost,
  ]);

  const reset = () => {
    setIncludeCodes(true);
    setCurrentCash(0);
    setCashPerMinute(1500);
    setTargetUpgradeCost(100000);
    setCrateCost(25000);
    setManualBonusCash(0);
    setSessionMinutes(30);
    setIncomeRating(45);
    setPartsRating(50);
    setGarageRating(45);
    setRiskMode("balanced");
  };

  return (
    <div className="page-shell py-10">
      <section className="mb-10 max-w-4xl">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-amber-300/40 bg-amber-300/10 px-4 py-1.5 text-xs font-black uppercase tracking-wide text-amber-100">
          <Calculator className="h-4 w-4 text-amber-300" />
          Interactive planning tool
        </div>
        <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl">
          Create a Car Calculator
        </h1>
        <p className="mt-4 text-base leading-7 text-slate-300">
          Plan cash, crate sessions, and upgrade timing with the values visible in your server. This tool uses your inputs instead of pretending hidden game formulas are public.
        </p>
      </section>

      <section className="grid gap-7 lg:grid-cols-[1fr_420px]">
        <div className="space-y-6">
          <div className="surface p-5">
            <div className="mb-4 flex items-center justify-between gap-3 border-b border-white/10 pb-4">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Coins className="h-5 w-5 text-amber-300" />
                Resource inputs
              </h2>
              <button onClick={reset} className="btn-quiet">
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </button>
            </div>

            <div className="mb-4 rounded-md border border-cyan-300/25 bg-cyan-500/10 p-4">
              <label className="flex cursor-pointer items-center justify-between gap-4">
                <span>
                  <span className="block text-sm font-black text-white">Include high-confidence code rewards</span>
                  <span className="block text-xs text-slate-400">
                    Adds {codeTotals.cash.toLocaleString()} Cash, {codeTotals.crates} crates, and {codeTotals.partsBoxes} parts boxes.
                  </span>
                </span>
                <input type="checkbox" checked={includeCodes} onChange={(event) => setIncludeCodes(event.target.checked)} className="h-5 w-5 accent-amber-300" />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <NumberInput label="Current cash" value={currentCash} min={0} max={99999999} step={5000} onChange={setCurrentCash} />
              <NumberInput label="Cash per minute" value={cashPerMinute} min={0} max={999999} step={100} onChange={setCashPerMinute} />
              <NumberInput label="Target upgrade cost" value={targetUpgradeCost} min={1} max={99999999} step={5000} onChange={setTargetUpgradeCost} />
              <NumberInput label="Crate cost" value={crateCost} min={1} max={99999999} step={1000} onChange={setCrateCost} />
              <NumberInput label="Manual bonus cash" value={manualBonusCash} min={0} max={99999999} step={5000} onChange={setManualBonusCash} />
              <NumberInput label="Session minutes" value={sessionMinutes} min={0} max={600} step={5} onChange={setSessionMinutes} />
            </div>
          </div>

          <div className="surface p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
              <Car className="h-5 w-5 text-cyan-300" />
              Current garage ratings
            </h2>
            <div className="grid gap-5 sm:grid-cols-3">
              <RatingSlider label="Cash engine" value={incomeRating} onChange={setIncomeRating} />
              <RatingSlider label="Part quality" value={partsRating} onChange={setPartsRating} />
              <RatingSlider label="Garage space" value={garageRating} onChange={setGarageRating} />
            </div>
          </div>

          <div className="surface p-5">
            <h2 className="mb-4 flex items-center gap-2 text-xl font-black text-white">
              <ShieldCheck className="h-5 w-5 text-cyan-300" />
              Spending mode
            </h2>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["conserve", "Conserve", "Keep roughly 55% of projected cash after target planning."],
                ["balanced", "Balanced", "Keep roughly 35% reserve and spend the rest on measured upgrades."],
                ["push", "Push", "Keep a thinner reserve and chase the current milestone now."],
              ].map(([value, label, body]) => (
                <button
                  key={value}
                  onClick={() => setRiskMode(value as "conserve" | "balanced" | "push")}
                  className={`rounded-md border p-4 text-left transition ${
                    riskMode === value
                      ? "border-amber-300 bg-amber-300 text-slate-950"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-300/40"
                  }`}
                >
                  <span className="block text-sm font-black">{label}</span>
                  <span className="mt-1 block text-xs leading-5 opacity-80">{body}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="surface sticky top-24 p-5">
            <div className="mb-5 flex items-center justify-between border-b border-white/10 pb-4">
              <h2 className="flex items-center gap-2 text-xl font-black text-white">
                <Gauge className="h-5 w-5 text-amber-300" />
                Results
              </h2>
              <span className="rounded-md bg-cyan-300 px-2 py-1 font-mono text-xs font-black text-cyan-950">
                {results.readiness}/100
              </span>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Projected Cash</span>
                <strong className="block font-mono text-2xl text-white">{results.projectedCash.toLocaleString()}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Cash Gap</span>
                <strong className="block font-mono text-2xl text-white">{results.cashGap.toLocaleString()}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Minutes Needed</span>
                <strong className="block font-mono text-2xl text-white">{results.minutesToTarget}</strong>
              </div>
              <div className="field-tile p-4">
                <span className="text-xs text-slate-300">Crate Sessions</span>
                <strong className="block font-mono text-2xl text-white">{results.crateSessions}</strong>
              </div>
            </div>

            <div className="mt-4 rounded-md border border-amber-300/25 bg-amber-300/10 p-4">
              <div className="mb-2 flex items-center gap-2">
                <Factory className="h-5 w-5 text-amber-200" />
                <h3 className="font-black text-white">{results.advice.title}</h3>
              </div>
              <p className="text-sm leading-6 text-slate-300">{results.advice.body}</p>
            </div>

            <div className="mt-4 space-y-2 rounded-md border border-white/10 bg-white/5 p-4 text-sm text-slate-300">
              <p>
                Reserve cash: <strong className="text-white">{results.reserveCash.toLocaleString()}</strong>
              </p>
              <p>
                Spendable cash: <strong className="text-white">{results.spendableCash.toLocaleString()}</strong>
              </p>
              <p>
                Code crates included: <strong className="text-white">{results.codeCrates}</strong>
              </p>
              <p>
                Code parts boxes included: <strong className="text-white">{results.codeBoxes}</strong>
              </p>
            </div>

            <div className="mt-5 grid gap-2">
              <Link href={results.advice.route} className="btn-primary">
                <Sparkles className="h-5 w-5" />
                Read Next Guide
              </Link>
              <Link href="/codes/" className="btn-secondary">
                <PackageOpen className="h-5 w-5 text-amber-300" />
                Copy Current Codes
              </Link>
            </div>
          </div>

          <div className="surface p-5">
            <h3 className="mb-3 flex items-center gap-2 font-black text-white">
              <PackageOpen className="h-5 w-5 text-cyan-300" />
              Calculator note
            </h3>
            <p className="text-sm leading-6 text-slate-400">
              Crate prices, cash income, and upgrade costs can change after updates. Use the fields above for the values you can see in your server.
            </p>
          </div>
        </aside>
      </section>
    </div>
  );
}
