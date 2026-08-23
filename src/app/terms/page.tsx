import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of use for the unofficial Create a Car Wiki.",
  alternates: { canonical: "/terms/" },
};

export default function TermsPage() {
  return (
    <main className="page-shell max-w-4xl py-10">
      <h1 className="mb-5 text-4xl font-black text-white">Terms of Use</h1>
      <div className="surface space-y-5 p-6 text-sm leading-7 text-slate-300">
        <p>
          Create a Car Wiki is an unofficial fan-made informational website. Use the guides, calculators, and code lists as planning aids, not as guarantees of in-game outcomes.
        </p>
        <p>
          Codes, rewards, prices, crate contents, and gameplay systems can change at any time. Always verify important details in the Roblox experience before spending time or in-game resources.
        </p>
        <p>
          Roblox, Create a Car, game assets, and related trademarks belong to their respective owners. This website is not affiliated with Roblox Corporation or AssemblerX.
        </p>
      </div>
    </main>
  );
}
