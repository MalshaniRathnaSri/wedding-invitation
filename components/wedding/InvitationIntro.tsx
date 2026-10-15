"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Cormorant_Garamond, Noto_Serif_Sinhala } from "next/font/google";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { Variants } from "framer-motion";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const sinhala = Noto_Serif_Sinhala({
  subsets: ["sinhala", "latin"],
  variable: "--font-sinhala",
  display: "swap",
});

const bodyFont = {
  fontFamily: "var(--font-sinhala), var(--font-display), serif",
};
const displayFont = {
  fontFamily: "var(--font-display), var(--font-sinhala), serif",
};

const WEDDING_TIME = new Date("2027-01-15T09:05:00+05:30").getTime();

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE" +
  "&text=" +
  encodeURIComponent("Nipuni & Nipuna Wedding") +
  "&dates=20270115T033500Z/20270115T073500Z" +
  "&location=" +
  encodeURIComponent("Season, Waskaduwa");

interface InvitationIntroProps {
  onOpen: () => void;
}

type Stage = "closed" | "opening" | "revealed";

const cardContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.11, delayChildren: 0.5 } },
};

const cardItem: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
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

function Countdown() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    const initialUpdate = setTimeout(() => setNow(Date.now()), 0);
    const id = setInterval(() => setNow(Date.now()), 1000);
    return () => {
      clearTimeout(initialUpdate);
      clearInterval(id);
    };
  }, []);

  if (now === null) return null;
  const diff = WEDDING_TIME - now;
  if (diff <= 0) return null;

  const s = Math.floor(diff / 1000);
  const units = [
    { value: Math.floor(s / 86400), label: "දින" },
    { value: Math.floor((s % 86400) / 3600), label: "පැය" },
    { value: Math.floor((s % 3600) / 60), label: "මිනිත්තු" },
    { value: s % 60, label: "තත්පර" },
  ];

  return (
    <div
      className="grid w-full grid-cols-4 gap-2"
      role="timer"
      aria-label="Time remaining until the wedding"
    >
      {units.map((u) => (
        <div
          key={u.label}
          className="rounded-md border border-[#c29a45]/50 bg-gradient-to-b from-white to-[#fff6dc] py-2.5"
        >
          <p
            className="text-2xl font-semibold leading-none tabular-nums text-[#5a3f10] sm:text-3xl"
            style={displayFont}
          >
            {String(u.value).padStart(2, "0")}
          </p>
          <p className="mt-1.5 text-[11px] text-[#8a6420]">{u.label}</p>
        </div>
      ))}
    </div>
  );
}

function MonogramSeal({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 56 56"
      className={className}
      style={{
        filter: "drop-shadow(0 4px 6px rgba(70, 45, 10, 0.45))",
      }}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="dark-gold-bg" cx="30%" cy="25%" r="85%">
          <stop offset="0%" stopColor="#a98232" />
          <stop offset="45%" stopColor="#76551b" />
          <stop offset="80%" stopColor="#49300d" />
          <stop offset="100%" stopColor="#302009" />
        </radialGradient>
        <linearGradient id="dark-gold-rim" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ead59a" />
          <stop offset="50%" stopColor="#b28a3e" />
          <stop offset="100%" stopColor="#6f4d18" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" fill="#39270e" />
      <circle
        cx="28"
        cy="28"
        r="24.8"
        fill="none"
        stroke="url(#dark-gold-rim)"
        strokeWidth="1.2"
      />
      <circle cx="28" cy="28" r="23.5" fill="url(#dark-gold-bg)" />
      <circle
        cx="28"
        cy="28"
        r="20.5"
        fill="none"
        stroke="#d1b16b"
        strokeOpacity="0.9"
        strokeWidth="0.8"
      />
      <circle
        cx="28"
        cy="28"
        r="18.3"
        fill="none"
        stroke="#3d290c"
        strokeOpacity="0.85"
        strokeWidth="0.6"
      />
      <path d="M28 5.8 L29.5 8 L28 10.2 L26.5 8 Z" fill="#e2c783" />
      <path d="M28 45.8 L29.5 48 L28 50.2 L26.5 48 Z" fill="#e2c783" />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="bold"
        fontStyle="italic"
        fill="#fff0bd"
      >
        N
      </text>
      <text
        x="35"
        y="38"
        textAnchor="middle"
        fontFamily="Georgia, serif"
        fontSize="20"
        fontWeight="bold"
        fontStyle="italic"
        fill="#e2c783"
      >
        N
      </text>
    </svg>
  );
}

