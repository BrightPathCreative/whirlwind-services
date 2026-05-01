import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";
import { locationPages, servicePages, site } from "@/lib/site-data";

type LocationPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return locationPages.map((location) => ({ slug: location.slug }));
}

export async function generateMetadata({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationPages.find((item) => item.slug === slug);

  if (!location) {
    return {};
  }

  return createMetadata({
    title: location.metaTitle,
    description: location.metaDescription,
    path: `/locations/${location.slug}`
  });
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { slug } = await params;
  const location = locationPages.find((item) => item.slug === slug);

  if (!location) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Local Support" title={location.title} subtitle={`Serving ${location.area} and nearby areas.`}>
        <p>{location.intro}</p>
      </PageHero>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <p className="eyebrow">Why Local Matters</p>
            <h2>Senior support that can work around your business.</h2>
            <p>{location.localFit}</p>
            <p>
              Whirlwind is not a virtual assistant agency. When you engage Whirlwind, you work
              directly with Cath Watkins: the same experienced person, every time.
            </p>
          </SectionReveal>
          <SectionReveal className="image-shell" delay={0.08}>
            <Image alt={`${location.area} administrative support`} height={1696} src={location.image} width={2528} />
          </SectionReveal>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="section-inner copy-stack">
          <SectionReveal>
            <p className="eyebrow">Services Available</p>
            <h2>Executive and administrative services for {location.area}.</h2>
          </SectionReveal>
          <div className="service-grid">
            {servicePages.map((service, index) => (
              <SectionReveal className="feature-card" delay={index * 0.04} key={service.slug}>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
                <Link className="learn-link" href={`/services/${service.slug}`}>
                  Learn more <span aria-hidden="true">→</span>
                </Link>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <p className="eyebrow">Nearby Areas</p>
            <h2>Also supporting surrounding suburbs.</h2>
          </SectionReveal>
          <SectionReveal className="feature-card" delay={0.08}>
            <p>{location.nearby}</p>
            <Link className="learn-link" href="/bayside-melbourne">
              View all areas serviced <span aria-hidden="true">→</span>
            </Link>
          </SectionReveal>
        </div>
      </section>

      <CTASection heading={`Need administrative support in ${location.area}?`} />
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: site.name,
          url: `${site.domain}/locations/${location.slug}`,
          areaServed: location.area,
          founder: {
            "@type": "Person",
            name: "Cath Watkins"
          },
          sameAs: [site.linkedin]
        }}
      />
    </>
  );
}
