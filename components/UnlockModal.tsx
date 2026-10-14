"use client";

import React, { useState } from "react";
import { X, Check, Sparkles, ArrowRight } from "lucide-react";
import confetti from "canvas-confetti";

interface UnlockModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function UnlockModal({ isOpen, onClose }: UnlockModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    role: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Trigger confetti
    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#ff7a45", "#fba584", "#ffffff"],
      });
    } catch {
      // ignore
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/80 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-xl rounded-3xl bg-[#13151b] border border-white/10 p-6 sm:p-10 shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-[#1c1f28] text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
          aria-label="Close modal"
        >
          <X size={16} />
        </button>

        {!submitted ? (
          <div>
            <div className="mb-6">
              <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-2">
                JOIN THE PROGRAM
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif text-white">
                Unlock The Hidden Job Market
              </h3>
              <p className="text-sm text-neutral-400 mt-2">
                Gain instant access to Jacob Levy&apos;s step-by-step strategy, weekly live coaching, and private community.
              </p>
            </div>

            {/* Inclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8 p-4 rounded-xl bg-[#0f1116] border border-white/5 text-xs text-neutral-300">
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#ff7a45]" />
                <span>Weekly live coaching calls</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#ff7a45]" />
                <span>Decision-maker targeting playbook</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#ff7a45]" />
                <span>High-converting outreach scripts</span>
              </div>
              <div className="flex items-center gap-2">
                <Check size={14} className="text-[#ff7a45]" />
                <span>Private peer community access</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Morgan"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#191c24] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff7a45] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@example.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#191c24] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff7a45] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-neutral-300 mb-1.5">
                  Current Role or Career Goal
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Senior Product Manager looking for Director roles"
                  value={formData.role}
                  onChange={(e) =>
                    setFormData({ ...formData, role: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#191c24] border border-white/10 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-[#ff7a45] transition-colors"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold text-base text-[#0b0c0e] bg-[#ff7a45] hover:bg-[#ff8f5e] transition-all duration-300 shadow-lg shadow-[#ff7a45]/30 flex items-center justify-center gap-2"
                >
                  <span>Complete Enrollment &amp; Unlock</span>
                  <ArrowRight size={18} />
                </button>
              </div>

              <p className="text-[11px] text-neutral-500 text-center mt-2">
                Instant access provided immediately upon submission.
              </p>
            </form>
          </div>
        ) : (
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#ff7a45]/20 text-[#ff7a45] flex items-center justify-center mx-auto mb-6">
              <Sparkles size={32} />
            </div>

            <h3 className="text-3xl font-serif text-white mb-3">
              Welcome aboard, {formData.name || "friend"}!
            </h3>

            <p className="text-sm sm:text-base text-neutral-300 max-w-md mx-auto mb-8 leading-relaxed">
              We&apos;ve sent your portal invite and orientation link to{" "}
              <strong className="text-white">{formData.email}</strong>. Jacob and the cohort are excited to meet you on the next weekly live coaching call!
            </p>

            <button
              onClick={onClose}
              className="px-8 py-3.5 rounded-xl font-semibold text-sm text-[#0b0c0e] bg-[#ff7a45] hover:bg-[#ff8f5e] transition-all"
            >
              Close &amp; Continue Browsing
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
