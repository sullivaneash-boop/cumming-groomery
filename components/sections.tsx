import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CalendarDays, ChevronDown, Clock3, Heart, MapPin, Phone, Scissors } from "lucide-react";
import { business, businessLinks } from "@/content/business";
import { faq } from "@/content/faq";
import { reviews, staff } from "@/content/people";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { BookingLink, CallLink, DirectionsLink } from "./links";

export function PageIntro({ label, children, description }: { label: string; children: ReactNode; description: string }) {
  return (
    <div className="page-intro">
      <div className="shell narrow">
        <p className="eyebrow">{label}</p>
        <h1>{children}</h1>
        <p className="lede">{description}</p>
      </div>
    </div>
  );
}

export function SectionHeading({ id, label, children, description }: {
  id: string;
  label: string;
  children: ReactNode;
  description?: string;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{label}</p>
      <h2 id={id}>{children}</h2>
      {description && <p className="lede">{description}</p>}
    </div>
  );
}

export function ServiceCard({ service, expanded = false }: { service: (typeof services)[number]; expanded?: boolean }) {
  return (
    <article className="service-card" id={expanded ? service.id : undefined}>
      {service.image && (
        <div className="service-media">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            sizes="(min-width: 80rem) 395px, (min-width: 64rem) 32vw, (min-width: 40rem) 47vw, 94vw"
            style={{ objectPosition: service.image.position }}
          />
          <span className="photo-caption">Salon photo</span>
        </div>
      )}
      <div className="service-copy">
        <p className="eyebrow">{service.status === "sample" ? "Sample offering" : "Listed service"}</p>
        <h3>{service.title}</h3>
        <p>{service.description}</p>
        {expanded ? <p>{service.details}</p> : (
          <Link prefetch={false} className="text-link" href={`/services#${service.id}`}>Explore {service.title} <ArrowUpRight size={15} aria-hidden="true" /></Link>
        )}
      </div>
    </article>
  );
}

export function FaqSection() {
  return (
    <section className="section" aria-labelledby="faq-title">
      <div className="shell split faq-layout">
        <SectionHeading id="faq-title" label="Good to know">Before the visit.</SectionHeading>
        <div className="faq-list">
          {faq.map(({ question, answer }) => (
            <details key={question}>
              <summary>{question}<ChevronDown size={19} aria-hidden="true" /></summary>
              <p>{answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AppointmentSteps() {
  const steps = [
    { icon: CalendarDays, heading: "Choose how to book", text: `Start on the salon’s ${site.booking.provider} page or call to discuss availability.` },
    { icon: Heart, heading: "Tell us about your pet", text: "Share the grooming you have in mind and anything that helps your pet feel comfortable." },
    { icon: Scissors, heading: "Visit on Pilgrim Mill Road", text: "Once your appointment is confirmed with the salon, head to Suite C in Cumming." },
  ];

  return (
    <section className="section section-sage" aria-labelledby="steps-title">
      <div className="shell">
        <SectionHeading id="steps-title" label="By appointment">From hello to fresh coat.</SectionHeading>
        <ol className="steps" role="list">
          {steps.map(({ icon: Icon, heading, text }) => (
            <li key={heading}><Icon size={25} aria-hidden="true" /><h3>{heading}</h3><p>{text}</p></li>
          ))}
        </ol>
        <div className="actions"><BookingLink /><CallLink /></div>
      </div>
    </section>
  );
}

export function VisitDetails({ showHours = false }: { showHours?: boolean }) {
  const { street, suite, city, region, postalCode } = business.address;

  return (
    <div className="visit-details">
      <div className="contact-item">
        <MapPin size={22} aria-hidden="true" />
        <div>
          <h3>Salon address</h3>
          <address>{street}, {suite}<br />{city}, {region} {postalCode}</address>
        </div>
      </div>
      <div className="contact-item">
        <Phone size={21} aria-hidden="true" />
        <div>
          <h3>Salon phone</h3>
          <a href={businessLinks.phone}>{business.phone}</a>
          <a href={businessLinks.email}>{business.email}</a>
        </div>
      </div>
      {showHours && (
        <div className="contact-item">
          <Clock3 size={21} aria-hidden="true" />
          <div>
            <h3>Published hours</h3>
            <p>{business.listedHours.days}, {business.listedHours.time}</p>
            <p>Call to confirm before visiting.</p>
          </div>
        </div>
      )}
      <div className="actions"><DirectionsLink /></div>
    </div>
  );
}

export function BookingCallout() {
  return (
    <section className="section booking-callout" aria-labelledby="booking-title">
      <div className="shell split">
        <div>
          <p className="eyebrow">Cumming, Georgia</p>
          <h2 id="booking-title">Let’s plan a visit.</h2>
          <p>Continue to the salon’s {site.booking.provider} page or call to ask about services and availability.</p>
        </div>
        <div className="actions"><BookingLink /><CallLink /></div>
      </div>
    </section>
  );
}

export function PeopleSection() {
  return (
    <section className="section" aria-labelledby="people-title">
      <div className="shell split">
        <SectionHeading id="people-title" label="The people behind the groom">Meet the salon.</SectionHeading>
        {staff.length ? (
          <div className="staff-list">
            {staff.map(({ name, role, bio }) => <article key={name}><h3>{name}</h3><p className="eyebrow">{role}</p><p>{bio}</p></article>)}
          </div>
        ) : (
          <div className="concept-slot">
            <h3>Team profile preview</h3>
            <p>There’s room here for an approved introduction and team photos. For questions about your pet’s visit, call the salon directly.</p>
            <CallLink />
          </div>
        )}
      </div>
    </section>
  );
}

export function ReviewsSection() {
  return (
    <section className="section review-section" aria-labelledby="reviews-title">
      <div className="shell split">
        <SectionHeading id="reviews-title" label="From pet parents">Customer stories.</SectionHeading>
        {reviews.length ? (
          <div className="staff-list">
            {reviews.map(({ author, quote, sourceUrl }) => (
              <figure key={sourceUrl}>
                <blockquote cite={sourceUrl}>{quote}</blockquote>
                <figcaption><a className="text-link" href={sourceUrl}>{author} · Google Maps profile</a></figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className="concept-slot">
            <h3>Review preview</h3>
            <p>This space is reserved for verified customer reviews once the source and permissions are confirmed.</p>
          </div>
        )}
      </div>
    </section>
  );
}
