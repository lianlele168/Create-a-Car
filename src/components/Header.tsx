"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookOpen,
  Calculator,
  Car,
  ChevronRight,
  ExternalLink,
  Factory,
  Gauge,
  Key,
  Menu,
  PackageOpen,
  Search,
  Sparkles,
  Trophy,
  X,
} from "lucide-react";
import codesData from "@/data/codes.json";
import config from "@/data/game.config.json";
import plansData from "@/data/packs.json";
import buildsData from "@/data/player-cards.json";

const navItems = [
  { href: "/codes", label: "Codes", icon: Key, badge: `${codesData.filter((code) => code.status === "active").length} Active` },
  { href: "/calculator", label: "Calculator", icon: Calculator, badge: "Tool" },
  { href: "/tier-list", label: "Tier List", icon: Gauge },
  { href: "/best-build", label: "Best Build", icon: Trophy },
  { href: "/parts-guide", label: "Parts", icon: PackageOpen },
  { href: "/conveyor-guide", label: "Conveyor", icon: Factory },
  { href: "/beginner-guide", label: "Guide", icon: BookOpen },
];

const staticSearchItems = [
  { title: "Best Build", detail: "Cash farm, showcase, and merge-safe build slots", href: "/best-build", type: "Guide" },
  { title: "Parts Guide", detail: "Crates, part rarity, and upgrade checkpoints", href: "/parts-guide", type: "Guide" },
  { title: "Conveyor Guide", detail: "Use passive income before risky crate sessions", href: "/conveyor-guide", type: "Guide" },
  { title: "Dealer Guide", detail: "Flip spare parts without risking your core car", href: "/dealer-guide", type: "Guide" },
  { title: "Merge Guide", detail: "Test merger updates with duplicate parts first", href: "/merge-guide", type: "Guide" },
  { title: "Updates", detail: "Current Roblox stats and code-source conflicts", href: "/updates", type: "Log" },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setSearchOpen((value) => !value);
      }

      if (event.key === "Escape") {
        setSearchOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    const q = searchQuery.toLowerCase();

    const codeResults = codesData
      .filter((item) => `${item.code} ${item.reward} ${item.status}`.toLowerCase().includes(q))
      .slice(0, 5)
      .map((item) => ({
        title: item.code,
        detail: `${item.reward} - ${item.status}`,
        href: "/codes",
        type: "Code",
      }));

    const buildResults = buildsData
      .filter((item) => `${item.name} ${item.role} ${item.tier} ${item.description}`.toLowerCase().includes(q))
      .slice(0, 5)
      .map((item) => ({
        title: item.name,
        detail: `${item.tier}-tier ${item.role}: ${item.rerollAdvice}`,
        href: `/tier-list/${item.slug}`,
        type: "Build",
      }));

    const planResults = plansData
      .filter((item) => `${item.name} ${item.stage} ${item.goal}`.toLowerCase().includes(q))
      .slice(0, 4)
      .map((item) => ({
        title: item.name,
        detail: `${item.stage}: ${item.goal}`,
        href: "/parts-guide",
        type: "Plan",
      }));

    const routeResults = staticSearchItems.filter((item) => `${item.title} ${item.detail}`.toLowerCase().includes(q));

    return [...codeResults, ...buildResults, ...planResults, ...routeResults].slice(0, 10);
  }, [searchQuery]);

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/90 shadow-lg shadow-slate-950/40 backdrop-blur-md">
        <div className="page-shell">
          <div className="flex h-16 items-center justify-between gap-3">
            <Link href="/" className="group flex min-w-0 items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-cyan-300/40 bg-slate-900 text-cyan-200 shadow-lg shadow-cyan-950/30">
                <Car className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block truncate text-sm font-black uppercase tracking-wide text-white group-hover:text-amber-200 sm:text-base">
                  Create a Car
                </span>
                <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-200">
                  Roblox Wiki & Tools
                </span>
              </span>
            </Link>

            <nav className="hidden items-center gap-1 xl:flex">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex h-10 items-center gap-2 rounded-md px-3 text-sm font-bold transition ${
                      isActive
                        ? "bg-cyan-500/20 text-cyan-100 ring-1 ring-cyan-300/40"
                        : "text-slate-300 hover:bg-white/10 hover:text-white"
                    }`}
                  >
                    <Icon className={`h-4 w-4 ${isActive ? "text-amber-300" : "text-slate-400"}`} />
                    <span>{item.label}</span>
                    {item.badge ? (
                      <span className="rounded-full bg-amber-300/20 px-2 py-0.5 text-[10px] font-black text-amber-200">
                        {item.badge}
                      </span>
                    ) : null}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={config.game.robloxUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden h-10 items-center gap-2 rounded-md border border-white/10 bg-white/10 px-3 text-xs font-bold text-slate-200 transition hover:border-amber-300/50 hover:text-white lg:flex"
              >
                Play
                <ExternalLink className="h-3.5 w-3.5 text-amber-300" />
              </a>

              <button
                onClick={() => setSearchOpen(true)}
                className="flex h-10 items-center gap-2 rounded-md border border-white/10 bg-slate-900 px-3 text-xs font-bold text-slate-300 transition hover:border-cyan-300/50 hover:text-white"
                title="Search wiki"
              >
                <Search className="h-4 w-4 text-cyan-300" />
                <span className="hidden sm:inline">Search</span>
                <kbd className="hidden rounded border border-slate-700 bg-slate-950 px-1.5 py-0.5 font-mono text-[10px] text-slate-400 sm:inline">
                  Ctrl K
                </kbd>
              </button>

              <button
                onClick={() => setMobileMenuOpen((value) => !value)}
                className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-slate-900 text-slate-200 xl:hidden"
                aria-label="Toggle navigation"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen ? (
          <div className="border-t border-white/10 bg-slate-950/95 px-4 py-4 xl:hidden">
            <div className="grid gap-2 sm:grid-cols-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center justify-between rounded-md border px-4 py-3 text-sm font-bold ${
                      isActive
                        ? "border-cyan-300/40 bg-cyan-500/10 text-cyan-100"
                        : "border-white/10 bg-white/5 text-slate-300"
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="h-4 w-4 text-amber-300" />
                      {item.label}
                    </span>
                    {item.badge ? <span className="text-[10px] text-amber-200">{item.badge}</span> : null}
                  </Link>
                );
              })}
            </div>
          </div>
        ) : null}
      </header>

      {searchOpen ? (
        <div className="fixed inset-0 z-50 flex items-start justify-center bg-slate-950/100 px-4 pt-16 backdrop-blur-sm sm:pt-24">
          <div className="w-full max-w-2xl overflow-hidden rounded-lg border border-cyan-300/25 bg-slate-950 shadow-2xl">
            <div className="flex items-center border-b border-white/10 px-4">
              <Search className="h-5 w-5 shrink-0 text-cyan-300" />
              <input
                type="text"
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                placeholder="Search codes, cash, crates, conveyor, parts..."
                className="h-14 w-full bg-transparent px-4 text-base font-semibold text-white placeholder:text-slate-500 focus:outline-none"
                autoFocus
              />
              <button
                onClick={() => setSearchOpen(false)}
                className="rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="max-h-[62vh] overflow-y-auto p-4">
              {!searchQuery ? (
                <div className="py-9 text-center">
                  <Sparkles className="mx-auto mb-3 h-8 w-8 text-amber-300" />
                  <p className="text-sm font-semibold text-slate-300">Try CONVEYOR, GRIND, best build, crates, or merge.</p>
                </div>
              ) : null}

              {searchResults.length > 0 ? (
                <div className="space-y-2">
                  {searchResults.map((item) => (
                    <Link
                      key={`${item.type}-${item.title}`}
                      href={item.href}
                      onClick={() => setSearchOpen(false)}
                      className="flex items-center justify-between rounded-md border border-white/10 bg-white/5 p-3 transition hover:border-cyan-300/40 hover:bg-cyan-500/10"
                    >
                      <span className="min-w-0">
                        <span className="block truncate text-sm font-black text-white">{item.title}</span>
                        <span className="block truncate text-xs text-slate-400">{item.detail}</span>
                      </span>
                      <span className="ml-3 flex shrink-0 items-center gap-2 text-[11px] font-bold uppercase tracking-wide text-amber-200">
                        {item.type}
                        <ChevronRight className="h-4 w-4" />
                      </span>
                    </Link>
                  ))}
                </div>
              ) : null}

              {searchQuery && searchResults.length === 0 ? (
                <div className="py-9 text-center text-sm font-semibold text-slate-400">
                  No results found for &quot;{searchQuery}&quot;.
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
