import Image from "next/image";
import { CTASection } from "@/components/CTASection";
import { PageHero } from "@/components/PageHero";
import { SectionReveal } from "@/components/SectionReveal";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata({
  title: "About Cath Watkins",
  description:
    "Meet Cath Watkins, founder of Whirlwind Secretarial Services and a senior administrator with 45 years of experience.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="About" title="About Whirlwind Services" subtitle="The business behind the name." />

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="image-shell">
            <Image
              alt="Cath Watkins, founder of Whirlwind Services"
              height={1402}
              priority
              src="/images/cath-watkins.png"
              width={1122}
            />
          </SectionReveal>
          <SectionReveal className="copy-stack" delay={0.08}>
            <h2>The Business Behind the Name</h2>
            <p>
              Whirlwind Services is Cath Watkins. And behind that name is forty-five years of getting
              things done.
            </p>
            <p>
              Cath founded Whirlwind at the age of thirty. She built it into a business that served
              some of the top five consulting firms in Melbourne as well as providing pro-bono
              services to not-for-profit agencies.
            </p>
            <p>
              Cath has once again turned to running her own business and is looking forward to
              meeting her new clients and rising to new challenges.
            </p>
          </SectionReveal>
        </div>
      </section>

      <section className="section" style={{ background: "white" }}>
        <div className="section-inner narrow copy-stack">
          <SectionReveal className="copy-stack">
            <h2>A Career Spent Working to Senior Executives</h2>
            <p>
              Over four decades, Cath has worked across various sectors that most people only
              encounter from the outside.
            </p>
            <p>
              In private practice, she supported some of the top consulting firms in Melbourne, where
              precision, speed, and discretion weren&apos;t optional extras.
            </p>
            <p>
              In government, Cath last worked as an Executive Officer to a Victorian Government
              Commissioner where the role demanded absolute reliability, sound judgement, and the
              ability to manage multiple competing priorities without losing composure.
            </p>
            <p>
              Cath also worked interstate and internationally, with experience spanning Melbourne,
              London, and Western Australia.
            </p>
            <div className="testimonial-card">
              <h3>A knowledgeable and skilful professional who has genuinely seen it all.</h3>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="section">
        <div className="section-inner split">
          <SectionReveal className="copy-stack">
            <h2>How Cath Works</h2>
            <p>
              Cath&apos;s approach is straightforward: she&apos;s there to make your working life
              easier, not to add another layer of complexity.
            </p>
            <p>
              She hits the ground running and works the way you need her to, whether on-site at your
              premises, remotely, or a combination of both.
            </p>
            <p>
              She&apos;s genuinely good at what she does, and she enjoys it. That combination is
              rarer than it sounds.
            </p>
          </SectionReveal>
          <SectionReveal className="copy-stack" delay={0.08}>
            <h2>Why Whirlwind Services Is Back</h2>
            <p>
              Cath has always cared about community and has re-started Whirlwind with fresh energy
              and a clear sense of purpose.
            </p>
            <p>
              She recognises that hospitals, research facilities, universities, local State
              government departments, Councils and businesses need a local, trusted, experienced
              right-hand person.
            </p>
          </SectionReveal>
        </div>
      </section>

      <CTASection heading="Ready to work together?" />
    </>
  );
}
