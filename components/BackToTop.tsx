"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 520);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      aria-label="Back to top"
      className={isVisible ? "back-to-top visible" : "back-to-top"}
      onClick={scrollToTop}
      type="button"
    >
      <ArrowUp aria-hidden="true" size={18} />
      <span>Top</span>
    </button>
  );
}
