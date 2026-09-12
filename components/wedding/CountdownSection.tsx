"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const weddingDate = new Date("2027-01-15T09:05:00+05:30").getTime();
function calculateTimeLeft(): TimeLeft {
  const difference = weddingDate - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor(
      (difference / (1000 * 60 * 60)) % 24
    ),
    minutes: Math.floor(
      (difference / (1000 * 60)) % 60
    ),
    seconds: Math.floor(
      (difference / 1000) % 60
    ),
  };
}

export default function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    setTimeLeft(calculateTimeLeft());
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const countdownItems = [
    {
      value: timeLeft.days,
      label: "දින",
    },
    {
      value: timeLeft.hours,
      label: "පැය",
    },
    {
      value: timeLeft.minutes,
      label: "මිනිත්තු",
    },
    {
      value: timeLeft.seconds,
      label: "තත්පර",
    },
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#090909] px-6 py-24 text-[#f5f1e8] md:px-12">
      <motion.div
        className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c9a96e]/10 blur-3xl"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -left-40 top-20 h-80 w-80 rounded-full border border-[#c9a96e]/15"
        animate={{ rotate: 360 }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute -right-40 bottom-20 h-80 w-80 rounded-full border border-[#c9a96e]/15"
        animate={{ rotate: -360 }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-[75vh] max-w-5xl flex-col items-center justify-center text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-xs tracking-[0.35em] text-[#c9a96e]"
        >
          අපේ විශේෂ දවසට
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="text-4xl font-light leading-tight md:text-6xl"
        >
          තවත් සුළු මොහොතක්...
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mt-10"
        >
          <p className="text-6xl font-light tracking-widest text-[#c9a96e] md:text-8xl">
            15
          </p>
          <p className="mt-2 text-sm tracking-[0.45em] text-[#d7d0c3] md:text-base">
            ජනවාරි 2027
          </p>
        </motion.div>
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 80, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="my-12 h-px bg-[#c9a96e]"
        />
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="grid w-full max-w-3xl grid-cols-2 gap-5 md:grid-cols-4 md:gap-8"
        >
          {countdownItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: 0.6 + index * 0.1,
              }}
              className="border border-[#c9a96e]/20 bg-[#11110f]/60 px-4 py-7 backdrop-blur-sm"
            >
              <p className="text-3xl font-light text-[#f5f1e8] md:text-4xl">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="mt-3 text-xs tracking-[0.2em] text-[#c9a96e]">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-14"
        >
          <p className="text-lg leading-loose text-[#d7d0c3] md:text-xl">
            වසර දොළහක ආදරයකින්
            <br />
            සදාකාලික බැඳීමකට...
          </p>
          <p className="mt-6 text-sm tracking-[0.3em] text-[#c9a96e]">
            නිපුනි & නිපුන
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-16 flex flex-col items-center gap-3 text-[#c9a96e]"
        >
          <span className="text-xs tracking-[0.3em]">
            ආදරයෙන් ඇරයුම්
          </span>
          <motion.span
            animate={{ y: [0, 7, 0] }}
            transition={{
              duration: 1.8,
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