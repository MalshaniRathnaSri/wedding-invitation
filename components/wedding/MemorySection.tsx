"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function MemorySection() {
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
    <section className="relative min-h-screen bg-[#0b0b0a] text-[#f5f1e8] overflow-hidden flex items-center justify-center px-6 py-24">
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          animate={{
            scale: isMobile ? [1, 1.04, 1] : [1, 1.15, 1],
            opacity: isMobile ? [0.06, 0.11, 0.06] : [0.08, 0.16, 0.08],
          }}
          transition={{
            duration: isMobile ? 14 : 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isMobile
              ? "w-[280px] h-[280px] blur-[90px]"
              : "w-[450px] h-[450px] blur-[160px]"
          } rounded-full bg-[#c9a96e]`}
        />
        <motion.div
          animate={{
            rotate: [0, 360],
          }}
          transition={{
            duration: isMobile ? 110 : 70,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isMobile ? "w-[450px] h-[450px]" : "w-[650px] h-[650px]"
          } rounded-full border border-[#c9a96e]/10`}
        />
        <motion.div
          animate={{
            rotate: [360, 0],
          }}
          transition={{
            duration: isMobile ? 85 : 45,
            repeat: Infinity,
            ease: "linear",
          }}
          className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
            isMobile ? "w-[340px] h-[340px]" : "w-[500px] h-[500px]"
          } rounded-full border border-[#c9a96e]/[0.05]`}
        />
      </div>
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: isMobile ? 0.9 : 1.2,
          }}
          className="text-center mb-14"
        >
          <p className="text-xs md:text-sm tracking-[0.3em] text-[#c9a96e] mb-6">
            එක් සුන්දර මතකයක්...
          </p>

          <h2 className="text-3xl md:text-5xl font-serif leading-tight">
            අපේ ගමනේ
            <br />
            තවත් එක් පියවරක්
          </h2>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: isMobile ? 1 : 1.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative max-w-3xl mx-auto"
        >
          <div className="relative p-[1px] bg-gradient-to-b from-[#c9a96e]/50 via-[#c9a96e]/10 to-transparent">
            <div className="relative aspect-[4/5] md:aspect-[4/3] bg-[#151411] overflow-hidden">
              <motion.div
                animate={{
                  scale: isMobile ? [1, 1.03, 1] : [1, 1.08, 1],
                  opacity: isMobile ? [0.04, 0.08, 0.04] : [0.05, 0.12, 0.05],
                }}
                transition={{
                  duration: isMobile ? 12 : 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className={`absolute inset-0 ${
                  isMobile ? "blur-[60px]" : "blur-[100px]"
                } bg-[#c9a96e]`}
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
                <motion.div
                  animate={
                    isMobile
                      ? {
                          opacity: [0.4, 0.7, 0.4],
                        }
                      : {
                          rotate: [0, 180, 360],
                        }
                  }
                  transition={{
                    duration: isMobile ? 3 : 14,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="text-[#c9a96e]/50 text-3xl mb-6"
                >
                  ✦
                </motion.div>
                <p className="text-xs tracking-[0.25em] text-white/30">
                  NAKATH DAWASA
                </p>
                <p className="mt-3 text-sm text-white/20">
                  අපේ මතකය
                </p>
              </div>
              <div className="absolute top-5 left-5 w-10 h-10">
                <div className="absolute top-0 left-0 w-7 h-px bg-[#c9a96e]/50" />
                <div className="absolute top-0 left-0 h-7 w-px bg-[#c9a96e]/50" />
              </div>
              <div className="absolute top-5 right-5 w-10 h-10">
                <div className="absolute top-0 right-0 w-7 h-px bg-[#c9a96e]/50" />
                <div className="absolute top-0 right-0 h-7 w-px bg-[#c9a96e]/50" />
              </div>
              <div className="absolute bottom-5 left-5 w-10 h-10">
                <div className="absolute bottom-0 left-0 w-7 h-px bg-[#c9a96e]/50" />
                <div className="absolute bottom-0 left-0 h-7 w-px bg-[#c9a96e]/50" />
              </div>
              <div className="absolute bottom-5 right-5 w-10 h-10">
                <div className="absolute bottom-0 right-0 w-7 h-px bg-[#c9a96e]/50" />
                <div className="absolute bottom-0 right-0 h-7 w-px bg-[#c9a96e]/50" />
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.4,
          }}
          transition={{
            duration: isMobile ? 0.9 : 1.2,
            delay: 0.3,
          }}
          className="max-w-xl mx-auto text-center mt-12"
        >
          <div className="flex items-center justify-center gap-4 mb-6">
            <span className="w-12 h-px bg-[#c9a96e]/30" />
            <span className="text-[#c9a96e] text-xs">
              ✦
            </span>
            <span className="w-12 h-px bg-[#c9a96e]/30" />
          </div>
          <p className="text-base md:text-lg leading-8 text-white/55">
            කාලයත් සමඟ වෙනස් වූ
            <br />
            අපේ ලෝකයේ තවත් සුන්දර මතකයක්...
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: isMobile ? 1.2 : 1,
            duration: 0.8,
          }}
          className="flex flex-col items-center mt-16"
        >
          <p className="text-[10px] tracking-[0.25em] text-white/25 mb-3">
            තවත් මතකයන්
          </p>
          <motion.div
            animate={{
              y: [0, 6, 0],
              opacity: [0.35, 0.8, 0.35],
            }}
            transition={{
              duration: isMobile ? 2.4 : 1.8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-[#c9a96e] text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
