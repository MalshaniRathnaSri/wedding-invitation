"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f1e3ce] text-[#4a2c17]">
      <motion.div
        style={{ scale: backgroundScale }}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={
            isMobile
              ? {
                  opacity: [0.12, 0.18, 0.12],
                }
              : {
                  scale: [1, 1.15, 0.95, 1],
                  opacity: [0.12, 0.2, 0.14, 0.12],
                }
          }
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#8f5d1d] ${
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
                opacity: [0.06, 0.12, 0.08, 0.06],
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-20 -left-20 w-[350px] h-[350px] rounded-full bg-[#8f5d1d] blur-[130px]"
            />

            <motion.div
              animate={{
                x: [0, -100, 50, 0],
                y: [0, -60, 30, 0],
                scale: [1, 0.9, 1.15, 1],
                opacity: [0.05, 0.1, 0.06, 0.05],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -bottom-32 -right-20 w-[400px] h-[400px] rounded-full bg-[#8f5d1d] blur-[150px]"
            />

            <motion.div
              animate={{
                x: [0, 80, 0],
                opacity: [0.03, 0.07, 0.03],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-[35%] -right-40 w-[300px] h-[500px] rounded-full bg-[#a8752a] blur-[160px]"
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
                opacity: isLarge ? [0, 0.2, 0.45, 0] : [0, 0.35, 0.65, 0],
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
                  ? "absolute rounded-full bg-[#b87924] blur-[4px]"
                  : "absolute rounded-full bg-[#b87924]"
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
                opacity: 0.15,
                scale: 1,
              }
            : {
                opacity: 0.18,
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
        className={`absolute rounded-full border border-[#8f5d1d]/70 pointer-events-none ${
          isMobile ? "w-[400px] h-[400px]" : "w-[600px] h-[600px]"
        }`}
      />

      {!isMobile && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.12 }}
          transition={{
            duration: 3,
            delay: 2,
          }}
          className="absolute w-[750px] h-[750px] rounded-full border border-[#8f5d1d]/55 pointer-events-none"
        />
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 left-0 w-10 h-px bg-[#b87924]/50" />
        <div className="absolute top-0 left-0 h-10 w-px bg-[#b87924]/50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute top-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute top-0 right-0 w-10 h-px bg-[#b87924]/50" />
        <div className="absolute top-0 right-0 h-10 w-px bg-[#b87924]/50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-6 left-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 left-0 w-10 h-px bg-[#b87924]/50" />
        <div className="absolute bottom-0 left-0 h-10 w-px bg-[#b87924]/50" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-6 right-6 w-16 h-16 pointer-events-none"
      >
        <div className="absolute bottom-0 right-0 w-10 h-px bg-[#b87924]/50" />
        <div className="absolute bottom-0 right-0 h-10 w-px bg-[#b87924]/50" />
      </motion.div>

      <motion.div
        style={{
          y: contentY,
          opacity: contentOpacity,
        }}
        className="relative z-10 w-full max-w-3xl mx-auto px-6 pt-20 pb-28 text-center"
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
            duration: 1.0,
            delay: 0.3,
          }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <span className="w-16 h-px bg-[#b87924]/60" />

          <motion.span
            animate={{
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              ease: "linear",
            }}
            className="text-[#A8874F] text-sm"
          >
            ✦
          </motion.span>

          <span className="w-16 h-px bg-[#b87924]/60" />
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
            duration: 1.3,
            delay: 0.8,
            ease: "easeOut",
          }}
        >
          <p className="text-lg md:text-2xl leading-relaxed text-[#8D7041]">
            දොළොස් වසරක් පුරා නිහඬව ලියැවුණු
            <br />
            අපේ ආදර කතාව.....
          </p>
        </motion.div>

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
              duration: 1.2,
              delay: 2.3,
            }}
            className="text-5xl md:text-7xl font-serif tracking-wide text-[#4a2c17]"
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
              duration: 0.7,
              delay: 3.1,
            }}
            className="my-3 text-xl md:text-2xl text-[#A8874F]"
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
              duration: 1.2,
              delay: 3.5,
            }}
            className="text-5xl md:text-7xl font-serif tracking-wide text-[#4a2c17]"
          >
            නිපුන
          </motion.h1>
        </div>

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
            duration: 1.0,
            delay: 4.5,
          }}
          className="h-px bg-[#b87924]/60 mx-auto mt-10"
        />

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
            duration: 1.0,
            delay: 4.9,
          }}
          className="flex items-center justify-center gap-4 mt-8"
        >
          <span className="w-10 h-px bg-[#b87924]/50" />

          <motion.span
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 2,
            }}
            className="text-[10px] text-[#A8874F]/80"
          >
            <Image
              src="/images/wedding-couple.png"
              alt="Nipuna & Nipuni wedding logo"
              width={600}
              height={600}
              priority
              className="w-32 md:w-48 h-auto"
            />
          </motion.span>

          <span className="w-10 h-px bg-[#b87924]/50" />
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
          delay: 6.2,
          duration: 0.8,
        }}
        className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center"
      >
        <motion.div
          animate={{
            y: [0, 8, 0],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-[#A8874F] text-xl"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
