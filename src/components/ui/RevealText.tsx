"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/** スクロールで視界に入った際、テキストをマスク状に下からせり上げて表示する */
export function RevealText({ children, className = "", delay = 0 }: RevealTextProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <div className={`overflow-hidden ${className}`}>
      <motion.div
        initial={{ y: "100%", opacity: 0 }}
        whileInView={{ y: "0%", opacity: 1 }}
        viewport={{ once: true, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
      >
        {children}
      </motion.div>
    </div>
  );
}
