"use client";

import Image from "next/image";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef } from "react";

export function MeetCathSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    offset: ["start 85%", "end 20%"],
    target: sectionRef
  });

  const portraitY = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [34, -18]),
    { damping: 26, stiffness: 90 }
  );
  const copyY = useSpring(
    useTransform(scrollYProgress, [0, 1], shouldReduceMotion ? [0, 0] : [18, -8]),
    { damping: 28, stiffness: 95 }
  );

  return (
    <section className="section meet-cath-section" ref={sectionRef}>
      <div className="section-inner">
        <motion.div
          className="meet-cath-panel"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 32 }}
          transition={{ duration: 0.75, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-80px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <motion.div className="meet-cath-image" style={{ y: portraitY }}>
            <Image
              alt="Cath Watkins seated in a bright professional setting"
              height={1402}
              src="/images/cath-watkins.png"
              width={1122}
            />
          </motion.div>
          <motion.div className="meet-cath-copy" style={{ y: copyY }}>
            <p className="eyebrow">Meet Cath</p>
            <h2>Running a business means wearing a lot of hats. Let Cath carry a few for you.</h2>
            <p>
              When the diary is overflowing, the inbox is a disaster, and there&apos;s an event to
              organise before Friday, you need someone you can trust to step in and get things done.
            </p>
            <p>
              Whirlwind Services is Cath Watkins, an administrator with 45 years of experience
              supporting executives, CEOs, government ministers, and business owners across Melbourne
              and beyond.
            </p>
            <div className="meet-cath-highlight">
              This isn&apos;t a virtual assistant agency. There&apos;s no team of contractors or
              off-shore support desk, just Cath.
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
