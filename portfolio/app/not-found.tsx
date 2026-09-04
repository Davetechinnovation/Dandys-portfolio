import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center md:ml-16">
      <div className="text-center px-8">
        <p className="text-xs uppercase tracking-widest text-muted-foreground mb-6">
          404 // ROUTE NOT FOUND
        </p>
        <h1 className="text-5xl font-bold mb-8">Lost in the system.</h1>
        <Link
          href="/"
          className="px-8 py-3 bg-foreground text-background hover:opacity-90 transition-opacity font-semibold uppercase tracking-wider text-sm inline-block"
        >
          RETURN HOME
        </Link>
      </div>
    </div>
  );
}
