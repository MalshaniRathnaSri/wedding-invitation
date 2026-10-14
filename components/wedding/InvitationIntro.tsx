"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

/*
  Palette (gold + white)
  white      #ffffff / #fffdf8
  pearl      #fff6dc
  gold-light #ecd089
  gold       #d4b062
  gold-mid   #c29a45
  gold-deep  #a67c2a
  gold-text  #8a6420   (readable on white)
  ink        #5a3f10   (headings on white)
*/

interface InvitationIntroProps {
  onOpen: () => void;
}

type Stage = "closed" | "opening" | "revealed";

const cardContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13, delayChildren: 0.55 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: "easeOut" } },
};

const sparkles = [
  { left: "8%", size: 5, delay: 0.2, duration: 7 },
  { left: "17%", size: 3, delay: 1.4, duration: 8 },
  { left: "27%", size: 4, delay: 0.7, duration: 6.5 },
  { left: "38%", size: 3, delay: 2.1, duration: 7.5 },
  { left: "49%", size: 5, delay: 0.1, duration: 9 },
  { left: "58%", size: 3, delay: 1.1, duration: 6.8 },
  { left: "68%", size: 4, delay: 2.4, duration: 7.2 },
  { left: "78%", size: 3, delay: 0.5, duration: 8.4 },
  { left: "87%", size: 5, delay: 1.8, duration: 7 },
  { left: "94%", size: 3, delay: 0.9, duration: 6.6 },
];

