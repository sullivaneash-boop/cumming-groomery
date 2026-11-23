import Link from "next/link";
import { BookingLink } from "@/components/links";

export default function NotFound() {
  return (
    <div className="state-page shell narrow">
      <p className="eyebrow">Page not found</p>
      <h1>A little off the trail.</h1>
      <p className="lede">Head back home, or continue to the salon’s appointment page.</p>
      <div className="actions"><Link prefetch={false} className="button button-outline" href="/">Back Home</Link><BookingLink /></div>
    </div>
  );
}
