import Link from "next/link";

type CTASectionProps = {
  heading?: string;
  body?: string;
};

export function CTASection({
  heading = "Ready to take admin off your plate?",
  body = "Whether you need ongoing executive support or help with a specific project, Cath would love to have a chat."
}: CTASectionProps) {
  return (
    <section className="cta-section">
      <div className="cta-inner">
        <p className="eyebrow">Work with Cath</p>
        <h2>{heading}</h2>
        <p>{body}</p>
        <div className="button-row">
          <Link className="button button-light" href="/contact">
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  );
}