export default function InvitationIntro({ onOpen }: InvitationIntroProps) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("closed");

  const t = (seconds: number) => (reduce ? 0 : seconds);
  const isOpening = stage !== "closed";

  const handleTouch = () => {
    if (stage !== "closed") return;
    setStage(reduce ? "revealed" : "opening");
  };

  // After the envelope finishes opening, bring in the full card.
  useEffect(() => {
    if (stage !== "opening") return;
    const timer = setTimeout(() => setStage("revealed"), 2300);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <motion.section
      className="fixed inset-0 z-[100] overflow-hidden bg-[#fffdf8] text-[#5a3f10]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: t(0.8) }}
    >
      {/* White to soft-gold wash */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#fffaf0_55%,_#f6e7c3_100%)]" />

      {/* Breathing gold glow */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#ecd089]/50 blur-[70px] md:h-96 md:w-96 md:blur-3xl"
        animate={
          reduce
            ? undefined
            : { scale: [1, 1.15, 1], opacity: [0.4, 0.8, 0.4] }
        }
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Slow rings */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c29a45]/30 md:h-[520px] md:w-[520px]"
        animate={reduce ? undefined : { rotate: 360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[230px] w-[230px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c29a45]/35 md:h-[380px] md:w-[380px]"
        animate={reduce ? undefined : { rotate: -360 }}
        transition={{ duration: 65, repeat: Infinity, ease: "linear" }}
      />

      {/* Page frame */}
      <div className="pointer-events-none absolute inset-3 border border-[#c29a45]/60 sm:inset-5" />
      <div className="pointer-events-none absolute inset-5 border border-[#c29a45]/25 sm:inset-8" />

      {/* Floating gold sparkles once the card is shown */}
      {stage === "revealed" && !reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {sparkles.map((s, i) => (
            <motion.span
              key={i}
              className="absolute bottom-0 rounded-full bg-[#d4b062]"
              style={{ left: s.left, width: s.size, height: s.size }}
              initial={{ y: 0, opacity: 0 }}
              animate={{ y: "-100vh", opacity: [0, 0.95, 0] }}
              transition={{
                duration: s.duration,
                delay: s.delay,
                repeat: Infinity,
                ease: "easeOut",
              }}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 flex h-full w-full justify-center overflow-y-auto px-5 py-10">
        {/* ============ STAGE 1: ENVELOPE ============ */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-5"
          animate={
            stage === "revealed"
              ? { opacity: 0, y: 140, scale: 0.9 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: t(0.7), ease: [0.4, 0, 0.2, 1] }}
          style={{ pointerEvents: stage === "revealed" ? "none" : "auto" }}
        >
          <motion.p
            className="mb-10 text-center font-serif text-xl italic tracking-wide text-[#8a6420] sm:text-2xl"
            animate={{
              opacity: stage === "closed" ? 1 : 0,
              y: stage === "closed" ? 0 : -10,
            }}
            transition={{ duration: t(0.5) }}
          >
            ඔබට ආරාධනාවක්
          </motion.p>

          {/* Envelope (tappable anywhere) */}
          <motion.div
            onClick={handleTouch}
            className="relative w-[min(88vw,420px)] cursor-pointer"
            style={{ perspective: 1400, aspectRatio: "10 / 7" }}
            animate={
              reduce || isOpening
                ? { y: 0, rotate: 0 }
                : { y: [0, -6, 0], rotate: [-0.4, 0.4, -0.4] }
            }
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            whileTap={reduce || isOpening ? undefined : { scale: 0.97 }}
          >
            {/* Soft ground shadow */}
            <div className="absolute inset-x-[4%] -bottom-4 h-6 rounded-full bg-[#a67c2a]/35 blur-xl" />

            {/* Back panel */}
            <div className="absolute inset-0 rounded-[3px] bg-gradient-to-b from-[#c29a45] to-[#a67c2a] shadow-[0_25px_60px_-20px_rgba(166,124,42,0.75)]" />

            {/* The card inside the envelope */}
            <motion.div
              className="absolute bottom-[5%] left-[6%] right-[6%] top-[5%] z-10 overflow-hidden rounded-[2px] border border-[#d4b062] bg-gradient-to-b from-white to-[#fffaf0] shadow-[0_6px_24px_-8px_rgba(90,63,16,0.45)]"
              animate={isOpening ? { y: "-58%" } : { y: "0%" }}
              transition={{
                delay: t(0.85),
                duration: t(1),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute inset-1.5 border border-[#c29a45]/40" />
              <div className="flex h-full flex-col items-center justify-start pt-[9%] text-center">
                <span className="text-sm text-[#c29a45]">✧</span>
                <p className="mt-1 font-serif text-xl tracking-wide text-[#5a3f10] sm:text-2xl">
                  Nipuni <span className="text-[#a67c2a]">&amp;</span> Nipuna
                </p>
                <span className="mt-2 h-px w-16 bg-[#c29a45]/60" />
                <p className="mt-2 text-[11px] tracking-[0.25em] text-[#8a6420]">
                  15 · 01 · 2027
                </p>
              </div>
            </motion.div>

            {/* Front pocket: left, right and bottom folds */}
            <div className="pointer-events-none absolute inset-0 z-20">
              <div
                className="absolute inset-0 bg-gradient-to-r from-[#c9a24e] to-[#d9b868]"
                style={{ clipPath: "polygon(0 0, 50% 58%, 0 100%)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-l from-[#c9a24e] to-[#d9b868]"
                style={{ clipPath: "polygon(100% 0, 50% 58%, 100% 100%)" }}
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#e2c479] to-[#d4b062]"
                style={{ clipPath: "polygon(0 100%, 50% 44%, 100% 100%)" }}
              />
              {/* Fine white fold lines */}
              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 100 70"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <g
                  fill="none"
                  stroke="#ffffff"
                  strokeOpacity="0.6"
                  strokeWidth="0.3"
                >
                  <path d="M0 0 L50 40.6 L0 70" />
                  <path d="M100 0 L50 40.6 L100 70" />
                  <path d="M0 70 L50 30.8 L100 70" />
                </g>
              </svg>
            </div>

            {/* Flap */}
            <motion.div
              className="absolute inset-x-0 top-0 h-[58%]"
              style={{
                transformOrigin: "top center",
                clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                background: "linear-gradient(180deg, #ecd089 0%, #d4b062 100%)",
              }}
              initial={{ rotateX: 0, zIndex: 30 }}
              animate={
                isOpening
                  ? { rotateX: 180, zIndex: 1 }
                  : { rotateX: 0, zIndex: 30 }
              }
              transition={{
                rotateX: {
                  delay: t(0.3),
                  duration: t(0.75),
                  ease: [0.45, 0, 0.2, 1],
                },
                zIndex: { delay: t(0.65), duration: 0 },
              }}
            />

            {/* Pearl-white wax seal */}
            <motion.div
              className="absolute left-1/2 top-[58%] z-40 -translate-x-1/2 -translate-y-1/2"
              animate={
                isOpening
                  ? {
                      scale: [1, 1.25, 0.2],
                      opacity: [1, 1, 0],
                      rotate: [0, -8, 20],
                    }
                  : reduce
                    ? undefined
                    : { scale: [1, 1.06, 1] }
              }
              transition={
                isOpening
                  ? { duration: t(0.4), ease: "easeIn" }
                  : { duration: 2.4, repeat: Infinity, ease: "easeInOut" }
              }
            >
              {!isOpening && !reduce && (
                <motion.span
                  className="absolute inset-0 rounded-full border-2 border-white"
                  animate={{ scale: [1, 1.9], opacity: [0.8, 0] }}
                  transition={{
                    duration: 2.4,
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_32%_28%,_#ffffff_0%,_#fff6dc_45%,_#e2c479_100%)] shadow-[0_6px_16px_rgba(90,63,16,0.4),inset_0_-3px_6px_rgba(166,124,42,0.35)] sm:h-16 sm:w-16">
                <div className="absolute inset-1.5 rounded-full border border-[#c29a45]/70" />
                <span className="font-serif text-sm font-semibold tracking-tight text-[#8a6420] sm:text-base">
                  N&amp;N
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* Clear call to action */}
          <motion.button
            type="button"
            onClick={handleTouch}
            disabled={stage !== "closed"}
            className="mt-12 inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#a67c2a] bg-white px-7 py-3 text-sm tracking-[0.12em] text-[#8a6420] shadow-[0_8px_24px_-10px_rgba(166,124,42,0.6)] outline-none transition-colors duration-300 hover:bg-[#fff6dc] focus-visible:ring-2 focus-visible:ring-[#c29a45] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
            animate={{
              opacity: stage === "closed" ? 1 : 0,
              y: stage === "closed" ? 0 : 10,
            }}
            transition={{ duration: t(0.4) }}
          >
            <span aria-hidden="true">✦</span>
            <span>ආරාධනාව විවෘත කරන්න</span>
          </motion.button>

          <motion.p
            className="mt-3 text-center text-xs tracking-[0.2em] text-[#8a6420]/80"
            animate={{ opacity: stage === "closed" ? 1 : 0 }}
            transition={{ duration: t(0.3) }}
          >
            Tap the envelope to open
          </motion.p>
        </motion.div>

        {/* ============ STAGE 2: FULL INVITATION CARD ============ */}
        <AnimatePresence>
          {stage === "revealed" && (
            <motion.div
              key="card"
              className="relative my-auto w-[min(90vw,440px)] overflow-hidden border border-[#c29a45] bg-gradient-to-b from-white via-[#fffdf8] to-[#fff6e0] shadow-[0_30px_80px_-25px_rgba(166,124,42,0.65)]"
              initial={{
                opacity: 0,
                scale: 0.78,
                y: 70,
                rotateX: reduce ? 0 : 18,
              }}
              animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0 }}
              transition={{
                duration: t(1),
                delay: t(0.2),
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformPerspective: 1200 }}
            >
              {/* One-time gold light sweep */}
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ecd089]/50 to-transparent"
                  initial={{ x: "0%" }}
                  animate={{ x: "380%" }}
                  transition={{ duration: 1.6, delay: 0.9, ease: "easeInOut" }}
                />
              )}

              {/* Gold top band */}
              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#c29a45] via-[#ecd089] to-[#c29a45]" />

              {/* Inner frame and corners */}
              <div className="pointer-events-none absolute inset-2.5 border border-[#c29a45]/50" />
              <div className="pointer-events-none absolute inset-4 border border-[#c29a45]/20" />
              <span className="pointer-events-none absolute left-5 top-5 h-5 w-5 border-l border-t border-[#a67c2a]" />
              <span className="pointer-events-none absolute right-5 top-5 h-5 w-5 border-r border-t border-[#a67c2a]" />
              <span className="pointer-events-none absolute bottom-5 left-5 h-5 w-5 border-b border-l border-[#a67c2a]" />
              <span className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 border-b border-r border-[#a67c2a]" />

              <motion.div
                className="relative z-10 flex flex-col items-center px-9 py-12 text-center sm:px-12"
                variants={cardContainer}
                initial={reduce ? "show" : "hidden"}
                animate="show"
              >
                <motion.p
                  variants={cardItem}
                  className="font-serif text-base italic tracking-wide text-[#8a6420]"
                >
                  With love &amp; joy
                </motion.p>

                <motion.div
                  variants={cardItem}
                  className="relative my-4 h-24 w-24 sm:h-28 sm:w-28"
                >
                  <Image
                    src="/images/wedding-couple.png"
                    alt="Nipuni and Nipuna wedding logo"
                    fill
                    priority
                    sizes="112px"
                    className="object-contain"
                  />
                </motion.div>

                <motion.p
                  variants={cardItem}
                  className="text-sm tracking-[0.14em] text-[#8a6420] sm:text-base"
                >
                  අපේ ආදර කතාවට ඔබට ආරාධනායි
                </motion.p>

                <motion.h1
                  variants={cardItem}
                  className="mt-3 font-serif text-4xl font-normal leading-tight tracking-wide text-[#5a3f10] sm:text-5xl"
                >
                  Nipuni
                  <span className="mx-3 text-[#c29a45]">&amp;</span>
                  Nipuna
                </motion.h1>

                <motion.div
                  variants={cardItem}
                  className="my-5 flex items-center gap-3"
                >
                  <span className="h-px w-12 bg-[#c29a45]/60" />
                  <span className="text-sm text-[#c29a45]">❦</span>
                  <span className="h-px w-12 bg-[#c29a45]/60" />
                </motion.div>

                <motion.p
                  variants={cardItem}
                  className="max-w-xs text-sm leading-7 text-[#6b5320] sm:text-base sm:leading-8"
                >
                  දොළොස් වසරක් පුරා ආදරයෙන් ලියැවුණු
                  <br />
                  අපේ සුන්දර කතාවේ විශේෂ දවසට
                  <br />
                  ඔබව ආදරයෙන් පිළිගනිමු.
                </motion.p>

                <motion.div
                  variants={cardItem}
                  className="mt-6 w-full border-y border-[#c29a45]/40 py-4"
                >
                  <p className="font-serif text-2xl text-[#5a3f10]">
                    15 · 01 · 2027
                  </p>
                  <p className="mt-1 text-sm text-[#8a6420]">
                    පෙ.ව. 9.05 · Season, Waskaduwa
                  </p>
                </motion.div>

                <motion.button
                  variants={cardItem}
                  type="button"
                  onClick={onOpen}
                  whileHover={reduce ? undefined : { scale: 1.04 }}
                  whileTap={reduce ? undefined : { scale: 0.97 }}
                  className="mt-8 inline-flex min-h-12 items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#b88a30] to-[#8a6420] px-9 py-3 text-sm tracking-[0.12em] text-white shadow-[0_12px_30px_-12px_rgba(138,100,32,0.9)] outline-none transition-shadow duration-300 hover:shadow-[0_14px_34px_-10px_rgba(138,100,32,1)] focus-visible:ring-2 focus-visible:ring-[#c29a45] focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-base"
                >
                  <span>ආරාධනාව බලන්න</span>
                  <span aria-hidden="true">↓</span>
                </motion.button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Skip, for guests who want to go straight in */}
      {stage === "closed" && (
        <button
          type="button"
          onClick={onOpen}
          className="absolute bottom-7 left-1/2 z-20 -translate-x-1/2 rounded px-3 py-2 text-xs tracking-[0.15em] text-[#8a6420]/80 underline-offset-4 outline-none hover:underline focus-visible:ring-2 focus-visible:ring-[#c29a45] sm:bottom-10"
        >
          Skip intro
        </button>
      )}
    </motion.section>
  );
}