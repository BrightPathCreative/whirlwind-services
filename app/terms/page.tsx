import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site-data";

const sections = [
  ["Introduction", "These Terms of Service govern the engagement of Whirlwind Secretarial Services (ABN 44 233 892 479), operated by Cath Watkins. By engaging our services, the Client agrees to the terms outlined below."],
  ["Services", "Whirlwind provides professional executive assistance, event management and support, records and database management, document preparation and data entry, and general office services."],
  ["Engagement & Pricing", "All services are quoted based on the scope, complexity, and duration of the engagement. Pricing may be structured as a daily rate, project-based fee, or hourly rate."],
  ["Minimum Fee & Cancellation", "If services are not required upon arrival, or if the engagement is cut short on the day, a minimum fee of $300 AUD will apply for that day."],
  ["Payment Terms", "Invoices are issued via Xero. Payment is due on receipt of invoice unless alternative terms have been agreed in writing."],
  ["Scope of Work", "The scope of each engagement is agreed prior to commencement. Any additional work outside the agreed scope will be discussed and quoted separately."],
  ["Confidentiality", "Whirlwind treats all client information with the utmost discretion and will not disclose information to any third party without prior written consent, unless required by law."],
  ["Intellectual Property", "Any documents, spreadsheets, reports, or other materials created by Whirlwind as part of an engagement are the property of the Client upon full payment."],
  ["Liability", "Whirlwind takes reasonable care in the delivery of all services. To the extent permitted by law, liability is limited to the total fees paid for the specific engagement giving rise to the claim."],
  ["Termination", "Either party may terminate an engagement by providing reasonable written notice. Any work completed up to the date of termination will be invoiced and payable."],
  ["Governing Law", "These Terms of Service are governed by the laws of the State of Victoria, Australia."],
  ["Changes to These Terms", "Whirlwind may update these Terms of Service from time to time. Any changes will be posted on this page."],
  ["Contact", "Cath Watkins | Whirlwind Secretarial Services | Please use the website contact form."]
];

export const metadata = createMetadata({
  title: "Terms of Service",
  description:
    "Terms of Service for Whirlwind Secretarial Services. Engagement terms, pricing, cancellation policy, and confidentiality.",
  path: "/terms"
});

export default function TermsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms of Service" subtitle={`Whirlwind Services | ABN ${site.abn} | Last updated: April 2026`} />
      <section className="section">
        <div className="section-inner narrow legal-content">
          {sections.map(([heading, text], index) => (
            <section key={heading}>
              <h2>{index + 1}. {heading}</h2>
              <p>{text}</p>
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
