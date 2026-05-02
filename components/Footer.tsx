import Image from "next/image";
import Link from "next/link";
import { locationPages, servicePages, site } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-mark" aria-hidden="true" />
      <div className="footer-grid">
        <div>
          <Image
            alt="Whirlwind Services"
            className="footer-logo"
            height={88}
            src="/images/brand/logo.png"
            width={88}
          />
          <p className="footer-tagline">{site.tagline}</p>
          <p>Senior administrative and executive support across Bayside and Melbourne.</p>
        </div>

        <div>
          <h2>Quick Links</h2>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/faq">FAQ</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/terms">Terms</Link>
          <Link href="/privacy">Privacy</Link>
        </div>

        <div>
          <h2>Services</h2>
          {servicePages.map((service) => (
            <Link href={`/services/${service.slug}`} key={service.slug}>
              {service.shortTitle}
            </Link>
          ))}
        </div>

        <div>
          <h2>Service Areas</h2>
          <Link href="/bayside-melbourne">Bayside Melbourne</Link>
          {locationPages.map((location) => (
            <Link href={`/locations/${location.slug}`} key={location.slug}>
              {location.area}
            </Link>
          ))}
        </div>

        <div>
          <h2>Contact</h2>
          <Link href="/contact">Contact form</Link>
          <p>Based in Brighton, Victoria.</p>
          <a className="social-link" href={site.linkedin} rel="noreferrer" target="_blank">
            <span className="social-badge">in</span>
            LinkedIn
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Whirlwind Secretarial Services | ABN {site.abn}</span>
        <span className="footer-credit">
          Website by{" "}
          <a href="https://www.brightpathcreative.com.au" rel="noreferrer" target="_blank">
            Bright Path Creative
          </a>
        </span>
      </div>
    </footer>
  );
}
