"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Noto_Serif_Sinhala } from "next/font/google";

const sinhala = Noto_Serif_Sinhala({
  subsets: ["sinhala"],
  weight: ["400", "600"],
  display: "swap",
});

export default function StoryIntro() {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const inView = useInView(ref, { once: true, amount: 0.3 });

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1.04] : [1, 1.12],
  );

  const reveal = (delay: number, duration = 1.3, blur = 8) => ({
    initial: reduce ? false : { opacity: 0, y: 30, filter: `blur(${blur}px)` },
    animate: inView ? { opacity: 1, y: 0, filter: "blur(0px)" } : undefined,
    transition: {
      duration: reduce ? 0 : duration,
      delay: reduce ? 0 : delay,
      ease: "easeOut" as const,
    },
  });

  const particleCount = isMobile ? 8 : 22;
  const particles = Array.from({ length: particleCount });

  return (
    <section
      ref={ref}
      aria-labelledby="story-intro-title"
      className={`${sinhala.className} relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-[#4a2c17] px-5 py-16 text-[#f6ead8] sm:px-6 md:px-8 md:py-24`}
    >
      <motion.div
        style={{ scale: backgroundScale }}
        className="pointer-events-none absolute inset-0"
      >
        <motion.div
          animate={
            reduce
              ? { opacity: 0.2 }
              : isMobile
                ? { opacity: [0.15, 0.25, 0.15] }
                : {
                    scale: [1, 1.15, 0.95, 1],
                    opacity: [0.15, 0.25, 0.18, 0.15],
                  }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b87924] ${
            isMobile
              ? "h-[300px] w-[300px] blur-[100px]"
              : "h-[420px] w-[420px] blur-[150px]"
          }`}
        />

        {!isMobile && !reduce && (
          <>
            <motion.div
              animate={{
                x: [0, 100, -50, 0],
                y: [0, 60, -30, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.08, 0.16, 0.1, 0.08],
              }}
              transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-20 -left-20 h-[350px] w-[350px] rounded-full bg-[#b87924] blur-[130px]"
            />
            <motion.div
              animate={{
                x: [0, -100, 50, 0],
                y: [0, -60, 30, 0],
                scale: [1, 0.9, 1.15, 1],
                opacity: [0.07, 0.14, 0.08, 0.07],
              }}
              transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-32 -right-20 h-[400px] w-[400px] rounded-full bg-[#b87924] blur-[150px]"
            />
            <motion.div
              animate={{ x: [0, 80, 0], opacity: [0.05, 0.1, 0.05] }}
              transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-[35%] -right-40 h-[500px] w-[300px] rounded-full bg-[#d6ad62] blur-[160px]"
            />
          </>
        )}
      </motion.div>
      {!reduce && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          {particles.map((_, index) => {
            const left = `${(index * 37) % 100}%`;
            const bottom = `${(index * 19) % 100}%`;
            const isLarge = index % 4 === 0;

            return (
              <motion.span
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.4 }}
                animate={{
                  opacity: isLarge ? [0, 0.2, 0.45, 0] : [0, 0.35, 0.65, 0],
                  y: [30, -80 - (index % 4) * 40, -180 - (index % 5) * 50],
                  x: [
                    0,
                    index % 2 === 0 ? 20 : -20,
                    index % 2 === 0 ? -15 : 15,
                  ],
                  scale: isLarge ? [0.6, 1.5, 2.2] : [0.5, 1.2, 0.4],
                }}
                transition={{
                  duration: isLarge ? 8 + (index % 4) : 5 + (index % 5),
                  repeat: Infinity,
                  delay: index * 0.35,
                  ease: "easeOut",
                }}
                className={
                  isLarge
                    ? "absolute rounded-full bg-[#d6ad62] blur-[4px]"
                    : "absolute rounded-full bg-[#d6ad62]"
                }
                style={{
                  left,
                  bottom,
                  width: isLarge ? "10px" : "3px",
                  height: isLarge ? "10px" : "3px",
                }}
              />
            );
          })}
        </div>
      )}
      <motion.div
        initial={reduce ? false : { opacity: 0, scale: 0.8 }}
        animate={
          reduce
            ? { opacity: 0.15 }
            : isMobile
              ? { opacity: 0.15, scale: 1 }
              : {
                  opacity: 0.18,
                  scale: [0.95, 1.05, 0.95],
                  rotate: [0, 5, 0],
                }
        }
        transition={
          isMobile || reduce
            ? { duration: 2 }
            : {
                opacity: { duration: 2, delay: 1 },
                scale: { duration: 15, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 20, repeat: Infinity, ease: "easeInOut" },
              }
        }
        className={`pointer-events-none absolute rounded-full border border-[#d6ad62]/70 ${
          isMobile ? "h-[400px] w-[400px]" : "h-[600px] w-[600px]"
        }`}
      />
      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{ duration: 3, delay: 2 }}
          className="pointer-events-none absolute h-[750px] w-[750px] rounded-full border border-[#d6ad62]/55"
        />
      )}
      {[
        "top-6 left-6",
        "top-6 right-6",
        "bottom-6 left-6",
        "bottom-6 right-6",
      ].map((pos) => {
        const v = pos.includes("top") ? "top-0" : "bottom-0";
        const h = pos.includes("left") ? "left-0" : "right-0";
        return (
          <motion.div
            key={pos}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : undefined}
            transition={{ duration: 2, delay: 0.5 }}
            className={`pointer-events-none absolute ${pos} h-16 w-16`}
          >
            <div className={`absolute ${v} ${h} h-px w-10 bg-[#d6ad62]/50`} />
            <div className={`absolute ${v} ${h} h-10 w-px bg-[#d6ad62]/50`} />
          </motion.div>
        );
      })}
      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : undefined}
          transition={{ duration: 1.0, delay: 0.3 }}
          aria-hidden="true"
          className="mb-7 flex items-center justify-center gap-4 text-[#d6ad62] sm:mb-9"
        >
          <span className="h-px w-12 bg-[#d6ad62]/50 sm:w-16 md:w-20" />
          <motion.span
            animate={reduce ? undefined : { rotate: [0, 180, 360] }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="text-xl"
          >
            ✦
          </motion.span>
          <span className="h-px w-12 bg-[#d6ad62]/50 sm:w-16 md:w-20" />
        </motion.div>
        <motion.h2
          {...reveal(0.8, 1.3, 10)}
          id="story-intro-title"
          className="text-2xl font-semibold leading-relaxed text-[#e6c27a] sm:text-3xl md:text-4xl"
        >
          අපේ ආදර කතාව
        </motion.h2>
        <motion.div
          initial={reduce ? false : { opacity: 0, width: 0 }}
          animate={inView ? { opacity: 1, width: "64px" } : undefined}
          transition={{ duration: 1.0, delay: 1.9 }}
          className="mx-auto mt-5 mb-7 h-px bg-[#d6ad62]/70 sm:mt-6 sm:mb-9"
        />
        <motion.div {...reveal(2.4)} className="mx-auto max-w-xl">
          <p className="text-base leading-8 text-[#f6ead8]/95 sm:text-lg sm:leading-9 md:text-xl md:leading-10">
            වසර ගණනාවක් පුරා හදවත් දෙහදක නිහඬව ලියැවුණු
            ආදර කතාව, දෙමාපිය ආශිර්වාද මැද හෙළ සිරිතට
            අනුව එකම මඟක පියමං කරන්නට පෙරුම් පිරූ
            සුන්දර සිහිනයකි....
          </p>
        </motion.div>
        <motion.div {...reveal(4.2)} className="mx-auto mt-7 max-w-xl">
          <p className="text-base leading-8 text-[#e6c27a] sm:text-lg sm:leading-9 md:text-xl md:leading-10">
            අපේ නිහඬ ආදර කතාව ජීවිත කාලය පුරාම එකට
            ලියන්නට අත්වැල් බැඳගන්නා ඒ සුන්දර දිනය
            සැමරීමට අපිත් සමඟ අත්වැල් බැඳගන්නට
            ඔබට කෙරෙන
          </p>
        </motion.div>
        <motion.p
          {...reveal(6.0, 1.2, 10)}
          className="mx-auto mt-7 max-w-xl text-xl font-semibold leading-relaxed text-[#f6ead8] sm:text-2xl md:text-3xl"
        >
          ගෞරවනීය ආරාධනයයි මේ !!!
        </motion.p>
        <motion.div
          initial={reduce ? false : { opacity: 0, scaleX: 0 }}
          animate={inView ? { opacity: 1, scaleX: 1 } : undefined}
          transition={{ duration: 1.0, delay: 7.2 }}
          aria-hidden="true"
          className="mt-9 flex items-center justify-center gap-3 sm:mt-11"
        >
          <span className="h-px w-10 bg-[#d6ad62]/40 sm:w-14" />
          <motion.span
            animate={reduce ? undefined : { scale: [1, 1.2, 1] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            className="text-sm text-[#d6ad62]"
          >
            ✧
          </motion.span>
          <span className="h-px w-10 bg-[#d6ad62]/40 sm:w-14" />
        </motion.div>
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : undefined}
          transition={{ delay: 8, duration: 0.8 }}
          className="mt-7 flex justify-center sm:mt-9"
        >
          <a
            href="#memories"
            aria-label="අපේ මතකයන් වෙත යන්න"
            className="group flex flex-col items-center gap-2 rounded-full px-5 py-3 text-sm text-[#e6c27a] transition-colors duration-300 hover:text-[#f6ead8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#e6c27a] sm:text-base"
          >
            <motion.span
              aria-hidden="true"
              animate={
                reduce ? undefined : { y: [0, 8, 0], opacity: [0.4, 1, 0.4] }
              }
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="text-xl"
            >
              ↓
            </motion.span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}