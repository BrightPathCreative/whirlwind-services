import Image from "next/image";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";
import { servicePages } from "@/lib/site-data";

const serviceEyebrows: Record<string, string> = {
  "executive-assistance": "Executive Support",
  "event-management": "Event Coordination",
  "records-database-management": "Records & Data",
  "document-preparation-data-entry": "Documents & Data Entry",
  "general-office-services": "Office Support"
};

export const metadata = createMetadata({
  title: "Professional Administrative Services",
  description:
    "Executive assistance, event management, records management, document preparation, and general office services across Melbourne.",
  path: "/services"
});

export default function ServicesPage() {
  return (
    <>
      <PageHero eyebrow="Services" title="Professional Administrative Services">
        <p>
          Whether you need a trusted assistant to manage your day-to-day, someone to take the reins
          on a complex event, or an experienced pair of hands to bring order to your records and data,
          Whirlwind Services has the depth of experience to deliver excellence.
        </p>
      </PageHero>

      <section className="section">
        <div className="section-inner alternating-list">
          {servicePages.map((service, index) => (
            <SectionReveal className="service-block" delay={index * 0.04} key={service.slug}>
              <div className="copy-stack">
                <p className="eyebrow">{serviceEyebrows[service.slug]}</p>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <Link className="learn-link" href={`/services/${service.slug}`}>
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </div>
              <div className="service-block-media">
                <Image
                  alt={`${service.title} administrative support`}
                  height={1696}
                  src={service.image}
                  width={2528}
                />
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light-grey)" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Flexible Engagement</p>
            <h2>Your way, your premises, your pace.</h2>
          </SectionReveal>
          <div className="feature-grid">
            {[
              ["On-site", "At your premises across Melbourne CBD and Bayside Melbourne."],
              ["Remote", "Via phone, email, and digital platforms for clients anywhere."],
              ["Daily or Project-Based", "Structured to suit your needs, timeline, and budget."]
            ].map(([title, text], index) => (
              <SectionReveal className="feature-card" delay={index * 0.06} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
