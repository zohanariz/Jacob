"use client";

import React from "react";
import Image from "next/image";
import { X } from "lucide-react";

export default function SoundFamiliar() {
  return (
    <section id="problem" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Banner with 3D Illustration as Atmospheric Background */}
        <div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#0d0f14] p-8 sm:p-12 lg:p-16 mb-16 sm:mb-20 shadow-2xl shadow-black/80">
          {/* Background Image Layer */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/job-boards-illustration.png"
              alt="Job boards atmospheric background"
              fill
              className="object-cover object-right opacity-65 sm:opacity-75 lg:opacity-85"
              priority
            />
            {/* Dark Left-to-Right & Radial Gradient Overlays to guarantee 100% crisp text readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d0f14] via-[#0d0f14]/95 sm:via-[#0d0f14]/85 to-transparent sm:w-3/4 lg:w-2/3" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d0f14] via-transparent to-[#0d0f14]/50" />
            {/* Ambient Coral Glow */}
            <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-80 h-80 bg-[#ff7a45]/20 rounded-full blur-3xl pointer-events-none" />
          </div>

          {/* Foreground Text & Pill Tags */}
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-white tracking-tight leading-[1.18] mb-4">
              You&apos;re looking in the same{" "}
              <span className="font-serif italic text-[#fba584]">
                places as everyone else.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-neutral-300 font-normal leading-relaxed mb-6 sm:mb-8 max-w-xl">
              Most people rely on the same job boards. But the best opportunities
              live outside of them — in networks, private hires, and direct outreach.
            </p>

            {/* Pill Tags Cloud */}
            <div className="flex flex-col gap-2.5">
              {/* Row 1 */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#1a1413]/90 backdrop-blur-md border border-[#ff7a45]/45 text-[#fba584] font-medium shadow-sm transition-all hover:border-[#ff7a45]/70">
                  LinkedIn
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Indeed
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Glassdoor
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Naukri
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Monster
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all flex items-center gap-1.5">
                  <span>Wellfound</span>
                  <span className="text-[10px] text-neutral-500">▾</span>
                </div>
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Company career pages
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Startup websites
                </div>
                <div className="px-4 py-2 rounded-xl text-xs sm:text-sm bg-[#14161c]/85 backdrop-blur-md border border-white/10 text-neutral-200 font-medium shadow-sm hover:border-white/20 transition-all">
                  Recruiters
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Rejection Notification Cards Stack */}
        <div className="w-full max-w-[580px] mx-auto pt-10 sm:pt-12 pb-2 px-3 mb-14 sm:mb-16">
            <div className="relative group cursor-default">
              {/* Back Card: Talent Acquisition */}
              <div className="absolute inset-x-0 -top-18 sm:-top-20 mx-auto rounded-[20px] bg-[#121318]/90 border border-white/5 p-4 sm:p-5 shadow-lg transform -rotate-[3.2deg] -translate-x-2.5 scale-[0.96] opacity-40 transition-all duration-300 group-hover:-translate-y-2 group-hover:-rotate-[4deg] group-hover:opacity-60 select-none pointer-events-none">
                <div className="flex items-center gap-4">
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#242630]">
                    <Image
                      src="/avatars/recruiter-1.jpg"
                      alt="Talent Acquisition recruiter avatar"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
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
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/10 shrink-0 bg-[#2a2d37]">
                    <Image
                      src="/avatars/recruiter-2.jpg"
                      alt="Recruiting specialist avatar"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
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
                  <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border border-white/15 shrink-0 bg-[#30333d] shadow-md">
                    <Image
                      src="/avatars/recruiter-3.jpg"
                      alt="Hiring manager avatar"
                      fill
                      className="object-cover"
                      sizes="44px"
                    />
                  </div>
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
