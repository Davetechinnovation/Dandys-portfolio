import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6 md:ml-14">
      <div className="max-w-md">
        <h1 className="text-[clamp(2.6rem,7vw,4.5rem)]">
          This page <span className="text-blue">shipped</span> somewhere else.
        </h1>
        <p className="mt-6 text-dim">
          The route you followed does not exist. The rest of the site does.
        </p>
        <Link href="/" className="btn btn-primary mt-8">
          Back home
        </Link>
      </div>
    </div>
  );
}
