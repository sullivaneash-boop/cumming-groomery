import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { BookingLink, CallLink } from "@/components/links";
import { AppointmentSteps, FaqSection, PeopleSection, ReviewsSection, SectionHeading, VisitDetails } from "@/components/sections";
import { site } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <section className="hero" aria-labelledby="home-title">
        <div className="hero-details">
          <div className="hero-copy">
            <p className="eyebrow"><MapPin size={15} aria-hidden="true" /> Cumming, Georgia</p>
            <h1 id="home-title">Good grooming.<br /><em>Happier pets.</em></h1>
            <p>Dog and cat grooming on Pilgrim Mill Road, with your pet’s comfort at the heart of every visit.</p>
            <div className="actions"><BookingLink /><CallLink /></div>
            <p className="hero-note">By appointment · Online via {site.booking.provider}</p>
          </div>
        </div>
        <div className="hero-photo">
          <Image src="/images/hero.webp" alt="Small cream dog sitting on the salon grooming table" fill loading="eager" fetchPriority="high" sizes="(min-width: 48rem) 50vw, 100vw" />
          <span className="photo-caption">Salon photo</span>
        </div>
      </section>

      <section className="section" aria-labelledby="services-title">
        <div className="shell">
          <div className="section-top">
            <SectionHeading id="services-title" label="Grooming services">A little care goes a long way.</SectionHeading>
            <Link prefetch={false} className="text-link" href="/services">View all services <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>

          <div className="pet-services">
            <Link prefetch={false} className="pet-service pet-service-dog" href="/services#dogs-title">
              <span className="pet-service-portrait"><Image src="/images/cutouts/dog-cutout1.webp" alt="" fill sizes="(min-width: 55rem) 270px, 40vw" /></span>
              <span className="pet-service-copy"><span className="eyebrow">Grooming for dogs</span><strong>For the dogs.</strong><span>Explore dog grooming <ArrowUpRight size={16} aria-hidden="true" /></span></span>
            </Link>
            <Link prefetch={false} className="pet-service pet-service-cat" href="/services#cats-title">
              <span className="pet-service-portrait"><Image src="/images/cutouts/cat-cutout1.webp" alt="" fill sizes="(min-width: 55rem) 320px, 45vw" /></span>
              <span className="pet-service-copy"><span className="eyebrow">Grooming for cats</span><strong>For the cats.</strong><span>Explore cat grooming <ArrowUpRight size={16} aria-hidden="true" /></span></span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section section-sage" aria-labelledby="approach-title">
        <div className="shell split approach">
          <div className="approach-image">
            <Image src="/images/salon.webp" alt="The salon interior with a front counter and red chairs" fill sizes="(min-width: 55rem) 48vw, 94vw" />
            <span className="photo-caption">Salon photo</span>
          </div>
          <div>
            <SectionHeading id="approach-title" label="Our approach">Comfort comes first.</SectionHeading>
            <p className="lede">The Cumming Groomery’s approach starts with how the animal feels. Grooms are scheduled by appointment to help keep the salon calm.</p>
            <Link prefetch={false} className="text-link" href="/about">Get to know the salon <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
        </div>
      </section>


      <section className="section roll-call" aria-labelledby="gallery-title">
        <div className="shell">
          <div className="section-top">
            <SectionHeading id="gallery-title" label="From the groomery" description="A few of the dogs and cats who have stopped by.">Look who stopped by.</SectionHeading>
            <Link prefetch={false} className="text-link" href="/gallery">Explore the gallery <ArrowUpRight size={16} aria-hidden="true" /></Link>
          </div>
          <Link prefetch={false} className="roll-call-link" href="/gallery">
            <span className="roll-call-pets" aria-hidden="true">
              <span><Image src="/images/cutouts/dogcutout3.webp" alt="" fill sizes="(min-width: 55rem) 220px, 23vw" /></span>
              <span><Image src="/images/cutouts/dogcutout2.webp" alt="" fill sizes="(min-width: 55rem) 190px, 20vw" /></span>
              <span className="roll-call-cat"><Image src="/images/cutouts/cat-cutout1.webp" alt="" fill sizes="(min-width: 55rem) 270px, 25vw" /></span>
              <span><Image src="/images/cutouts/dog-cutout1.webp" alt="" fill sizes="(min-width: 55rem) 190px, 20vw" /></span>
            </span>
            <span className="roll-call-bottom">More moments from the salon <ArrowUpRight size={16} aria-hidden="true" /></span>
          </Link>
        </div>
      </section>

      <PeopleSection />
      <ReviewsSection />
      <AppointmentSteps />
      <FaqSection />

      <section className="section visit-band" aria-labelledby="visit-title">
        <div className="shell split">
          <div>
            <SectionHeading id="visit-title" label="Visit the salon">Find us on Pilgrim Mill Road.</SectionHeading>
            <p className="lede">Planning a visit? Call the salon to confirm a time, or start with its booking page.</p>
            <BookingLink />
          </div>
          <VisitDetails />
        </div>
      </section>
    </>
  );
}
