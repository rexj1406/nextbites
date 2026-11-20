"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="status-shell">
      <section className="status-card" role="alert">
        <span className="status-icon" aria-hidden="true">
          🍋
        </span>
        <p className="status-code">A LITTLE KITCHEN TROUBLE</p>
        <h1>Let&apos;s try that again.</h1>
        <p>Something unexpected happened while making this page.</p>
        <button className="status-button" onClick={reset} type="button">
          Try again <span aria-hidden="true">↻</span>
        </button>
      </section>
    </main>
  );
}
