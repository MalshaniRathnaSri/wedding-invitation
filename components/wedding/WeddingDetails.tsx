"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function WeddingDetails() {
  const [isMobile, setIsMobile] = useState(false);

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
    <section className="relative min-h-screen overflow-hidden bg-[#f5f1e8] px-6 py-24 text-[#171512] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-20 -translate-x-1/2 rounded-full bg-[#c9a96e]/10 ${
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
        className={`absolute -right-32 top-20 rounded-full border border-[#c9a96e]/20 ${
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
        className={`absolute -left-32 bottom-20 rounded-full border border-[#c9a96e]/15 ${
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
          className="mb-4 text-center text-xs tracking-[0.35em] text-[#9b7a45]"
        >
          අපේ විශේෂ දවස
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.1,
          }}
          className="text-center text-4xl font-light leading-tight md:text-6xl"
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
          className="my-8 h-px bg-[#c9a96e]"
        />
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.2,
          }}
          className="max-w-2xl text-center"
        >
          <p className="text-lg leading-loose text-[#4b463f] md:text-xl">
            අපේ ආදර කතාවේ තවත් සුන්දර පරිච්ඡේදයකට
            <br />
            ඔබත් සමඟින් පියවර තැබීමට
            <br />
            අපි ආදරයෙන් ආරාධනා කරමු.
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scale: isMobile ? 0.98 : 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.3,
          }}
          className="mt-16 text-center"
        >
          <p className="text-sm tracking-[0.3em] text-[#9b7a45]">ජනවාරි</p>
          <div className="my-2 text-7xl font-light tracking-tight md:text-8xl">
            15
          </div>
          <p className="text-sm tracking-[0.35em] text-[#6b655d]">2027</p>
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
            className="border border-[#c9a96e]/40 bg-[#eee8dc]/60 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#9b7a45]">
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
            className="border border-[#c9a96e]/40 bg-[#eee8dc]/60 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#9b7a45]">
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
            className="border border-[#c9a96e]/40 bg-[#eee8dc]/60 px-6 py-8 text-center backdrop-blur-sm"
          >
            <p className="mb-3 text-sm tracking-wide text-[#9b7a45]">ස්ථානය</p>
            <p className="text-2xl font-light">Season</p>
            <p className="mt-1 text-sm text-[#6b655d]">Waskaduwa</p>
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
          className="mt-14 w-full max-w-4xl"
        >
          <div className="relative flex min-h-[240px] flex-col items-center justify-center overflow-hidden border border-[#c9a96e]/30 bg-[#e8e1d4]">
            <div className="absolute inset-0 opacity-30">
              <div className="absolute left-0 top-1/3 h-px w-full rotate-6 bg-[#9b7a45]" />
              <div className="absolute left-0 top-2/3 h-px w-full -rotate-3 bg-[#9b7a45]" />
              <div className="absolute left-1/3 top-0 h-full w-px rotate-12 bg-[#9b7a45]" />
              <div className="absolute right-1/3 top-0 h-full w-px -rotate-6 bg-[#9b7a45]" />
            </div>
            <div className="relative z-10 text-center">
              <p className="text-xs tracking-[0.35em] text-[#9b7a45]">
                LOCATION
              </p>
              <h3 className="mt-3 text-3xl font-light">Season, Waskaduwa</h3>
              <a
                href="https://maps.app.goo.gl/AJXDZgSiGqDuFcp2A"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block border border-[#9b7a45] px-7 py-3 text-sm tracking-widest text-[#6b5738] transition-all duration-300 hover:bg-[#9b7a45] hover:text-white"
              >
                ස්ථානය බලන්න
              </a>
            </div>
          </div>
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
          <p className="text-lg text-[#4b463f] md:text-xl">
            ඔබගේ පැමිණීම අපට සතුටකි.
          </p>
          <div className="mt-10 flex flex-col items-center gap-3 text-[#9b7a45]">
            <span className="text-xs tracking-[0.3em]">අපේ ගමන සමඟින්</span>
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
