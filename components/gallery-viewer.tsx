"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import type { GalleryPhoto } from "@/content/gallery";

const filters = ["All", "Dogs", "Cats", "Salon"] as const;
type Filter = (typeof filters)[number];

export function GalleryViewer({ photos, kind }: { photos: readonly GalleryPhoto[]; kind: GalleryPhoto["kind"] }) {
  const [filter, setFilter] = useState<Filter>("All");
  const [selected, setSelected] = useState<number | null>(null);
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);
  const visible = photos.filter((photo) => filter === "All" || photo.category === filter);
  const current = selected === null ? undefined : visible[selected];
  const titleId = `photo-title-${kind}`;

  useEffect(() => {
    if (current && !dialog.current?.open) {
      dialog.current?.showModal();
      closeButton.current?.focus();
    }
  }, [current]);

  function move(offset: number) {
    setSelected((index) => index === null ? null : (index + offset + visible.length) % visible.length);
  }

  function close() {
    setSelected(null);
    trigger.current?.focus();
  }

  if (!photos.length) return <p className="gallery-empty">Approved salon photography can be added here.</p>;

  return (
    <>
      <div className="gallery-filters" role="group" aria-label="Filter gallery photos">
        {filters.map((value) => (
          <button type="button" key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>{value}</button>
        ))}
      </div>
      <p role="status" className="sr-only">{visible.length} {visible.length === 1 ? "image" : "images"}</p>
      {visible.length ? (
        <div className="gallery-grid">
          {visible.map((photo, index) => (
            <figure key={photo.id}>
              <button
                type="button"
                className="gallery-photo"
                aria-label={`Open image: ${photo.caption}`}
                onClick={(event) => {
                  trigger.current = event.currentTarget;
                  setSelected(index);
                }}
              >
                <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 80rem) 400px, (min-width: 55rem) 33vw, 49vw" style={{ objectPosition: photo.position }} />
                <span className="expand-icon"><Expand size={17} aria-hidden="true" /></span>
              </button>
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>
      ) : <p className="gallery-empty">No images in this category yet. Choose another filter to keep browsing.</p>}
      <dialog
        ref={dialog}
        className="lightbox"
        aria-labelledby={titleId}
        onClose={close}
        onKeyDown={(event) => {
          if (visible.length < 2) return;
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            move(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
        onClick={(event) => {
          if (event.target === event.currentTarget) dialog.current?.close();
        }}
      >
        {current && selected !== null && (
          <div className="lightbox-inner">
            <div className="lightbox-top">
              <p className="eyebrow">{kind === "concept" ? "Concept photography" : "Salon portfolio"}</p>
              <button className="icon-button" type="button" ref={closeButton} aria-label="Close image viewer" onClick={() => dialog.current?.close()}>
                <X size={21} aria-hidden="true" />
              </button>
            </div>
            <div className="lightbox-image">
              <Image src={current.src} alt={current.alt} fill sizes="(min-width: 58rem) 850px, 90vw" />
            </div>
            <div className="lightbox-bottom">
              <div aria-live="polite">
                <h3 id={titleId}>{current.caption}</h3>
                <p>{selected + 1} of {visible.length}</p>
              </div>
              {visible.length > 1 && (
                <div className="lightbox-nav">
                  <button className="icon-button" type="button" aria-label="Previous image" onClick={() => move(-1)}><ChevronLeft aria-hidden="true" /></button>
                  <button className="icon-button" type="button" aria-label="Next image" onClick={() => move(1)}><ChevronRight aria-hidden="true" /></button>
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
