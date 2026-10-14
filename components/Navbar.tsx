"use client";

import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  onUnlockClick: () => void;
}

export default function Navbar({ onUnlockClick }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-4 sm:px-8">
      <div className="max-w-6xl mx-auto">
        <nav
          className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-nav shadow-lg shadow-black/40"
              : "bg-[#121418]/70 backdrop-blur-md border border-white/5"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand */}
          <a
            href="#"
            className="text-xl sm:text-2xl font-serif tracking-tight text-white hover:text-[#fba584] transition-colors"
          >
            Jacob Levy
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-300">
            <a
              href="#problem"
              className="hover:text-white transition-colors"
            >
              The problem
            </a>
            <a
              href="#method"
              className="hover:text-white transition-colors"
            >
              Method
            </a>
            <a
              href="#inside"
              className="hover:text-white transition-colors"
            >
              Inside
            </a>
            <a
              href="#faq"
              className="hover:text-white transition-colors"
            >
              FAQ
            </a>
          </div>

          {/* Right Action */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onUnlockClick}
              className="btn-tempting px-5 py-2.5 rounded-full text-sm font-semibold text-[#0b0c0e] bg-[#ff7a45] hover:bg-[#ff8f5e] transition-all duration-200"
            >
              <span className="relative z-10 flex items-center gap-1.5">
                Unlock now
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-neutral-300 hover:text-white p-1.5 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-5 rounded-2xl glass-nav shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
            <a
              href="#problem"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-base py-1"
            >
              The problem
            </a>
            <a
              href="#method"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-base py-1"
            >
              Method
            </a>
            <a
              href="#inside"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-base py-1"
            >
              Inside
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-neutral-300 hover:text-white text-base py-1"
            >
              FAQ
            </a>
            <div className="pt-2 border-t border-white/10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onUnlockClick();
                }}
                className="btn-tempting w-full py-3 rounded-full text-center font-semibold text-[#0b0c0e] bg-[#ff7a45] shadow-lg shadow-[#ff7a45]/30 active:scale-95"
              >
                Unlock now
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
