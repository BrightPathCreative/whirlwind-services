import { site } from "@/lib/site-data";

type SchemaMarkupProps = {
  data?: Record<string, unknown>;
};

export function SchemaMarkup({ data }: SchemaMarkupProps) {
  const schema =
    data ??
    ({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      name: site.name,
      description:
        "Senior executive and administrative support services across Melbourne CBD and Bayside Melbourne.",
      url: site.domain,
      areaServed: ["Melbourne", "Bayside Melbourne", "Brighton"],
      founder: {
        "@type": "Person",
        name: "Cath Watkins",
        jobTitle: "Founder & Executive Assistant"
      },
      logo: `${site.domain}/images/brand/logo.png`,
      sameAs: [site.linkedin],
      priceRange: "$$"
    } satisfies Record<string, unknown>);

  return (
    <script
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      type="application/ld+json"
    />
  );
}
