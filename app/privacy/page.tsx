import { PageHero } from "@/components/PageHero";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site-data";

const sections = [
  ["Introduction", "Whirlwind Secretarial Services is committed to protecting your personal information in accordance with the Privacy Act 1988 (Cth) and the Australian Privacy Principles."],
  ["What Personal Information We Collect", "We may collect your name and contact details, business name and position, information provided during service delivery, payment and invoicing details, and any other information you choose to provide."],
  ["How We Collect Information", "We collect information directly from you via phone, email, the website contact form, or during service delivery, and from third parties where you have been referred to us."],
  ["Why We Collect Information", "We collect information to provide services, communicate with you, issue invoices, respond to enquiries, improve our website, and comply with legal obligations."],
  ["How We Use and Disclose Information", "We do not sell, rent, or trade your personal information. We may share it with service providers necessary to operate the website or deliver agreed services."],
  ["How We Store and Protect Information", "Information is stored in cloud-based systems including Google Workspace and Xero. Access is limited and reasonable steps are taken to protect your information."],
  ["Automated Decision-Making", "Whirlwind does not use automated decision-making systems. All decisions regarding service delivery are made by Cath Watkins personally."],
  ["Cookies and Website Analytics", "The website may use cookies and analytics tools to collect non-personally identifiable information about how visitors use the site."],
  ["Your Rights", "You have the right to request access to, correction of, or deletion of your personal information, and to withdraw consent at any time."],
  ["Data Retention", "We retain personal information only for as long as necessary to fulfil the purpose for which it was collected, or as required by law."],
  ["Data Breaches", "In the event of a data breach likely to cause serious harm, we will notify affected individuals and the OAIC as required."],
  ["Complaints", "If you have a privacy concern, please contact us. We will respond within 30 days."],
  ["Changes to This Policy", "We may update this policy from time to time. Updates will be published on this page."],
  ["Contact", "Cath Watkins | Whirlwind Secretarial Services | Please use the website contact form."]
];

export const metadata = createMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for Whirlwind Secretarial Services. How we collect, use, and protect your personal information.",
  path: "/privacy"
});

export default function PrivacyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle={`Whirlwind Secretarial Services | ABN ${site.abn} | Last updated: April 2026`} />
      <section className="section">
        <div className="section-inner narrow legal-content">
          {sections.map(([heading, text], index) => (
            <section key={heading}>
              <h2>{index + 1}. {heading}</h2>
              <p>{text}</p>
            </section>
          ))}
          <p>This policy is governed by the Privacy Act 1988 (Cth) and the Australian Privacy Principles.</p>
        </div>
      </section>
    </>
  );
}
