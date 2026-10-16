"use client";

import { motion } from "framer-motion";
import { FormEvent, useEffect, useState } from "react";

type Wish = {
  id: number;
  name: string;
  message: string;
  attending: boolean;
  count?: number;
};

export default function RSVPSection() {
  const [response, setResponse] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  const [name, setName] = useState("");
  const [count, setCount] = useState("1");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [wishes, setWishes] = useState<Wish[]>([]);

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

  const handleSelect = (value: "yes" | "no") => {
    setResponse(value);
    setSubmitted(false);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !response) return;

    setWishes((prev) => [
      {
        id: Date.now(),
        name: name.trim(),
        message: message.trim(),
        attending: response === "yes",
        count: response === "yes" ? Number(count) : undefined,
      },
      ...prev,
    ]);
    setSubmitted(true);
    setName("");
    setMessage("");
    setCount("1");
  };

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
          transition={{ duration: isMobile ? 0.6 : 0.8 }}
          className="mb-6 text-xs tracking-[0.35em] text-[#d6ad62]"
        >
          එදින,
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: isMobile ? 15 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.7 : 0.9 }}
          className="text-2xl font-light leading-tight text-[#e6c27a] md:text-4xl"
        >
          ඔබත් අප සමඟ එකතුවන්න.
        </motion.h2>

        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: 70, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.2 }}
          className="my-9 h-px bg-[#d6ad62]/70"
        />

        <motion.p
          initial={{ opacity: 0, y: isMobile ? 15 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.7 : 0.9, delay: 0.3 }}
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
          transition={{ duration: isMobile ? 0.6 : 0.8, delay: 0.4 }}
          className="mt-12 max-w-md text-sm leading-loose tracking-[0.04em] text-[#e6c27a] md:text-base"
        >
          ඔබගේ පැමිණීම මෙහි සඳහන් කරන මෙන් කාරුණිකව ඉල්ලා සිටිමි
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: isMobile ? 18 : 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.7 : 0.9, delay: 0.5 }}
          className="mt-12 flex w-full max-w-md flex-col gap-4 sm:flex-row"
        >
          <button
            onClick={() => handleSelect("yes")}
            className={`flex-1 border px-6 py-4 text-sm tracking-[0.12em] transition-all duration-300 ${
              response === "yes"
                ? "border-[#d6ad62] bg-[#d6ad62] text-[#4a2c17]"
                : "border-[#d6ad62] text-[#e6c27a] hover:bg-[#d6ad62] hover:text-[#4a2c17]"
            }`}
          >
            සහභාගී වෙමි
          </button>

          <button
            onClick={() => handleSelect("no")}
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
            key={response}
            initial={{ opacity: 0, y: isMobile ? 10 : 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.5 : 0.6 }}
            className="mt-10 w-full max-w-md"
          >
            {submitted ? (
              <div className="border border-[#d6ad62]/40 bg-[#f6ead8]/5 px-6 py-8 backdrop-blur-sm">
                <p className="text-base leading-8 text-[#e6c27a]">
                  {response === "yes"
                    ? "ඔබගේ පැමිණීම අපට මහත් සතුටකි. 🤍"
                    : "ඔබගේ ආදරය සහ සුබ පැතුම් අපට සදා වටිනා ය."}
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs tracking-widest text-[#d6ad62] underline-offset-4 hover:underline"
                >
                  තවත් පණිවිඩයක් එක් කරන්න
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 border border-[#d6ad62]/40 bg-[#f6ead8]/5 p-6 text-left backdrop-blur-sm"
              >
                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-widest text-[#d6ad62]">
                    ඔබගේ නම
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    maxLength={40}
                    className="border border-[#d6ad62]/40 bg-transparent px-4 py-3 text-sm text-[#f6ead8] outline-none transition-colors placeholder:text-[#f6ead8]/30 focus:border-[#e6c27a]"
                    placeholder="නම ඇතුළත් කරන්න"
                  />
                </label>

                {response === "yes" && (
                  <label className="flex flex-col gap-2">
                    <span className="text-xs tracking-widest text-[#d6ad62]">
                      සහභාගී වන සංඛ්‍යාව
                    </span>
                    <div className="relative">
                      <select
                        value={count}
                        onChange={(e) => setCount(e.target.value)}
                        className="w-full appearance-none border border-[#d6ad62]/40 bg-[#4a2c17] px-4 py-3 pr-10 text-sm text-[#f6ead8] outline-none transition-colors focus:border-[#e6c27a]"
                      >
                        {[1, 2, 3, 4, 5, 6].map((n) => (
                          <option key={n} value={n} className="bg-[#4a2c17]">
                            {n} දෙනෙක්
                          </option>
                        ))}
                      </select>
                      <svg
                        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#d6ad62]"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M6 9l6 6 6-6" />
                      </svg>
                    </div>
                  </label>
                )}

                <label className="flex flex-col gap-2">
                  <span className="text-xs tracking-widest text-[#d6ad62]">
                    ඔබගේ පණිවිඩය
                  </span>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={4}
                    maxLength={300}
                    className="resize-none border border-[#d6ad62]/40 bg-transparent px-4 py-3 text-sm leading-7 text-[#f6ead8] outline-none transition-colors placeholder:text-[#f6ead8]/30 focus:border-[#e6c27a]"
                    placeholder="අපට සුබ පැතුමක් ලියන්න..."
                  />
                  <span className="text-right text-[10px] text-[#f6ead8]/40">
                    {message.length}/300
                  </span>
                </label>

                <button
                  type="submit"
                  className="bg-[#d6ad62] px-6 py-3 text-sm tracking-[0.15em] text-[#3a2010] transition-all duration-300 hover:bg-[#e6c27a]"
                >
                  යවන්න
                </button>
              </form>
            )}
          </motion.div>
        )}

        {wishes.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 w-full max-w-md text-left"
          >
            <p className="mb-4 text-center text-xs tracking-[0.35em] text-[#d6ad62]">
              සුබ පැතුම්
            </p>
            <div className="flex max-h-80 flex-col gap-3 overflow-y-auto pr-1">
              {wishes.map((w) => (
                <div
                  key={w.id}
                  className="border border-[#d6ad62]/30 bg-[#f6ead8]/5 px-5 py-4"
                >
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-sm text-[#e6c27a]">{w.name}</p>
                    {w.attending && (
                      <span className="shrink-0 text-[11px] tracking-wider text-[#d6ad62]/80">
                        {w.count} දෙනෙක්
                      </span>
                    )}
                  </div>
                  {w.message && (
                    <p className="mt-2 text-sm leading-7 text-[#f6ead8]/75">
                      {w.message}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: isMobile ? 0.8 : 1, delay: 1 }}
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