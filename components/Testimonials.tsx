"use client";

import React from "react";
import { Star, CheckCircle } from "lucide-react";

interface TestimonialsProps {
  onUnlockClick: () => void;
}

export default function Testimonials({ onUnlockClick }: TestimonialsProps) {
  const testimonials = [
    {
      name: "Marcus Chen",
      role: "Senior Product Designer",
      outcome: "+28% salary · Bypassed 300+ applicant queue",
      quote:
        "I spent four months submitting resumes through standard portals with zero traction. Using Jacob's targeting method, I reached out directly to a VP of Design who was quietly expanding their team. Two conversations later, I received an offer before the role was ever posted publicly.",
      initials: "MC",
      color: "from-blue-500/20 to-indigo-500/20 text-blue-400",
    },
    {
      name: "Elena Rostova",
      role: "Engineering Lead",
      outcome: "Offer in 4 weeks · 3 direct VP interviews",
      quote:
        "Jacob's system completely rewired how I view hiring. I stopped competing in the ATS black hole. Following the Connect and Get Found steps brought three hiring managers directly into my inbox. The weekly live coaching gave me the exact phrasing to use.",
      initials: "ER",
      color: "from-emerald-500/20 to-teal-500/20 text-emerald-400",
    },
    {
      name: "David Miller",
      role: "Growth Marketing Director",
      outcome: "2 unlisted offers · 0 generic applications sent",
      quote:
        "The open secret is that high-value leaders hate reviewing 500 resumes as much as candidates hate writing them. Jacob's framework positions you right at the source where decisions are made. It is easily the highest-ROI investment of my career.",
      initials: "DM",
      color: "from-orange-500/20 to-amber-500/20 text-orange-400",
    },
  ];

  return (
    <section className="py-16 sm:py-20 relative border-t border-white/[0.06] radial-subtle-glow">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="text-center mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
            RESULTS
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight leading-[1.15] mb-4">
            Real people.{" "}
            <span className="font-serif italic text-[#fba584]">
              Real results.
            </span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 max-w-2xl mx-auto">
            Don&apos;t just take our word for it. See what people are saying about our approach to finding opportunities and navigating the job market.
          </p>
        </div>

        {/* Testimonials 3 Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-14">
          {testimonials.map((t, idx) => (
            <div
              key={idx}
              className="rounded-2xl bg-[#121419] border border-white/5 p-7 flex flex-col justify-between hover:border-white/15 transition-all shadow-xl"
            >
              <div>
                <div className="flex items-center gap-1 text-[#ff7a45] mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={15} className="fill-current" />
                  ))}
                </div>

                <div className="inline-block px-2.5 py-1 rounded-md bg-[#181b22] text-[11px] font-medium text-[#fba584] border border-[#ff7a45]/20 mb-4">
                  {t.outcome}
                </div>

                <p className="text-sm text-neutral-300 leading-relaxed italic mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} flex items-center justify-center font-semibold text-xs border border-white/10`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white flex items-center gap-1.5">
                    {t.name}
                    <CheckCircle size={14} className="text-[#ff7a45]" />
                  </div>
                  <div className="text-xs text-neutral-400">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Section Mid CTA */}
        <div className="text-center">
          <h3 className="text-3xl sm:text-5xl font-serif text-white tracking-tight leading-[1.2] mb-8">
            Your next opportunity could be{" "}
            <span className="font-serif italic text-[#fba584] block sm:inline">
              closer than you think.
            </span>
          </h3>

          <button
            onClick={onUnlockClick}
            className="btn-tempting px-8 py-4 sm:px-10 sm:py-4.5 rounded-xl font-semibold text-base sm:text-lg text-[#0b0c0e] bg-[#ff7a45] hover:bg-[#ff8f5e] transition-all duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Unlock the Hidden Job Market
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
