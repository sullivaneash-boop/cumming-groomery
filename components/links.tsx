import { CalendarDays, MapPin, Phone } from "lucide-react";
import { businessLinks } from "@/content/business";
import { site } from "@/content/site";

export function BookingLink({ className = "", children = "Book Appointment" }: {
  className?: string;
  children?: string;
}) {
  return (
    <a className={`button button-primary ${className}`} href={site.booking.url} aria-describedby="booking-destination">
      <CalendarDays size={17} aria-hidden="true" />
      {children}
    </a>
  );
}

export function CallLink({ className = "", children = "Call Now" }: {
  className?: string;
  children?: string;
}) {
  return (
    <a className={`button button-outline ${className}`} href={businessLinks.phone}>
      <Phone size={16} aria-hidden="true" />
      {children}
    </a>
  );
}

export function DirectionsLink() {
  return (
    <a className="button button-outline" href={businessLinks.directions}>
      <MapPin size={17} aria-hidden="true" />
      Get Directions
    </a>
  );
}
