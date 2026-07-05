"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const SESSION_KEY = "salon-brand-loader-shown";

/**
 * 初回訪問時のみ表示するブランドローディング。
 * 正式な店舗名・ロゴが未確定のため、文字（仮称）は表示せず、簡素な円のブランドマークのみを描く。
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
    const timer = window.setTimeout(() => setVisible(false), 800);
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
          transition={{ duration: 0.5, ease: [0.65, 0, 0.35, 1] }}
        >
          <motion.span
            className="block h-8 w-8 rounded-full border border-gold"
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