export default function InvitationIntro({ onOpen }: InvitationIntroProps) {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<Stage>("closed");

  const t = (seconds: number) => (reduce ? 0 : seconds);
  const isOpening = stage !== "closed";

  const handleTouch = () => {
    if (stage !== "closed") return;
    setStage(reduce ? "revealed" : "opening");
  };

  useEffect(() => {
    if (stage !== "opening") return;
    const timer = setTimeout(() => setStage("revealed"), 3400);
    return () => clearTimeout(timer);
  }, [stage]);

  return (
    <motion.section
      className={`${display.variable} ${sinhala.variable} fixed inset-0 z-[100] overflow-hidden bg-[#fffdf8] text-[#5a3f10]`}
      style={bodyFont}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: t(0.8) }}
      aria-label="Wedding invitation"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#ffffff_0%,_#fffaf0_55%,_#f6e7c3_100%)]" />

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
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-5 pt-[12vh]"
          animate={
            stage === "revealed"
              ? { opacity: 0, y: 140, scale: 0.9 }
              : { opacity: 1, y: 0, scale: 1 }
          }
          transition={{ duration: t(0.7), ease: [0.4, 0, 0.2, 1] }}
          style={{ pointerEvents: stage === "revealed" ? "none" : "auto" }}
        >
          <motion.div
            role="button"
            tabIndex={stage === "closed" ? 0 : -1}
            aria-label="Open the invitation"
            onClick={handleTouch}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                handleTouch();
              }
            }}
            className="relative w-[min(78vw,360px,36svh)] cursor-pointer outline-none focus-visible:ring-2 focus-visible:ring-[#c29a45] focus-visible:ring-offset-4 focus-visible:ring-offset-[#fffdf8]"
            style={{ aspectRatio: "5 / 6" }}
            initial={{ y: "0%" }}
            animate={
              reduce
                ? { y: "0%" }
                : isOpening
                  ? { y: "32%" }
                  : { y: ["0%", "-2%", "0%"] }
            }
            transition={
              isOpening
                ? { duration: 0.9, ease: [0.22, 1, 0.36, 1] }
                : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
            }
            whileTap={reduce || isOpening ? undefined : { scale: 0.98 }}
          >
            <div className="absolute inset-x-[8%] -bottom-4 h-6 rounded-full bg-[#a67c2a]/25 blur-xl" />
            <div className="absolute inset-0 border border-[#c29a45] bg-[#f8f6f1]" />
            <motion.div
              className="absolute bottom-[6%] left-[8%] right-[8%] top-[6%] z-10 overflow-hidden border border-[#d4b062] bg-white shadow-[0_8px_24px_-10px_rgba(90,63,16,0.45)]"
              animate={isOpening ? { y: "-86%" } : { y: "0%" }}
              transition={{
                delay: t(0.8),
                duration: t(1.1),
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <div className="absolute inset-1.5 border border-[#c29a45]/40" />
              <div className="relative flex h-full flex-col items-center justify-start pt-[12%] text-center">
                <span className="text-sm text-[#c29a45]">✧</span>
                <p
                  className="mt-1 bg-gradient-to-r from-[#a67c2a] via-[#d9b865] to-[#a67c2a] bg-clip-text text-2xl font-semibold tracking-wide text-transparent sm:text-3xl leading-relaxed"
                  style={displayFont}
                >
                  නිපුනි
                  <span className="block">&amp;</span>
                  <span className="block">නිපුන</span>
                </p>
                <p className="mt-3 flex justify-center">
                  <Image
                    src="/images/hands.png"
                    alt="නිපුනි & නිපුන"
                    width={180}
                    height={180}
                    sizes="180px"
                    className="h-auto w-[100%] max-w-[180px] rounded-2xl border border-[#8f5d1d]/25 shadow-[0_10px_30px_-15px_rgba(143,93,29,0.35)]"
                  />
                </p>
              </div>
            </motion.div>
            <svg
              className="pointer-events-none absolute inset-0 z-20 h-full w-full"
              viewBox="0 0 100 120"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="env3-front" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#ffffff" />
                  <stop offset="1" stopColor="#fbfaf7" />
                </linearGradient>
              </defs>
              <polygon
                points="0,0 50,43.2 100,0 100,120 0,120"
                fill="url(#env3-front)"
                stroke="#c29a45"
                strokeWidth="1"
                strokeLinejoin="round"
                vectorEffect="non-scaling-stroke"
              />
            </svg>
            <div className="pointer-events-none absolute bottom-[7%] right-[9%] z-[25] aspect-square w-[27%] overflow-hidden rounded-full border border-[#c29a45] bg-white/90">
              <Image
                src="/images/wedding-couple.png"
                alt=""
                fill
                sizes="100px"
                className="object-contain p-1.5"
              />
            </div>
            <motion.div
              className="absolute inset-x-0 top-0 h-[36%]"
              style={{ transformOrigin: "top center" }}
              initial={{ scaleY: 1, zIndex: 30 }}
              animate={
                isOpening
                  ? { scaleY: -1, zIndex: 1 }
                  : { scaleY: 1, zIndex: 30 }
              }
              transition={{
                scaleY: {
                  delay: t(0.3),
                  duration: t(0.7),
                  ease: [0.45, 0, 0.2, 1],
                },
                zIndex: { delay: t(0.65), duration: 0 },
              }}
            >
              <svg
                className="h-full w-full"
                viewBox="0 0 100 43.2"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <motion.polygon
                  points="0,0 100,0 50,43.2"
                  stroke="#c29a45"
                  strokeWidth="1"
                  strokeLinejoin="round"
                  vectorEffect="non-scaling-stroke"
                  initial={{ fill: "#ffffff" }}
                  animate={{ fill: isOpening ? "#f2efe8" : "#ffffff" }}
                  transition={{ delay: t(0.55), duration: t(0.2) }}
                />
              </svg>
            </motion.div>
            <div
              className="absolute left-1/2 top-[36%] z-40"
              style={{ transform: "translate(-50%, -50%)" }}
            >
              <motion.div
                className="relative"
                animate={
                  isOpening
                    ? {
                        scale: [1, 1.2, 0.2],
                        opacity: [1, 1, 0],
                        rotate: [0, -8, 20],
                      }
                    : reduce
                      ? undefined
                      : { scale: [1, 1.05, 1] }
                }
                transition={
                  isOpening
                    ? { duration: t(0.4), ease: "easeIn" }
                    : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }
                }
              >
                {!isOpening && !reduce && (
                  <motion.span
                    className="absolute inset-0 rounded-full border-2 border-[#c29a45]"
                    animate={{ scale: [1, 1.6], opacity: [0.8, 0] }}
                    transition={{
                      duration: 2.6,
                      repeat: Infinity,
                      ease: "easeOut",
                    }}
                  />
                )}
                <MonogramSeal className="relative h-[76px] w-[76px] sm:h-[88px] sm:w-[88px]" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
        <AnimatePresence>
          {stage === "revealed" && (
            <motion.div
              key="card"
              className="relative my-auto w-[min(92vw,460px)] overflow-hidden border border-[#c29a45] bg-gradient-to-b from-white via-[#fffdf8] to-[#fff6e0] shadow-[0_30px_80px_-25px_rgba(166,124,42,0.65)]"
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
              {!reduce && (
                <motion.div
                  className="pointer-events-none absolute inset-y-0 -left-1/2 z-20 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-[#ecd089]/50 to-transparent"
                  initial={{ x: "0%" }}
                  animate={{ x: "380%" }}
                  transition={{ duration: 1.6, delay: 0.9, ease: "easeInOut" }}
                />
              )}

              <div className="absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#c29a45] via-[#ecd089] to-[#c29a45]" />
              <div className="pointer-events-none absolute inset-2.5 border border-[#c29a45]/50" />
              <div className="pointer-events-none absolute inset-4 border border-[#c29a45]/20" />
              <span className="pointer-events-none absolute left-5 top-5 h-5 w-5 border-l border-t border-[#a67c2a]" />
              <span className="pointer-events-none absolute right-5 top-5 h-5 w-5 border-r border-t border-[#a67c2a]" />
              <span className="pointer-events-none absolute bottom-5 left-5 h-5 w-5 border-b border-l border-[#a67c2a]" />
              <span className="pointer-events-none absolute bottom-5 right-5 h-5 w-5 border-b border-r border-[#a67c2a]" />
              <motion.div
                className="relative z-10 flex flex-col items-center px-8 py-12 text-center sm:px-11"
                variants={cardContainer}
                initial={reduce ? "show" : "hidden"}
                animate="show"
              >
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
                <motion.div variants={cardItem} className="text-center">
                  <p className="text-base leading-8 text-[#8a6420] sm:text-lg">
                    අපගේ මංගල මංගල්‍යට කෙරෙන
                  </p>

                  <div className="my-2 flex items-center justify-center gap-3">
                    <span className="h-px w-8 bg-[#c29a45]/70" />

                    <p
                      className="text-lg font-semibold tracking-wide text-[#a67c2a] sm:text-xl"
                      style={bodyFont}
                    >
                      ආරාධනයයි මේ
                    </p>

                    <span className="h-px w-8 bg-[#c29a45]/70" />
                  </div>
                </motion.div>

                <motion.h1
                  variants={cardItem}
                  className="mt-4 text-4xl font-medium leading-[1.05] tracking-wide text-[#5a3f10] sm:text-4xl"
                  style={bodyFont}
                >
                  නිපුනි
                  <span className="block text-3xl italic text-[#c29a45] sm:text-4xl">
                    &amp;
                  </span>
                  නිපුන
                </motion.h1>
                <motion.div
                  variants={cardItem}
                  className="my-5 flex items-center gap-3"
                >
                  <span className="h-px w-12 bg-[#c29a45]/60" />
                  <span className="text-sm text-[#c29a45]">❦</span>
                  <span className="h-px w-12 bg-[#c29a45]/60" />
                </motion.div>
                <motion.div
                  variants={cardItem}
                  className="mt-8 flex w-full flex-col items-center gap-3"
                >
                  <motion.button
                    type="button"
                    onClick={onOpen}
                    whileHover={reduce ? undefined : { scale: 1.03 }}
                    whileTap={reduce ? undefined : { scale: 0.97 }}
                    className="inline-flex min-h-14 w-full items-center justify-center gap-3 rounded-full bg-gradient-to-b from-[#b88a30] to-[#8a6420] px-9 py-3 text-base tracking-[0.1em] text-white shadow-[0_12px_30px_-12px_rgba(138,100,32,0.9)] outline-none transition-shadow duration-300 hover:shadow-[0_14px_34px_-10px_rgba(138,100,32,1)] focus-visible:ring-2 focus-visible:ring-[#c29a45] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span>ආරාධනාව බලන්න</span>
                    <span aria-hidden="true">↓</span>
                  </motion.button>
                  <a
                    href={CALENDAR_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full border border-[#a67c2a] bg-white px-7 py-2.5 text-sm tracking-[0.06em] text-[#8a6420] outline-none transition-colors duration-300 hover:bg-[#fff6dc] focus-visible:ring-2 focus-visible:ring-[#c29a45] focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  >
                    <span aria-hidden="true">✦</span>
                    <span>කැලැන්ඩරයට එකතු කරන්න</span>
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
