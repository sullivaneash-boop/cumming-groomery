import type { Metadata } from "next";
import "@fontsource-variable/dm-sans/wght.css";
import "@fontsource-variable/playfair-display/wght.css";
import "@fontsource-variable/playfair-display/wght-italic.css";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BookingLink } from "@/components/links";
import { business, businessSchema } from "@/content/business";

export const metadata: Metadata = {
  title: { default: "The Cumming Groomery | Dog & Cat Grooming in Cumming, GA", template: "%s | The Cumming Groomery" },
  description: "Explore a website concept for The Cumming Groomery, a by-appointment dog and cat grooming salon on Pilgrim Mill Road in Cumming, Georgia.",
  applicationName: business.name,
  robots: { index: false, follow: false, noarchive: true },
  openGraph: {
    title: "The Cumming Groomery | Website Concept",
    description: "A website concept by Peakline Media for a Cumming, Georgia grooming salon.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a className="skip-link" href="#main-content">Skip to content</a>
        <Header />
        <main id="main-content" tabIndex={-1}>{children}</main>
        <Footer />
        <div className="mobile-book"><BookingLink /></div>
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema).replace(/</g, "\\u003c"),
        }} />
      </body>
    </html>
  );
}
