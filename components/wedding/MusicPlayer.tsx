"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function MusicPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    audio.loop = true;
    audio.volume = 0.35;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);

    audio.addEventListener("play", handlePlay);
    audio.addEventListener("pause", handlePause);

    // Try autoplay
    audio.play().catch(() => {
      // Browser blocked autoplay.
      // We will try again after the user's first interaction.
    });

    const startMusicAfterInteraction = () => {
      audio.play().catch(() => {});
    };

    document.addEventListener("click", startMusicAfterInteraction, {
      once: true,
    });

    document.addEventListener("touchstart", startMusicAfterInteraction, {
      once: true,
    });

    document.addEventListener("keydown", startMusicAfterInteraction, {
      once: true,
    });

    return () => {
      audio.removeEventListener("play", handlePlay);
      audio.removeEventListener("pause", handlePause);

      document.removeEventListener("click", startMusicAfterInteraction);
      document.removeEventListener("touchstart", startMusicAfterInteraction);
      document.removeEventListener("keydown", startMusicAfterInteraction);
    };
  }, []);

  const toggleMusic = async () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (audio.paused) {
      try {
        await audio.play();
      } catch (error) {
        console.log("Music could not be played:", error);
      }
    } else {
      audio.pause();
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/audio/wedding.mp3"
        autoPlay
        loop
        preload="auto"
      />

      <motion.button
        onClick={toggleMusic}
        aria-label={isPlaying ? "Pause music" : "Play music"}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.92 }}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-[#c9a96e]/60 bg-[#090909]/90 text-[#c9a96e] shadow-lg backdrop-blur-md"
      >
        {isPlaying ? (
          <span className="text-lg">♫</span>
        ) : (
          <span className="text-sm">♪</span>
        )}

        {isPlaying && (
          <motion.span
            className="absolute inset-0 rounded-full border border-[#c9a96e]/30"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.8, 0, 0.8],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
        )}
      </motion.button>
    </>
  );
}