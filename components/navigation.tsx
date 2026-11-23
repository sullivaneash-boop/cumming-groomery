"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { navigation } from "@/content/site";

function NavLinks({ onNavigate, pathname }: { onNavigate?: () => void; pathname: string }) {
  return navigation.map(({ href, label }) => (
    <Link prefetch={false} key={href} href={href} aria-current={pathname === href ? "page" : undefined} onClick={onNavigate}>
      {label}
    </Link>
  ));
}

export function Navigation() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const button = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const desktop = window.matchMedia("(min-width: 64rem)");
    const closeAtDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        button.current?.focus();
      }
    };

    desktop.addEventListener("change", closeAtDesktop);
    document.addEventListener("keydown", handleEscape);
    return () => {
      desktop.removeEventListener("change", closeAtDesktop);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [open]);

  return (
    <>
      <nav className="desktop-nav" aria-label="Main navigation"><NavLinks pathname={pathname} /></nav>
      <button
        ref={button}
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        onClick={() => setOpen(!open)}
      >
        {open ? <X size={21} aria-hidden="true" /> : <Menu size={21} aria-hidden="true" />}
        {open ? "Close" : "Menu"}
      </button>
      <nav id="mobile-menu" className="mobile-menu" aria-label="Main navigation" hidden={!open}>
        <NavLinks pathname={pathname} onNavigate={() => setOpen(false)} />
      </nav>
    </>
  );
}
