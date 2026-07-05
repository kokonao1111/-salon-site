"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { primaryNav, reserveNav } from "@/lib/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

const navItems = [...primaryNav, reserveNav];

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="メインナビゲーション"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-soft-white"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-end px-6 pt-6 sm:px-10">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="メニューを閉じる"
              className="flex h-10 w-10 items-center justify-center"
            >
              <X aria-hidden className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-5 px-8 py-10 sm:px-14">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: reduced ? 0 : 0.04 * index }}
              >
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="font-serif-jp text-3xl leading-tight sm:text-4xl"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
