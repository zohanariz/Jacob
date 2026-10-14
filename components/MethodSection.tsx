"use client";

import React from "react";

interface MethodSectionProps {
  onUnlockClick: () => void;
}

export default function MethodSection({ onUnlockClick }: MethodSectionProps) {
  return (
    <section id="method" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
            THE METHOD
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.15]">
            Find it. Target it.{" "}
            <span className="font-serif italic text-[#fba584]">
              Connect. Get found.
            </span>
          </h2>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10 sm:mb-12">
          {/* Card 1: Find */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl group">
            {/* Visual Header */}
            <div className="h-32 rounded-xl bg-[#0e1014] p-4 flex flex-col justify-center gap-3 border border-white/5 mb-6">
              <div className="w-16 h-2 rounded-full bg-white/10" />
              <div className="w-full h-2.5 rounded-full bg-gradient-to-r from-[#ff7a45] to-[#fba584]" />
              <div className="text-[11px] text-neutral-400 mt-1">
                Job boards vs. the hidden market
              </div>
            </div>

            <div>
              <span className="text-sm font-mono text-[#ff7a45] block mb-1">
                1
              </span>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#fba584] transition-colors">
                Find
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Discover opportunities beyond traditional job boards.
              </p>
            </div>
          </div>

          {/* Card 2: Target */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl group">
            {/* Visual Header */}
            <div className="h-32 rounded-xl bg-[#0e1014] p-3 flex flex-col justify-center gap-2 border border-white/5 mb-6">
              <div className="px-3 py-1.5 rounded-md bg-[#161820] text-[11px] text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                <span>Recruiter</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#1e1717] border border-[#ff7a45]/40 text-[11px] text-[#fba584] font-medium flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#ff7a45]" />
                <span>Hiring manager</span>
              </div>
              <div className="px-3 py-1.5 rounded-md bg-[#161820] text-[11px] text-neutral-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-600" />
                <span>Applicant portal</span>
              </div>
            </div>

            <div>
              <span className="text-sm font-mono text-[#ff7a45] block mb-1">
                2
              </span>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#fba584] transition-colors">
                Target
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Find the people who can actually make hiring decisions.
              </p>
            </div>
          </div>

          {/* Card 3: Connect */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl group">
            {/* Visual Header */}
            <div className="h-32 rounded-xl bg-[#0e1014] p-3 flex flex-col justify-center gap-2 border border-white/5 mb-6">
              <div className="self-start px-3 py-1.5 rounded-xl rounded-tl-sm bg-[#161820] text-[11px] text-neutral-300">
                Introduction made
              </div>
              <div className="self-end px-3 py-1.5 rounded-xl rounded-tr-sm bg-[#221815] border border-[#ff7a45]/30 text-[11px] text-[#fba584]">
                In the right conversation
              </div>
            </div>

            <div>
              <span className="text-sm font-mono text-[#ff7a45] block mb-1">
                3
              </span>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#fba584] transition-colors">
                Connect
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Get yourself in front of the right people.
              </p>
            </div>
          </div>

          {/* Card 4: Get found */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl group">
            {/* Visual Header */}
            <div className="h-32 rounded-xl bg-[#0e1014] p-3 flex items-center gap-3 border border-white/5 mb-6">
              <div className="w-10 h-10 rounded-full bg-[#1e2129] flex-shrink-0" />
              <div className="space-y-1">
                <div className="text-xs font-medium text-white">Your profile</div>
                <div className="text-[11px] text-[#ff7a45]">
                  Open to opportunities
                </div>
              </div>
            </div>

            <div>
              <span className="text-sm font-mono text-[#ff7a45] block mb-1">
                4
              </span>
              <h3 className="text-2xl font-serif text-white mb-2 group-hover:text-[#fba584] transition-colors">
                Get found
              </h3>
              <p className="text-sm text-neutral-400 leading-relaxed">
                Position your skills so opportunities can find you.
              </p>
            </div>
          </div>
        </div>

        {/* Section CTA */}
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
    </section>
  );
}
