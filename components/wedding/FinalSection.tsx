"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function FinalSection() {
  const reduce = useReducedMotion();
  const fadeUp = (delay: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-8% 0px" },
    transition: { duration: 0.9, delay, ease: "easeOut" as const },
  });

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f1e3ce] px-6 py-20 text-[#4a2c17] md:py-28">
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.p
          {...fadeUp(0)}
          className="max-w-md text-balance text-xl font-light leading-[2] text-[#4a2c17] md:max-w-xl md:text-2xl md:leading-[2.1]"
        >
          <span className="block">වසර ගණනක සොඳුරු මතක සමඟ</span>
          <span className="block">ජීවිතයේ අලුත් පරිච්ඡේදයේ මුල් පිටුව</span>
          <span className="block">ඔබත් සමඟ පෙරළීම අපට මහත් සතුටක්.......</span>
        </motion.p>

        <motion.div
          {...fadeUp(0.2)}
          className="my-10 flex items-center gap-3 md:my-14"
          aria-hidden="true"
        >
          <span className="h-px w-14 bg-[#8f5d1d]/70 md:w-20" />
          <span className="h-1.5 w-1.5 rotate-45 bg-[#8f5d1d]" />
          <span className="h-px w-14 bg-[#8f5d1d]/70 md:w-20" />
        </motion.div>

        <motion.div
          {...fadeUp(0.4)}
          className="relative flex aspect-square w-[min(300px,86vw)] items-center justify-center md:w-[500px]"
        >
          <motion.div
            className="absolute inset-[18%] rounded-full bg-[#8f5d1d]/15 blur-3xl"
            animate={
              reduce
                ? undefined
                : { scale: [1, 1.12, 1], opacity: [0.5, 0.9, 0.5] }
            }
            transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute inset-0 rounded-full border border-[#8f5d1d]/25"
            animate={reduce ? undefined : { rotate: 360 }}
            transition={{ duration: 70, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          <motion.div
            className="absolute left-1/2 top-1/2 aspect-square w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#8f5d1d]/35"
            animate={reduce ? undefined : { rotate: -360 }}
            transition={{ duration: 55, repeat: Infinity, ease: "linear" }}
            aria-hidden="true"
          />
          <h2 className="relative z-10 text-3xl font-light leading-[1.55] text-[#4a2c17] md:text-5xl md:leading-[1.5]">
            <span className="block">නිපුනි</span>
            <span className="block text-2xl text-[#8f5d1d] md:text-4xl">
              &amp;
            </span>
            <span className="block">නිපුන</span>
          </h2>
        </motion.div>
        <motion.div {...fadeUp(0.6)} className="mt-8 md:mt-10">
          <Image
            src="/images/wedding-couple.png"
            alt="Nipuni and Nipuna wedding logo"
            width={70}
            height={70}
            className="h-auto w-34 object-contain opacity-90 sm:w-36"
          />
        </motion.div>
        <motion.div
          {...fadeUp(0.8)}
          className="mt-8 flex flex-col items-center md:mt-10"
        >
          <span className="mb-4 h-8 w-px bg-[#8f5d1d]/50" aria-hidden="true" />
          <p className="text-xs tracking-[0.3em] text-[#8D7041]">
            නිපුනි &amp; නිපුන
          </p>
        </motion.div>
      </div>
    </section>
  );
}