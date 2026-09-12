"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function HeroSection() {
  const { scrollY } = useScroll();
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

  const backgroundScale = useTransform(
    scrollY,
    [0, 600],
    isMobile ? [1, 1.04] : [1, 1.12],
  );
  const contentY = useTransform(
    scrollY,
    [0, 500],
    isMobile ? [0, -50] : [0, -120],
  );
  const contentOpacity = useTransform(scrollY, [0, 380], [1, 0]);
  const particleCount = isMobile ? 8 : 22;
  const particles = Array.from({ length: particleCount });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#090909] text-[#f5f1e8]">
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={
            isMobile
              ? {
                  opacity: [0.15, 0.2, 0.15],
                }
              : {
                  scale: [1, 1.15, 0.95, 1],
                  opacity: [0.15, 0.25, 0.18, 0.15],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e] ${
            isMobile
              ? "w-[300px] h-[300px] blur-[100px]"
              : "w-[420px] h-[420px] blur-[150px]"
          }`}
        />
        {!isMobile && (
          <>
            <motion.div
              animate={{
                x: [0, 100, -50, 0],
                y: [0, 60, -30, 0],
                scale: [1, 1.2, 0.9, 1],
                opacity: [0.08, 0.16, 0.1, 0.08],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#c9a96e] blur-[130px]"
            />
            <motion.div
              animate={{
                x: [0, -100, 50, 0],
                y: [0, -60, 30, 0],
                scale: [1, 0.9, 1.15, 1],
                opacity: [0.06, 0.13, 0.08, 0.06],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-[#c9a96e] blur-[150px]"
            />
            <motion.div
              animate={{
                x: [0, 80, 0],
                opacity: [0.03, 0.08, 0.03],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[35%] -right-40 w-[300px] h-[500px] rounded-full bg-[#e0bd7d] blur-[160px]"
            />
          </>
        )}
      </motion.div>
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {particles.map((_, index) => {
          const left = `${(index * 37) % 100}%`;
          const bottom = `${(index * 19) % 100}%`;
          const isLarge = index % 4 === 0;
          return (
            <motion.span
              key={index}
              initial={{
                opacity: 0,
                y: 30,
                scale: 0.4,
              }}
              animate={{
                opacity: isLarge ? [0, 0.25, 0.7, 0] : [0, 0.5, 1, 0],
                y: [30, -80 - (index % 4) * 40, -180 - (index % 5) * 50],
                x: [0, index % 2 === 0 ? 20 : -20, index % 2 === 0 ? -15 : 15],
                scale: isLarge ? [0.6, 1.5, 2.2] : [0.5, 1.2, 0.4],
              }}
              transition={{
                duration: isLarge ? 8 + (index % 4) : 5 + (index % 5),
                repeat: Infinity,
                delay: index * 0.35,
                ease: "easeOut",
              }}
              className={
                isLarge
                  ? "absolute rounded-full bg-[#c9a96e] blur-[4px]"
                  : "absolute rounded-full bg-[#c9a96e]"
              }
              style={{
                left,
                bottom,
                width: isLarge ? "10px" : "3px",
                height: isLarge ? "10px" : "3px",
              }}
            />
          );
        })}
      </div>
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.8,
        }}
        animate={
          isMobile
            ? {
                opacity: 0.1,
                scale: 1,
              }
            : {
                opacity: 0.12,
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 5, 0],
              }
        }
        transition={
          isMobile
            ? {
                duration: 2,
              }
            : {
                opacity: {
                  duration: 2,
                  delay: 1,
                },
                scale: {
                  duration: 15,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        className={`absolute rounded-full border border-[#c9a96e]/20 pointer-events-none ${
          isMobile ? "w-[400px] h-[400px]" : "w-[600px] h-[600px]"
        }`}
      />
      {!isMobile && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 0.08,
          }}
          transition={{
            duration: 3,
            delay: 2,
          }}
          className="absolute w-[750px] h-[750px] rounded-full border border-[#c9a96e]/10 pointer-events-none"
        />
      )}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-10 h-px bg-[#c9a96e]/30" />
        <div className="absolute top-0 left-0 h-10 w-px bg-[#c9a96e]/30" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-10 h-px bg-[#c9a96e]/30" />
        <div className="absolute top-0 right-0 h-10 w-px bg-[#c9a96e]/30" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-10 h-px bg-[#c9a96e]/30" />
        <div className="absolute bottom-0 left-0 h-10 w-px bg-[#c9a96e]/30" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 1 }}
        className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 right-0 w-10 h-px bg-[#c9a96e]/30" />
        <div className="absolute bottom-0 right-0 h-10 w-px bg-[#c9a96e]/30" />
      </motion.div>
      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 text-center"
      >
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1.3,
            delay: 0.5,
          }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-16 h-px bg-[#c9a96e]/40" />
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
          <span className="w-16 h-px bg-[#c9a96e]/40" />
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
            filter: "blur(8px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.5,
            delay: 1,
            ease: "easeOut",
          }}
        >
          <p className="text-lg md:text-2xl leading-relaxed text-[#c9a96e]">
            සෑම ආදර කතාවකටම
            <br />
            සුන්දර ආරම්භයක් ඇත...
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            width: 0,
          }}
          animate={{
            opacity: 1,
            width: "80px",
          }}
          transition={{
            duration: 1.2,
            delay: 2,
          }}
          className="h-px bg-[#c9a96e]/40 mx-auto mt-10"
        />
        <motion.p
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 2.7,
          }}
          className="mt-10 text-sm md:text-base text-white/50"
        >
          අපේ කතාවට
        </motion.p>
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.65,
            filter: "blur(20px)",
          }}
          animate={{
            opacity: 1,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 1.8,
            delay: 3.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative mt-2"
        >
          <motion.div
            animate={
              isMobile
                ? {
                    opacity: [0.2, 0.3, 0.2],
                  }
                : {
                    scale: [1, 1.25, 1],
                    opacity: [0.2, 0.4, 0.2],
                  }
            }
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e] ${
              isMobile ? "w-28 h-28 blur-[50px]" : "w-36 h-36 blur-[80px]"
            }`}
          />
          <span className="relative text-[100px] md:text-[150px] leading-none font-serif text-[#c9a96e] tracking-tight">
            12
          </span>
        </motion.div>
        <motion.p
          initial={{
            opacity: 0,
            letterSpacing: "0em",
          }}
          animate={{
            opacity: 1,
            letterSpacing: "0.35em",
          }}
          transition={{
            duration: 1.5,
            delay: 4.3,
          }}
          className="text-xs md:text-sm text-white/40"
        >
          වසර දොළහකට පෙර
        </motion.p>
        <motion.p
          initial={{
            opacity: 0,
            y: 10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
            delay: 5,
          }}
          className="mt-8 text-xs tracking-[0.6em] text-white/30"
        >
          2014
        </motion.p>
        <div className="mt-8">
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              delay: 5.4,
            }}
            className="text-5xl md:text-7xl font-serif tracking-wide"
          >
            නිපුනි
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0,
              rotate: -30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: 6.2,
            }}
            className="my-3 text-xl md:text-2xl text-[#c9a96e]"
          >
            &
          </motion.div>
          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
              filter: "blur(10px)",
            }}
            animate={{
              opacity: 1,
              y: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1.4,
              delay: 6.5,
            }}
            className="text-5xl md:text-7xl font-serif tracking-wide"
          >
            නිපුන
          </motion.h1>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1.4,
            delay: 7.6,
          }}
          className="mt-10"
        >
          <p className="text-sm md:text-base leading-8 text-white/50">
            වසර දොළහක ආදරයක්...
            <br />
            සදාකාලික බැඳීමක්...
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            scaleX: 0,
          }}
          animate={{
            opacity: 1,
            scaleX: 1,
          }}
          transition={{
            duration: 1.2,
            delay: 8.2,
          }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <span className="w-10 h-px bg-[#c9a96e]/30" />
          <motion.span
            animate={{
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            className="text-[10px] text-[#c9a96e]/60"
          >
            ✦
          </motion.span>
          <span className="w-10 h-px bg-[#c9a96e]/30" />
        </motion.div>
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          delay: 9,
          duration: 1,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <p className="text-[10px] tracking-[0.25em] text-white/30 mb-3">
          අපේ කතාව
        </p>
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.35, 1, 0.35],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#c9a96e] text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
