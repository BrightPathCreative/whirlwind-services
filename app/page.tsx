import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionReveal } from "@/components/SectionReveal";
import { ServiceCard } from "@/components/ServiceCard";
import { createMetadata } from "@/lib/metadata";
import { servicePages, site, trustPoints } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Experienced Executive Support for Melbourne Businesses",
  description:
    "Senior administrative services across Melbourne CBD and Bayside. On-site or remote. 45 years of experience.",
  path: "/"
});

export default function HomePage() {
  return (
    <>
      <section className="hero home-hero">
        <div className="hero-content">
          <SectionReveal>
            <p className="eyebrow">Whirlwind Secretarial Services</p>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <h1>Experienced Administrative & Executive Support for Bayside and Melbourne</h1>
          </SectionReveal>
          <SectionReveal delay={0.16}>
            <p>Senior administrative services — on-site or remote — across Melbourne CBD and Bayside.</p>
          </SectionReveal>
          <SectionReveal delay={0.22}>
            <p className="tagline">{site.tagline}</p>
          </SectionReveal>
          <SectionReveal delay={0.28}>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Go to Contact Form
              </Link>
              <Link className="button button-outline" href="/services">
                Explore Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner">
          <SectionReveal className="intro-panel narrow">
            <p className="eyebrow">Meet Cath</p>
            <h2>Running a business means wearing a lot of hats. Let Cath carry a few for you.</h2>
            <p>
              When the diary is overflowing, the inbox is a disaster, and there&apos;s an event to
              organise before Friday, you need someone you can trust to step in and get things done.
            </p>
            <p>
              Whirlwind Services is Cath Watkins, an administrator with 45 years of experience
              supporting executives, CEOs, government ministers, and business owners across Melbourne
              and beyond.
            </p>
            <p>
              <strong>
                This isn&apos;t a virtual assistant agency. There&apos;s no team of contractors or
                off-shore support desk — just Cath.
              </strong>
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light-grey)" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Services</p>
            <h2>What Whirlwind Services Can Do for You</h2>
          </SectionReveal>
          <div className="service-grid">
            {servicePages.map((service, index) => (
              <SectionReveal delay={index * 0.06} key={service.slug}>
                <ServiceCard
                  description={service.description}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  title={service.title}
                />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Why Whirlwind</p>
            <h2>Why Choose Whirlwind Services</h2>
          </SectionReveal>
          <div className="trust-grid">
            {trustPoints.map(({ Icon, text, title }, index) => (
              <SectionReveal className="trust-card" delay={index * 0.06} key={title}>
                <span className="trust-icon">
                  <Icon size={26} />
                </span>
                <h3>{title}</h3>
                <p>{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-off-white)" }}>
        <div className="section-inner narrow">
          <SectionReveal className="testimonial-card">
            <p className="eyebrow">Testimonials</p>
            <h2>Client testimonials will be added here.</h2>
            <p>
              This section is structured and ready for approved client quotes once they are available.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
