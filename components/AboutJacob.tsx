"use client";

import React from "react";
import Image from "next/image";

export default function AboutJacob() {
  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-10 sm:gap-14 items-center">
          {/* Photo Column */}
          <div className="relative mx-auto w-full max-w-sm lg:max-w-none">
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden border border-white/10 bg-[#161820] shadow-2xl">
              <Image
                src="/jacob-levy.jpg"
                alt="Jacob Levy - Career coach and disability advocate"
                fill
                className="object-cover object-top hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 400px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-block px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs font-medium text-[#fba584]">
                  Career coach · Disability advocate
                </div>
              </div>
            </div>
          </div>

          {/* Bio / Mission Column */}
          <div>
            <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
              THAT&apos;S WHAT I&apos;M HERE TO CHANGE
            </span>
            <h2 className="text-4xl sm:text-5xl font-serif text-white tracking-tight mb-2">
              Jacob Levy
            </h2>
            <p className="text-[#ff7a45] font-medium text-base sm:text-lg mb-6">
              Career coach and disability advocate
            </p>

            {/* Story Card */}
            <div className="p-6 sm:p-7 rounded-2xl bg-[#121419] border border-white/5 shadow-lg mb-6">
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed italic">
                &ldquo;I saw firsthand how traditional hiring broke down. Qualified, capable people were pouring dozens of hours into applications, only to get lost in automated filters. Meanwhile, the most exciting opportunities were being filled through backchannels, relationships, and proactive conversations before a job listing was ever created.&rdquo;
              </p>
            </div>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed mb-4">
              The problem isn&apos;t that you&apos;re not working hard enough. You&apos;re just looking for opportunities in the same places as everyone else.
            </p>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              <strong className="text-white font-semibold">
                That&apos;s what I&apos;m here to change.
              </strong>{" "}
              Instead of relying on applications alone, you&apos;ll learn how to discover hidden roles, connect directly with leaders, and secure the role you deserve.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
