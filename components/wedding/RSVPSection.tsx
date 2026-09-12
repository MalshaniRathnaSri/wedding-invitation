"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function RSVPSection() {
  const [response, setResponse] = useState<string | null>(null);
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
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 ${
          isMobile ? "h-56 w-56 blur-[70px]" : "h-96 w-96 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.06, 1] : [1, 1.12, 1],
          opacity: isMobile ? [0.25, 0.38, 0.25] : [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -left-36 top-20 rounded-full border border-[#9b7a45]/15 ${
          isMobile ? "h-52 w-52" : "h-72 w-72"
        }`}
        animate={{ rotate: 360 }}
        transition={{
          duration: isMobile ? 75 : 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute -right-36 bottom-20 rounded-full border border-[#9b7a45]/15 ${
          isMobile ? "h-52 w-52" : "h-72 w-72"
        }`}
        animate={{ rotate: -360 }}
        transition={{
          duration: isMobile ? 85 : 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-4xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
          }}
          className="mb-6 text-xs tracking-[0.35em] text-[#9b7a45]"
        >
          අපේ විශේෂ දවස
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
          }}
          className="text-4xl font-light leading-tight md:text-6xl"
        >
          ඔබත් අප සමඟද?
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 70, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: 0.2,
          }}
          className="my-9 h-px bg-[#9b7a45]"
        />
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.3,
          }}
          className="max-w-xl text-lg leading-loose text-[#4f4a42] md:text-xl"
        >
          අපේ සොඳුරු දිනය
          <br />
          ඔබ සමඟ බෙදාගැනීමට
          <br />
          අපි ආදරයෙන් බලා සිටිමු.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.5,
          }}
          className="mt-12 flex w-full max-w-md flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => setResponse("yes")}
            className={`flex-1 border px-6 py-4 text-sm tracking-[0.12em] transition-all duration-300 ${
              response === "yes"
                ? "border-[#9b7a45] bg-[#9b7a45] text-white"
                : "border-[#9b7a45] text-[#6b5738] hover:bg-[#9b7a45] hover:text-white"
            }`}
          >
            සහභාගී වෙමි
          </button>

          <button
            onClick={() => setResponse("no")}
            className={`flex-1 border px-6 py-4 text-sm tracking-[0.12em] transition-all duration-300 ${
              response === "no"
                ? "border-[#6b5738] bg-[#6b5738] text-white"
                : "border-[#9b7a45]/50 text-[#6b5738] hover:bg-[#6b5738] hover:text-white"
            }`}
          >
            සහභාගී වීමට නොහැක
          </button>
        </motion.div>
        {response && (
          <motion.div
            initial={{
              opacity: 0,
              y: isMobile ? 10 : 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: isMobile ? 0.5 : 0.6,
            }}
            className="mt-10"
          >
            <p className="text-base text-[#6b5738]">
              {response === "yes"
                ? "ඔබගේ පැමිණීම අපට මහත් සතුටකි. 🤍"
                : "ඔබගේ ආදරය සහ සුබ පැතුම් අපට සදා වටිනා ය."}
            </p>
          </motion.div>
        )}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 0.8,
          }}
          className="mt-16"
        >
          <p className="text-sm tracking-[0.35em] text-[#9b7a45]">
            නිපුනි & නිපුන
          </p>

          <p className="mt-4 text-xs tracking-[0.2em] text-[#777067]">
            15 · 01 · 2027
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.8 : 1,
            delay: 1,
          }}
          className="mt-16 flex flex-col items-center gap-3 text-[#9b7a45]"
        >
          <span className="text-xs tracking-[0.3em]">අපේ කතාවේ අවසානයට</span>
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
