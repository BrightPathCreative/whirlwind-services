"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navLinks, servicePages, site } from "@/lib/site-data";

export function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="site-header">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <nav aria-label="Main navigation" className="navbar">
        <Link aria-label="Whirlwind Services home" className="nav-logo" href="/">
          <Image alt="" height={54} priority src="/images/brand/logo.png" width={54} />
          <span>
            <strong>Whirlwind</strong>
            <small>Services</small>
          </span>
        </Link>

        <div className="desktop-nav">
          {navLinks.map((link) =>
            link.label === "Services" ? (
              <div className="nav-dropdown" key={link.href}>
                <Link className={pathname.startsWith("/services") ? "active" : ""} href={link.href}>
                  {link.label}
                </Link>
                <div className="dropdown-panel">
                  {servicePages.map((service) => (
                    <Link href={`/services/${service.slug}`} key={service.slug}>
                      {service.title}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link className={pathname === link.href ? "active" : ""} href={link.href} key={link.href}>
                {link.label}
              </Link>
            )
          )}
          <Link className="button button-primary nav-cta" href="/contact">
            Get in Touch
          </Link>
        </div>

        <button
          aria-expanded={isOpen}
          aria-label="Open menu"
          className="menu-button"
          onClick={() => setIsOpen((value) => !value)}
          type="button"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen ? (
        <div className="mobile-menu">
          {navLinks.map((link) => (
            <Link href={link.href} key={link.href} onClick={() => setIsOpen(false)}>
              {link.label}
            </Link>
          ))}
          <a href={site.linkedin} rel="noreferrer" target="_blank">
            LinkedIn
          </a>
        </div>
      ) : null}
    </header>
  );
}
