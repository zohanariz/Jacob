"use client";

import React from "react";

export default function ProgramInside() {
  const modules = [
    {
      num: "01",
      title: "Weekly live coaching",
      desc: "Get live guidance, strategy, and answers to your specific job-search questions.",
    },
    {
      num: "02",
      title: "Opportunity discovery",
      desc: "Learn how to find opportunities beyond LinkedIn, Indeed, and traditional job boards.",
    },
    {
      num: "03",
      title: "Decision-maker targeting",
      desc: "Learn how to identify and reach the people who can actually influence hiring decisions.",
    },
    {
      num: "04",
      title: "Hands-on implementation",
      desc: "Don&apos;t just learn the strategy. Put it into practice with my guidance.",
    },
    {
      num: "05",
      title: "Private community",
      desc: "Ask questions, share progress, and learn alongside other job seekers.",
    },
    {
      num: "06",
      title: "Your personal job search system",
      desc: "Put everything together into a repeatable system you can use throughout your career.",
    },
  ];

  return (
    <section id="inside" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[370px_1fr] gap-10 sm:gap-14 items-start">
          {/* Left Column: Heading and Monitor Visual */}
          <div className="lg:sticky lg:top-28">
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
              THE PROGRAM
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight leading-[1.15] mb-6 sm:mb-8">
              Everything you get{" "}
              <span className="font-serif italic text-[#fba584]">inside</span>
            </h2>

            {/* Monitor Visual */}
            <div className="relative max-w-[360px] mx-auto lg:mx-0">
              {/* Outer Monitor Frame */}
              <div className="rounded-[22px] bg-[#1a1c22] border border-[#2d313a] p-3 sm:p-3.5 shadow-2xl shadow-black/80">
                {/* Inner Screen */}
                <div className="rounded-[14px] bg-[#131418] border border-[#252830] p-2.5">
                  {/* 3x2 Video Call Grid */}
                  <div className="grid grid-cols-3 gap-2">
                    {/* Tile 1: Top-Left (Host/Coach) */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#e8b796] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#ff7a45]" />
                    </div>

                    {/* Tile 2: Top-Middle */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#c68f63] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#4a5059]" />
                    </div>

                    {/* Tile 3: Top-Right */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#eed2bb] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#4a5059]" />
                    </div>

                    {/* Tile 4: Bottom-Left */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#d69e77] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#4a5059]" />
                    </div>

                    {/* Tile 5: Bottom-Middle */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#f4dbc5] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#4a5059]" />
                    </div>

                    {/* Tile 6: Bottom-Right */}
                    <div className="aspect-[4/3] rounded-lg bg-[#202329]/80 border border-[#2a2e37] flex flex-col items-center justify-end overflow-hidden pt-2">
                      <div className="w-5 h-5 rounded-full bg-[#b57549] mb-1 shadow-sm" />
                      <div className="w-12 h-5 rounded-t-full bg-[#ad5933]" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Monitor Stand */}
              <div className="w-full flex flex-col items-center">
                <div className="w-[2px] h-4 bg-[#323640]" />
                <div className="w-20 sm:w-24 h-[2px] bg-[#323640] rounded-full" />
              </div>

              {/* "Ask me anything" Speech Bubble Callout */}
              <div className="absolute -bottom-2 right-1 sm:-right-2 z-20">
                <div className="relative px-5 py-2.5 rounded-2xl bg-[#ff7a45] text-[#0b0c0e] font-semibold text-xs sm:text-sm shadow-xl shadow-black/60">
                  Ask me anything
                  {/* Tail pointing down-left */}
                  <svg
                    className="absolute -bottom-2 left-5 w-3.5 h-2.5 text-[#ff7a45] fill-current"
                    viewBox="0 0 14 10"
                  >
                    <path d="M0 10 L4 0 L14 0 Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Modules */}
          <div className="space-y-6">
            {modules.map((m) => (
              <div
                key={m.num}
                className="p-6 sm:p-7 rounded-2xl bg-[#121419] border border-white/5 hover:border-white/10 transition-all flex items-start gap-6 group shadow-lg"
              >
                <span className="text-2xl sm:text-3xl font-serif text-[#ff7a45] font-light flex-shrink-0 group-hover:scale-110 transition-transform">
                  {m.num}
                </span>
                <div>
                  <h3 className="text-xl sm:text-2xl font-serif text-white mb-2 group-hover:text-[#fba584] transition-colors">
                    {m.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
                    {m.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
