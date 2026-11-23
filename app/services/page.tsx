import type { Metadata } from "next";
import { BookingCallout, PageIntro, SectionHeading, ServiceCard } from "@/components/sections";
import { CallLink } from "@/components/links";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Dog & Cat Grooming Services",
  description: "Explore dog and cat grooming at The Cumming Groomery in Cumming, GA, plus clearly marked sample grooming options.",
};

export default function ServicesPage() {
  return (
    <>
      <PageIntro label="Grooming services" description="The Cumming Groomery lists grooming for dogs and cats. The sample options below illustrate how a full service menu could look.">
        Care for every coat.
      </PageIntro>
      <section className="section" aria-labelledby="dogs-title">
        <div className="shell">
          <SectionHeading id="dogs-title" label="Dog grooming" description="Contact the salon for its current service menu and availability.">For dogs.</SectionHeading>
          <div className="card-grid service-catalog">
            {services.filter((service) => service.species === "Dog").map((service) => <ServiceCard key={service.id} service={service} expanded />)}
          </div>
        </div>
      </section>
      <section className="section section-sage" aria-labelledby="cats-title">
        <div className="shell split">
          <SectionHeading id="cats-title" label="Cat grooming" description="Ask the salon which options suit your cat’s coat and temperament.">For cats.</SectionHeading>
          <div className="service-catalog">
            {services.filter((service) => service.species === "Cat").map((service) => <ServiceCard key={service.id} service={service} expanded />)}
          </div>
        </div>
      </section>
      <section className="section" aria-labelledby="pricing-title">
        <div className="shell split">
          <SectionHeading id="pricing-title" label="Pricing questions">What goes into a quote?</SectionHeading>
          <div>
            <p className="lede">Breed, size, coat type, coat condition and the care requested can affect the time and work involved. Ask the salon for a current quote and to confirm what it includes.</p>
            <CallLink>Call for Pricing</CallLink>
          </div>
        </div>
      </section>
      <BookingCallout />
    </>
  );
}
