import { business } from "./business";

type BookingDestination = {
  provider: string;
  mode: "external";
  url: `https://${string}`;
  clientGuidance: string;
};

type SiteSettings = {
  booking: BookingDestination;
  announcement?: string;
  giftCardUrl?: `https://${string}`;
  newClientNote?: string;
};

export const site: SiteSettings = {
  booking: {
    provider: "Pawfinity",
    mode: "external",
    url: business.publicListing,
    clientGuidance: "Open the salon’s Pawfinity page for the new-client application and client login.",
  },
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Visit" },
] as const;

export const disclosure = "Website concept by Peakline Media";
