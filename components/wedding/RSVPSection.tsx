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
    <section className="relative min-h-screen overflow-hidden bg-[#4a2c17] px-6 py-24 text-[#f6ead8] md:px-12">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b87924]/30 ${
          isMobile ? "h-56 w-56 blur-[70px]" : "h-96 w-96 blur-3xl"
        }`}
        animate={{
          scale: isMobile ? [1, 1.08, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.35, 0.5, 0.35] : [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute -left-36 top-20 rounded-full border border-[#d6ad62]/30 ${
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
        className={`absolute -right-36 bottom-20 rounded-full border border-[#d6ad62]/25 ${
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
          className="mb-6 text-xs tracking-[0.35em] text-[#d6ad62]"
        >
          එදින,
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
          }}
          className="text-2xl font-light leading-tight text-[#e6c27a] md:text-4xl"
        >
          ඔබත් අප සමඟ එකතුවන්න.
        </motion.h2>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 70, opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: 0.2,
          }}
          className="my-9 h-px bg-[#d6ad62]/70"
        />
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.7 : 0.9,
            delay: 0.3,
          }}
          className="max-w-xl text-lg leading-loose text-[#f6ead8]/70 md:text-xl"
        >
          මේ සොඳුරු දවස
          <br />
          ඔබත් සමග ආදරයෙන්
          <br />
          ගත කිරීමට අප මග බලා සිටිමු.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: isMobile ? 12 : 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: isMobile ? 0.6 : 0.8,
            delay: 0.4,
          }}
          className="mt-12 max-w-md text-sm leading-loose tracking-[0.04em] text-[#e6c27a] md:text-base"
        >
          ඔබගේ පැමිණීම මෙහි සඳහන් කරන මෙන් කාරුණිකව ඉල්ලා සිටිමි
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
                ? "border-[#d6ad62] bg-[#d6ad62] text-[#4a2c17]"
                : "border-[#d6ad62] text-[#e6c27a] hover:bg-[#d6ad62] hover:text-[#4a2c17]"
            }`}
          >
            සහභාගී වෙමි
          </button>

          <button
            onClick={() => setResponse("no")}
            className={`flex-1 border px-6 py-4 text-sm tracking-[0.12em] transition-all duration-300 ${
              response === "no"
                ? "border-[#d6ad62]/60 bg-[#f6ead8]/15 text-[#f6ead8]"
                : "border-[#d6ad62]/40 text-[#f6ead8]/70 hover:bg-[#f6ead8]/10 hover:text-[#f6ead8]"
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
            <p className="text-base text-[#e6c27a]">
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
            delay: 1,
          }}
          className="mt-16 flex flex-col items-center gap-3 text-[#d6ad62]"
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
