"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

interface RevealImageProps {
  children: ReactNode;
  className?: string;
}

/** スクロールで視界に入った際、写真をクリップしながら見せる控えめな演出 */
export function RevealImage({ children, className = "" }: RevealImageProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={`overflow-hidden ${className}`}
      initial={{ clipPath: "inset(6% 6% 6% 6%)", opacity: 0.4 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", opacity: 1 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 1.1, ease: [0.65, 0, 0.35, 1] }}
    >
      {children}
    </motion.div>
  );
}
