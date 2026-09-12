"use client";

import { motion } from "framer-motion";

export default function ParentsSection() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0b0b0a] px-6 py-24 text-[#f5f1e8] md:px-12">
      <motion.div
        className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-28 top-24 h-64 w-64 rounded-full border border-[#c9a96e]/20"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -left-28 bottom-24 h-64 w-64 rounded-full border border-[#c9a96e]/15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-5 text-center text-xs tracking-[0.35em] text-[#c9a96e]"
        >
          ආදරයෙන් ඇරයුම්
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="text-center text-4xl font-light leading-tight md:text-6xl"
        >
          අපගේ ආදරණීය දෙමාපියන්
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-10 h-px bg-[#c9a96e]"
        />
        <div className="grid w-full max-w-3xl gap-12 md:grid-cols-2 md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="text-center"
          >
            <p className="mb-6 text-sm tracking-[0.15em] text-[#c9a96e]">
              මනාලියගේ දෙමාපියන්
            </p>

            <div className="space-y-3">
              <p className="text-xl font-light md:text-2xl">
                රත්නපාල ප්‍රනාන්දු
              </p>

              <p className="text-xl font-light md:text-2xl">
                ශ්‍රියානි මුණසිංහ
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.35 }}
            className="text-center"
          >
            <p className="mb-6 text-sm tracking-[0.15em] text-[#c9a96e]">
              මනාලයාගේ දෙමාපියන්
            </p>
            <div className="space-y-3">
              <p className="text-xl font-light md:text-2xl">
                ගම්මනගේ සුනිල්
              </p>
              <p className="text-xl font-light md:text-2xl">
                අලවත්තගේ රූපිකා
              </p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="mt-16 max-w-2xl text-center"
        >
          <div className="mx-auto mb-8 h-px w-12 bg-[#c9a96e]/60" />
          <p className="text-lg leading-loose text-[#d7d0c3] md:text-xl">
            තම ආදරණීය දූ පුතුන්ගේ
            <br />
            විවාහ මංගල්‍යයට
            <br />
            ඔබගේ සහභාගීත්වය ආදරයෙන් අපේක්ෂා කරමු.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-14 flex flex-col items-center gap-3 text-[#c9a96e]"
        >
          <span className="text-xs tracking-[0.3em]">
            අපේ විශේෂ දවස
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
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