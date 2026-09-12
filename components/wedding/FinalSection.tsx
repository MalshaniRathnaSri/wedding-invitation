"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function FinalSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] px-6 py-24 text-[#f5f1e8] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-56 w-56 blur-[70px]" : "h-96 w-96 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.18, 1],
          opacity: isMobile ? [0.2, 0.32, 0.2] : [0.2, 0.45, 0.2],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-[300px] w-[300px]" : "h-[500px] w-[500px]"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 85 : 50,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#c9a96e]/10 ${
          isMobile ? "h-[220px] w-[220px]" : "h-[360px] w-[360px]"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 70 : 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[80vh] max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
          }}
          className="mb-10 text-xs tracking-[0.4em] text-[#c9a96e]"
        >
          අපේ කතාව
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
          }}
          className="space-y-3"
        >
          <p className="text-2xl font-light text-[#d7d0c3] md:text-4xl">
            වසර දොළහක්...
          </p>

          <p className="text-2xl font-light text-[#d7d0c3] md:text-4xl">
            මතකයන් දහසක්...
          </p>

          <p className="text-2xl font-light text-[#d7d0c3] md:text-4xl">
            එක් හදවතක්...
          </p>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.3 : 0.4,
          }}
          className="my-12 h-px bg-[#c9a96e]"
        />
        <motion.div
          initial={{
            opacity: 0,
            scale: isMobile ? 0.97 : 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.9 : 1.1,
            delay: isMobile ? 0.4 : 0.5,
          }}
        >
          <p className="text-lg tracking-[0.25em] text-[#c9a96e] md:text-xl">
            දැන්...
          </p>
          <h2 className="mt-5 text-4xl font-light leading-tight md:text-6xl">
            සදාකාලිකව
            <br />
            එකට...
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.65 : 0.8,
          }}
          className="mt-14"
        >
          <p className="text-3xl font-light md:text-5xl">
            නිපුනි
            <span className="mx-4 text-[#c9a96e]">&</span>
            නිපුන
          </p>
          <div className="mx-auto mt-7 h-px w-12 bg-[#c9a96e]/60" />
          <p className="mt-6 text-sm tracking-[0.35em] text-[#c9a96e]">
            15 · 01 · 2027
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: isMobile ? 0.9 : 1.1,
          }}
          className="mt-16"
        >
          <p className="text-base leading-loose text-[#a9a39a] md:text-lg">
            අපේ ආදර කතාවේ
            <br />
            මේ සොඳුරු පරිච්ඡේදයේ
            <br />
            ඔබත් අප සමඟ සිටීම
            <br />
            අපට මහත් සතුටකි.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 1 : 1.2,
            delay: isMobile ? 1.1 : 1.4,
          }}
          className="mt-20"
        >
          <div className="mx-auto mb-5 h-8 w-px bg-[#c9a96e]/50" />
          <p className="text-[10px] tracking-[0.5em] text-[#c9a96e]">
            WITH LOVE
          </p>
          <p className="mt-3 text-xs tracking-[0.3em] text-[#77736c]">
            NIPUNI & NIPUNA
          </p>
        </motion.div>
      </div>
    </section>
  );
}
