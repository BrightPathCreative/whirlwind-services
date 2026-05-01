import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";
import { locationPages, servicePages } from "@/lib/site-data";

const suburbs = [
  "Brighton",
  "Hampton",
  "Sandringham",
  "Black Rock",
  "Beaumaris",
  "Bentleigh",
  "Bentleigh East",
  "Elsternwick",
  "Elwood",
  "St Kilda",
  "St Kilda East",
  "Moorabbin",
  "Cheltenham",
  "Mentone",
  "Highett",
  "Carnegie",
  "Caulfield",
  "Ormond",
  "Melbourne CBD",
  "Southbank",
  "Docklands",
  "South Melbourne",
  "Port Melbourne"
];

export const metadata = createMetadata({
  title: "Executive Support Services Bayside Melbourne",
  description:
    "Whirlwind Services is based in Brighton, serving businesses across Bayside Melbourne and the CBD.",
  path: "/bayside-melbourne"
});

export default function BaysideMelbournePage() {
  return (
    <>
      <PageHero
        eyebrow="Bayside & Melbourne"
        subtitle="Based in Brighton, serving businesses across Bayside and the Melbourne CBD."
        title="Executive Support Services: Bayside Melbourne"
      />

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <p>
              Whirlwind Secretarial Services is a local business in every sense of the word. Cath is
              based in Brighton, has spent decades working in and around Melbourne, and is available
              to come to you.
            </p>
            <p>
              A local assistant isn&apos;t just convenient — she&apos;s invested. She knows Brighton
              and the business community that runs within it.
            </p>
          </SectionReveal>
          <SectionReveal className="image-shell" delay={0.08}>
            <Image alt="Melbourne and Bayside inspired workspace" height={1696} src="/images/sections/melbourne-bayside.png" width={2528} />
          </SectionReveal>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Areas Serviced</p>
            <h2>Local to Brighton, connected across Melbourne.</h2>
          </SectionReveal>
          <div className="suburb-tags">
            {suburbs.map((suburb) => (
              <span key={suburb}>{suburb}</span>
            ))}
          </div>
          <p>
            Travel outside this area is available at an additional cost. Remote services are
            available to anyone, regardless of location.
          </p>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light-grey)" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Local Area Pages</p>
            <h2>Focused support pages for key service areas.</h2>
          </SectionReveal>
          <div className="service-grid">
            {locationPages.map((location, index) => (
              <SectionReveal className="feature-card" delay={index * 0.04} key={location.slug}>
                <h3>{location.area}</h3>
                <p>{location.metaDescription}</p>
                <Link className="learn-link" href={`/locations/${location.slug}`}>
                  View local page <span aria-hidden="true">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <h2>Why Local Executive Support Matters</h2>
            <p>
              When you&apos;re working with an assistant on-site, proximity makes a real difference.
              An assistant who can be at your Brighton or Hampton office within minutes is more
              useful than one who needs to plan significant travel.
            </p>
            <p>
              Cath&apos;s years of experience working across Bayside and the city means she&apos;s
              well-placed to support businesses that operate across both.
            </p>
          </SectionReveal>
          <SectionReveal className="copy-stack" delay={0.08}>
            <h2>Services Available Across Bayside Melbourne</h2>
            {servicePages.map((service) => (
              <Link className="feature-card" href={`/services/${service.slug}`} key={service.slug}>
                <h3>{service.title}</h3>
              </Link>
            ))}
          </SectionReveal>
        </div>
      </section>

      <CTASection heading="Ready to work with a local assistant?" />
    </>
  );
}
