import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for the unofficial Create a Car Wiki.",
  alternates: { canonical: "/privacy-policy/" },
};

export default function PrivacyPolicyPage() {
  return (
    <main className="page-shell max-w-4xl py-10">
      <h1 className="mb-5 text-4xl font-black text-white">Privacy Policy</h1>
      <div className="surface space-y-5 p-6 text-sm leading-7 text-slate-300">
        <p>
          Create a Car Wiki is a static informational site. It does not require account registration and does not ask for Roblox credentials.
        </p>
        <p>
          If analytics, ads, or hosting logs are enabled by the site owner or hosting provider, they may collect standard technical information such as page views, browser type, referral source, and approximate location.
        </p>
        <p>
          Never enter your Roblox password on this site. Redeem Create a Car codes only inside the official Roblox experience.
        </p>
      </div>
    </main>
  );
}
