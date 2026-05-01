"use client";

import { AnimatePresence, motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type FAQAccordionProps = {
  items: string[][];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {items.map(([question, answer], index) => {
        const isOpen = openIndex === index;

        return (
          <div className="faq-item" key={question}>
            <h3>
              <button
                aria-expanded={isOpen}
                className="faq-button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                type="button"
              >
                <span>{question}</span>
                <ChevronDown className={isOpen ? "faq-chevron open" : "faq-chevron"} size={20} />
              </button>
            </h3>
            <AnimatePresence initial={false}>
              {isOpen ? (
                <motion.div
                  animate={{ height: "auto", opacity: 1 }}
                  className="faq-panel"
                  exit={{ height: 0, opacity: 0 }}
                  initial={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                >
                  <p>{answer}</p>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
