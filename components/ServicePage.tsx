import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { SectionReveal } from "@/components/SectionReveal";
import { site } from "@/lib/site-data";

type ServicePageData = {
  slug: string;
  title: string;
  h1: string;
  subtitle: string;
  image: string;
  supportImages?: {
    src: string;
    label: string;
  }[];
  intro: string[];
  included: string[][];
  audience: string[];
  faqs: string[][];
};

export function ServicePage({ service }: { service: ServicePageData }) {
  return (
    <>
      <PageHero eyebrow="Service" title={service.h1} subtitle={service.subtitle} />

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            {service.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </SectionReveal>
          <SectionReveal className="image-shell" delay={0.08}>
            <Image alt="" height={1696} src={service.image} width={2528} />
          </SectionReveal>
        </div>
      </section>

      {service.supportImages ? (
        <section className="section service-visual-strip-section">
          <div className="section-inner service-visual-layout">
            <SectionReveal className="copy-stack">
              <p className="eyebrow">In Practice</p>
              <h2>The details Cath can take off your plate.</h2>
            </SectionReveal>
            <div className="service-visual-strip">
              {service.supportImages.map((image, index) => (
                <SectionReveal className="service-visual-card" delay={index * 0.06} key={image.src}>
                  <Image alt="" fill sizes="(max-width: 980px) 100vw, 33vw" src={image.src} />
                  <span>{image.label}</span>
                </SectionReveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section" style={{ background: "white" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">What&apos;s Included</p>
            <h2>Support that is practical, senior, and ready to use.</h2>
          </SectionReveal>
          <div className="feature-grid">
            {service.included.map(([title, text], index) => (
              <SectionReveal className="feature-card" delay={index * 0.05} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <p className="eyebrow">Who This Is For</p>
            <h2>Designed for businesses that need experience without the full-time overhead.</h2>
          </SectionReveal>
          <SectionReveal className="copy-stack" delay={0.08}>
            {service.audience.map((item) => (
              <div className="feature-card" key={item}>
                <p>{item}</p>
              </div>
            ))}
          </SectionReveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--color-light-grey)" }}>
        <div className="section-inner narrow copy-stack">
          <SectionReveal>
            <p className="eyebrow">FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </SectionReveal>
          <SectionReveal delay={0.08}>
            <FAQAccordion items={service.faqs} />
          </SectionReveal>
        </div>
      </section>

      <CTASection />
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          serviceType: service.title,
          provider: {
            "@type": "ProfessionalService",
            name: site.name
          },
          areaServed: "Melbourne",
          description: service.subtitle
        }}
      />
    </>
  );
}
