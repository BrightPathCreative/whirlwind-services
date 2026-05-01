import Image from "next/image";
import { MapPin } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";
import { site } from "@/lib/site-data";

export const metadata = createMetadata({
  title: "Contact Whirlwind Secretarial Services",
  description:
    "Get in touch with Cath Watkins at Whirlwind Services for executive and administrative support across Melbourne CBD and Bayside.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact" title="Get in Touch">
        <p>
          Have a project in mind, a question about services, or just want to find out whether Cath
          might be a good fit for your business? She&apos;d love to hear from you.
        </p>
      </PageHero>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="contact-card">
            <Image
              alt="Cath Watkins from Whirlwind Services"
              height={1402}
              src="/images/cath-watkins.png"
              width={1122}
            />
            <p>
              There&apos;s no commitment involved in a first conversation — just a chance to talk
              through what you need and work out whether Whirlwind can help.
            </p>
            <p>Please use the contact form and Cath will respond as soon as she can.</p>
            <a className="social-link" href={site.linkedin} rel="noreferrer" target="_blank">
              <span className="social-badge">in</span>
              LinkedIn
            </a>
            <p className="social-link">
              <MapPin size={18} />
              Based in Brighton, Victoria. Available on-site across Melbourne CBD and Bayside.
            </p>
          </SectionReveal>

          <SectionReveal className="form-placeholder" delay={0.08}>
            <div className="copy-stack">
              <p className="eyebrow">Contact Form</p>
              <h2>GHL form coming soon</h2>
              <p>
                The live GoHighLevel contact form will be embedded here once the form URL is
                provided near the end of the build.
              </p>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
