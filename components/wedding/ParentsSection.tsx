"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function ParentsSection() {
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
    <section className="relative min-h-screen overflow-hidden bg-[#f1e3ce] px-6 py-24 text-[#4a2c17] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f5d1d]/15 ${
          isMobile ? "h-56 w-56 blur-[70px]" : "h-80 w-80 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.3, 0.45, 0.3] : [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: isMobile ? 12 : 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -right-28 top-24 rounded-full border border-[#8f5d1d]/30 ${
          isMobile ? "h-52 w-52" : "h-64 w-64"
        }`}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: isMobile ? 70 : 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -left-28 bottom-24 rounded-full border border-[#8f5d1d]/25 ${
          isMobile ? "h-52 w-52" : "h-64 w-64"
        }`}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: isMobile ? 80 : 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
          }}
          className="mb-5 text-center text-xs tracking-[0.35em] text-[#8f5d1d]"
        >
          ආදරයෙන් ඇරයුම්
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.1,
          }}
          className="text-center text-4xl font-bold leading-tight text-[#4a2c17] md:text-4xl"
        >
          ආදරණීය,
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: 0.3,
          }}
          className="my-10 h-px bg-[#8f5d1d]"
        />
        <div className="relative grid w-full max-w-3xl gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.7 : 0.9,
              delay: 0.2,
            }}
            className="relative overflow-hidden rounded-3xl border border-[#8f5d1d]/25 bg-gradient-to-b from-[#fbf3ea]/90 via-[#f3e4c4]/70 to-[#e8d3a0]/60 px-6 py-8 text-center shadow-[0_10px_40px_-15px_rgba(143,93,29,0.35)] backdrop-blur-sm md:px-8 md:py-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-[#e8b4a0]/30 blur-[40px]"
            />
            <div
              aria-hidden="true"
              className="relative mb-4 flex items-center justify-center gap-3 text-[#8f5d1d]/70"
            >
              <span className="h-px w-8 bg-[#8f5d1d]/40" />
              <span className="text-sm">✦</span>
              <span className="h-px w-8 bg-[#8f5d1d]/40" />
            </div>
            <div className="relative space-y-3">
              <p className="text-xl font-light text-[#4a2c17] md:text-2xl">
                රත්නපාල ප්‍රනාන්දුගේ 
              </p>
              <p>සහ</p>
              <p className="text-xl font-light text-[#4a2c17] md:text-2xl">
                ශ්‍රියානි මුණසිංහගේ 
              </p>
              <p>වැඩිමහල් දියණිය </p>
              <p className="text-lg font-semibold text-[#4a2c17] md:text-xl">
                නිපුනි මල්ෂානි
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pointer-events-none absolute left-1/2 top-1/2 z-20 -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              animate={{ scale: [1, 1.08, 1] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative flex h-24 w-24 items-center justify-center md:h-28 md:w-28"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="absolute inset-0 h-full w-full drop-shadow-[0_6px_14px_rgba(143,93,29,0.35)]"
              >
                <defs>
                  <linearGradient id="heartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fbf3ea" />
                    <stop offset="100%" stopColor="#e8d3a0" />
                  </linearGradient>
                </defs>
                <path
                  d="M12 21s-7.5-4.6-9.6-9.2C.9 8.4 3 5 6.4 5c2 0 3.7 1.1 5.6 3.2C13.900 6.100 15.600 5 17.600 5 21 5 23.100 8.400 21.600 11.800 19.500 16.400 12 21 12 21z"
                  fill="url(#heartGrad)"
                  stroke="#8f5d1d"
                  strokeWidth="0.5"
                />
              </svg>
              <span className="relative -mt-1 text-sm font-semibold text-[#8f5d1d] md:text-base">
                සමගින්
              </span>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 18 : 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: isMobile ? 0.7 : 0.9,
              delay: 0.3,
            }}
            className="relative overflow-hidden rounded-3xl border border-[#8f5d1d]/25 bg-gradient-to-b from-[#fbf3ea]/90 via-[#f3e4c4]/70 to-[#e8d3a0]/60 px-6 py-8 text-center shadow-[0_10px_40px_-15px_rgba(143,93,29,0.35)] backdrop-blur-sm md:px-8 md:py-10"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-10 -left-10 h-32 w-32 rounded-full bg-[#d6ad62]/30 blur-[40px]"
            />
            <div
              aria-hidden="true"
              className="relative mb-4 flex items-center justify-center gap-3 text-[#8f5d1d]/70"
            >
              <span className="h-px w-8 bg-[#8f5d1d]/40" />
              <span className="text-sm">✦</span>
              <span className="h-px w-8 bg-[#8f5d1d]/40" />
            </div>
            <div className="relative space-y-3">
              <p className="text-xl font-light text-[#4a2c17] md:text-2xl">
                G. සුනිල්ගේ 
              </p>
              <p>සහ</p>
              <p className="text-xl font-light text-[#4a2c17] md:text-2xl">
                A. රූපිකාගේ 
              </p>
              <p>එකම පුත්</p>
              <p className="text-lg font-semibold text-[#4a2c17] md:text-xl">
                නිපුන තරුක්ෂ 
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.5,
          }}
          className="mt-16 max-w-2xl text-center"
        >
          <div className="mx-auto mb-8 h-px w-12 bg-[#8f5d1d]/60" />
          <p className="text-lg leading-loose text-[#8D7041] md:text-xl">
            ආදර කතාව, 
            <br/>
            දෙමව්පියන්ගේ ආශිර්වාදය මැද හෙළ කුල සිරිතට අනුව
            <br />
            ජීවිත කාලය පුරාම එකට ලියන්නට අත්වැල් බැදගන්නා ඒ සුන්දර දිනය
            <br />
            තවත් සුන්දර කරන්නට ඔබගේ ආශීර්වාදය ද රැගෙන පැමිණෙන ලෙස
            <br />
            ගෞරවයෙන් සහ සෙනෙහසින් ආරාධනා කරමු.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.7,
          }}
          className="mt-14 flex flex-col items-center gap-3 text-[#8f5d1d]"
        >
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
        </motion.div>
      </div>
    </section>
  );
}
