"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { primaryNav, reserveNav } from "@/lib/navigation";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  currentPath: string;
}

const navItems = [...primaryNav, reserveNav];
const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

export function MobileMenu({ open, onClose, currentPath }: MobileMenuProps) {
  const reduced = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      // フォーカストラップ：ダイアログ内でTab移動を循環させる
      if (event.key === "Tab" && dialogRef.current) {
        const focusable = Array.from(
          dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
        );
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
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
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label="メインナビゲーション"
          className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-ink text-soft-white"
          initial={reduced ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={reduced ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-end px-4 pt-4 sm:px-8">
            <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="メニューを閉じる"
              className="flex h-11 w-11 items-center justify-center"
            >
              <X aria-hidden className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-1 flex-col justify-center gap-5 px-8 py-10 sm:px-14">
            {navItems.map((item, index) => {
              const isCurrent = currentPath === item.href;
              return (
                <motion.div
                  key={item.href}
                  initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: reduced ? 0 : 0.04 * index }}
                >
                  <Link
                    href={item.href}
                    onClick={onClose}
                    aria-current={isCurrent ? "page" : undefined}
                    className={`flex min-h-[44px] items-center font-serif-jp text-3xl leading-tight sm:text-4xl ${
                      isCurrent ? "text-gold" : ""
                    }`}
                  >
                    {item.label}
                    {isCurrent && (
                      <span className="ml-3 font-serif-en text-xs tracking-[0.1em] text-gold uppercase">
                        現在地
                      </span>
                    )}
                  </Link>
                </motion.div>
              );
            })}
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
