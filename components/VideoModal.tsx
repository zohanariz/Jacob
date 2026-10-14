"use client";

import React, { useState } from "react";
import { X, Play, Pause, Volume2, Maximize, Clock } from "lucide-react";

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function VideoModal({ isOpen, onClose }: VideoModalProps) {
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity animate-in fade-in"
      />

      {/* Video Container */}
      <div className="relative w-full max-w-4xl rounded-2xl bg-[#101217] border border-white/10 overflow-hidden shadow-2xl z-10 animate-in zoom-in-95 duration-200">
        {/* Title Bar */}
        <div className="px-5 py-3 border-b border-white/10 flex items-center justify-between bg-[#0b0d11]">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
            <span className="ml-3 text-xs text-neutral-300 font-medium">
              Introduction: Why 80% of Jobs Are Never Posted – Jacob Levy
            </span>
          </div>
          <button
            onClick={onClose}
            className="w-7 h-7 rounded-full bg-white/5 hover:bg-white/10 text-neutral-400 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close video player"
          >
            <X size={15} />
          </button>
        </div>

        {/* Video Canvas Area */}
        <div className="relative aspect-video bg-gradient-to-br from-[#12141c] via-[#0d0f14] to-[#07080a] flex flex-col justify-between p-6 sm:p-8">
          {/* Top chapter pill */}
          <div className="flex items-center justify-between">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-[#fba584]">
              <Clock size={12} />
              <span>Chapter 1: The Hidden Job Market Dynamics</span>
            </div>
            <span className="text-xs text-neutral-400 font-mono">01:42 / 03:12</span>
          </div>

          {/* Central Message Preview */}
          <div className="text-center max-w-lg mx-auto space-y-4">
            <div
              onClick={() => setIsPlaying(!isPlaying)}
              className="w-20 h-20 rounded-full bg-[#ff7a45] text-[#0b0c0e] flex items-center justify-center mx-auto shadow-[0_0_35px_rgba(255,122,69,0.5)] cursor-pointer hover:scale-105 transition-transform"
            >
              {isPlaying ? (
                <Pause size={28} className="fill-current" />
              ) : (
                <Play size={28} className="fill-current translate-x-0.5" />
              )}
            </div>
            <div>
              <h4 className="text-xl sm:text-2xl font-serif text-white">
                &ldquo;Stop applying where everyone else is looking.&rdquo;
              </h4>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1">
                Jacob Levy breaks down how executive roles are filled before being posted.
              </p>
            </div>
          </div>

          {/* Bottom Custom Video Controls */}
          <div className="space-y-2">
            {/* Progress bar */}
            <div className="w-full h-1.5 rounded-full bg-white/15 overflow-hidden cursor-pointer">
              <div className="w-1/2 h-full bg-gradient-to-r from-[#ff7a45] to-[#fba584] rounded-full" />
            </div>

            <div className="flex items-center justify-between text-neutral-400 text-xs pt-1">
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="hover:text-white transition-colors"
                >
                  {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                </button>
                <div className="flex items-center gap-2">
                  <Volume2 size={16} />
                  <div className="w-16 h-1 bg-white/20 rounded-full">
                    <div className="w-3/4 h-full bg-white rounded-full" />
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span>HD 1080p</span>
                <Maximize size={16} className="cursor-pointer hover:text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
