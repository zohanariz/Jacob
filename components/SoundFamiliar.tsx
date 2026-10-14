"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function SoundFamiliar() {
  return (
    <section id="problem" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
            SOUND FAMILIAR
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-4">
            You&apos;re looking in the same places{" "}
            <span className="font-serif italic text-[#fba584]">
              as everyone else.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-xl mx-auto">
            You&apos;re working hard. The problem isn&apos;t effort. It&apos;s
            where you&apos;re looking.
          </p>
        </div>

        {/* Tags Cloud & Visual Stack */}
        <div className="flex flex-col items-center mb-14 sm:mb-16">
          {/* Row 1 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-3 sm:mb-3.5">
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm hover:border-white/15 transition-all">
              LinkedIn
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm hover:border-white/15 transition-all">
              Indeed
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm hover:border-white/15 transition-all">
              Job boards
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm hover:border-white/15 transition-all">
              Easy Apply
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#1a1413] border border-[#ff7a45]/40 text-[#fba584] font-medium shadow-sm transform rotate-1 hover:border-[#ff7a45]/60 transition-all">
              Resume tweaks
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm transform rotate-[3.5deg] hover:border-white/15 transition-all">
              Application portals
            </div>
          </div>

          {/* Row 2 */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-4 sm:mb-4.5">
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm transform -rotate-1 hover:border-white/15 transition-all">
              Hundreds of applicants
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm hover:border-white/15 transition-all">
              Another application
            </div>
            <div className="px-5 py-2.5 rounded-[14px] text-xs sm:text-sm bg-[#16171c] border border-white/5 text-neutral-300 font-medium shadow-sm transform rotate-2 hover:border-white/15 transition-all">
              Silence
            </div>
          </div>

          {/* Row 3 - The rejection badge */}
          <div className="mb-6 sm:mb-8">
            <div className="px-6 py-3 rounded-[14px] text-xs sm:text-sm font-medium bg-[#1c1414] border border-[#ff7a45]/40 text-[#fba584] shadow-sm transform rotate-[2.5deg] hover:border-[#ff7a45]/60 transition-all">
              We&apos;re moving forward with other candidates
            </div>
          </div>

          {/* 3D Illustration: The Job Board Search Trap */}
          <div className="w-full max-w-4xl mx-auto my-6 sm:my-8 px-2 sm:px-0">
            <div className="relative group">
              {/* Ambient Glow */}
              <div className="absolute -inset-1 bg-gradient-to-r from-[#ff7a45]/25 via-[#fba584]/15 to-[#ff7a45]/25 rounded-3xl blur-2xl opacity-60 group-hover:opacity-85 transition duration-500 pointer-events-none" />

              <div className="relative rounded-2xl sm:rounded-3xl border border-white/10 bg-[#0d0f14] overflow-hidden shadow-2xl shadow-black/90">
                <Image
                  src="/job-boards-illustration.png"
                  alt="Candidate overwhelmed by identical job boards"
                  width={1024}
                  height={512}
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.015]"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute inset-0 pointer-events-none rounded-2xl sm:rounded-3xl ring-1 ring-inset ring-white/10" />
              </div>
            </div>
          </div>

          {/* Rejection Notification Cards Stack */}
          <div className="w-full max-w-[580px] mx-auto pt-18 sm:pt-20 pb-2 px-3">
            <div className="relative group cursor-default">
              {/* Back Card: Talent Acquisition */}
              <div className="absolute inset-x-0 -top-18 sm:-top-20 mx-auto rounded-[20px] bg-[#121318]/90 border border-white/5 p-4 sm:p-5 shadow-lg transform -rotate-[3.2deg] -translate-x-2.5 scale-[0.96] opacity-40 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-[4deg] group-hover:opacity-60 select-none pointer-events-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#242630] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-neutral-300 truncate">
                        Talent Acquisition
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-500 font-normal ml-2">
                        Tue
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-500 truncate mt-0.5">
                      We&apos;re moving forward with other candidates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Middle Card: Recruiting */}
              <div className="absolute inset-x-0 -top-9 sm:-top-10 mx-auto rounded-[20px] bg-[#15161c]/95 border border-white/[0.08] p-4 sm:p-5 shadow-xl transform -rotate-[1.6deg] -translate-x-1 scale-[0.98] opacity-70 transition-all duration-300 group-hover:-translate-y-1 group-hover:-rotate-2 group-hover:opacity-85 select-none pointer-events-none">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#2a2d37] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-neutral-200 truncate">
                        Recruiting
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-500 font-normal ml-2">
                        Tue
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-400 truncate mt-0.5">
                      We&apos;re moving forward with other candidates.
                    </p>
                  </div>
                </div>
              </div>

              {/* Front Card: Hiring Team */}
              <div className="relative z-10 rounded-[20px] bg-[#181920] border border-white/10 p-4 sm:p-5 shadow-2xl shadow-black/90 transition-all duration-300 group-hover:border-white/20">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#30333d] shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-xs sm:text-sm text-white">
                        Hiring Team
                      </span>
                      <span className="text-[11px] sm:text-xs text-neutral-400 font-normal ml-2">
                        Mon
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm text-neutral-300 truncate mt-0.5">
                      We&apos;re moving forward with other candidates.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Two Comparison Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: What you've probably been doing */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
                What you&apos;ve probably been doing
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    Searching LinkedIn and Indeed every day
                  </span>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    Sending application after application
                  </span>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    Tweaking your resume for different jobs
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4">
              <p className="text-xs sm:text-sm text-neutral-400 italic">
                And then... no response. Another rejection. Another &quot;We&apos;re
                moving forward with other candidates.&quot;
              </p>
            </div>
          </div>

          {/* Card 2: What happens next */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
                What happens next
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    You apply to even more jobs
                  </span>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    You spend hours scrolling through job boards
                  </span>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    You start wondering if your experience is even good enough
                  </span>
                </div>

                <div className="flex items-start gap-3 pb-4 border-b border-white/5">
                  <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X size={13} className="text-red-400" />
                  </div>
                  <span className="text-sm sm:text-base text-neutral-300">
                    You&apos;re still competing with hundreds of other applicants
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
