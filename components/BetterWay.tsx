"use client";

import React from "react";

export default function BetterWay() {
  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.06] radial-subtle-glow">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3 sm:mb-4">
            A BETTER WAY
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif tracking-tight leading-[1.2] max-w-5xl mx-auto">
            <span className="block sm:whitespace-nowrap">
              <span className="text-white">
                You don&apos;t need to apply to more jobs.{" "}
              </span>
              <span className="font-serif italic text-[#fba584]">
                You need a
              </span>
            </span>
            <span className="block font-serif italic text-[#fba584] mt-1 sm:mt-2">
              better way to find them.
            </span>
          </h2>
        </div>

        {/* Visual Cards Container */}
        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          {/* Card 1: Iceberg Graphic (Built with Code) */}
          <div className="rounded-[24px] sm:rounded-[28px] border border-white/10 bg-[#16171b] overflow-hidden shadow-2xl shadow-black/80">
            <svg
              viewBox="0 0 840 370"
              className="w-full h-auto block select-none"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Sky Background */}
              <rect x="0" y="0" width="840" height="150" fill="#16171b" />

              {/* Deep Ocean Water Background */}
              <path
                d="M0,150 C180,143 270,157 420,150 C570,143 660,157 840,150 L840,370 L0,370 Z"
                fill="#1a2634"
              />

              {/* Water Surface Wave Line */}
              <path
                d="M0,150 C180,143 270,157 420,150 C570,143 660,157 840,150"
                fill="none"
                stroke="#253242"
                strokeWidth="2.5"
              />

              {/* "Posted jobs" & Subtitle */}
              <text
                x="215"
                y="94"
                textAnchor="middle"
                fill="#ffffff"
                fontSize="22"
                fontWeight="700"
                letterSpacing="-0.01em"
                style={{ fontFamily: "inherit" }}
              >
                Posted jobs
              </text>
              <text
                x="215"
                y="117"
                textAnchor="middle"
                fill="#9ca3af"
                fontSize="13"
                fontWeight="400"
                style={{ fontFamily: "inherit" }}
              >
                Everyone is applying here
              </text>

              {/* Applicant Dots (Left of Peaks) */}
              <g>
                <circle cx="280" cy="148" r="4" fill="#788190" />
                <circle cx="295" cy="144" r="4.5" fill="#8a93a2" />
                <circle cx="312" cy="148" r="4" fill="#6d7684" />
                <circle cx="328" cy="143" r="5" fill="#9ba4b4" />
                <circle cx="344" cy="147" r="4" fill="#7e8796" />
                <circle cx="358" cy="144" r="4.5" fill="#8c95a5" />
                <circle cx="370" cy="148" r="3.5" fill="#6c7583" />
              </g>

              {/* Applicant Dots (Right of Peaks) */}
              <g>
                <circle cx="505" cy="148" r="4" fill="#788190" />
                <circle cx="518" cy="143" r="4.5" fill="#8a93a2" />
                <circle cx="534" cy="148" r="4" fill="#6d7684" />
                <circle cx="550" cy="144" r="5" fill="#9ba4b4" />
                <circle cx="566" cy="148" r="4" fill="#7e8796" />
                <circle cx="580" cy="143" r="4.5" fill="#8c95a5" />
                <circle cx="594" cy="147" r="3.5" fill="#6c7583" />
              </g>

              {/* Entire Iceberg Group (Static, Clean) */}
              <g>
                {/* 1. Iceberg Tip Peaks (Above Water) */}
                {/* Left Area (White / Ivory Silhouette) */}
                <polygon
                  points="365,150 405,96 430,122 458,76 430,150 365,150"
                  fill="#f5f4ed"
                />
                {/* Right Area (Shaded Grey Facet) */}
                <polygon
                  points="458,76 495,150 430,150"
                  fill="#cfd2d8"
                />

                {/* Dark Outline Around Peaks */}
                <path
                  d="M365,150 L405,96 L430,122 L458,76 L495,150"
                  fill="none"
                  stroke="#2c323b"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Single Applicant Dot on Iceberg Right Slope */}
                <circle
                  cx="476"
                  cy="144"
                  r="5.5"
                  fill="#9ca4b4"
                  stroke="#313742"
                  strokeWidth="1.5"
                />

                {/* 2. Submerged Orange Polygon (The Hidden Job Market) */}
                <polygon
                  points="285,150 215,215 305,305 420,324 535,305 625,215 555,150"
                  fill="#f37841"
                  stroke="#271811"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Text: The hidden job market */}
                <text
                  x="420"
                  y="200"
                  textAnchor="middle"
                  fill="#0d0f14"
                  fontSize="26"
                  fontWeight="700"
                  letterSpacing="-0.02em"
                  style={{ fontFamily: "inherit" }}
                >
                  The hidden job market
                </text>

                {/* Text: Far fewer people are looking */}
                <text
                  x="420"
                  y="226"
                  textAnchor="middle"
                  fill="#2b1b13"
                  fontSize="14.5"
                  fontWeight="500"
                  style={{ fontFamily: "inherit" }}
                >
                  Far fewer people are looking
                </text>

                {/* Doorway at bottom of the orange iceberg */}
                <path
                  d="M401,324 L401,283 A19,19 0 0,1 439,283 L439,324 Z"
                  fill="#121419"
                  stroke="#20232a"
                  strokeWidth="1.2"
                />

                {/* Doorknob Dot */}
                <circle cx="431" cy="301" r="2.5" fill="#ffffff" />

                {/* Lone Candidate White Dot */}
                <circle cx="478" cy="292" r="6" fill="#ffffff" />
              </g>
            </svg>
          </div>

          {/* Card 2: Interactive Dashboard Window */}
          <div className="rounded-2xl border border-white/10 bg-[#131419] overflow-hidden shadow-2xl shadow-black/80">
            {/* Title Bar */}
            <div className="px-5 py-3.5 border-b border-white/5 flex items-center justify-between bg-[#0e1014]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
                <div className="w-2.5 h-2.5 rounded-full bg-[#323640]" />
              </div>
              <span className="text-xs text-neutral-400 font-medium tracking-wide">
                The hidden job market
              </span>
              <div className="w-10" />
            </div>

            {/* Window Content */}
            <div className="grid grid-cols-1 md:grid-cols-[190px_1fr]">
              {/* Sidebar */}
              <div className="p-4 sm:p-5 border-b md:border-b-0 md:border-r border-white/5 bg-[#101116] space-y-5">
                <div className="space-y-1">
                  <div className="px-3 py-2 rounded-lg bg-[#22252e] text-white text-xs font-semibold">
                    Today
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Opportunities
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Conversations
                  </div>
                </div>

                <div className="space-y-1 pt-2">
                  <div className="text-[10px] font-bold tracking-wider text-neutral-500 uppercase px-3 pb-1">
                    MOVES
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Find
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Target
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Connect
                  </div>
                  <div className="px-3 py-1.5 text-xs text-neutral-400 hover:text-white transition-colors cursor-pointer">
                    Get found
                  </div>
                </div>
              </div>

              {/* Main Feed Panel */}
              <div className="p-6 sm:p-8 bg-[#131419]">
                <div className="mb-5">
                  <h3 className="text-2xl sm:text-3xl font-serif text-white mb-1">
                    Good morning
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-400">
                    New opportunities that were never posted.
                  </p>
                </div>

                {/* Filter / Search status badge */}
                <div className="mb-6">
                  <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-[#1a1c22] border border-white/10 text-xs">
                    <span className="text-neutral-400">Looking for:</span>
                    <span className="font-semibold text-white">
                      roles beyond the job boards
                    </span>
                  </div>
                </div>

                {/* Feed Items */}
                <div className="divide-y divide-white/5">
                  {/* Feed Item 1 */}
                  <div className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-[#ff7a45]/15 text-[#fba584] border border-[#ff7a45]/30 shrink-0">
                        Unposted
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">
                          Team is about to hire
                        </div>
                        <div className="text-xs text-neutral-400 truncate mt-0.5">
                          Never listed on a job board
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500 shrink-0 font-mono">
                      Today
                    </span>
                  </div>

                  {/* Feed Item 2 */}
                  <div className="py-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 shrink-0">
                        Decision-maker
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">
                          Hiring manager identified
                        </div>
                        <div className="text-xs text-neutral-400 truncate mt-0.5">
                          The person who can actually say yes
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500 shrink-0 font-mono">
                      Mon
                    </span>
                  </div>

                  {/* Feed Item 3 */}
                  <div className="pt-4 flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-semibold bg-indigo-500/15 text-indigo-400 border border-indigo-500/30 shrink-0">
                        Connection
                      </span>
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-white truncate">
                          A way in, before the posting exists
                        </div>
                        <div className="text-xs text-neutral-400 truncate mt-0.5">
                          You&apos;re in the conversation early
                        </div>
                      </div>
                    </div>
                    <span className="text-xs text-neutral-500 shrink-0 font-mono">
                      Tue
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-xs text-neutral-500 text-center mt-3">
            Illustrative example
          </p>
        </div>
      </div>
    </section>
  );
}
