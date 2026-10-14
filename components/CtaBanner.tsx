"use client";

import React from "react";

interface CtaBannerProps {
  onUnlockClick: () => void;
}

export default function CtaBanner({ onUnlockClick }: CtaBannerProps) {
  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161822] via-[#12141a] to-[#0e1015] border border-white/10 p-8 sm:p-14 text-center overflow-hidden shadow-2xl">
          {/* Ambient Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff7a45]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-6">
              Stop chasing the same jobs as everyone else.{" "}
              <span className="font-serif italic text-[#fba584] block mt-2">
                Start finding opportunities others never see.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 font-normal leading-relaxed mb-4">
              You&apos;ve already tried applying. You&apos;ve already searched the job boards. You&apos;ve already sent the applications.
            </p>

            <p className="text-base sm:text-lg text-white font-medium mb-10">
              Now it&apos;s time to take a smarter approach and find the opportunity you&apos;ve been looking for.
            </p>

            <div className="flex flex-col items-center justify-center">
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
        </div>
      </div>
    </section>
  );
}
