"use client";

import Link from "next/link";

export default function ErrorPage({ reset }: { reset: () => void }) {
  return (
    <div className="state-page shell narrow">
      <p className="eyebrow">Page unavailable</p>
      <h1>Something went awry.</h1>
      <p className="lede">Try loading this page again or return to the homepage.</p>
      <div className="actions"><button type="button" className="button button-primary" onClick={reset}>Try Again</button><Link prefetch={false} className="button button-outline" href="/">Back Home</Link></div>
    </div>
  );
}
