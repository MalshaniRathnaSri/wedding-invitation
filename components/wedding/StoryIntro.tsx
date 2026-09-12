"use client";

import { motion } from "framer-motion";

export default function StoryIntro() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#f5f1e8] text-[#171512] px-6 overflow-hidden">
      <motion.div
        animate={{
          rotate: [0, 360],
        }}
        transition={{
          duration: 80,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[520px] h-[520px] rounded-full border border-[#c9a96e]/10 pointer-events-none"
      />
      <motion.div
        animate={{
          rotate: [360, 0],
        }}
        transition={{
          duration: 55,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute w-[360px] h-[360px] rounded-full border border-[#c9a96e]/[0.06] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute w-[280px] h-[280px] rounded-full bg-[#c9a96e]/10 blur-[110px]"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [0.8, 1.2, 0.8],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[20%] left-[18%] w-1.5 h-1.5 rounded-full bg-[#c9a96e]"
      />
      <motion.div
        animate={{
          opacity: [0.3, 0.8, 0.3],
          scale: [1.2, 0.8, 1.2],
        }}
        transition={{
          duration: 4,
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
          duration: 1.3,
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
            duration: 1,
            delay: 0.2,
          }}
          className="flex items-center justify-center gap-4 mb-10"
        >
          <span className="w-12 md:w-16 h-px bg-[#c9a96e]/40" />
          <motion.span
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
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
            duration: 1,
            delay: 0.4,
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
            duration: 1.3,
            delay: 0.6,
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
            duration: 1,
            delay: 1,
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
            duration: 1.1,
            delay: 1.2,
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
            delay: 1.8,
            duration: 1,
          }}
          className="mt-20"
        >
          <p className="text-[10px] tracking-[0.25em] text-black/30 mb-4">
            මතකයන්
          </p>
          <motion.div
            animate={{
              y: [0, 8, 0],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 1.8,
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