"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function StoryIntro() {
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
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f1e8] text-[#171512] px-6 overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: isMobile ? 120 : 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute ${
          isMobile ? "w-[360px] h-[360px]" : "w-[520px] h-[520px]"
        } rounded-full border border-[#c9a96e]/10 pointer-events-none`}
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: isMobile ? 100 : 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className={`absolute ${
          isMobile ? "w-[260px] h-[260px]" : "w-[360px] h-[360px]"
        } rounded-full border border-[#c9a96e]/[0.06] pointer-events-none`}
      />
      <motion.div
        animate={{
          scale: isMobile ? [1, 1.04, 1] : [1, 1.08, 1],
          opacity: isMobile ? [0.2, 0.35, 0.2] : [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: isMobile ? 14 : 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className={`absolute ${
          isMobile
            ? "w-[200px] h-[200px] blur-[70px]"
            : "w-[280px] h-[280px] blur-[110px]"
        } rounded-full bg-[#c9a96e]/10 pointer-events-none`}
      />
      <motion.div
        animate={{
          opacity: isMobile ? [0.3, 0.6, 0.3] : [0.3, 0.8, 0.3],
          scale: isMobile ? [0.9, 1.05, 0.9] : [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#c9a96e]"
      />
      <motion.div
        animate={{
          opacity: isMobile ? [0.3, 0.6, 0.3] : [0.3, 0.8, 0.3],
          scale: isMobile ? [1, 0.95, 1] : [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-[25%] right-[18%] w-1.5 h-1.5 rounded-full bg-[#c9a96e]"
      />
      <motion.div
        initial={{
          opacity: 0,
          y: 50,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.35,
        }}
        transition={{
          duration: isMobile ? 1 : 1.3,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="relative z-10 max-w-2xl text-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          whileInView={{
            opacity: 1,
            scaleX: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.9,
            delay: 0.2,
          }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-12 md:w-16 h-px bg-[#c9a96e]/40" />
          <motion.span
            animate={
              isMobile
                ? {
                    opacity: [0.6, 1, 0.6],
                  }
                : {
                    rotate: [0, 180, 360],
                  }
            }
            transition={{
              duration: isMobile ? 3 : 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-[#c9a96e] text-sm"
          >
            ✦
          </motion.span>
          <span className="w-12 md:w-16 h-px bg-[#c9a96e]/40" />
        </motion.div>
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.35,
          }}
          className="text-sm tracking-[0.3em] text-[#9c7b42] mb-8"
        >
          වසර දොළහක් පුරාවට...
        </motion.p>
        <motion.h2
          initial={{
            opacity: 0,
            y: 25,
            filter: "blur(8px)",
          }}
          whileInView={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: isMobile ? 1 : 1.3,
            delay: 0.5,
          }}
          className="text-4xl md:text-6xl font-serif leading-tight"
        >
          මතකයන් එකතු වූ
          <br />
          අපේ කතාව...
        </motion.h2>
        <motion.div
          initial={{
            width: 0,
            opacity: 0,
          }}
          whileInView={{
            width: "64px",
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
            delay: 0.8,
          }}
          className="h-px bg-[#c9a96e] mx-auto my-10"
        />
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
            duration: 0.9,
            delay: 1,
          }}
          className="text-base md:text-lg leading-8 text-black/60"
        >
          කාලය ගෙවී ගියත්...
          <br />
          අපේ ආදරය තව තවත් සුන්දර විය.
        </motion.p>
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
            delay: isMobile ? 1.4 : 1.6,
            duration: 0.8,
          }}
          className="mt-20"
        >
          <p className="text-[10px] tracking-[0.25em] text-black/30 mb-4">
            මතකයන්
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
            className="text-[#9c7b42] text-xl"
          >
            ↓
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
