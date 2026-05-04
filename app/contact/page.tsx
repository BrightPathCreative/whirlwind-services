import Image from "next/image";
import Script from "next/script";
import { MapPin } from "lucide-react";
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
      <section className="contact-section">
        <div className="section-inner contact-layout">
          <SectionReveal className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h1>Let&apos;s make your workload lighter.</h1>
            <p>
              Have a project in mind, a question about services, or just want to find out whether
              Cath might be a good fit for your business? Send a quick enquiry and she&apos;ll come
              back to you as soon as she can.
            </p>
            <div className="contact-cath-card">
              <Image
                alt="Cath Watkins from Whirlwind Services"
                className="contact-cath-image"
                height={1402}
                src="/images/cath-watkins.png"
                width={1122}
              />
              <div className="contact-cath-details">
                <p className="contact-cath-name">Cath Watkins</p>
                <p>
                  There&apos;s no commitment involved in a first conversation, just a chance to talk
                  through what you need and work out whether Whirlwind can help.
                </p>
                <a className="social-link" href={site.linkedin} rel="noreferrer" target="_blank">
                  <span className="social-badge">in</span>
                  LinkedIn
                </a>
                <p className="social-link">
                  <MapPin size={18} />
                  Based in Brighton, Victoria. Available on-site across Melbourne CBD and Bayside.
                </p>
              </div>
            </div>
          </SectionReveal>

          <SectionReveal className="contact-form-card" delay={0.08}>
            <div className="contact-form-heading">
              <p className="eyebrow">Enquiry Form</p>
              <h2>Tell Cath what you need.</h2>
            </div>
            <div className="contact-form-embed">
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
                style={{ width: "100%", height: "100%", border: "none", borderRadius: "18px" }}
                title="Whirlwind Services Enquiry Form"
              />
            </div>
          </SectionReveal>
        </div>
      </section>
      <Script src="https://links.brightpathcreative.com.au/js/form_embed.js" strategy="afterInteractive" />
    </>
  );
}
