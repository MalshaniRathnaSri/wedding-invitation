"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WeddingDetails() {
  const [isMobile, setIsMobile] = useState(false);
  const WEEKDAYS = ["ඉ", "ස", "අ", "බ", "බ්‍ර", "සි", "සෙ"];
  const FIRST_DAY_OFFSET = 5;

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#4a2c17] px-6 py-24 text-[#f6ead8] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-[#b87924]/30 ${
          isMobile ? "h-52 w-52 blur-[70px]" : "h-72 w-72 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.35, 0.5, 0.35] : [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: isMobile ? 12 : 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -right-32 top-20 rounded-full border border-[#d6ad62]/30 ${
          isMobile ? "h-52 w-52" : "h-72 w-72"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 65 : 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -left-32 bottom-20 rounded-full border border-[#d6ad62]/25 ${
          isMobile ? "h-52 w-52" : "h-64 w-64"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 75 : 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
          }}
          className="mb-4 text-center text-xs tracking-[0.35em] text-[#d6ad62]"
        >
          එනම්,
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.1,
          }}
          className="text-center text-4xl font-light leading-tight text-[#e6c27a] md:text-6xl"
        >
          අපේ විවාහ දිනය
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 90, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: 0.3,
          }}
          className="my-8 h-px bg-[#d6ad62]/70"
        />

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.7 : 0.9, delay: 0.3 }}
          className="mt-14 w-full max-w-xs"
        >
          <div className="relative">
            {/* Outer arch line */}
            <div className="absolute -inset-2 rounded-t-[10rem] border border-[#d6ad62]/30" />

            {/* Arch card */}
            <div className="relative rounded-t-[10rem] border border-[#d6ad62]/60 bg-gradient-to-b from-[#f6ead8]/10 to-[#f6ead8]/[0.03] px-5 pb-8 pt-14 backdrop-blur-sm">
              {/* Header */}
              <div className="text-center">
                <svg
                  viewBox="0 0 24 24"
                  className="mx-auto h-5 w-5 text-[#e6c27a]"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                </svg>
                <p className="mt-4 text-[10px] tracking-[0.5em] text-[#d6ad62]">
                  JANUARY
                </p>
                <h3 className="mt-2 text-4xl font-light text-[#e6c27a]">
                  ජනවාරි
                </h3>
                <p className="mt-1 text-sm tracking-[0.5em] text-[#f6ead8]/70">
                  2027
                </p>
              </div>

              <div className="mx-auto my-6 flex items-center gap-3">
                <span className="h-px flex-1 bg-[#d6ad62]/40" />
                <span className="h-1.5 w-1.5 rotate-45 bg-[#d6ad62]" />
                <span className="h-px flex-1 bg-[#d6ad62]/40" />
              </div>

              {/* Weekdays */}
              <div className="grid grid-cols-7 text-center text-xs text-[#d6ad62]/80">
                {WEEKDAYS.map((d, i) => (
                  <span key={i}>{d}</span>
                ))}
              </div>

              {/* Days */}
              <div className="mt-3 grid grid-cols-7 gap-y-1 text-center text-sm font-light">
                {Array.from({ length: FIRST_DAY_OFFSET }).map((_, i) => (
                  <span key={`blank-${i}`} />
                ))}

                {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => {
                  const isWedding = day === 15;
                  const isSunday = (day + FIRST_DAY_OFFSET - 1) % 7 === 0;

                  return (
                    <div
                      key={day}
                      className="relative flex h-10 items-center justify-center"
                    >
                      {isWedding ? (
                        <>
                          {[0, 1].map((i) => (
                            <motion.span
                              key={i}
                              className="absolute h-9 w-9 rounded-full border border-[#e6c27a]/70"
                              animate={{ scale: [1, 2], opacity: [0.6, 0] }}
                              transition={{
                                duration: 2.4,
                                delay: i * 1.2,
                                repeat: Infinity,
                                ease: "easeOut",
                              }}
                            />
                          ))}
                          <motion.svg
                            viewBox="0 0 24 24"
                            className="absolute h-12 w-12 text-[#e6c27a] drop-shadow-[0_0_14px_rgba(230,194,122,0.8)]"
                            fill="currentColor"
                            animate={{ scale: [1, 1.12, 1] }}
                            transition={{
                              duration: 1.6,
                              repeat: Infinity,
                              ease: "easeInOut",
                            }}
                            aria-hidden="true"
                          >
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                          </motion.svg>
                          <span className="relative z-10 -mt-0.5 text-sm font-semibold text-[#3a2010]">
                            {day}
                          </span>
                        </>
                      ) : (
                        <span
                          className={
                            isSunday ? "text-[#d6ad62]/80" : "text-[#f6ead8]/50"
                          }
                        >
                          {day}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 flex items-center justify-center gap-3 text-center">
                <span className="h-px w-8 bg-[#d6ad62]/50" />
                <span className="h-px w-8 bg-[#d6ad62]/50" />
              </div>
            </div>
          </div>
        </motion.div>
        <div className="mt-16 grid w-full max-w-4xl gap-6 md:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: 0.1,
            }}
            className="border border-[#d6ad62]/40 bg-[#f6ead8]/5 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#e6c27a]">
              පෝරුවේ චාරිත්‍රය
            </p>
            <p className="text-2xl font-light">පෙ.ව. 9.05</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: 0.2,
            }}
            className="border border-[#d6ad62]/40 bg-[#f6ead8]/5 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#e6c27a]">
              විවාහ මංගල්‍යය
            </p>
            <p className="text-2xl font-light">නිපුනි & නිපුන</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.7 : 0.8,
              delay: 0.3,
            }}
            className="border border-[#d6ad62]/40 bg-[#f6ead8]/5 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#e6c27a]">ස්ථානය</p>
            <p className="text-2xl font-light">The Season</p>
            <p className="mt-1 text-sm text-[#f6ead8]/70">Waskaduwa</p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.4,
          }}
          className="mt-14 flex w-full max-w-4xl flex-col items-center text-center"
        >
          <div className="px-4 text-center">
            <p className="text-sm leading-8 text-[#f6ead8]/85 md:text-base">
              මේ සොඳුරු දිනයේ අපත් සමඟ එක්වන්නට,
              <br />
              උත්සව ස්ථානයට පැමිණෙන මඟ පහසුවෙන් සොයාගැනීමට
            </p>

            <span className="mt-4 inline-flex items-center gap-2.5 rounded-full border border-[#d6ad62]/50 bg-[#d6ad62]/15 px-5 py-2 text-sm leading-7 text-[#e6c27a] shadow-[0_0_24px_-6px_rgba(214,173,98,0.45)] md:text-base">
              පහත බොත්තම ඔබන්න.
            </span>
          </div>

          <a
            href="https://maps.app.goo.gl/AJXDZgSiGqDuFcp2A"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 inline-flex items-center gap-4 rounded-full bg-[#d6ad62] py-3 pl-3 pr-7 text-[#3a2010] shadow-[0_10px_30px_-8px_rgba(0,0,0,0.5)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#e6c27a]"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#4a2c17]/15">
              <svg
                className="h-5 w-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21Z" />
                <circle cx="12" cy="9.5" r="2.5" />
              </svg>
            </span>

            <span className="flex flex-col items-start text-left">
              <span className="text-xs font-medium tracking-[0.25em]">
                OPEN GOOGLE MAPS
              </span>
              <span className="mt-1 text-[11px] opacity-70">
                The Season · Waskaduwa
              </span>
            </span>

            <span className="ml-2 text-xl transition-transform duration-300 group-hover:translate-x-1">
              →
            </span>
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.5,
          }}
          className="mt-16 text-center"
        >
          <div className="mt-10 flex flex-col items-center gap-3 text-[#d6ad62]">
            <motion.span
              animate={{
                y: isMobile ? [0, 5, 0] : [0, 7, 0],
                opacity: isMobile ? [0.7, 1, 0.7] : 1,
              }}
              transition={{
                duration: isMobile ? 2.4 : 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-xl"
            >
              ↓
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
