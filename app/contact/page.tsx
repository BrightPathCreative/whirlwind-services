import Image from "next/image";
import Script from "next/script";
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

          <SectionReveal className="contact-form-embed" delay={0.08}>
            <iframe
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-id="Yp2xV1safuH2BNTpCQFg"
              data-form-name="Whirlwind Services Enquiry Form"
              data-height="552"
              data-layout="{&quot;id&quot;:&quot;INLINE&quot;}"
              data-layout-iframe-id="inline-Yp2xV1safuH2BNTpCQFg"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              id="inline-Yp2xV1safuH2BNTpCQFg"
              src="https://links.brightpathcreative.com.au/widget/form/Yp2xV1safuH2BNTpCQFg"
              style={{ width: "100%", height: "100%", border: "none", borderRadius: "12px" }}
              title="Whirlwind Services Enquiry Form"
            />
          </SectionReveal>
        </div>
      </section>
      <Script src="https://links.brightpathcreative.com.au/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
