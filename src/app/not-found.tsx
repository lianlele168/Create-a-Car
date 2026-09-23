import Link from "next/link";
import { Car, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="page-shell flex min-h-[70vh] items-center justify-center py-16">
      <div className="surface max-w-xl p-8 text-center">
        <Car className="mx-auto mb-5 h-12 w-12 text-cyan-300" />
        <h1 className="mb-3 text-3xl font-black text-white">Page not found</h1>
        <p className="mb-6 text-sm leading-7 text-slate-300">
          This garage slot is empty. Head back to the wiki homepage or jump into the codes page.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link href="/" className="btn-primary">
            <Home className="h-5 w-5" />
            Home
          </Link>
          <Link href="/codes/" className="btn-secondary">
            <Search className="h-5 w-5 text-cyan-300" />
            Codes
          </Link>
        </div>
      </div>
    </main>
  );
}
