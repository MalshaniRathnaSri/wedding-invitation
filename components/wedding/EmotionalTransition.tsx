"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function EmotionalTransition() {
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
    <section className="relative min-h-screen bg-[#090909] text-[#f5f1e8] overflow-hidden flex items-center justify-center">
      <motion.div
        className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ${
          isMobile
            ? "w-[280px] h-[280px] blur-[80px]"
            : "w-[450px] h-[450px] blur-[130px]"
        } rounded-full bg-[#c9a96e]/10 pointer-events-none`}
        animate={{
          scale: isMobile ? [1, 1.04, 1] : [1, 1.15, 1],
          opacity: isMobile ? [0.2, 0.35, 0.2] : [0.3, 0.55, 0.3],
        }}
        transition={{
          duration: isMobile ? 14 : 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className={`absolute ${
          isMobile
            ? "w-[400px] h-[400px]"
            : "w-[420px] h-[420px] md:w-[650px] md:h-[650px]"
        } rounded-full border border-[#c9a96e]/10 pointer-events-none`}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: isMobile ? 110 : 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className={`absolute ${
          isMobile
            ? "w-[280px] h-[280px]"
            : "w-[300px] h-[300px] md:w-[480px] md:h-[480px]"
        } rounded-full border border-[#c9a96e]/10 pointer-events-none`}
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: isMobile ? 80 : 30,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="absolute top-[20%] left-[15%] w-1 h-1 bg-[#c9a96e] rounded-full" />
      <div className="absolute top-[30%] right-[18%] w-1.5 h-1.5 bg-[#c9a96e]/70 rounded-full" />
      <div className="absolute bottom-[25%] left-[20%] w-1 h-1 bg-[#c9a96e]/60 rounded-full" />
      <div className="absolute bottom-[18%] right-[15%] w-1 h-1 bg-[#c9a96e] rounded-full" />
      <div className="relative z-10 max-w-4xl px-6 text-center">
        <motion.p
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: isMobile ? 0.8 : 1,
          }}
          className="text-xs md:text-sm tracking-[0.4em] text-[#c9a96e] mb-12"
        >
          වසර දොළහක් පුරාවට...
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: isMobile ? 1 : 1.3,
            delay: 0.2,
          }}
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl leading-[1.6]">
            <span className="block">අපි එකිනෙකා තෝරාගත්තෙමු.</span>
            <span className="block mt-3 text-[#c9a96e]">නැවතත්...</span>
          </h2>
        </motion.div>
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: 70,
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.7,
          }}
          className="h-px bg-[#c9a96e] mx-auto my-12"
        />
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
          }}
          transition={{
            duration: isMobile ? 0.9 : 1.2,
            delay: 0.9,
          }}
        >
          <p className="font-serif text-2xl md:text-4xl leading-relaxed">
            දැන්...
          </p>
          <p className="mt-4 text-xl md:text-3xl leading-relaxed text-[#f5f1e8]/90">
            සදාකාලිකව
            <br />
            එකට යන්නට
          </p>

          <p className="mt-5 text-2xl md:text-4xl font-serif text-[#c9a96e]">
            අපි සූදානම්.
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
            duration: isMobile ? 1 : 1.5,
            delay: 1.4,
          }}
          className="mt-16"
        >
          <p className="text-sm tracking-[0.35em] text-[#f5f1e8]/50">
            නිපුනි
            <span className="mx-4 text-[#c9a96e]">&</span>
            නිපුන
          </p>
        </motion.div>
      </div>
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
          delay: isMobile ? 1.7 : 2,
          duration: 0.8,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <span className="text-[10px] tracking-[0.35em] text-[#c9a96e]">
          අපේ විවාහය
        </span>
        <motion.div
          animate={{
            y: [0, 6, 0],
          }}
          transition={{
            duration: isMobile ? 2.4 : 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mt-4 text-[#c9a96e] text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
