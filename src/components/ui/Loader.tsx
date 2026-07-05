"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";

const SESSION_KEY = "salon-brand-loader-shown";

/**
 * 初回訪問時のみ表示するブランドローディング。
 * サーバー・クライアントの初回描画を一致させるため初期状態は常に true にし、
 * マウント後（ブラウザでしか判定できないセッションストレージ／reduced-motion設定を
 * 確認したうえで）非表示へ切り替える。実データの取得は待たない。
 */
export function Loader() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // ブラウザ専用APIの判定はマウント後にしか行えないため、直後の setState は意図的なもの
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setVisible(false);
      return;
    }
    if (window.sessionStorage.getItem(SESSION_KEY)) {
      setVisible(false);
      return;
    }

    window.sessionStorage.setItem(SESSION_KEY, "1");
    const timer = window.setTimeout(() => setVisible(false), 900);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          aria-hidden
          className="fixed inset-0 z-[100] flex items-center justify-center bg-ink"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.span
            className="font-serif-en text-sm uppercase text-soft-white"
            initial={{ opacity: 0, letterSpacing: "0.05em" }}
            animate={{ opacity: 1, letterSpacing: "0.4em" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {siteConfig.brand.workingTitleEn}
          </motion.span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
