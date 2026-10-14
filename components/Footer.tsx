"use client";

import React from "react";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-10 sm:py-12 border-t border-white/[0.06] bg-[#090a0d] text-neutral-400 text-xs sm:text-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} Jacob Levy. All rights reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <span className="font-serif text-neutral-300">
              The Hidden Job Market
            </span>
            <button
              onClick={scrollToTop}
              className="w-8 h-8 rounded-full bg-[#161820] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:border-white/20 transition-all"
              aria-label="Back to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
