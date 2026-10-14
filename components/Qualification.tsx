"use client";

import React from "react";
import { X, Check } from "lucide-react";

export default function Qualification() {
  const notForYou = [
    "You're looking for another course you can watch without actually taking action",
    "You want to keep applying to hundreds of jobs and hope something eventually works",
    "You want someone to find and apply for jobs on your behalf",
    "You're not willing to learn new ways of finding opportunities",
    "You want a quick shortcut instead of developing a skill you can use throughout your career",
    "You're not willing to take action, ask questions, and implement what you learn",
  ];

  const forYou = [
    "You're tired of relying on LinkedIn, Indeed, and endless applications",
    "You want to discover opportunities most job seekers never see",
    "You want to learn how to find and reach the right decision-makers",
    "You want to build a smarter, more proactive job search strategy",
    "You want hands-on guidance instead of another library of videos",
    "You're ready to take action and build a job-search system you can use throughout your career",
  ];

  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Card 1: This is not for you if... */}
          <div className="rounded-2xl bg-[#121419] border border-white/5 p-7 sm:p-9 shadow-xl flex flex-col justify-between">
            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
                This is not for you if...
              </h3>
              <div className="space-y-4">
                {notForYou.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <div className="w-5 h-5 rounded-full bg-red-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X size={13} className="text-red-400" />
                    </div>
                    <span className="text-sm text-neutral-300 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2: This is for you if... */}
          <div className="rounded-2xl bg-[#121419] border border-[#ff7a45]/20 p-7 sm:p-9 shadow-xl flex flex-col justify-between relative overflow-hidden">
            {/* Subtle corner glow */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff7a45]/5 rounded-full blur-2xl pointer-events-none" />

            <div>
              <h3 className="text-2xl sm:text-3xl font-serif text-white mb-6">
                This is for you if...
              </h3>
              <div className="space-y-4">
                {forYou.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3.5 pb-4 border-b border-white/5 last:border-0 last:pb-0"
                  >
                    <div className="w-5 h-5 rounded-full bg-emerald-500/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check size={13} className="text-emerald-400 stroke-[2.5]" />
                    </div>
                    <span className="text-sm text-neutral-200 leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
