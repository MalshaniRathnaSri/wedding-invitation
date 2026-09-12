"use client";
import HeroSection from "@/components/wedding/HeroSection";
import StoryIntro from "@/components/wedding/StoryIntro";
import MemorySection from "@/components/wedding/MemorySection";
import PreShootSection from "@/components/wedding/PreShootSection";
import EmotionalTransition from "@/components/wedding/EmotionalTransition";
import ParentsSection from "@/components/wedding/ParentsSection";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import CountdownSection from "@/components/wedding/CountdownSection";
import RSVPSection from "@/components/wedding/RSVPSection";
import FinalSection from "@/components/wedding/FinalSection";
import MusicPlayer from "@/components/wedding/MusicPlayer";

export default function Home() {
  return (
      <>
        <main className="bg-[#090909] text-[#f5f1e8] overflow-hidden">
          <HeroSection />
          <StoryIntro />
          <MemorySection />
          <PreShootSection />
          <EmotionalTransition />
          <ParentsSection />
          <WeddingDetails />
          <CountdownSection />
          <RSVPSection />
          <FinalSection />
        </main>
        <MusicPlayer />
      </>
  );
}
