import { CTASection } from "@/components/CTASection";
import { FAQAccordion } from "@/components/FAQAccordion";
import { PageHero } from "@/components/PageHero";
import { SchemaMarkup } from "@/components/SchemaMarkup";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";
import { globalFaqs } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions about Whirlwind's executive and administrative services, pricing, availability, and how to get started.",
  path: "/faq"
});

export default function FAQPage() {
  return (
    <>
      <PageHero eyebrow="FAQ" title="Frequently Asked Questions">
        <p>
          Got a question about working with Whirlwind? You&apos;ll likely find the answer here. If
          not, just get in touch with Cath as she is always happy to answer queries.
        </p>
      </PageHero>
      <section className="section">
        <div className="section-inner narrow">
          <SectionReveal>
            <FAQAccordion items={globalFaqs} />
          </SectionReveal>
        </div>
      </section>
      <CTASection />
      <SchemaMarkup
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: globalFaqs.map(([question, answer]) => ({
            "@type": "Question",
            name: question,
            acceptedAnswer: {
              "@type": "Answer",
              text: answer
            }
          }))
        }}
      />
    </>
  );
}
