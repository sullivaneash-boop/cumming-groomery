import Link from "next/link";
import { business, businessLinks } from "@/content/business";
import { disclosure, navigation, site } from "@/content/site";

export function Footer() {
  const { street, suite, city, region, postalCode } = business.address;

  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer-grid">
          <div>
            <Link prefetch={false} className="footer-brand" href="/">{business.name}</Link>
            <p>Dog and cat grooming in Cumming, Georgia.</p>
          </div>
          <nav className="footer-links" aria-label="Footer navigation">
            {navigation.slice(1).map(({ href, label }) => <Link prefetch={false} key={href} href={href}>{label}</Link>)}
            {site.giftCardUrl && <a href={site.giftCardUrl}>Gift cards</a>}
          </nav>
          <address>
            {street}, {suite}<br />
            {city}, {region} {postalCode}<br />
            <a href={businessLinks.phone}>{business.phone}</a>
          </address>
        </div>
        <div className="footer-note" id="about-this-concept" tabIndex={-1}>
          <strong>{disclosure}</strong>
          <p>Independent demonstration. Sample service content and photo selections may change before an approved launch.</p>
        </div>
      </div>
    </footer>
  );
}
