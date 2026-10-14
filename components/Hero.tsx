"use client";

import React from "react";
import { Play } from "lucide-react";

interface HeroProps {
  onUnlockClick: () => void;
  onWatchVideoClick: () => void;
}

export default function Hero({ onUnlockClick, onWatchVideoClick }: HeroProps) {
  return (
    <section className="relative pt-32 pb-14 sm:pt-36 sm:pb-16 overflow-hidden radial-hero-glow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">
        {/* Pill Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#181a20]/90 border border-white/10 text-xs sm:text-sm text-neutral-300 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-[#ff7a45] animate-pulse" />
          <span>Not another generic job-search course</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif text-white tracking-tight leading-[1.1] mb-6">
          The best job opportunities
          <span className="block mt-1 sm:mt-2 font-serif italic text-[#fba584]">
            aren&apos;t always posted.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="max-w-2xl mx-auto text-base sm:text-xl text-neutral-400 font-normal leading-relaxed mb-8">
          Discover a smarter way to find opportunities beyond traditional job
          boards, reach decision-makers, and create more ways to get hired.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-10">
          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#17181d] border border-white/10 text-xs sm:text-sm text-neutral-100 font-medium shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-[#1d1f25]">
            <span className="relative flex items-center justify-center shrink-0">
              <span className="absolute w-4 h-4 rounded-full bg-[#ff7a45]/40 blur-[3px]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#ff7a45] shadow-[0_0_8px_#ff7a45]" />
            </span>
            <span>8 weeks</span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#17181d] border border-white/10 text-xs sm:text-sm text-neutral-100 font-medium shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-[#1d1f25]">
            <span className="relative flex items-center justify-center shrink-0">
              <span className="absolute w-4 h-4 rounded-full bg-[#ff7a45]/40 blur-[3px]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#ff7a45] shadow-[0_0_8px_#ff7a45]" />
            </span>
            <span>Weekly live coaching</span>
          </div>

          <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#17181d] border border-white/10 text-xs sm:text-sm text-neutral-100 font-medium shadow-sm backdrop-blur-sm transition-all duration-200 hover:border-white/20 hover:bg-[#1d1f25]">
            <span className="relative flex items-center justify-center shrink-0">
              <span className="absolute w-4 h-4 rounded-full bg-[#ff7a45]/40 blur-[3px]" />
              <span className="relative w-2.5 h-2.5 rounded-full bg-[#ff7a45] shadow-[0_0_8px_#ff7a45]" />
            </span>
            <span>Hands-on implementation</span>
          </div>
        </div>

        {/* Video Mockup Window (VSL) */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-2xl border border-white/10 bg-[#14161c] overflow-hidden shadow-2xl shadow-black/80">
            {/* Window Titlebar */}
            <div className="px-4 py-3 border-b border-white/5 flex items-center justify-between bg-[#101217]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
              </div>
              <span className="text-xs text-neutral-400 font-medium tracking-wide">
                Watch this first
              </span>
              <div className="w-10" />
            </div>

            {/* Video Player Area */}
            <div
              onClick={onWatchVideoClick}
              className="relative aspect-video w-full bg-gradient-to-b from-[#15171f] via-[#0f1116] to-[#0a0b0e] flex flex-col items-center justify-center group cursor-pointer overflow-hidden"
            >
              {/* Subtle ambient circle glow */}
              <div className="absolute inset-0 bg-radial from-[#ff7a45]/10 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity" />

              {/* Play Button */}
              <div className="relative z-10 w-18 h-18 sm:w-20 sm:h-20 rounded-full bg-[#ff7a45] flex items-center justify-center text-[#0b0c0e] shadow-[0_0_35px_rgba(255,122,69,0.45)] group-hover:scale-110 group-hover:bg-[#ff8f5e] transition-all duration-300">
                <Play
                  size={28}
                  className="fill-current translate-x-0.5 text-[#0b0c0e]"
                />
              </div>

              {/* Bottom prompt */}
              <div className="absolute bottom-4 sm:bottom-6 text-xs sm:text-sm text-neutral-400 group-hover:text-neutral-200 transition-colors">
                Click to watch introduction (3:12)
              </div>
            </div>
          </div>
        </div>

        {/* Main CTA */}
        <div className="flex flex-col items-center justify-center mt-10 sm:mt-12">
          <button
            onClick={onUnlockClick}
            className="btn-tempting px-8 py-4 sm:px-10 sm:py-4.5 rounded-xl font-semibold text-base sm:text-lg text-[#0b0c0e] bg-[#ff7a45] hover:bg-[#ff8f5e] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Unlock the Hidden Job Market
            </span>
          </button>
          <span className="text-xs sm:text-sm text-neutral-500 mt-3 font-normal">
            A smarter way to find your next job.
          </span>
        </div>
      </div>
    </section>
  );
}
