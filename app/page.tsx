import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { MeetCathSection } from "@/components/MeetCathSection";
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
            <p>Senior administrative services, on-site or remote, across Melbourne CBD and Bayside.</p>
          </SectionReveal>
          <SectionReveal delay={0.22}>
            <p className="tagline">{site.tagline}</p>
          </SectionReveal>
          <SectionReveal delay={0.28}>
            <div className="button-row">
              <Link className="button button-primary" href="/contact">
                Get in Touch
              </Link>
              <Link className="button button-outline" href="/services">
                Explore Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>

      <MeetCathSection />

      <section className="section" style={{ background: "var(--color-light-grey)" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Services</p>
            <h2>What Whirlwind Services Can Do for You</h2>
          </SectionReveal>
          <div className="service-grid service-grid-featured">
            {servicePages.map((service, index) => (
              <SectionReveal delay={index * 0.06} key={service.slug}>
                <ServiceCard
                  description={service.description}
                  href={`/services/${service.slug}`}
                  icon={service.icon}
                  image={service.image}
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
        <div className="section-inner">
          <SectionReveal className="testimonial-card">
            <p className="eyebrow">Testimonials</p>
            <blockquote className="testimonial-quote">
              <p>
                Cath provided confidential support directly to me and my executive team while working
                as my Executive Officer in Perth WA. She also worked with the relevant board
                secretariats regarding my involvement and attendance at various meetings.
              </p>
              <p>
                While working for me, Cath demonstrated her wealth of knowledge and experience in
                working as a government sector Executive Officer, enabling me to work seamlessly on
                the things that matter.
              </p>
              <p>
                Cath ensured the efficient and effective flow of information and I recommend her
                highly to any of her clients. I wish Cath every success in her new business.
              </p>
            </blockquote>
            <div className="testimonial-author">
              <strong>Niegel Graza</strong>
              <span>Previously Deputy Director General, Industry and Economic Development, WA</span>
            </div>
          </SectionReveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
