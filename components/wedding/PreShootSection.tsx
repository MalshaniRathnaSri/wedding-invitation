"use client";

import { motion } from "framer-motion";

export default function PreShootSection() {
  return (
    <section className="relative min-h-screen bg-[#f5f1e8] text-[#171512] overflow-hidden py-24 md:py-32">
      <motion.div
        className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#c9a96e]/10 blur-[120px]"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -right-32 top-32 w-[350px] h-[350px] border border-[#c9a96e]/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-20 top-44 w-[220px] h-[220px] border border-[#c9a96e]/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 1 }}
          className="mb-16 md:mb-24"
        >
          <p className="text-xs md:text-sm tracking-[0.35em] text-[#9c7b42] mb-5">
            අපේ මතකයන්
          </p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.15]">
            අපි දෙන්නාගේ
            <br />
            <span className="text-[#9c7b42]">සුන්දරම මතකයන්...</span>
          </h2>
        </motion.div>
        <div className="grid md:grid-cols-12 gap-10 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.1 }}
            className="md:col-span-7"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-[#c9a96e]/50" />
              <div className="relative aspect-[4/5] md:aspect-[4/3] bg-[#ded8cb] overflow-hidden">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[#6e6659]">
                  <motion.div
                    className="w-20 h-20 rounded-full border border-[#9c7b42]/40 flex items-center justify-center mb-6"
                    animate={{
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-2xl text-[#9c7b42]">
                      ♡
                    </span>
                  </motion.div>

                  <p className="text-xs tracking-[0.35em]">
                    PRE-SHOOT
                  </p>

                  <p className="text-sm mt-3">
                    අපේ සුන්දර මතකය
                  </p>

                </div>
                <div className="absolute top-5 left-5 w-8 h-8 border-t border-l border-[#9c7b42]" />
                <div className="absolute top-5 right-5 w-8 h-8 border-t border-r border-[#9c7b42]" />
                <div className="absolute bottom-5 left-5 w-8 h-8 border-b border-l border-[#9c7b42]" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b border-r border-[#9c7b42]" />
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="md:col-span-5"
          >
            <p className="text-[#9c7b42] text-xs tracking-[0.3em] mb-6">
              TWO HEARTS
            </p>

            <h3 className="text-3xl md:text-4xl leading-tight font-serif mb-8">
              එකට ගෙවූ
              <br />
              <span className="text-[#9c7b42]">
                සොඳුරු මොහොතක්...
              </span>
            </h3>
            <div className="w-12 h-px bg-[#c9a96e] mb-8" />
            <p className="text-[#5f594f] leading-8 text-sm md:text-base">
              වසර දොළහක් පුරාවට එකතු වූ
              මතකයන් අතරින්...
              <br />
              අද අපේ හදවත්වල රැඳී ඇති
              තවත් එක් සුන්දර මතකයක්.
            </p>
            <p className="mt-8 text-[#5f594f] leading-8 text-sm md:text-base">
              එකිනෙකා සමඟ සිනාසුණු,
              එකිනෙකා වෙනුවෙන් සිටි,
              අපේම වූ ඒ සුන්දර මොහොතක්...
            </p>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-28 md:mt-36 text-center"
        >
          <div className="flex items-center justify-center gap-5 mb-7">
            <div className="w-16 h-px bg-[#c9a96e]/50" />
            <span className="text-[#9c7b42] text-lg">
              ✦
            </span>
            <div className="w-16 h-px bg-[#c9a96e]/50" />
          </div>
          <p className="font-serif text-2xl md:text-3xl">
            මතකයන්...
          </p>
          <p className="mt-3 text-[#777064] text-sm tracking-wide">
            අපේ කතාවේ සුන්දරම කොටස්
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 1 }}
          className="flex flex-col items-center mt-24"
        >
          <span className="text-[10px] tracking-[0.35em] text-[#9c7b42]">
            ඉදිරියට...
          </span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="mt-4 text-[#9c7b42] text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}