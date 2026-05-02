import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";

export const metadata: Metadata = {
  title: "Thank You | Whirlwind Services",
  description: "Thank you for getting in touch with Whirlwind Services.",
  robots: {
    index: false,
    follow: false
  }
};

export default function ThankYouPage() {
  return (
    <>
      <PageHero eyebrow="Thank You" title="Thanks for getting in touch">
        <p>
          Your enquiry has been received. Cath will review your message and come back to you as soon
          as she can.
        </p>
      </PageHero>

      <section className="section">
        <div className="section-inner narrow">
          <SectionReveal className="thank-you-card">
            <span className="thank-you-icon" aria-hidden="true">
              <CheckCircle2 size={34} />
            </span>
            <h2>What happens next?</h2>
            <p>
              Cath will read through your enquiry and get in touch to understand what you need, what
              timeframe you are working to, and whether Whirlwind Services is the right fit.
            </p>
            <p>
              There is no commitment involved in the first conversation. It is simply a chance to
              talk through the support you are looking for.
            </p>
            <div className="button-row">
              <Link className="button button-primary" href="/">
                Back to Home
              </Link>
              <Link className="button button-outline" href="/services">
                View Services
              </Link>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
