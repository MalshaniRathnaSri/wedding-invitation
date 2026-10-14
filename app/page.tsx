
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import InvitationIntro from "@/components/wedding/InvitationIntro";
import HeroSection from "@/components/wedding/HeroSection";
import StoryIntro from "@/components/wedding/StoryIntro";
import ParentsSection from "@/components/wedding/ParentsSection";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import CountdownSection from "@/components/wedding/CountdownSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FinalSection from "@/components/wedding/FinalSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";

export default function Home() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <AnimatePresence mode="wait" initial={false}>
      {!isInvitationOpen ? (
        <InvitationIntro
          key="invitation-intro"
          onOpen={() => setIsInvitationOpen(true)}
        />
      ) : (
        <motion.div
          key="wedding-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
        >
          <main className="min-h-screen overflow-hidden bg-[#f1e3ce] text-[#4a2c17]">
            <HeroSection />
            <StoryIntro />
            <ParentsSection />

            {/* Uncomment these sections when you want to display them */}
            {/* <MemorySection /> */}
            {/* <PreShootSection /> */}
            {/* <EmotionalTransition /> */}

            <WeddingDetails />
            <CountdownSection />
            <RSVPSection />
            <FinalSection />
          </main>

          <MusicPlayer />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
