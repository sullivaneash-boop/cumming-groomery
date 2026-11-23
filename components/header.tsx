import Link from "next/link";
import Image from "next/image";
import { BookingLink } from "./links";
import { Navigation } from "./navigation";
import { business } from "@/content/business";
import { disclosure, site } from "@/content/site";

export function Header() {
  return (
    <header>
      <div className="concept-bar">
        <a href="#about-this-concept">{disclosure}</a>
        <span className="concept-detail">Demonstration site</span>
      </div>
      {site.announcement && <div className="announcement">{site.announcement}</div>}
      <div className="shell header-inner">
        <Link prefetch={false} className="brand" href="/" aria-label={`${business.name} home`}>
          <span className="brand-mark" aria-hidden="true">
            <Image src="/images/supplied-brand.jpg" width={1692} height={1536} alt="" sizes="120px" />
          </span>
          <span className="brand-words">The Cumming<br />Groomery<span>.</span></span>
        </Link>
        <Navigation />
        <BookingLink className="header-book" />
      </div>
      <span className="sr-only" id="booking-destination">Continues to the salon’s {site.booking.provider} page.</span>
    </header>
  );
}
