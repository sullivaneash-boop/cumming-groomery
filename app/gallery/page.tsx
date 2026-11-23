import type { Metadata } from "next";
import { BookingCallout, PageIntro, SectionHeading } from "@/components/sections";
import { GalleryViewer } from "@/components/gallery-viewer";
import { gallery } from "@/content/gallery";

export const metadata: Metadata = {
  title: "Pet Grooming Gallery",
  description: "See dogs, cats and a look inside The Cumming Groomery in Cumming, Georgia.",
};

export default function GalleryPage() {
  const salon = gallery.filter(({ kind }) => kind === "salon");
  const concept = gallery.filter(({ kind }) => kind === "concept");

  return (
    <>
      <PageIntro label="Gallery" description="Browse portraits of dogs and cats at The Cumming Groomery, and take a look inside the salon.">
        The grooming gallery.
      </PageIntro>
      <section className="section gallery-section" aria-labelledby="portfolio-title">
        <div className="shell">
          <SectionHeading id="portfolio-title" label="Salon photography">From the groomery.</SectionHeading>
          <GalleryViewer photos={salon} kind="salon" />
        </div>
      </section>
      {concept.length > 0 && (
        <section className="section section-sage" aria-labelledby="gallery-concept-title">
          <div className="shell">
            <SectionHeading id="gallery-concept-title" label="Sample imagery">Concept photography.</SectionHeading>
            <GalleryViewer photos={concept} kind="concept" />
          </div>
        </section>
      )}
      <BookingCallout />
    </>
  );
}
