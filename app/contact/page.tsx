import type { Metadata } from "next";
import { BookingLink, CallLink } from "@/components/links";
import { PageIntro, SectionHeading, VisitDetails } from "@/components/sections";
import { businessLinks } from "@/content/business";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: "Contact & Directions",
  description: "Call, email or get directions to The Cumming Groomery at 2440 Pilgrim Mill Road, Suite C, in Cumming, GA.",
};

export default function ContactPage() {
  return (
    <>
      <PageIntro label="Contact & directions" description="Find the salon on Pilgrim Mill Road in Cumming. Grooming visits are by appointment.">
        Visit the groomery.
      </PageIntro>
      <section className="section" aria-labelledby="visit-details-title">
        <div className="shell split">
          <div>
            <SectionHeading id="visit-details-title" label="Plan your visit">On Pilgrim Mill Road.</SectionHeading>
            <VisitDetails showHours />
          </div>
          <div className="inquiry-panel">
            <p className="eyebrow">Appointments</p>
            <h2>Ready to get in touch?</h2>
            <p>{site.booking.clientGuidance} Call the salon to ask about availability or confirm a time.</p>
            {site.newClientNote && <p>{site.newClientNote}</p>}
            <div className="actions"><BookingLink /><CallLink /></div>
            <a className="text-link" href={businessLinks.email}>Email the Salon</a>
          </div>
        </div>
      </section>
    </>
  );
}
