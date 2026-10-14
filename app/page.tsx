"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SoundFamiliar from "@/components/SoundFamiliar";
import BetterWay from "@/components/BetterWay";
import AboutJacob from "@/components/AboutJacob";
import MethodSection from "@/components/MethodSection";
import ProgramInside from "@/components/ProgramInside";
import Testimonials from "@/components/Testimonials";
import Qualification from "@/components/Qualification";
import CtaBanner from "@/components/CtaBanner";
import FaqSection from "@/components/FaqSection";
import Footer from "@/components/Footer";
import UnlockModal from "@/components/UnlockModal";
import VideoModal from "@/components/VideoModal";

export default function Home() {
  const [unlockModalOpen, setUnlockModalOpen] = useState(false);
  const [videoModalOpen, setVideoModalOpen] = useState(false);

  const openUnlockModal = () => setUnlockModalOpen(true);
  const closeUnlockModal = () => setUnlockModalOpen(false);

  const openVideoModal = () => setVideoModalOpen(true);
  const closeVideoModal = () => setVideoModalOpen(false);

  return (
    <main className="min-h-screen bg-[#0b0c0e] text-[#f3f4f6] relative selection:bg-[#ff7a45] selection:text-[#0b0c0e]">
      {/* Navigation */}
      <Navbar onUnlockClick={openUnlockModal} />

      {/* Hero Section */}
      <Hero
        onUnlockClick={openUnlockModal}
        onWatchVideoClick={openVideoModal}
      />

      {/* Sound Familiar Section */}
      <SoundFamiliar />

      {/* A Better Way - Dashboard Preview */}
      <BetterWay />

      {/* About Jacob Levy */}
      <AboutJacob />

      {/* The 4-Step Method */}
      <MethodSection onUnlockClick={openUnlockModal} />

      {/* Everything You Get Inside */}
      <ProgramInside />

      {/* Testimonials & Results */}
      <Testimonials onUnlockClick={openUnlockModal} />

      {/* Who This Is (and Isn't) For */}
      <Qualification />

      {/* High-Impact CTA Banner */}
      <CtaBanner onUnlockClick={openUnlockModal} />

      {/* FAQ Section */}
      <FaqSection />

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <UnlockModal isOpen={unlockModalOpen} onClose={closeUnlockModal} />
      <VideoModal isOpen={videoModalOpen} onClose={closeVideoModal} />
    </main>
  );
}
