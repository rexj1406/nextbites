import Link from "next/link";

export default function NotFound() {
  return (
    <main className="status-shell">
      <section className="status-card">
        <span className="status-icon" aria-hidden="true">
          🥄
        </span>
        <p className="status-code">404 · WRONG TURN</p>
        <h1>This bite got away.</h1>
        <p>
          We couldn&apos;t find that recipe. It may have moved off the menu.
        </p>
        <Link className="status-button" href="/">
          Back to the recipes <span aria-hidden="true">↗</span>
        </Link>
      </section>
    </main>
  );
}
