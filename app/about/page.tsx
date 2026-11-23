import type { Metadata } from "next";
import Image from "next/image";
import { BookingCallout, PageIntro, PeopleSection, SectionHeading } from "@/components/sections";
import { BookingLink, CallLink } from "@/components/links";

export const metadata: Metadata = {
  title: "About the Salon",
  description: "Get to know The Cumming Groomery’s approach to grooming dogs and cats by appointment in Cumming, Georgia.",
};

export default function AboutPage() {
  return (
    <>
      <PageIntro label="About the salon" description="The Cumming Groomery is a local salon for dogs and cats on Pilgrim Mill Road in Cumming, Georgia.">
        Comfort comes first.
      </PageIntro>
      <section className="section" aria-labelledby="philosophy-title">
        <div className="shell split approach">
          <div className="approach-image">
            <Image src="/images/salon.webp" alt="The salon interior with a front counter and red chairs" fill sizes="(min-width: 55rem) 48vw, 94vw" />
            <span className="photo-caption">Salon photo</span>
          </div>
          <div>
            <SectionHeading id="philosophy-title" label="Grooming philosophy">Care for the pet in front of us.</SectionHeading>
            <p className="lede">The salon puts the animal’s experience first and schedules grooms by appointment to help keep the space calm.</p>
            <p className="lede">When you reach out, tell the salon about your pet’s coat, how they handle grooming and anything that might help them feel more comfortable.</p>
            <div className="actions"><BookingLink /><CallLink /></div>
          </div>
        </div>
      </section>
      <PeopleSection detailed />
      <BookingCallout />
    </>
  );
}
