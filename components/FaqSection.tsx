"use client";

import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Is this just another job-search course?",
      a: "No. Most job-search courses teach you how to polish your resume, optimize keywords for ATS scanners, or spray applications across job boards. This program teaches you the exact opposite: how to bypass applications completely and tap into the 70–80% of opportunities that are filled before a listing is ever published.",
    },
    {
      q: "Will this guarantee that I'll get a job?",
      a: "No one can ethically guarantee an employment offer, as hiring decisions ultimately rest with employers. However, this program provides you with a proven, repeatable system that drastically increases your interview pipeline, connects you directly with decision-makers, and equips you with lifelong career networking skills.",
    },
    {
      q: "How is this different from what I can learn by searching on YouTube?",
      a: "YouTube gives fragmented, generic tips ('reach out to 10 people on LinkedIn!'). It doesn't give you a battle-tested roadmap, personalized message frameworks that actually get responses, live weekly coaching to troubleshoot your exact hurdles, or hands-on implementation guidance tailored to your industry.",
    },
    {
      q: "Do I need LinkedIn Premium or expensive tools?",
      a: "Not at all. Everything we teach works completely on a standard free LinkedIn account. You do not need expensive subscriptions, third-party email finders, or automated bots to execute this system.",
    },
    {
      q: "Is this only about LinkedIn?",
      a: "While LinkedIn is one of the most effective tools to identify hiring managers and company movements, the method extends far beyond it. You will learn proactive industry intelligence, warm introduction pathways, direct outreach via email, and how to position yourself so decision-makers seek you out.",
    },
    {
      q: "Do you help with resumes?",
      a: "Yes, but with a different philosophy. Instead of tailoring your resume for automated robotic keyword parsers, we format your materials to resonate with human executive decision-makers who read resumes after a high-trust initial conversation.",
    },
    {
      q: "What if I've been applying for months and nothing is working?",
      a: "This program was built specifically for you. If you have been applying for months without traction, the issue isn't your capability—it's the distribution channel. When you compete in a pile of 500 applicants, your odds are under 1%. When you approach a team before they post, your odds skyrocket.",
    },
    {
      q: "Is this only for people who are currently unemployed?",
      a: "No. Many of our most successful members are currently employed and looking for confidential career advancement, higher compensation, or a career pivot without alerting their current employer or blasting their status publicly.",
    },
    {
      q: "What happens during the live coaching?",
      a: "During our weekly live sessions, Jacob reviews real-time outreach drafts, troubleshoots live situations (e.g., how to respond to an executive, negotiate salary, or uncover hiring plans), and provides actionable 1-on-1 strategic guidance in a supportive cohort setting.",
    },
    {
      q: "What will I have when I finish the program?",
      a: "You will have a customized, repeatable job search engine that you will own for the rest of your career: an identified target list of decision-makers, high-converting outreach scripts, an optimized profile, direct connections into your dream companies, and the confidence to never rely on job boards again.",
    },
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-16 sm:py-20 relative border-t border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Section Heading */}
        <div className="mb-10 sm:mb-12">
          <span className="text-xs font-bold tracking-[0.2em] text-[#ff7a45] uppercase block mb-3">
            FAQ
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-serif text-white tracking-tight">
            Before{" "}
            <span className="font-serif italic text-[#fba584]">you ask</span>
          </h2>
        </div>

        {/* FAQ Accordion List */}
        <div className="divide-y divide-white/10 border-t border-b border-white/10">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={index} className="py-6 transition-colors">
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between text-left gap-4 focus:outline-none group"
                  aria-expanded={isOpen}
                >
                  <span className="text-lg sm:text-2xl font-serif text-white group-hover:text-[#fba584] transition-colors leading-snug">
                    {faq.q}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-[#161820] border border-white/10 flex items-center justify-center flex-shrink-0 text-[#ff7a45] group-hover:border-[#ff7a45]/40 transition-colors">
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>

                {isOpen && (
                  <div className="mt-4 pr-10 text-neutral-300 text-sm sm:text-base leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
